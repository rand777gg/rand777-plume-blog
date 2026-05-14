<template>
  <div class="page-view-counter">
    本文阅读量：<span style="margin-left: 2px;" class="gradient-text">{{ pagePV }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vuepress-theme-plume/composables'

const { page, frontmatter } = useData()

// 文章阅读量
const pagePV = ref('Loading')
const isLoading = ref(false)

// 获取当前页面的 URL 路径
const getPageUrl = () => {
  if (!page.value) return ''

  // 获取页面路径，移除开头的斜杠
  let path = page.value.path.replace(/^\//, '')

  // 如果是首页，路径为空
  if (path === '' || path === 'index.html' || path === 'README.md') {
    return ''
  }

  // 移除尾部的 .html 或 .md
  path = path.replace(/\.(html|md)$/, '')

  return path
}

// 异步获取文章阅读量
const fetchPageStats = async () => {
  if (isLoading.value) return

  isLoading.value = true
  try {
    const pageUrl = getPageUrl()
    const apiUrl = `https://events.vercount.one/api/v2/log?url=https://www.rand777.com/${pageUrl}`

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(8000) // 8秒超时
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status === 'success' && data.data) {
      pagePV.value = data.data.page_pv
    } else {
      throw new Error(data.message || 'API返回数据格式错误')
    }

  } catch (error) {
    console.error('获取文章阅读量失败:', error)

    // 设置友好的错误提示
    if (error.name === 'TimeoutError') {
      pagePV.value = '超时'
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      pagePV.value = '网络错误'
    } else {
      pagePV.value = '加载失败'
    }
  } finally {
    isLoading.value = false
  }
}

// 数字格式化函数
// const formatNumber = (num: number): string => {
//   if (num >= 1000000) {
//     return (num / 1000000).toFixed(1) + 'M'
//   } else if (num >= 10000) {
//     return (num / 10000).toFixed(1) + '万'
//   } else if (num >= 1000) {
//     return (num / 1000).toFixed(1) + '千'
//   }
//   return num.toString()
// }

// 监听页面变化，当切换文章时重新获取数据
watch(
    () => page.value.path,
    (newPath, oldPath) => {
      if (newPath !== oldPath) {
        pagePV.value = 'Loading'
        // 延迟加载，确保页面已经切换
        setTimeout(() => {
          fetchPageStats()
        }, 100)
      }
    }
)

// 在组件挂载时获取数据
onMounted(() => {
  // 延迟加载，避免阻塞页面渲染
  setTimeout(() => {
    fetchPageStats()
  }, 300)
})
</script>

<style scoped>
</style>