import {defineCollection} from "vuepress-theme-plume";

export default defineCollection({
    type: 'doc',
    dir: 'hobby',
    link: '/hobby/',
    sidebar: [
        {
            text: '每周期刊',
            icon: 'mingcute:paper-fill',
            collapsed: false,
            prefix: 'journal-weekly',
            items: [
                'begin',
                '2025-08',
            ]
        },
        {
            text: '纠错合集',
            icon: 'mingcute:paper-fill',
            collapsed: false,
            prefix: 'correct-assets',
            items: [
                'bad-hobbies.md',
                'professional-words',
            ]
        },
    ],

})