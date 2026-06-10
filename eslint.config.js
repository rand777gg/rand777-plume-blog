import config from '@pengzhanbo/eslint-config-vue'

export default config({
  pnpm: true,
  vue: {
    a11y: true,
  },
  ignores: [
    'docs/.vuepress/.cache',
    'docs/.vuepress/.temp',
    'docs/.vuepress/dist',
    'lib',
    'skills',
  ],
  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_BASE__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
  },
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/no-v-text-v-html-on-component': 'off',
    'vue-a11y/click-events-have-key-events': 'off',
    'vue-a11y/no-static-element-interactions': 'off',
  },
}, {
  files: ['docs/.vuepress/theme/components/AdjustPageStyle.vue'],
  rules: {
    'vue-a11y/mouse-events-have-key-events': 'off',
    'vue-a11y/label-has-for': 'off',
  },
}, {
  files: ['docs/.vuepress/theme/components/Academy.vue'],
  rules: {
    'vue-a11y/anchor-has-content': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
}, {
  files: ['docs/.vuepress/theme/components/Bookshelf.vue'],
  rules: {
    'vue-a11y/mouse-events-have-key-events': 'off',
  },
}, {
  files: ['docs/.vuepress/theme/components/Custom.vue'],
  rules: {
    'vue-a11y/anchor-has-content': 'off',
  },
}, {
  files: ['**/*.md/*.{js,ts}'],
  rules: {
    'import/no-duplicates': 'off',
    'import/first': 'off',
    'no-new': 'off',
  },
})
