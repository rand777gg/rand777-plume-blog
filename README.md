# 个人博客

博客主题为 [vuepress-theme-plume](https://theme-plume.vuejs.press/)，主页卡片组件修改自大佬 [Hoey](https://zhenghaoyang.cn/) 的博客

网址：https://www.rand777.com 部署于腾讯云 EdgeOne CDN（使用 GitHub Actions 自动部署到 gh-pages 分支，推送至 EdgeOne CDN）。

## 安装

```sh
git clone https://github.com/rand777gg/rand777-plume-blog
```

```sh
pnpm i
```

```shell
pnpm run docs:dev
```

博客主页为自定义页面，若你也在使用这个博客主题并想参考本博客主页，可查看以下详细说明：

## 主要配置项

### 组件说明

组件保存于 `docs/.vuepress/theme/components` 下，组件说明如下：

#### 关于我

| Vue 组件名           | 含义        | 备注                                                       |
|-------------------|-----------|----------------------------------------------------------|
| AboutMeCharacter  | MBTI 性格   | 在 [16personalities](https://www.16personalities.com/) 测出 |
| AboutMeFriendLink | 最下方友情链接组件 | `docs/.vuepress/theme/data/friends.json` 编辑友链信息          |
| AboutMeLife       | 时间分布可视化   | 需安装 ECharts                                              |
| AboutMeName       | 个人及站点简要信息 |                                                          |
| AboutMeSkill      | 技能及工具掌握情况 | 在数组 `technology` 及 `tools` 中更改信息即可                       |
| AboutMeText       | 纯文字模板     |                                                          |


### 学业

`Academy.vue` 参考了 luost26 的博客主页，展示个人学业、荣誉及科研等相关信息，目前仍在优化中。

### 页面主题色、字体、字号、行间距调整

`AdjustPgeStyle.vue` 中的 `select` 组件分别对应页面主题色、字体、字号、行间距的调整，选择后会将对应的值存储在 `localStorage` 中，并在页面加载时读取并应用这些值。

七种主题色以 css 形式保存在 `docs/.vuepress/public/styles`

鼠标移到右上角画板按钮即可

### 主页友情链接

友情链接组件 `AllFriendContent.vue` 中的友链信息保存在 `docs/.vuepress/theme/data/friends.json` 中，编辑此文件即可更改主页友情链接信息。


### 布局插槽

基于 Plume 主题的布局插槽，设计了「文章编写状态」及「文章阅读量」页面，分别在 `ArticleReadStats.vue` 和 `ArticleWriteStatus.vue` 中实现。

其中「文章编写状态」分五种，  draft: '这是一篇草稿',writing: '本文编写中',optimizing: '本文需要优化',published: '已发布',archived: '已存档'。方便自己和他人了解文章的编写状态。

「文章阅读量」页面展示了发布的文章及其阅读量，数据来自 [Vercount One](https://vercount.one/) 的后台统计；

有关布局插槽的使用方法可参考 [VuePress Plume Theme 官方文档](https://theme-plume.vuejs.press/guide/layout-slots/)。

### 书架

心血来潮写着玩的，展示了正在阅读的书籍，数据保存在 `docs/.vuepress/theme/components/BookIndex.vue` 的 `rawBooks` 中，编辑此处即可更改书籍信息。

### 底部宣传栏

底部宣传栏组件 `Declaration.vue` 快速跳转本网站相关链接。

### 自定义卡片宽度

卡片宽度在卡片组件的父 `div` 中使用 `class` 进行更改，`grid-row-1` 为一个卡片铺满一行，`grid-row-1-1` 为两个卡片 1:1 行排, `grid-row-3-2` 为两个卡片 3:2 行排, 你可以在 `Custom.vue` 的 `style` 中写更多的布局方式，随意组合卡片。

## 代码检查（Lint）

本项目配置了 ESLint + Stylelint + Commitlint，提交前建议运行：

```bash
pnpm lint              # 全量检查（ESLint + Stylelint）
pnpm lint:fix          # 自动修复格式问题（ESLint + Stylelint）
```

### ESLint — 检查 .ts / .vue 中的脚本

```bash
pnpm lint:eslint       # 检查
pnpm lint:eslint --fix # 自动修复
```

| 常见报错 | 含义 | 解决 |
|----------|------|------|
| `Strings must use singlequote` | 字符串应使用单引号 | 改成单引号，或 `--fix` |
| `Extra semicolon` | 多了分号 | 删掉分号，或 `--fix` |
| `Missing trailing comma` | 缺少尾逗号 | 加上尾逗号，或 `--fix` |
| `Expected indentation of N spaces` | 缩进不对 | 统一 2 空格缩进，或 `--fix` |
| `'xxx' is defined but never used` | 定义了变量但未使用 | 删除或前缀 `_` 表示故意不用 |
| `Import order` | import 顺序不规范 | `--fix` 自动排序 |

### Stylelint — 检查 .css / .vue 中的样式

```bash
pnpm lint:css          # 检查
pnpm lint:css --fix    # 自动修复
```

| 常见报错 | 含义 | 解决 |
|----------|------|------|
| `Expected indentation` | CSS 缩进不对 | `--fix` 自动修复 |
| `Expected empty line before rule` | 规则前缺空行 | `--fix` 自动修复 |
| `Unexpected vendor prefix` | 不需要的浏览器前缀 | `--fix` 自动删除 |

### 提交规范（Commitlint）

提交信息必须遵循以下格式（`husky` 会在 `git commit` 时自动检查）：

```
<type>: <描述>

feat: 添加新功能
fix: 修复某个 bug
docs: 更新文档
chore: 升级依赖 / 配置文件
refactor: 重构代码
style: 格式化代码
```

**会被拦截的提交：**

```
更新代码          ❌ 缺少 type:
修复bug          ❌ 缺少冒号后空格
Fix bug          ❌ type 必须全小写
```

## CI / CD

### Lint 检查（lint.yaml）

push 到 master 或提 Pull Request 时，GitHub Actions 自动运行 ESLint + Stylelint。

### 自动部署（gh-pages.yml）

push 到 master 时自动构建 `pnpm docs:build` 并部署到 `gh-pages` 分支，推送至 EdgeOne CDN。
