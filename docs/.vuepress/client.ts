import type { ClientConfig } from 'vuepress/client'
import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
import PageContextMenu from 'vuepress-theme-plume/features/PageContextMenu.vue'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import { defineClientConfig } from 'vuepress/client'
import Academy from './theme/components/Academy.vue'
import AdjustPageStyle from './theme/components/AdjustPageStyle.vue'
import AllFriendContent from './theme/components/AllFriendContent.vue'
import ArticleReadStats from './theme/components/ArticleReadStats.vue'
import ArticleWriteStatus from './theme/components/ArticleWriteStatus.vue'
import BookIndex from './theme/components/BookIndex.vue'
import Bookshelf from './theme/components/Bookshelf.vue'
import Custom from './theme/components/Custom.vue'
import Declaration from './theme/components/Declaration.vue'
import './theme/styles/index.css'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    if (typeof window !== 'undefined')
      window.__echartsGlReady = import('echarts-gl')
    app.component('RepoCard', RepoCard)
    app.component('Custom', Custom)
    app.component('AllFriendContent', AllFriendContent)
    app.component('Bookshelf', Bookshelf)
    app.component('BookIndex', BookIndex)
    app.component('Academy', Academy)
  },
  layouts: {
    Layout: () => h(Layout, null, {
      'nav-bar-menu-after': () => h(AdjustPageStyle),
      'footer-content': () => h(Declaration),
      'doc-footer-before': () => h(ArticleReadStats),
      'doc-meta-after': () => h(ArticleWriteStatus),
      'doc-title-after': () => h(PageContextMenu),
    }),
  },
}) as ClientConfig
