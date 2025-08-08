const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const RUNS = 5; // 冷/热分别跑5次

function median(arr) {
  const a = arr.slice().sort((x,y)=>x-y);
  const n = a.length;
  if (n===0) return 0;
  const mid = Math.floor(n/2);
  return n%2 ? a[mid] : (a[mid-1]+a[mid])/2;
}

function mergeMedians(resultsList) {
  // resultsList: [ { Editor: { size: { loadTime, startupTime, totalTime, memoryUsed, success } } }, ... ]
  const merged = {};
  for (const res of resultsList) {
    for (const [editor, sizes] of Object.entries(res)) {
      merged[editor] ||= {};
      for (const [size, r] of Object.entries(sizes)) {
        merged[editor][size] ||= { loadTime:[], startupTime:[], totalTime:[], memoryUsed:[], success:[] };
        if (r && r.success) {
          merged[editor][size].loadTime.push(r.loadTime);
          merged[editor][size].startupTime.push(r.startupTime);
          merged[editor][size].totalTime.push(r.totalTime);
          merged[editor][size].memoryUsed.push(r.memoryUsed);
          merged[editor][size].success.push(true);
        } else {
          merged[editor][size].success.push(false);
        }
      }
    }
  }
  const out = {};
  for (const [editor, sizes] of Object.entries(merged)) {
    out[editor] = {};
    for (const [size, arrs] of Object.entries(sizes)) {
      out[editor][size] = {
        loadTime: Math.round(median(arrs.loadTime)*100)/100,
        startupTime: Math.round(median(arrs.startupTime)*100)/100,
        totalTime: Math.round(median(arrs.totalTime)*100)/100,
        memoryUsed: Math.round(median(arrs.memoryUsed)*100)/100,
        successRate: Math.round((arrs.success.filter(Boolean).length/arrs.success.length)*100)
      };
    }
  }
  return out;
}

async function runOne(page) {
  const htmlPath = path.join(__dirname, 'performance-test.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => typeof startAllTests === 'function');
  await page.evaluate(() => startAllTests());
  await page.waitForFunction(() => {
    const status = document.getElementById('status');
    return status && status.textContent.includes('所有测试完成');
  }, { timeout: 300000 });
  return await page.evaluate(() => allResults);
}

async function runHTMLPerformanceTest() {
  console.log('🚀 启动真实性能基准测试 (冷/热启动，5 次取中位数)...\n');

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-running-insecure-content'
    ]
  });
  const page = await browser.newPage();

  try {
    // 冷启动（不做任何预热）
    const coldRuns = [];
    for (let i=0;i<RUNS;i++) {
      console.log(`❄️  冷启动 第 ${i+1}/${RUNS} 次...`);
      const res = await runOne(page);
      coldRuns.push(res);
    }

    // 预热（加载一次页面让缓存命中）
    console.log('🔥  进行资源预热...');
    await runOne(page);

    // 热启动
    const hotRuns = [];
    for (let i=0;i<RUNS;i++) {
      console.log(`🔥  热启动 第 ${i+1}/${RUNS} 次...`);
      const res = await runOne(page);
      hotRuns.push(res);
    }

    const coldMerged = mergeMedians(coldRuns);
    const hotMerged = mergeMedians(hotRuns);

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `html-performance-median-${timestamp}.json`;
    const report = {
      timestamp: new Date().toISOString(),
      methodology: 'HTML 页面+就绪信号+DOM 稳定判定；冷/热各 5 次中位数',
      userAgent: await page.evaluate(() => navigator.userAgent),
      testEnvironment: { node: process.version, platform: process.platform },
      runs: { cold: RUNS, hot: RUNS },
      coldMerged,
      hotMerged
    };
    fs.writeFileSync(filename, JSON.stringify(report, null, 2));

    // 摘要输出（按大文档 totalTime 排序，冷/热各一张）
    const makeRanking = (merged) => Object.entries(merged).map(([name, sizes])=>({
      name,
      total: sizes.large?.totalTime ?? 1e9,
      load: sizes.large?.loadTime ?? 1e9,
      startup: sizes.large?.startupTime ?? 1e9
    })).sort((a,b)=>a.total-b.total);

    console.log('\n'+'='.repeat(70));
    console.log('📊 冷启动（大文档）总时间排名');
    console.log('='.repeat(70));
    makeRanking(coldMerged).forEach((r,i)=>{
      console.log(`${i+1}. ${r.name}  total=${r.total}ms  load=${r.load}ms  startup=${r.startup}ms`);
    });

    console.log('\n'+'='.repeat(70));
    console.log('📊 热启动（大文档）总时间排名');
    console.log('='.repeat(70));
    makeRanking(hotMerged).forEach((r,i)=>{
      console.log(`${i+1}. ${r.name}  total=${r.total}ms  load=${r.load}ms  startup=${r.startup}ms`);
    });

    console.log(`\n📁 详细中位数结果已保存: ${filename}`);
  } catch (e) {
    console.error('❌ 运行失败:', e);
    try {
      const pageContent = await page.content();
      fs.writeFileSync('error-page-content.html', pageContent);
      console.log('📄 错误页面内容已保存到 error-page-content.html');
    } catch {}
  } finally {
    await browser.close();
  }
}

runHTMLPerformanceTest().catch(console.error);