const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function runHTMLPerformanceTest() {
    console.log('🚀 启动HTML性能测试...\n');
    
    const browser = await puppeteer.launch({
        headless: false, // 显示浏览器以便观察
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
        // 读取HTML文件内容
        const htmlPath = path.join(__dirname, 'performance-test.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // 设置页面内容
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        console.log('📄 HTML测试页面已加载');
        console.log('🎯 开始自动化测试...\n');
        
        // 等待页面完全加载
        await page.waitForFunction(() => typeof startAllTests === 'function');
        
        // 监听控制台输出
        page.on('console', msg => {
            if (msg.type() === 'log') {
                console.log('浏览器:', msg.text());
            }
        });
        
        // 开始测试
        await page.evaluate(() => {
            startAllTests();
        });
        
        // 等待测试完成
        console.log('⏳ 等待测试完成...');
        
        // 等待测试完成的信号
        await page.waitForFunction(() => {
            const status = document.getElementById('status');
            return status && status.textContent.includes('所有测试完成');
        }, { timeout: 300000 }); // 5分钟超时
        
        console.log('✅ 测试完成！');
        
        // 获取测试结果
        const results = await page.evaluate(() => {
            return allResults;
        });
        
        // 保存结果到文件
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `html-performance-results-${timestamp}.json`;
        
        const report = {
            timestamp: new Date().toISOString(),
            methodology: "HTML页面在真实浏览器中的自动化性能测试",
            userAgent: await page.evaluate(() => navigator.userAgent),
            testEnvironment: {
                node: process.version,
                platform: process.platform,
                puppeteer: "latest"
            },
            results: results
        };
        
        fs.writeFileSync(filename, JSON.stringify(report, null, 2));
        
        // 显示结果摘要
        console.log('\n' + '='.repeat(70));
        console.log('📊 真实性能测试结果摘要');
        console.log('='.repeat(70));
        
        const successfulEditors = Object.entries(results).filter(([name, data]) => 
            Object.values(data).some(test => test.success)
        );
        
        if (successfulEditors.length > 0) {
            console.log('\n🏆 成功测试的编辑器:');
            
            // 创建排名
            const rankings = successfulEditors.map(([name, data]) => {
                const large = data.large;
                if (large && large.success) {
                    return {
                        name,
                        totalTime: large.totalTime,
                        initTime: large.initTime,
                        renderTime: large.renderTime,
                        memoryUsed: large.memoryUsed
                    };
                }
                return null;
            }).filter(Boolean).sort((a, b) => a.totalTime - b.totalTime);
            
            // 显示性能表格
            console.log('\n📋 大文档处理性能 (按总时间排序):');
            console.log('排名 | 编辑器'.padEnd(20) + '总时间(ms)'.padEnd(12) + '初始化(ms)'.padEnd(12) + '渲染(ms)'.padEnd(12) + '内存(MB)');
            console.log('-'.repeat(75));
            
            rankings.forEach((item, index) => {
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📋';
                console.log(`${medal} ${(index + 1)} | ${item.name.padEnd(18)} ${item.totalTime.toString().padEnd(10)} ${item.initTime.toString().padEnd(10)} ${item.renderTime.toString().padEnd(10)} ${item.memoryUsed}`);
            });
            
            // 详细分析
            console.log('\n📊 详细分析:');
            Object.entries(results).forEach(([name, data]) => {
                console.log(`\n${name}:`);
                Object.entries(data).forEach(([size, result]) => {
                    if (result.success) {
                        console.log(`  ${size}: 总时间=${result.totalTime}ms, 初始化=${result.initTime}ms, 渲染=${result.renderTime}ms, 内存=${result.memoryUsed}MB`);
                    } else {
                        console.log(`  ${size}: 失败 - ${result.error}`);
                    }
                });
            });
        } else {
            console.log('\n❌ 所有编辑器测试都失败了');
            Object.entries(results).forEach(([name, data]) => {
                console.log(`\n${name}:`);
                Object.entries(data).forEach(([size, result]) => {
                    console.log(`  ${size}: ${result.error || '未知错误'}`);
                });
            });
        }
        
        console.log(`\n📁 详细结果已保存到: ${filename}`);
        console.log('\n🎉 HTML自动化测试完成！');
        
        // 等待用户查看结果
        console.log('\n⏸️  浏览器将保持打开状态5秒以便查看结果...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        
    } catch (error) {
        console.error('❌ 测试过程中出现错误:', error);
        
        // 尝试获取页面错误信息
        try {
            const pageContent = await page.content();
            fs.writeFileSync('error-page-content.html', pageContent);
            console.log('📄 错误页面内容已保存到 error-page-content.html');
        } catch (e) {
            console.log('无法保存错误页面内容');
        }
    } finally {
        await browser.close();
    }
}

// 运行测试
runHTMLPerformanceTest().catch(console.error); 