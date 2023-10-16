要实现一个最简单例子只需要**三步**：
1. 引入cherry的css和js
2. 定义编辑器要出现的区域（出现在哪个位置、宽度多少、高度多少等）
3. 实例化cherry

以下是一个简单的例子：
```
// 引入cherry的样式文件，样式文件包含编辑器样式、预览区样式，用户也可以自行覆盖
<link href="/dist/cherry-markdown.css" /> 
// 定义一个div，将cherry实例化到该div里
<div id="markdown-container" style="width:500px;height:600px"></div> 
// 引入cherry的js文件
<script src="/dist/cherry-markdown.min.js"></script> 
<script>
    new Cherry({
        id: 'markdown-container', 
        value: '## hello world', 
    });
</script>
```
可以[点击这里](https://tencent.github.io/cherry-markdown/examples/basic.html)查看hello world的在线demo