> [!CAUTION]
> 不要往`main` 分支提交任何修改性质代码，`main` 分支只作为发版分支，请使用 [dev](https://github.com/Tencent/cherry-markdown/tree/dev) 代码基准进行开发。

## 一、规范意义

作为开源项目，我们的提交规范也要和业界使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 的规范一致，因此要定制一套符合我们的提交规范。同时，我们还规范开发工作流，以便版本管理和多人协作。

### 开发准备

1. **Fork & Clone**  
   需先 Fork 项目，然后克隆到本地：

```bash
  git clone https://github.com/<your-username>/cherry-markdown.git
```

2. **分支规范**  
在 Fork 的仓库中创建开发分支，命名格式：`type/working` (例：`feat/emoji-support`)

3. **环境配置**  
项目使用 `yarn@1.x` 管理依赖：

```
npm install yarn -g
yarn
```

### 项目分区

本项目采用  yarn workspaces monorepo 架构：

``` bash
cherry-markdown
├── .git // github 工作流
├── examples // 示例代码
├── packages
│   ├── cherry-markdown // cherry-markdown 核心功能
│   ├── client  // tuari 开发的客户端
│   └── vscodePlugin // vscode 插件
└── scripts // 公共脚本
```

### 代码质量

在功能开发完成后应该进行代码格式检测，以确保开发者们代码格式一致。

1. **全局检测与修复**

-  检测全局问题: `yarn lint:all`
-  全局问题修复: `yarn lint:all:fix`

2. **分区操作**

当然你也可以在对应的分区内单独执行对应的代码格式化命令。

| 模块 | 检测命令 | 修复命令 |
|------|----------|----------|
| `packages/cherry-markdown` | `yarn lint` | `yarn lint:fix` |
| `packages/client` | `yarn lint` | `yarn lint:fix` |
| `packages/vscodePlugin` | `yarn lint` | `yarn lint:fix` |

## 三、提交公式

```
[<type>](<scope>) <subject> (#pr)

[optional body]

[optional footer(s)]

```

- 标题行: **必填** , 描述主要修改类型和内容，scope 增强描述提交作用范围，例如我们 cherry 的 Edior、Previewer 等，或者修改的是 client、vscodePlugin 功能。
- 主题内容: **可选** 描述为什么修改, 做了什么样的修改, 以及开发的思路，或者 head 没有描述完的修复。
- 页脚注释: **可选** 声明 Breaking Changes 或 Closed Issues。

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

### 发布规范
[发布规范](https://github.com/Tencent/cherry-markdown/wiki/%E5%8F%91%E5%B8%83%E8%A7%84%E8%8C%83)

-------

> [!CAUTION]
> Do not commit any modification code to the `main` branch. The `main` branch is only used as a release branch, use the [dev](https://github.com/Tencent/cherry-markdown/tree/dev) code base for development.

## 1. Significance of Standards

As an open source project, our commit standards should be consistent with the industry standard [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), so we need to customize a set of commit standards that suits us. At the same time, we also standardize the development workflow for version management and multi-person collaboration.

### Development Preparation

1. **Fork & Clone**  
   You need to Fork the project first, then clone it locally:

```bash
git clone https://github.com/<your-username>/cherry-markdown.git
```

2. **Branch Standards**  
Create development branches in the forked repository with naming format: `type/working` (e.g.: `feat/emoji-support`)

3. **Environment Configuration**  
The project uses `yarn@1.x` for dependency management:

```bash
npm install yarn -g
yarn
```

### Project Structure

This project uses yarn workspaces monorepo architecture:

```bash
cherry-markdown
├── .git // github workflow
├── examples // example code
├── packages
│   ├── cherry-markdown // cherry-markdown core functionality
│   ├── client  // tauri developed client
│   └── vscodePlugin // vscode plugin
└── scripts // common scripts
```

### Code Quality

After completing feature development, code format detection should be performed to ensure consistent code formatting among developers.

1. **Global Detection and Fixing**

- Detect global issues: `yarn lint:all`
- Fix global issues: `yarn lint:all:fix`

2. **Module Operations**

You can also execute corresponding code formatting commands separately in the corresponding modules.

| Module | Detection Command | Fix Command |
|--------|-------------------|-------------|
| `packages/cherry-markdown` | `yarn lint` | `yarn lint:fix` |
| `packages/client` | `yarn lint` | `yarn lint:fix` |
| `packages/vscodePlugin` | `yarn lint` | `yarn lint:fix` |

## 2. Commit Formula

```bash
[<type>](<scope>) <subject> (#pr)

[optional body]

[optional footer(s)]
```

- Title line: **Required**, describes the main modification type and content. Scope enhances the description of commit scope, such as Cherry's Editor, Previewer, etc., or modifications to client, vscodePlugin functionality.
- Body content: **Optional**, describes why the modification was made, what kind of modification was made, and the development approach, or fixes that weren't fully described in the header.
- Footer notes: **Optional** Put Breaking Changes or Closed Issues.

### Example

```bash
fix: code block spacing issue

Additional information explaining the fix title

Fixed #10 
Close #10
```

### Type Categories

```bash
1.  feat: new feature
2.  fix: bug fix
3.  docs: documentation
4.  style: formatting (changes that do not affect code execution)
5.  refactor: refactoring (code changes that are neither new features nor bug fixes)
6.  test: add tests
7.  chore: changes to build process or auxiliary tools
```

### Commit Process

> [!IMPORTANT]  
> Current commits need to use `changeset-cli` to submit release information.

Execute `yarn changeset`. If there are dependencies that include commits, select them with the space bar.

![image](https://github.com/user-attachments/assets/8eb10ca6-28dc-486f-9cc4-61728c7d55d2)

Then press Enter, and you can choose from `major bump`, `minor bump`, `patch bump`. This will affect the version upgrade of dependencies later.
Then submit the commit information after `Summary »`.

![image](https://github.com/user-attachments/assets/1807c725-fdae-468c-b98d-b593eeb23f27)

### Release Standards

[Release Standards](https://github.com/Tencent/cherry-markdown/wiki/%E5%8F%91%E5%B8%83%E8%A7%84%E8%8C%83)
