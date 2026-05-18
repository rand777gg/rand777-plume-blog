import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'
import collections from './collections/index.js'

export default defineUserConfig({
    head: [
        ['link', {rel: 'preload', href: '/font/segoesc.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-green.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-blue.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-yellow.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-grey.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-orange.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-pink.css', as: 'style'}],
        ['link', {rel: 'prefetch', href: '/styles/eyecare-white.css', as: 'style'}],
        // JetBrains Mono
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.19/index.css'
        }],
        // Maple Mono
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/maple-mono@5.2.5/index.min.css'
        }],
        // Fira Code
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/fira-code@5.0.19/index.css'
        }],
        // PingFang SC
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/font-pingfang-sc@1.0.5/index.min.css'
        }],
        // Source Code Pro
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/source-code-pro@5.0.19/index.css'
        }],
        // Menlo
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.cdnfonts.com/css/menlo'
        }],
        ['script', {
            defer: true,
            src: 'https://events.vercount.one/js'
        }],
        ['script', {
            defer: true,
            src: 'https://cloud.umami.is/script.js',
            'data-website-id': '0a6206ef-ee68-4669-aca9-7417256ccd09'
        }],
    ],

    base: '/',
    lang: 'zh-CN',
    title: 'rand777',
    description: 'rand777\' blog.',

    bundler: viteBundler(),

    theme: plumeTheme({
        llmstxt: true,
        collections,

        outline: 'deep', // 启用深度侧边栏
        /**
         * markdown 配置
         */
        markdown: {
            math: {
                type: 'katex',
            },
            imageSize: true, // 图片优化 'local（本地图片）' | 'all（所有图片）'
            demo: true, // 启用新的代码演示功能
            codeTree: true, // 启用代码树
            plot: true, // 隐秘文本
            audioReader: true, // 启用音频阅读器
            mermaid: true, // 启用 Mermaid 图表
            annotation: true, // 启用内容注释功能
            bilibili: true,
            youtube: true,
            markmap: true,
            table: true,
            echarts: true,
            pdf: true,
            collapse: true,
            chat: true
        },

        /**
         * 代码高亮
         * https://theme-plume.vuejs.press/config/plugins/code-highlight/
         * */
        // [lang] title="xxxx"  https://theme-plume.vuejs.press/guide/code/features/
        codeHighlighter: {
            themes: {light: 'light-plus', dark: 'houston'},
            notationDiff: true,
            notationErrorLevel: true,
            notationFocus: true, // 启用代码块聚焦 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E8%81%9A%E7%84%A6
            notationHighlight: true,
            notationWordHighlight: true, // 词高亮 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD-%E8%AF%8D%E9%AB%98%E4%BA%AE
            highlightLines: true, // 启用行高亮 https://theme-plume.vuejs.press/guide/code/features/#%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E5%AE%9E%E7%8E%B0%E8%A1%8C%E9%AB%98%E4%BA%AE
            collapsedLines: true,  // 全局启用 代码折叠 https://theme-plume.vuejs.press/guide/code/features/#%E6%8A%98%E5%8F%A0%E4%BB%A3%E7%A0%81%E5%9D%97
            lineNumbers: false,  // 启用行号 https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E8%A1%8C%E5%8F%B7
        },
        // 添加您的部署域名
        hostname: 'https://www.rand777.com',
    }),
})
