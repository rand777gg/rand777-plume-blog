<template>
  <div class="article-status" v-if="status">
    <span class="dot" :class="status"></span>
    <span class="label">{{ statusText[status] }}</span>
  </div>
</template>

<script setup>
import { usePageFrontmatter } from 'vuepress/client'

const frontmatter = usePageFrontmatter()
const status = frontmatter.value.status || null

const statusText = {
  draft: '这是一篇草稿',
  writing: '本文编写中',
  optimizing: '本文需要优化',
  published: '已发布',
  archived: '已存档'
}
</script>

<style scoped>
.article-status {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
}

/* 基础圆点 */
.dot {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}

/* 脉冲扩散效果 */
.dot::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: inherit;
  opacity: 0.6;
  animation: pulse 1.8s ease-out infinite;
}

/* 各状态颜色 */
.dot.draft {
  background: #95a5a6;
}
.dot.writing {
  background: #d049ff;
}
.dot.optimizing {
  background: #f1c40f;
}
.dot.published {
  background: #2ecc71;
}
.dot.archived {
  background: #7f8c8d;
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  70% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.label {
  font-weight: 500;
}
</style>
