import {defineCollection} from "vuepress-theme-plume";

export default defineCollection({
    type: 'doc',
    title: 'test',
    dir: 'read',
    link: '/read/',
    sidebar: [
        // {
        //     text: '医学史',
        //     icon: 'fluent-emoji-high-contrast:medical-symbol',
        //     collapsed: true,
        //     prefix: '医学史',
        //     items: [
        //         '第2章 医学的演变、传播与交融',
        //     ]
        // },
        {
            text: '医学导论',
            icon: 'fluent-emoji-high-contrast:medical-symbol',
            collapsed: true,
            prefix: '医学导论',
            items: [
                '中英文名词对照索引',
                // '第一章 古代医学'
            ]

        },
        // {
        //     text: '《普通逻辑学》（第5版）',
        //     prefix: '普通逻辑学',
        //     icon: 'mdi:logic-gate-xor',
        //     collapsed: true,
        //
        //     items:[
        //         // 'README.md',
        //         '01.概念',
        //         '02.命题及推理',
        //     ]
        // },

        {
            text: '操作系统',
            icon: 'streamline-logos:reason-studios-logo',
            collapsed: false,
            prefix: '操作系统',
            items: [
                {
                    text: '操作系统导论',
                    icon: 'icon-park-solid:guide-board',
                    collapsed: true,
                    badge: '阅读中',
                    prefix: '操作系统导论',
                    items: [
                        '第一章 关于本书的对话',
                        '第二章 操作系统介绍'
                    ]
                }
            ]
        },
        {
            text: '数据结构',
            icon: 'hugeicons:structure-check',
            collapsed: true,
            badge: '还在看'
        },
        {
            text: '计算机网络',
            icon: 'qlementine-icons:network-16',
            collapsed: true,
            badge: '还在看'
        },
        {
            text: '计算机组成原理',
            icon: 'simple-icons:instructure',
            collapsed: true,
            badge: '还在看'
        },
        // {
        //     text: '',
        //     icon: '',
        //     collapsed: ,
        //     badge: '',
        //     prefix: '',
        //     items: [
        //         {
        //             text: '',
        //             icon: '',
        //             collapsed: ,
        //             badge: '',
        //             prefix: '',
        //             items: [
        //                 '',
        //             ]
        //         }
        //     ]
        // },
    ]
})