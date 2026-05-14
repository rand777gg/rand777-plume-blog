<template>
  <div class="theme-switcher">
    <!-- 触发按钮 -->
    <div class="theme-icon"
         @mouseenter="show"
         @mouseleave="hide">
      <Icon name="ic:outline-color-lens" size="24px"/>
    </div>

    <!-- 弹出面板 -->
    <transition name="fade">
      <div v-if="showPanel" class="theme-panel"
           @mouseenter="show"
           @mouseleave="hide">
        <h3 class="theme-title"> 白天护眼模式 </h3>
        <div class="theme-container">
          <button
              v-for="t in themes"
              :key="t"
              :class="['theme-button', `theme-button-${t}`, { active: currentTheme === t }]"
              @click="switchTheme(t)"
              @mouseenter="previewTheme(t)"
              @mouseleave="resetPreview"
              :data-name="themeNames[t]"
              :title="themeNames[t]"
          ></button>
        </div>

        <h3 class="theme-title"> 字体与排版 </h3>
        <div class="font-selector">

          <!-- 字体类型选择 -->
          <div class="slider-group">
            <label for="font-family"> 字体：{{ fontFamily }}</label>
            <select id="font-family" v-model="fontFamily">
              <option v-for="f in fonts" :key="f" :value="f" :style="{ fontFamily: f }">
                {{ f }}
              </option>
            </select>
          </div>

          <div class="slider-group">
            <label for="font-size"> 字号：{{ fontSize }}px</label>
            <input id="font-size" type="range" min="12" max="32" v-model="fontSize"/>
          </div>

          <div class="slider-group">
            <label for="line-height"> 行距：{{ lineHeight }}</label>
            <input id="line-height" type="range" min="1" max="3" step="0.1" v-model="lineHeight"/>
          </div>

          <div class="slider-group">
            <label for="font-weight"> 粗细：{{ fontWeight }}</label>
            <input id="font-weight" type="range" min="100" max="900" step="100"
                   v-model="fontWeight"/>
          </div>

          <button class="reset-btn" @click="resetFont"> 重置</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'

/* -------------------- 护眼主题切换 -------------------- */
const showPanel = ref(false)
const currentTheme = ref('green') // 默认绿色
let originalTheme = currentTheme.value
let hideTimeout: number | null = null

const themes = ['blue', 'green', 'yellow', 'grey', 'orange', 'pink', 'white']

const themeNames: Record<string, string> = {
  blue: '晨曦蓝',
  green: '浅荷绿',
  yellow: '暖阳黄',
  grey: '淡云灰',
  orange: '琥珀橙',
  pink: '蔷薇粉',
  white: '月光白'
}

