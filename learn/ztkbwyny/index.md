---
url: /learn/ztkbwyny/index.md
---
[VS Code 是全世界程序员使用最多的集成开发环境](https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment)，以 Python, JavaScript, TypeScript, Go, Rust 等语言的开发为主。相较
JetBrains 等更加轻量化，插件市场丰富。

官方文档：<https://code.visualstudio.com/docs>

### 用户和工作区设置

文档参考：<https://code.visualstudio.com/docs/configure/settings>

VS Code 分为两种配置文件：

#### 用户设置

作用于「全局」实例，保存在微软账户云同步。

> 以下是我的用户设置，查看这些被修改的配置使用 `@modified`

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

***

#### 工作区设置

存储在「工作区」内的设置，仅在打开工作区时适用，工作区设置是针对项目特定的，可以覆盖用户设置。

`.vscode` 配置文件规定 WorkSpace「工作区」的各种行为

## 技巧和窍门

### Windows 快捷键

<https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf>

@[pdf](/bibs/keyboard-shortcuts-windows.pdf)

### 键盘映射

这里仅讨论 *Emacs* 及 *Vim* 的 Keymap 设置，其他编辑器参考 [键盘映射文档](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_keymaps)

## 终端 Shell

终端可以使用计算机上安装的各种 Shell。Shell 是一种通过与操作系统交互来解释和执行命令的程序。Shell
的示例包括 Bash、Zsh 和 PowerShell。

### 主题设置

VS Code 官方推荐使用 starship 终端主题。

Powershell 是默认的 Shell，安装脚本

```shell
winget install starship
```

在 `C:\Users\<username>>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` 中修改启动脚本。

```shell
 Invoke-Expression (&starship init powershell) # [!code ++]
```
