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
