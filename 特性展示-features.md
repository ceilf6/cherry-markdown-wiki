## 语法特性

> 支持了所有常用的、通用的语法，除此之外我们还支持了一些有意思的语法

### 特性 1：图片尺寸、阴影、边框、圆角

#### 语法

`![img #宽度#高度#对齐方式][图片URL或引用]`

> 其中，`宽度`、`高度`支持：绝对像素值（比如200px）、相对外层容器百分比（比如50%），
`对齐方式`候选值有：左对齐（缺省）、右对齐（right）、居中（center）、悬浮左、右对齐（float-left/right）

![图片编辑](https://github.com/Tencent/cherry-markdown/assets/998441/5d3fffda-b224-4251-9552-27a2b3a41fcd)

-----

### 特性 2：信息面板、手风琴
![信息面板](https://github.com/Tencent/cherry-markdown/assets/998441/95e601db-50d2-476e-be33-359b396be62e)
![手风琴](https://github.com/Tencent/cherry-markdown/assets/998441/033fe94e-70f5-4e76-a9f9-a37993b3c2c9)


-----

### 特性 3：字体颜色、字体大小、对齐方式
![字体样式（静态）](https://github.com/Tencent/cherry-markdown/assets/998441/8ff307d5-048e-401a-abaf-8c7390376921)


------

## 功能特性

### 特性 1：复制Html粘贴成MD语法
![html转md](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_copy.gif)

#### 使用场景

- Markdown初学者快速熟悉MD语法的一个途径
- 为调用方提供一个历史富文本数据迁成Markdown数据的方法

----

### 特性 2：经典换行&常规换行
![br](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_br.gif)

#### 使用场景

团队对markdown源码有最大宽度限制？一键切回经典换行（两个及以上连续换行才算一个换行）

-----

### 特性 3: 多光标编辑
![br](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_cursor.gif)

#### 使用场景

想要批量修改？可以试试多光标编辑（快捷键、搜索多光标选中等功能正在开发中）

### 特性 4：draw.io画图
![drawio编辑](https://github.com/Tencent/cherry-markdown/assets/998441/e28377a0-e772-47f4-9f39-0bf806a6786e)


### Feature 5：表格编辑

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_table_wysiwyg.gif)

### 特性 6：导出
![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_export.png)

-------

## 性能特性

### 局部渲染

> CherryMarkdown会判断用户到底变更了哪个段落，做到只渲染变更的段落，从而提升修改时的渲染性能

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_myers.png)

### 局部更新

> CherryMarkdown利用virtual dom机制实现对预览区域需要变更的内容进行局部更新的功能，从而减少了浏览器Dom操作，提高了修改时预览内容更新的性能

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_vdom.gif)


------

## Syntax Feature

> It supports all common syntax. In addition, we also support some interesting syntaxes

### Feature 1：Image zoom, alignment, reference

`![img #Width # height # alignment] [picture URL or reference]`

Among them, width and height support: absolute pixel value (such as 200px), relative outer container percentage (such as 50%), alignment candidate values ​​are: left-aligned (default), right-aligned (right), centered (center), Floating left and right alignment (float-left/right

#### Show case

![图片尺寸](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_image_size.png)

### Feature 2：Generate chart based on table content

![表格图表](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_table_chart.png)

-----

### Feature 3：Font color, Font size

![字体样式](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_font.png)

------

## Functional Features

### Feature 1：Copy HTML paste into MD syntax

![html转md](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_copy.gif)

#### Scenario

- Provide Markdown beginners a way to quickly become familiar with MD syntax
- Provide the caller a method to migrate historical rich text data into markdown data

----

### Feature 2：Classic break& regular break

![br](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_br.gif)

#### Scenario

Does the team have a maximum width limit on the markdown source code? One-click switch back to classic line break (only two or more consecutive line break can be regarded as one line feed)

-----

### Feature 3: Multi-cursor editing

![br](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_cursor.gif)

#### Scenario

Want to batch modify? You can try multi-cursor editing (shortcut keys, search for multi cursor selection and other functions are under development)

### Feature 4：Image size

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_image_wysiwyg.gif)

### Feature 5：Table edit

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_table_wysiwyg.gif)


### Feature 6：export

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_export.png)

-------

## Performance Features

### Local render

>Cherrymarkdown will judge which paragraph the user has changed and only render the changed paragraph, so as to improve the rendering performance during modification

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_myers.png)

### Local update

>Cherrymarkdown uses the virtual DOM mechanism to locally update the content that needs to be changed in the preview area, which reduces the browser DOM operation and improves the performance of preview content update during modification

![wysiwyg](https://raw.githubusercontent.com/Tencent/cherry-markdown/main/examples/images/feature_vdom.gif)

-------
