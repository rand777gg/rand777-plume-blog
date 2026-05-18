import {defineCollection} from "vuepress-theme-plume";

export default defineCollection({
    type: 'doc',
    dir: 'learn',
    link: '/learn/',
    sidebar: [
        // {
        //     text: '',
        //     icon: '',
        //     collapsed: true,
        //     prefix: '',
        //     badge: '',
        //     items: [
        //
        //     ]
        // }
        {
            text: '开发工具',
            icon: 'simple-icons:jetbrains',
            collapsed: false,
            prefix: 'dev-tool',
            items: [
                {
                    text: '版本控制',
                    icon: 'mdi:git',
                    collapsed: true,
                    prefix: 'version-control',
                    items: [
                        'git',
                        'regulation',
                        {
                            text: '代码托管平台',
                            icon: 'mdi:github',
                            collapsed: true,
                            prefix: 'platform',
                            items: [
                                'GitHub',
                                'GitLab'
                            ]
                        }
                    ]
                },
                {
                    text: '集成开发环境',
                    icon: 'simple-icons:jetbrains',
                    collapsed: true,
                    prefix: 'IDE',
                    items: [
                        'VS Code',
                        'JetBrains',
                    ]
                }
            ]
        },
        {
            text: 'Linux',
            icon: 'uim:linux',
            collapsed: false,
            prefix: 'linux',
            items: [
                'begin',
                // {
                //     text: '各种发行版',
                //     icon: 'mingcute:linux-fill',
                //     collapsed: true,
                //     badge: '',
                //     prefix: 'releases',
                //     items: [
                //         'debian',
                //         'centos',
                //         'rocky',
                //         'arch',
                //     ]
                // },
            ]
        },
        {
            text: '学术之路',
            icon: 'mynaui:academic-hat-solid',
            collapsed: false,
            prefix: 'academic-road',
            badge: '',
            items: [
                'begin',
                {
                    text: '排版工具',
                    icon: 'f7:doc-text-fill',
                    collapsed: true,
                    prefix: 'typesetting',
                    badge: '',
                    items: [
                        'LaTeX',
                        'Typst'
                    ]
                },
                {
                    text: '',
                    icon: '',
                    collapsed: true,
                    prefix: '',
                    badge: '',
                    items: [

                    ]
                }
            ]
        },
        // {
        //     text: '设计系统',
        //     icon: 'fluent:design-ideas-32-regular',
        //     collapsed: false,
        //     badge: 'draft',
        //     prefix: 'design-system',
        //     items: [
        //         'begin',
        //         {
        //             text: '术语',
        //             icon: 'wpf:define-location',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '01-terminology',
        //             items: [
        //                 'component',
        //                 'language'
        //             ]
        //         },
        //         {
        //             text: '制作设计系统',
        //             icon: 'fluent:new-24-filled',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '02-make-a-new',
        //             items: [
        //                 'from-scratch',
        //                 'from-existing'
        //             ]
        //         },
        //         {
        //             text: '现有设计分析',
        //             icon: 'fluent-mdl2:eye-shadow',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '03-analysis-from-present',
        //             items: [
        //                 'A-B test',
        //                 'indentify-design',
        //                 'visual-audit'
        //             ]
        //         },
        //         {
        //             text: '创作设计语言',
        //             icon: 'arcticons:youtube-create',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '04-create-design-language',
        //             items: [
        //                 'brand',
        //                 'guidelines',
        //                 'logo'
        //             ]
        //         },
        //         {
        //             text: '设计基调',
        //             icon: 'streamline-block:basic-ui-check',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '05-define-design-tokens',
        //             items: [
        //                 'colors',
        //                 'iconography',
        //                 'layouts',
        //                 'typography',
        //             ]
        //         },
        //         {
        //             text: '建立核心组件',
        //             icon: 'bxs:component',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '06-create-core-components',
        //             items: [
        //                 'avatar',
        //                 'banner'
        //             ]
        //         },
        //         {
        //             text: '设计工具',
        //             icon: 'ph:compass-tool-bold',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '07-tools',
        //             items: [
        //                 'design',
        //                 'development'
        //             ]
        //         },
        //         {
        //             text: '项目管理',
        //             icon: 'pajamas:project',
        //             collapsed: true,
        //             badge: '',
        //             prefix: '08-project-management',
        //             items: [
        //                 'analytics',
        //                 'communications',
        //                 'task-management'
        //             ]
        //         },
        //     ]
        // },
        // {
        //     text: '前端开发',
        //     icon: 'mingcute:web-line',
        //     collapsed: false,
        //     prefix: 'frontend',
        //     items: [
        //         'begin',
        //         {
        //             text: '基础三件套',
        //             prefix: '01-basis',
        //             badge: 'draft',
        //             icon: 'flowbite:html-solid',
        //             collapsed: true,
        //             items: [
        //                 'HTML',
        //                 'CSS',
        //                 'JavaScript',
        //             ]
        //         },
        //         {
        //             text: '包管理器',
        //             icon: 'codicon:package',
        //             collapsed: true,
        //             badge: 'draft',
        //             prefix: '02-packaging-manager',
        //             items: [
        //                 'npm',
        //                 'pnpm',
        //                 'yarn',
        //                 'Bun'
        //             ]
        //         },
        //         //
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //         // {
        //         //     text: '',
        //         //     icon: '',
        //         //     collapsed: true,
        //         //     badge: '',
        //         //     prefix: '',
        //         //     items: [
        //         //         '',
        //         //     ]
        //         // },
        //
        //     ]
        // },
        {
            text: '机器学习',
            icon: 'mingcute:ai-fill',
            collapsed: false,
            badge: '',
            prefix: 'machine-learning',
            items: [
                'begin',
                {
                    text: '数学基础',
                    icon: 'fluent:math-formula-24-regular',
                    collapsed: true,
                    prefix: 'math-basis',
                    items: [
                        '01-Linear-Algebra',
                        '02-Calculus',
                        '03-discret-mathematics',
                        '04-Statistics'
                    ]
                }
            ]
        },
        // {
        //     text: '后端开发',
        //     icon: 'simple-icons:backendless',
        //     collapsed: false,
        //     prefix: 'backend',
        //     items: [
        //         'begin',
        //         {
        //             text: '开发语言',
        //             icon: 'simple-icons:go',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: '01-langs',
        //             items: [
        //                 'Python',
        //                 'Go'
        //             ]
        //         },
        //         {
        //             text: 'Web 服务器',
        //             icon: 'solar:server-broken',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'web-server',
        //             items: [
        //                 'Caddy',
        //                 'Nginx',
        //                 'Apache',
        //             ]
        //         },
        //         {
        //             text: '数据库',
        //             icon: 'mdi:database',
        //             collapsed: true,
        //             prefix: 'database',
        //             badge: 'writing',
        //             items: [
        //                 {
        //                     text: '关系型数据库',
        //                     icon: '',
        //                     collapsed: true,
        //                     prefix: 'relational',
        //                     items: [
        //                         'PostgresSQL',
        //                         'MySQL'
        //                     ]
        //                 },
        //                 {
        //                     text: 'NoSQL 数据库',
        //                     icon: '',
        //                     collapsed: true,
        //                     prefix: 'no-sql',
        //                     items: [
        //                         'Redis',
        //                         'InfluxDB',
        //                         'Neo4j',
        //                         'ClickHouse',
        //                         'MongoDB',
        //                         'Firebase'
        //                     ]
        //                 },
        //                 {
        //                     text: '更多',
        //                     collapsed: true,
        //                     prefix: 'more',
        //                     icon: 'si:more-horiz-circle-duotone',
        //                     items: [
        //                         'transaction.md',
        //                         'ACID.md',
        //                         'normalization.md',
        //                         'failure-modes.md',
        //                         'profiling-performance.md'
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             text: 'API',
        //             icon: 'icon-park-twotone:api',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'api',
        //             items: [
        //                 {
        //                     text: 'API styles',
        //                     icon: 'material-symbols:style',
        //                     collapsed: true,
        //                     prefix: 'styles',
        //                     items: [
        //                         'RESTful',
        //                         'JSON'
        //                     ]
        //                 },
        //                 {
        //                     text: '身份验证',
        //                     icon: 'arcticons:ente-authenticator',
        //                     collapsed: true,
        //                     prefix: 'authentication',
        //                     items: [
        //                         'Basic',
        //                         'Token',
        //                         'Cookie',
        //                         'JWT',
        //                         'OAuth',
        //                         'OpenID',
        //                         'SAML'
        //                     ]
        //                 },
        //                 {
        //                     text: 'Web 安全',
        //                     icon: 'ic:twotone-security',
        //                     collapsed: true,
        //                     prefix: 'web-security',
        //                     items: [
        //                         {
        //                             text: '哈希算法',
        //                             prefix: 'hash-algo',
        //                             icon: 'simple-icons:nicehash',
        //                             collapsed: true,
        //                             items: [
        //                                 'MD5',
        //                                 'SHA',
        //                                 'scrypt',
        //                                 'bcrypt'
        //                             ]
        //                         },
        //                         'HTTPS',
        //                         'CSP',
        //                         'CORS',
        //                         'OWASP',
        //                         'server',
        //                         'SSL-TLS'
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             text: '测试',
        //             icon: 'grommet-icons:test',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'testing',
        //             items: [
        //                 'methods',
        //                 'containerization'
        //             ]
        //         },
        //         {
        //             text: '消息代理',
        //             icon: 'simple-icons:iobroker',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'message-broker',
        //             items: [
        //                 'kafka',
        //                 'automq'
        //             ]
        //         },
        //         {
        //             text: 'CI/CD',
        //             icon: 'clarity:ci-cd-line',
        //             collapsed: true,
        //             badge: '',
        //             prefix: 'ci-cd',
        //             items: [
        //                 'concept',
        //                 'GitHubActions'
        //             ]
        //         },
        //         {
        //             text: '架构模式',
        //             icon: 'bi:layer-backward',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'architecture-patterns',
        //             items: [
        //                 'Monolith',
        //                 'Microservice',
        //                 'Serverless',
        //                 'SOA',
        //                 'server-mesh',
        //                 '2FA'
        //             ]
        //         },
        //         {
        //             text: '实时数据',
        //             icon: 'tdesign:time',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'realtime-data',
        //             items: [
        //                 'polling',
        //                 'Web Sockets',
        //                 'SSE'
        //             ]
        //         },
        //         {
        //             text: '可伸缩性',
        //             icon: 'streamline-sharp:3d-scale-remix',
        //             collapsed: true,
        //             badge: 'writing',
        //             prefix: 'build-for-scale',
        //             items: [
        //                 {
        //                     text: 'observability',
        //                     icon: 'simple-icons:observable',
        //                     collapsed: true,
        //                     badge: '',
        //                     prefix: 'observability',
        //                     items: [
        //                         'instrument',
        //                         'monitor',
        //                         'telemetry'
        //                     ]
        //                 },
        //                 {
        //                     text: 'mitigation-strategies',
        //                     icon: 'akar-icons:health',
        //                     collapsed: true,
        //                     badge: '',
        //                     prefix: 'mitigation-strategies',
        //                     items: [
        //                         'backpressure',
        //                         'circuit-breaker',
        //                         'degradation',
        //                         'load-shifting',
        //                         'throttling'
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     text: '机器人开发',
        //     icon: 'simple-icons:ros',
        //     prefix: 'ros2',
        //     items: [
        //         'README.md',
        //         {
        //             text: '机械臂建模仿真',
        //             icon: 'file-icons:3d-model',
        //             prefix: 'arm-modeling-simulation',
        //             collapsed: true,
        //             items: [
        //                 'modified-DH',
        //             ]
        //         }
        //     ]
        // },
    ],

})