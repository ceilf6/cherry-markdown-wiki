## 简介
cherry markdown是一款**前端**-**markdown**-**编辑器**-**组件**：
- 前端：本项目只有前端工程，没有提供后台服务代码
- markdown：写markdown的
- 编辑器：由**解析引擎**、**工具栏**、**编辑区**、**预览区**四部分组成
- 组件：提供自定义工具栏、自定义语法以及[各种api](https://tencent.github.io/cherry-markdown/examples/api.html)

### 组成
cherry 主要由四部分组成，分别是：
1. Markdown解析引擎`cherry.engine`（支持扩展[自定义语法](https://github.com/Tencent/cherry-markdown/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E6%B3%95)）
2. 工具栏`cherry.toolbar`（支持扩展[自定义工具栏](https://github.com/Tencent/cherry-markdown/wiki/%E8%B0%83%E6%95%B4%E5%B7%A5%E5%85%B7%E6%A0%8F)）
3. 编辑区`cherry.editor`（基于[codemirror version5](https://codemirror.net/5/)实现的编辑区）
4. 预览区`cherry.previewer`（支持对表格、图片、列表、代码块等进行[所见即所得编辑](https://github.com/Tencent/cherry-markdown/wiki/%E7%89%B9%E6%80%A7%E5%B1%95%E7%A4%BA-features)）

![image](https://github.com/user-attachments/assets/2a16d7fc-c757-4094-9be9-26c2a2e52b2f)

### 特点
cherry的主要特点是“**给的多**”，力求使用方能**开箱即用**
1. 可扩展（自定义工具栏、自定义语法、自定义主题等等，也提供比较丰富的API）
2. 可配置的功能丰富（通过[修改配置项](https://github.com/Tencent/cherry-markdown/wiki/%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%85%A8%E8%A7%A3)你可以：禁用某些语法、配置图片懒加载机制、锚点是否更新location.hash等等）
3. 自带的语法比较多，除标准的Markdown语法外，cherry还支持以下语法：
    - 信息面板
    - 手风琴
    - ruby（典型场景：给文字标注拼音）
    - 对齐方式（居中、右对齐）
    - 图片样式（尺寸、是否圆角、是否描边、是否阴影、对齐方式）
    - 字体颜色、字体大小、上下标
    - 目录（根据内容自动生成目录）
    - 根据表格内容生成图表（目前主要支持柱状图和折线图）
    - mermaid画图（目前只支持 mermaid version9，正在安排升级ing...）
4. 提供多项功能帮助提高编辑效率和体验
    - 选中文字时出现悬浮按钮
    - 输入/弹出联想
    - 支持配置快捷键
    - 粘贴Html内容时自动转成Markdown（当然也可以选择粘贴为纯文本）
    - 支持同时拖拽多个文件到编辑器
    - 提供表格所见即所得编辑能力，避免编辑复杂的表格语法
5. 引用方便，提供多种[构建产物](https://github.com/Tencent/cherry-markdown/wiki/%E6%9E%84%E5%BB%BA%E4%BA%A7%E7%89%A9%E4%BB%8B%E7%BB%8D)方便业务按需引入
6. 安全，提供html标签白名单和黑名单机制，同时引入[DOMPurify](https://github.com/cure53/DOMPurify)做兜底

## 项目目录介绍
> master分支用来发布，dev分支用于开发

源码在`/packages/cherry-markdown/src`
- addons cherry的插件包，第三方的插件可以贡献到这里
- core `cherry.engine`的核心逻辑
    - core/hooks cherry的各种语法的具体实现
- libs 理论上没啥大用了，请忽略
- locales 多语言
- sass 样式文件
    - sass/themes 主题样式文件
    - sass/prism 代码块高亮的样式文件
- toolbars `cherry.toolbar`的核心逻辑
    - toolbars/hooks 各种工具栏的具体实现
    - toolbars/Toolbar.js 顶部工具栏
    - toolbars/ToolbarRight.js 顶部右侧工具栏
    - toolbars/Sidebar.js 右侧悬浮工具栏
    - toolbars/Toc.js 右侧悬浮目录
    - toolbars/Bubble.js 选中文字时出现的悬浮工具栏
- utils 各种插件、小组件
- Cherry.config.js 默认配置文件，最新最全的配置项可以这个文件
- Cherry.js 主体文件
- Engine.js 解析引擎的主体
- Editor.js 左侧编辑器的主体
- Previewer.js 右侧预览区的主体

## 未来规划
### cherry自身能力增强
- 语法再丰富
- 支持WYSIWYG模式（打算[引入milkdown编辑器](https://github.com/Tencent/cherry-markdown/issues/1053)来实现），实现后cherry将支持四种模式：
    - edit&preview 双栏编辑模式（左侧编辑，右侧预览，右侧预览区还可以进行部分所见即所得编辑）
    - editOnly 纯编辑模式
    - previewOnly 纯预览模式
    - WYSIWYG 所见即所得编辑模式（其实就是milkdown编辑器）

### 客户端慢慢做
就按[规划](https://github.com/Tencent/cherry-markdown/issues/970)慢慢做

### vscode插件开摆
vscode插件已经[发布了](https://github.com/Tencent/cherry-markdown/issues/392)，主体功能已经实现（预览、同步滚动、编辑等），在没有反馈的时候就开摆（因为感觉够用了），不会再主动优化插件的功能了（不过有个[重构](https://github.com/Tencent/cherry-markdown/issues/1029)的需求，会慢慢搞）
![image](https://github.com/user-attachments/assets/c8e2bf05-662d-4534-88ba-3a77eb73d528)




