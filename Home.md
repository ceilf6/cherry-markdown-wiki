## 在线体验地址

- [全部功能](https://tencent.github.io/cherry-markdown/examples/index.html)
	- 双栏编辑模式（顶部工具栏、左侧编辑器、右侧预览器）
	- 自定义工具栏（三种实现方案）
	- 自定义语法
	- 右侧预览器表格、图片尺寸支持编辑
	- 左右滚动支持联动
	- 切换主题等
- [最简实现](https://tencent.github.io/cherry-markdown/examples/basic.html)
	- 几乎完全使用默认配置
	- 基本上就是引入css、引入js、定义一个div、三行代码实现
- [H5](https://tencent.github.io/cherry-markdown/examples/h5.html)
	- 纯编辑模式和纯预览模式
- [多实例](https://tencent.github.io/cherry-markdown/examples/multiple.html)
- [无 toolbar](https://tencent.github.io/cherry-markdown/examples/notoolbar.html)
- [纯预览模式](https://tencent.github.io/cherry-markdown/examples/preview_only.html)
- [注入](https://tencent.github.io/cherry-markdown/examples/xss.html)
	- 演示如何通过配置实现支持注入
	- 使用场景：在查看页需要运行js、渲染iframe等
- [图片所见即所得编辑尺寸](https://tencent.github.io/cherry-markdown/examples/img.html)
- [表格所见即所得编辑尺寸](https://tencent.github.io/cherry-markdown/examples/table.html)
- [标题自动序号](https://tencent.github.io/cherry-markdown/examples/head_num.html)
- [流式输入模式（AI chart场景）](https://tencent.github.io/cherry-markdown/examples/ai_chat.html)
	- 打开流式输入模式后，加粗斜体、代码块、无序列表、表格等内容的输入更加稳定（样式不会突然跳变或反复横跳）

## 从入门到下班

### 简介
cherry markdown是一款**前端**-**markdown**-**编辑器**-**组件**：
- 前端：本项目只有前端工程，没有提供后台服务代码
- markdown：写markdown的
- 编辑器：由**工具栏**、**编辑区**、**预览区**、**解析引擎**四部分组成
- 组件：提供自定义工具栏、自定义语法以及[各种api](https://tencent.github.io/cherry-markdown/examples/api.html)

### 构建产物
也可以直接引用`/dist/`目录下的js和css文件，各文件解释请参考[构建产物介绍](https://github.com/Tencent/cherry-markdown/wiki/%E6%9E%84%E5%BB%BA%E4%BA%A7%E7%89%A9%E4%BB%8B%E7%BB%8D)

### 本地开发
```javascript
cd cherry-markdown
yarn install
npm run dev
```

### 提交规范
[提交规范 commit convention](https://github.com/Tencent/cherry-markdown/wiki/%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83-commit-convention)

### 特性展示
[特性展示 features](https://github.com/Tencent/cherry-markdown/wiki/%E7%89%B9%E6%80%A7%E5%B1%95%E7%A4%BA-features)

### 特别注意
**vue3**选手需要避免使用[代理cherry实例](https://github.com/Tencent/cherry-markdown/issues/381#issuecomment-1399377500)的方式，否则会引入各种蜜汁bug

### 目录
- [特性展示](https://github.com/Tencent/cherry-markdown/wiki/%E7%89%B9%E6%80%A7%E5%B1%95%E7%A4%BA-features)
- [初识cherry markdown 编辑器](https://github.com/Tencent/cherry-markdown/wiki/%E5%88%9D%E8%AF%86cherry-markdown-%E7%BC%96%E8%BE%91%E5%99%A8)
- [构建产物介绍&引入mermaid和echarts](https://github.com/Tencent/cherry-markdown/wiki/%E6%9E%84%E5%BB%BA%E4%BA%A7%E7%89%A9%E4%BB%8B%E7%BB%8D)
- [hello world](https://github.com/Tencent/cherry-markdown/wiki/hello-world)
- [配置图片&文件上传接口](https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E5%9B%BE%E7%89%87&%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%8E%A5%E5%8F%A3)
- [调整工具栏](https://github.com/Tencent/cherry-markdown/wiki/%E8%B0%83%E6%95%B4%E5%B7%A5%E5%85%B7%E6%A0%8F)
- [自定义语法](https://github.com/Tencent/cherry-markdown/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E6%B3%95)
- [处理URL](https://github.com/Tencent/cherry-markdown/wiki/%E5%A4%84%E7%90%86URL)
- [图片懒加载](https://github.com/Tencent/cherry-markdown/wiki/%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD)
- [配置项全解](https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%85%A8%E8%A7%A3)
- [配置主题](https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E4%B8%BB%E9%A2%98)
- [配置快捷键](https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E5%BF%AB%E6%8D%B7%E9%94%AE)
- [扩展代码块语法](https://github.com/Tencent/cherry-markdown/wiki/%E6%89%A9%E5%B1%95%E4%BB%A3%E7%A0%81%E5%9D%97%E8%AF%AD%E6%B3%95)
- [多语言](https://github.com/Tencent/cherry-markdown/wiki/%E5%A4%9A%E8%AF%AD%E8%A8%80)
- [事件&回调](https://github.com/Tencent/cherry-markdown/wiki/%E4%BA%8B%E4%BB%B6&%E5%9B%9E%E8%B0%83)
- [API](https://tencent.github.io/cherry-markdown/examples/api.html)
- [竞品分析](https://github.com/Tencent/cherry-markdown/wiki/%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90)