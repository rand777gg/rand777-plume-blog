---
title: VS Code
createTime: 2025/09/17 23:23:25
permalink: /learn/ztkbwyny/
icon: logos:visual-studio-code
status: writing
---

[VS Code 是全世界程序员使用最多的集成开发环境](https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment)，以 Python, JavaScript, TypeScript, Go, Rust 等语言的开发为主。相较
JetBrains 等更加轻量化，插件市场丰富。

官方文档：[https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)

### 用户和工作区设置

文档参考：[https://code.visualstudio.com/docs/configure/settings](https://code.visualstudio.com/docs/configure/settings)

VS Code 分为两种配置文件：

---

- 用户设置：作用于「全局」实例，随账户保存在微软云同步。

> 我的用户设置，查看这些被修改的配置使用 `@modified`

```json title="settings.json"
{
  // ===== Explorer / Files =====
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmPasteNative": false,
  "files.autoSave": "afterDelay",

  // ===== Git =====
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,

  // ===== Security =====
  "security.workspace.trust.untrustedFiles": "prompt",

  // ===== Editor =====
  "editor.cursorBlinking": "phase",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "block",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 12.5,
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.lineHeight": 1.5,
  "editor.mouseWheelZoom": true,
  // "editor.renderWhitespace": "all"

  // ===== Terminal =====
  "terminal.integrated.cursorStyleInactive": "line",
  "terminal.integrated.enableMultiLinePasteWarning": "never",
  "terminal.integrated.fontFamily": "Fira Code",

  // ===== Workbench =====
  "workbench.colorTheme": "i3 - Dark+ - Github Dark",
  "workbench.iconTheme": "ayu"
}
```

---

- 工作区设置：存储在「工作区」内的设置，仅在打开工作区时适用，工作区设置是针对项目特定的，可以覆盖用户设置。

`.vscode` 配置文件规定「工作区」 WorkSpace 的各种行为

## 技巧和窍门

### Windows 快捷键

[https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

@[pdf](/bibs/keyboard-shortcuts-windows.pdf)

### 键盘映射

这里仅讨论 _Emacs_ 及 _Vim_ 的 Keymap 设置，其他编辑器参考 [键盘映射文档](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_keymaps)

### 键盘快捷键

    
<kbd class="keystroke">Ctrl</kbd> + <kbd class="keystroke">shift</kbd> + <kbd class="keystroke">P</kbd>：打开命令面板


## GitHub Copilot

### 自定义提示词

自带的 _Agent Ask Edit_ 模式可能并不符合我们的要求。自定义指令会告知 AI 编码偏好和标准，这些内容将自动应用于所有聊天互动。

_chatmodes_ 文件内可自定义交互模式

::: code-tree title="Customized Prompts" height="400px" entry=".github/copilot-instructions.md"

```md title=".github/copilot-instructions.md"
# Project general coding guidelines

## Code Style

- Use semantic HTML5 elements (header, main, section, article, etc.)
- Prefer modern JavaScript (ES6+) features like const/let, arrow functions, and template literals

## Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Code Quality

- Use meaningful variable and function names that clearly describe their purpose
- Include helpful comments for complex logic
- Add error handling for user inputs and API calls
```

```md title=".github/chatmodes/CodeReviewer.md"
---
description: 'Review code for quality and adherence to best practices.'
tools: ['codebase', 'usages', 'vscodeAPI', 'problems', 'fetch', 'githubRepo', 'search']
---

# Code Reviewer Mode

You are an experienced senior developer conducting a thorough code review. Your role is to review
the code for quality, best practices, and adherence
to [project standards](../copilot-instructions.md) without making direct code changes.

## Analysis Focus

- Analyze code quality, structure, and best practices
- Identify potential bugs, security issues, or performance problems
- Evaluate accessibility and user experience considerations
- Assess maintainability and readability

## Communication Style

- Provide constructive, specific feedback with clear explanations
- Highlight both strengths and areas for improvement
- Ask clarifying questions about design decisions when appropriate
- Suggest alternative approaches when relevant

## Important Guidelines

- DO NOT write or suggest specific code changes directly
- Focus on explaining what should be changed and why
- Provide reasoning behind your recommendations
- Be encouraging while maintaining high standards

When reviewing code, structure your feedback with clear headings and specific examples from the code
being reviewed.

```

:::

## 终端 Shell

终端可以使用计算机上安装的各种 Shell。Shell 是一种通过与操作系统交互来解释和执行命令的程序。Shell
的示例包括 Bash、Zsh 和 PowerShell。

### 主题设置

VS Code 官方推荐使用 starship 终端主题，我也在使用这个。

<RepoCard repo="starship/starship" ></RepoCard>

Powershell 是默认的 Shell，安装脚本

```shell
winget install starship
```

在 `C:\Users\<username>>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` 中修改启动脚本。

```shell 
 Invoke-Expression (&starship init powershell) # [!code ++]
```

