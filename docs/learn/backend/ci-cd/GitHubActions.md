---
title: GitHub Actions
createTime: 2025/09/17 08:13:57
permalink: /learn/fe6e832d/
icon: devicon-plain:githubactions
status: writing
---

官方文档：[https://docs.github.com/zh/actions/get-started/understand-github-actions](https://docs.github.com/zh/actions/get-started/understand-github-actions)

GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，用于自动化构建、测试和部署流水线。

可以创建工作流来构建和测试每个拉取请求到您的仓库，或将合并的拉取请求部署到生产环境。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，也可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

## 基础概念

### Workflows

Workflow 「工作流」 是一个「可配置的自动化流程」，将运行一个或多个作业。工作流由签入到存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发或按定义的计划触发。

定义在项目存储库的 `.github/workflows` 目录

:::file-tree

- .github
  - husky
    - config.yaml
  - workflows
    - ++ config.yaml
- demo.py
- project.toml
- uv.lock

:::

### Event

Event 「事件」是存储库中触发工作流运行的特定活动。例如，当有人创建拉取请求、打开问题或将提交推送到存储库时，活动可以源自 GitHub。

触发工作流的事件的 [完整列表](https://docs.github.com/zh/actions/reference/workflows-and-actions/events-that-trigger-workflows).

### Job

Job 「任务」是工作流中在同一运行器上执行的一组步骤 。每个步骤要么是将要执行的 shell 脚本，要么是将要运行的作 。步骤按顺序执行，并且相互依赖。

由于每个步骤都在同一个 Runner 上执行，因此您可以将数据从一个步骤共享到另一个步骤。例如，可以有一个构建应用程序的步骤，然后是一个测试已构建的应用程序的步骤。

默认情况下，作业没有依赖关系并并行运行。当作业依赖于另一个作业时，它会等待依赖作业完成后再运行。

还可以使用 Matrix「矩阵」多次运行同一作业，每次作业都有不同的变量组合，例如作系统或语言版本。


### Action

Action「行为」是一组预定义的、可重用的作业或代码，用于在工作流中执行特定任务，从而减少您在工作流文件中编写的重复代码量。可以执行以下任务：

- 从 GitHub 拉取 Git 存储库
- 为构建环境设置正确的工具链
- 设置对云提供商的身份验证

可以编写自己的 Action，也可以在 [GitHub Marketplace](https://github.com/marketplace?type=actions) 中找到要在工作流中使用的作。

### Runner

Runner「运行器」是在触发工作流时运行工作的服务器。每个运行器一次可以运行一个作业 。

GitHub 提供 Ubuntu Linux、Microsoft Windows 和 macOS 运行器来运行工作流 。每个工作流运行都在新置备的全新虚拟机中执行。

## 一些示例

### 推送事件

