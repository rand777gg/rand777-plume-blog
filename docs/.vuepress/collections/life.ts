import {defineCollection} from "vuepress-theme-plume";

export default defineCollection({
    type: 'doc',
    dir: 'life',
    link: '/life/',
    sidebar: [
        {
            text: '曼波宇宙',
            icon: 'fluent-emoji-high-contrast:house',
            collapsed: false,
            prefix: 'manbo',
            items: [
                'collection',
            ]
        }
    ],

})