/* 预加载主题 CSS */
function preloadThemes() {
  if (typeof document === 'undefined') return
  themes.forEach(theme => {
    if (!document.querySelector(`link[data-theme="${theme}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `/styles/eyecare-${theme}.css`
      link.setAttribute('data-theme', theme)
      link.disabled = true
      document.head.appendChild(link)
    }
  })
}

/* 切换主题（无闪烁） */
function applyTheme(theme: string) {
  if (typeof document === 'undefined') return
  const links = document.querySelectorAll('link[data-theme]')
  links.forEach(link => {
    (link as HTMLLinkElement).disabled = link.getAttribute('data-theme') !== theme
  })
  document.documentElement.className = `theme-${theme}`
}

/* 鼠标悬停预览 */
const previewTheme = (theme: string) => applyTheme(theme)

/* 恢复原主题 */
const resetPreview = () => applyTheme(originalTheme)

/* 点击切换主题 */
const switchTheme = (theme: string) => {
  originalTheme = theme
  applyTheme(theme)
  currentTheme.value = theme
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme-preference', theme)
  }
}

/* -------------------- 面板悬停控制 -------------------- */
const show = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  showPanel.value = true
}

const hide = () => {
  hideTimeout = window.setTimeout(() => {
    showPanel.value = false
    hideTimeout = null
  }, 300)
}

/* -------------------- 字体与排版 -------------------- */
const defaultFamily = "Georgia"
const defaultSize = 16
const defaultLineHeight = 1.7
const defaultWeight = 400

const fonts = [
  "Georgia", "Inter", "Microsoft YaHei UI", "Segoe UI", "Arial", "Helvetica Neue", "Noto Sans SC",
  "PingFang SC", "SimSun", "Times New Roman", "Verdana",
  "Fira Code", "FiraCode Nerd Font", "JetBrains Mono", "Maple Mono",
  "Source Code Pro", "Cascadia Code", "Menlo", "Consolas", "Courier New"
]

const fontFamily = ref(defaultFamily)
const fontSize = ref(defaultSize)
const lineHeight = ref(defaultLineHeight)
const fontWeight = ref(defaultWeight)

function applyTypography(family: string, size: number, lh: number, weight: number) {
  if (typeof document === 'undefined') return
  document.body.style.fontFamily = family
  document.body.style.fontSize = size + 'px'
  document.body.style.lineHeight = lh.toString()
  document.body.style.fontWeight = weight.toString()
}

/* 初始化字体设置并监听变化 */
onMounted(() => {
  preloadThemes()

  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem('theme-preference') || 'green'
    originalTheme = savedTheme
    switchTheme(savedTheme)

    const savedFamily = localStorage.getItem('font-family') || defaultFamily
    const savedSize = parseInt(localStorage.getItem('font-size') || String(defaultSize))
    const savedLineHeight = parseFloat(localStorage.getItem('line-height') || String(defaultLineHeight))
    const savedWeight = parseInt(localStorage.getItem('font-weight') || String(defaultWeight))

    fontFamily.value = savedFamily
    fontSize.value = savedSize
    lineHeight.value = savedLineHeight
    fontWeight.value = savedWeight

    applyTypography(savedFamily, savedSize, savedLineHeight, savedWeight)
  }

  watch([fontFamily, fontSize, lineHeight, fontWeight],
      ([family, size, lh, weight]) => {
        applyTypography(family, size, lh, weight)
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('font-family', family)
          localStorage.setItem('font-size', size.toString())
          localStorage.setItem('line-height', lh.toString())
          localStorage.setItem('font-weight', weight.toString())
        }
      }
  )
})

/* 重置字体 */
function resetFont() {
  fontFamily.value = defaultFamily
  fontSize.value = defaultSize
  lineHeight.value = defaultLineHeight
  fontWeight.value = defaultWeight
  applyTypography(defaultFamily, defaultSize, defaultLineHeight, defaultWeight)
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('font-family')
    localStorage.removeItem('font-size')
    localStorage.removeItem('line-height')
    localStorage.removeItem('font-weight')
  }
}
</script>

<style scoped>
.theme-button {
  position: relative;
}

/* 悬停提示样式 */
.theme-button::after {
  content: attr(data-name);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  padding: 6px 9px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 1100;
}

.theme-button:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.theme-switcher {
  position: relative;
  display: inline-block;
}

.theme-icon {
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  font-size: 0;
}

.theme-icon .icon {
  width: 22px !important;
  height: 22px !important;
  font-size: 22px !important;
}

.theme-panel {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 260px;
  font-size: 14px;
  line-height: 1.4;
  transition: all 0.3s ease;
}

.theme-title {
  margin: 0 0 12px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 8px;
}

.theme-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 14px;
}

.theme-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.theme-button:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.theme-button.active {
  box-shadow: 0 0 0 2px var(--vp-c-brand-1), 0 4px 16px rgba(0, 0, 0, 0.25);
  transform: scale(1.25);
}

.theme-button-blue {
  background: #E6F0FF;
}

.theme-button-green {
  background: #E8F5E9;
}

.theme-button-yellow {
  background: #FFF8E6;
}

.theme-button-grey {
  background: #f5f5f5;
}

.theme-button-orange {
  background: #fff3e0;
}

.theme-button-pink {
  background: #fce4ec;
}

.theme-button-white {
  background: #ffffff;
  border: 1px solid #ddd;
}

.font-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

select {
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95em;
  transition: all 0.3s ease;
}

.slider-group {
  display: flex;
  flex-direction: column;
}

input[type="range"] {
  width: 100%;
  transition: all 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb {
  transition: all 0.2s ease;
}

input[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.3);
}

.reset-btn {
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #0078d4, #00aaff);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: linear-gradient(135deg, #005a9e, #0078d4);
  transform: scale(1.05);
}

/* 面板淡入淡出 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
