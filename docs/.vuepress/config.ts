import type { UserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import collections from './collections/index.js'

export default defineUserConfig({

  head: [
    ['link', { rel: 'preload', href: '/font/segoesc.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-green.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-blue.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-yellow.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-grey.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-orange.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-pink.css', as: 'style' }],
    ['link', { rel: 'prefetch', href: '/styles/eyecare-white.css', as: 'style' }],
    // JetBrains Mono
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.19/index.css',
    }],
    // Maple Mono
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/maple-mono@5.2.5/index.min.css',
    }],
    // Fira Code
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/fira-code@5.0.19/index.css',
    }],
    // PingFang SC
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/font-pingfang-sc@1.0.5/index.min.css',
    }],
    // Source Code Pro
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/source-code-pro@5.0.19/index.css',
    }],
    // Menlo
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.cdnfonts.com/css/menlo',
    }],
    ['script', {
      defer: true,
      src: 'https://events.vercount.one/js',
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

    outline: 'deep',
    markdown: {
      math: {
        type: 'katex',
      },
      imageSize: true,
      demo: true,
      codeTree: true,
      plot: true,
      audioReader: true,
      mermaid: true,
      annotation: true,
      bilibili: true,
      youtube: true,
      markmap: true,
      table: true,
      echarts: true,
      pdf: true,
      collapse: true,
      chat: true,
    },

    codeHighlighter: {
      themes: { light: 'light-plus', dark: 'houston' },
      notationDiff: true,
      notationErrorLevel: true,
      notationFocus: true,
      notationHighlight: true,
      notationWordHighlight: true,
      highlightLines: true,
      collapsedLines: true,
      lineNumbers: false,
    },
    hostname: 'https://www.rand777.com',
  }),
}) as UserConfig
