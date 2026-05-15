import {defineClientConfig} from 'vuepress/client'
import 'echarts-gl'
import './theme/styles/index.css'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import AllFriendContent from './theme/components/AllFriendContent.vue'
import Bookshelf from './theme/components/Bookshelf.vue'
import BookIndex from './theme/components/BookIndex.vue'
import Custom from './theme/components/Custom.vue'
import AdjustPageStyle from "./theme/components/AdjustPageStyle.vue";
import Declaration from "./theme/components/Declaration.vue";
import ArticleReadStats from "./theme/components/ArticleReadStats.vue";
import ArticleWriteStatus from "./theme/components/ArticleWriteStatus.vue";
import PageContextMenu from 'vuepress-theme-plume/features/PageContextMenu.vue'
import {Layout} from "vuepress-theme-plume/client";
import Academy from "./theme/components/Academy.vue";
import {h} from 'vue'
import './theme/styles/custom.css'

export default defineClientConfig({
    enhance({app}) {
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
})
