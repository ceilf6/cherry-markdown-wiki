> [!CAUTION]
> 不要往`main` 分支提交任何修改性质代码，`main` 分支只作为发版分支。

## 一、规范意义

作为开源项目，我们的提交规范也要和业界使用[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/ )的规范一致，因此要定制一套符合我们的提交规范。同时，我们还规范开发工作流，以便版本管理和多人协作。

## 二、提交公式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- 标题行:  **必填** , 描述主要修改类型和内容，scope增强描述提交作用范围，例如我们cherry的core层、Edior、Previewer等
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路； **这里直接引用tapd源码关键字，若没有则不填**
- 页脚注释: 放 Breaking Changes 或 Closed Issues

### 示例

```
fix: [空格] 别为代码块

其他补充信息，解释fix 标题

Fixed #10 
Close #10
```

### type 类型如下

```
1.  feat：新功能（feature）
2.  fix：修补 bug
3.  docs：文档（documentation）
4.  style： 格式（不影响代码运行的变动）
5.  refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
6.  test：增加测试
7.  chore：构建过程或辅助工具的变动
```

### 提交

> [!IMPORTANT]  
> 当前提交需要使用 `changeset-cli` 进行提交 release 信息。

执行 `yarn changeset`,如果当前有包含提交的依赖就使用空格选中。

![image](https://github.com/user-attachments/assets/8eb10ca6-28dc-486f-9cc4-61728c7d55d2)

然后点击回车，分别有 `major bump`、`minor bump`、`patch bumped`进行选择，这里会影响到后面依赖升级的版本。
然后在 `Summary »` 后提交此次 commit 信息。

![image](https://github.com/user-attachments/assets/1807c725-fdae-468c-b98d-b593eeb23f27)

-------

### I. Specification Significance
As an open-source project, our commit conventions should align with industry standards using Conventional Commits. We aim to establish a customized commit specification while standardizing development workflows for version management and collaborative development.

### II. Commit Formula
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer># 
```

- Header Line ​​(required）​​
Describes the primary modification type and content. The scope enhances context (e.g., core, Editor, Previewer in our project).

- Body
Explains ​​why​​ and ​​how​​ the changes were made, including development rationale. ​​Reference TAPD source code keywords if applicable; omit otherwise.​​

- Footer
Records ​​Breaking Changes​​ or ​​Closed Issues​​ (e.g., Closes #10).

### Example
fix(core): ensure code block spacing

Additional context about the fix.

Fixed #10
Closes #10

### Allowed type Values

​​feat​​: New feature
​​fix​​: Bug fix
​​docs​​: Documentation changes
​​style​​: Code formatting (non-functional changes)
​​refactor​​: Code restructuring (non-feature/bug-fix changes)
​​test​​: Test additions/modifications
​​chore​​: Build process or tooling changes

### Commit Instructions  

> [!IMPORTANT]
> Current commits require using `changeset-cli` to submit release information.

  Run `yarn changeset`, If the commit includes dependency changes, use the **spacebar** to select them.  

![image](https://github.com/user-attachments/assets/8eb10ca6-28dc-486f-9cc4-61728c7d55d2)  

Then press **Enter**, and choose between:  
- **major bump**  
- **minor bump**  
- **patch bump**  

This selection will affect the dependency upgrade version.  

Next, under `Summary »`, enter the commit message for this change.  

![image](https://github.com/user-attachments/assets/1807c725-fdae-468c-b98d-b593eeb23f27)  
