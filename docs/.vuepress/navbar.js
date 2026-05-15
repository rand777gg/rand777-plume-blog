import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home'},
    {
        text: '博客',
        link: '/blog/',
        icon: 'material-symbols:article-outline',
        activeMatch: '^(/blog/|/article/)',
    },
    {
        text: '阅读',
        link: '/read/index/',
        icon: 'famicons:book-outline'
    },
    // {text: '工作', link: '/job/projects/', icon: 'el:opensource'},
    {
        text: '开源',
        link: '/more/projects/',
        icon: 'el:opensource'
    },
    // {
    //     text: '生活',
    //     icon: 'streamline:smiley-cool',
    //     items: [
    //         {
    //             text: '这一刻',
    //             link: '/life/this-moment/',
    //             icon: 'qlementine-icons:snapshot-16',
    //         },
    //         {
    //             text: '大好河山',
    //             link: '/life/travel/',
    //             icon: 'fa6-solid:mountain-sun',
    //         },
    //         {
    //             text: '曼波宇宙',
    //             link: '/life/manbo/collection/',
    //             icon: 'tabler:universe',
    //         },
    //         {
    //             text: '求职三两事',
    //             link: '/life/employee/',
    //             icon: 'clarity:employee-solid',
    //         }
    //     ]
    // },
    {
        text: '学习',
        icon: 'mynaui:academic-hat-solid',
        items: [
            {
                text: '开发工具',
                link: '/learn/version-control/Git/',
                icon: 'mingcute:tool-fill'
            },
            {
                text: 'Linux',
                link: '/learn/Linux/',
                icon: 'uim:linux',
            },
            // {
            //     text: '设计系统',
            //     link: '/learn/design-system/',
            //     icon: 'fluent:design-ideas-32-regular'
            // },
            {
                text: '学术之路',
                link: '/learn/academic-road/',
                icon: 'mynaui:academic-hat-solid'
            },
            // {
            //     text: 'UX 设计',
            //     link: '/learn/UX-design/',
            //     icon: 'ri:user-5-fill'
            // },
            // {
            //     text: '前端开发',
            //     link: '/learn/frontend/',
            //     icon: 'uil:web-grid'
            // },
            {
                text: '机器学习',
                link: '/learn/ml/',
                icon: 'mingcute:ai-fill'
            },
            {
                text: '后端开发',
                icon: 'streamline-ultimate:web-hook',
                link: '/learn/backend/',
                // items: [
                //     {
                //         text: '开发语言',
                //         icon: 'simple-icons:go',
                //         link: '/learn/backend/dev-langs/Go/'
                //     },
                //     {
                //         text: '数据库',
                //         icon: 'streamline-plump:database',
                //         link: '/learn/backend/database/relational/PostgresSQL/'
                //     },
                //     {
                //         text: 'Web 服务器',
                //         link: '/learn/backend/web-server/Nginx/',
                //         icon: 'nonicons:nginx-16'
                //     },
                //     {
                //         text: 'API',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'icon-park-twotone:api'
                //     },
                //     {
                //         text: '测试',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'qlementine-icons:test-16'
                //     },
                //     {
                //         text: '消息代理',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'simple-icons:iobroker'
                //     },
                //     {
                //         text: 'CI/CD',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'clarity:ci-cd-line'
                //     },
                //     {
                //         text: '搜索引擎',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'streamline-logos:elastic-logo-solid'
                //     },
                //     {
                //         text: '架构模式',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'bi:layer-backward'
                //     },
                //     {
                //         text: '实时数据',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'tdesign:time'
                //     },
                //     {
                //         text: '系统扩展',
                //         link: '/learn/backend/api/REST/',
                //         icon: 'gis:select-extent'
                //     },
                // ]
            },
            // {
            //     text: 'ROS 2',
            //     link: '/learn/ros2/',
            //     icon: 'simple-icons:ros'
            // },
            // {
            //     text: 'Agent 开发',
            //     link: '/learn/AI-Agent/',
            //     icon: 'fluent:agents-28-filled'
            // },
        ]
    },
    {
        text: '习惯',
        icon: 'line-md:coffee-loop',
        items: [
            {
                text: '每周周刊',
                link: '/hobby/journal-weekly/begin/',
                icon: 'mingcute:paper-fill'
            },
            {
                text: '纠错合集',
                link: '/hobby/correct-assets/bad-hobbies/',
                icon: 'icon-park-twotone:search'
            },
        ],
    },
    {
        text: '更多',
        items: [
            {
                text: '友情链接',
                link: '/more/friends/',
                icon: 'fluent:people-16-filled'
            },
            {
                text: '学业与经历',
                link: '/more/academy/',
                icon: 'solar:square-academic-cap-outline'
            },
            // {
            //     text: '网站统计',
            //     link: '/more/analytics/',
            //     icon: 'gridicons:stats-alt'
            // },
            // {
            //     text: '关于博客',
            //     link: '/to-be-continued/',
            //     icon: 'material-symbols:person-outline'
            // },
            // {
            //     text: '一起来玩吧',
            //     link: '/more/games/',
            //     icon: 'ri:game-fill'
            // },
        ],
        icon: 'mingcute:more-3-fill',
        activeMatch: '^/more/',
    },
])
