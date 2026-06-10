<!-- suppress CssUnresolvedCustomProperty -->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

export interface BookItem {
  id?: string | number
  title: string
  author: string
  cover: string
  rating?: number // 评分，0-5
  year?: number
  pages?: number
  isbn?: string
  tags?: string[]
  description?: string
  link?: string
  color?: string // 自定义封面主色（可选）
  target?: string
}

const props = defineProps<{
  books: BookItem[]
  shelfColor?: string
  accent?: string
}>()

const emit = defineEmits<{
  (e: 'select', book: BookItem): void
}>()

const visible = ref(false)

onMounted(() => {
  // 延迟显示，避免初始渲染时的闪烁
  setTimeout(() => {
    visible.value = true
  }, 100)
})

const accent = computed(() => props.accent ?? '#2f6fef')

const query = ref('')
const sortKey = ref<'title' | 'author' | 'year' | 'rating'>('title')
const layout = ref<'shelf' | 'grid'>('shelf')
const hoveredId = ref<string | number | null>(null)
const detail = ref<BookItem | null>(null)

const visibleBooks = computed(() => {
  const q = query.value.trim().toLowerCase()
  const filtered = props.books.filter(b =>
    !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q),
  )
  return [...filtered].sort((a, b) => {
    const key = sortKey.value
    if (key === 'rating')
      return (b.rating ?? 0) - (a.rating ?? 0)
    if (key === 'year')
      return (b.year ?? 0) - (a.year ?? 0)
    return String(a[key] ?? '').localeCompare(String(b[key] ?? ''))
  })
})

function shortTitle(title: string, max = 24) {
  return title.length > max ? `${title.slice(0, max - 1)}…` : title
}

// parallax
let mouseX = 0
let mouseY = 0

function onMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 ~ 0.5
  mouseY = (e.clientY - rect.top) / rect.height - 0.5
}

function bookStyle(book: BookItem) {
  const base = book.color ?? '#ddd'
  const highlight = '#ffffff'
  return {
    '--book-base': base,
    '--book-highlight': highlight,
    'transform': `rotateY(${mouseX * 8}deg)rotateX(${-mouseY * 6}deg)`,
  } as Record<string, string>
}

function openDetail(b: BookItem) {
  detail.value = b
  emit('select', b)
}

function handleSelect(book: BookItem) {
  if (book.target) {
    window.open(book.target, '_self') // 跳转到 target
  }
  else {
    emit('select', book)
  }
}
</script>

<template>
  <transition name="fade-scale">
    <div v-if="visible" class="bookshelf" :style="{ '--accent': accent }">
      <!-- Shelves -->
      <div class="shelf-rows" :class="[`layout-${layout}`]">
        <template v-for="(book, idx) in visibleBooks" :key="book.id ?? idx">
          <button
            class="book"
            :class="{ 'is-hovered': hoveredId === (book.id ?? idx) }"
            :aria-label="`查看 ${book.title} 的详情`"
            @mouseenter="hoveredId = (book.id ?? idx)"
            @mouseleave="hoveredId = null"
            @mousemove="onMouseMove($event)"
            @click="openDetail(book)"
          >
            <!-- 3D Cover -->
            <div class="book-3d" :style="bookStyle(book)">
              <img class="cover" :src="book.cover" :alt="`${book.title} 封面`">
              <div class="spine" :title="`${book.title}｜${book.author}`">
                {{
                  shortTitle(book.title)
                }}
              </div>
              <div class="shine" />
            </div>

            <!-- Quick info on hover -->
            <transition name="fade">
              <div v-if="hoveredId === (book.id ?? idx)" class="hover-card" role="tooltip">
                <div class="title" :title="book.title">
                  {{ book.title }}
                </div>
                <div class="author">
                  {{ book.author }}
                </div>
                <div class="meta">
                  <span v-if="book.year">{{ book.year }}</span>
                  <span v-if="book.pages"> · {{ book.pages }} 页 </span>
                </div>
                <div v-if="book.rating" class="rating">
                  <span
                    v-for="n in 5" :key="n" class="star"
                    :class="{ on: n <= Math.round(book.rating) }"
                  >★</span>
                  <span class="score">{{ book.rating.toFixed(1) }}</span>
                </div>
              </div>
            </transition>
          </button>
        </template>

        <!-- Empty state -->
        <div v-if="visibleBooks.length === 0" class="empty">
          没有匹配的图书
        </div>
      </div>

      <!-- Detail Drawer -->
      <transition name="drawer">
        <div
          v-if="detail"
          class="drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="图书详情"
          @click.self="detail = null"
        >
          <aside class="drawer">
            <button class="close" aria-label="关闭" @click="detail = null">
              ×
            </button>
            <div class="drawer-body">
              <img class="drawer-cover" :src="detail.cover" :alt="`${detail.title} 封面`">
              <div class="drawer-info">
                <h2 class="drawer-title">
                  {{ detail.title }}
                </h2>
                <div class="drawer-author">
                  {{ detail.author }}
                </div>
                <div class="drawer-meta">
                  <span v-if="detail.year"> 出版：{{ detail.year }}</span>
                  <span v-if="detail.pages"> · {{ detail.pages }} 页 </span>
                  <span v-if="detail.isbn"> · ISBN：{{ detail.isbn }}</span>
                </div>
                <div v-if="detail.tags?.length" class="tags">
                  <span v-for="tag in detail.tags" :key="tag" class="tag">#{{ tag }}</span>
                </div>
                <p v-if="detail.description" class="desc">
                  {{ detail.description }}
                </p>
                <div class="drawer-actions">
                  <button
                    class="btn"
                    @click="handleSelect(detail)"
                  >
                    选择此书
                  </button>
                  <a
                    v-if="detail.link" class="btn secondary" :href="detail.link" target="_blank"
                    rel="noopener"
                  >
                    更多信息
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* Toolbar */
.shelf-toolbar {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  margin-bottom: 10px;
  background: var(--bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.search input {
  min-width: 220px;
  padding: 10px 12px;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  outline: none;
}

.search input::placeholder {
  color: #3b3b3b;
}

@media (prefers-color-scheme: dark) {
  .search input::placeholder {
    color: #aaa;
  }
}

.filters {
  display: flex;
  gap: 10px;
}

.select {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.select .label {
  font-size: 12px;
}

.select select {
  padding: 8px 10px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
}

/* Shelves */
.shelf-rows {
  position: relative;
  display: grid;
  gap: 26px;
}

.layout-shelf {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}

.layout-grid {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.shelf-rows::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  background:
    repeating-linear-gradient(
      to bottom,
      color-mix(in oklab, var(--shelf-color) 86%, #000) 0 6px,
      color-mix(in oklab, var(--shelf-color) 78%, #000) 6px 14px,
      transparent 14px 120px
    );
  opacity: 0.12;
}

/* Book item */
.book {
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  cursor: pointer;
  background: transparent;
  border: none;
  outline-offset: 4px;

  perspective: 800px;
}

.book:focus-visible {
  outline: 2px solid var(--accent);
}

.book-3d {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, var(--book-highlight), var(--book-base));
  border-radius: 8px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.18);
  transition: transform 180ms ease, box-shadow 180ms ease, translate 200ms ease;

  transform-style: preserve-3d;
}

.book.is-hovered .book-3d {
  box-shadow: 0 18px 36px rgb(0 0 0 / 0.24);
  translate: 0 -4px;
}

.cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transform: translateZ(10px);
}

.spine {
  position: absolute;
  inset: 0 auto 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  padding: 8px 4px;
  overflow: hidden;
  font-weight: 600;
  color: #fff;
  text-align: center;
  letter-spacing: 0.04em;
  background:
    linear-gradient(to right,
    color-mix(in oklab, var(--book-base) 84%, #000),
    color-mix(in oklab, var(--book-base) 70%, #000)
  );
  border-radius: 8px 0 0 8px;
  writing-mode: vertical-rl;
  transform: translateZ(12px);

  text-orientation: mixed;
}

.shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(110deg, transparent 40%, rgb(255 255 255 / 0.3) 55%, transparent 70%);
  border-radius: 8px;
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity 220ms ease;
  transform: translateZ(16px);
}

.book.is-hovered .shine {
  opacity: 0.6;
}

/* Hover card */
.hover-card {
  position: absolute;
  bottom: -10px;
  left: 50%;
  z-index: 3;
  min-width: 180px;
  padding: 10px 12px;
  color: #222;
  text-align: left;
  background: #fff;
  border-radius: 12px;
  box-shadow: var(--shadow);
  translate: -50% 100%;
}

.hover-card .title {
  margin-bottom: 4px;
  font-weight: 700;
}

.hover-card .author {
  font-size: 13px;
  color: #666;
}

.hover-card .meta {
  margin-top: 2px;
  font-size: 12px;
  color: #888;
}

.rating {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 6px;
}

.star {
  filter: grayscale(1);
  opacity: 0.4;
}

.star.on {
  filter: none;
  opacity: 1;
}

.score {
  font-size: 12px;
  color: #555;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 160ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Drawer */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255 255 255 / 0.15);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  backdrop-filter: blur(14px) saturate(180%);
}

.drawer {
  position: relative;
  width: min(640px, 90%);
  max-height: 90%;
  padding: 20px;
  overflow-y: auto;
  background: rgb(255 255 255 / 0.65);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 18px;
}

@media (prefers-color-scheme: dark) {
  .drawer-backdrop {
    background: rgb(0 0 0 / 0.45);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    backdrop-filter: blur(16px) saturate(160%);
  }

  .drawer {
    color: var(--vp-c-text-1);
    background: var(--vp-code-block-bg);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    backdrop-filter: blur(20px) saturate(140%);
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  background: transparent;
  border: none;
}

.drawer-body {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  align-items: start;
}

.drawer-cover {
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 12px;
  box-shadow: var(--shadow);
  object-fit: cover;
}

.drawer-title {
  margin: 2px 0 6px;
  font-size: 20px;
}

.drawer-author {
  margin-bottom: 6px;
  color: #666;
}

.drawer-meta {
  margin-bottom: 10px;
  font-size: 13px;
  color: #777;
}

.desc {
  line-height: 1.6;
  color: #444;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.tag {
  padding: 4px 8px;
  font-size: 12px;
  color: color-mix(in oklab, var(--accent) 74%, #000);
  background: color-mix(in oklab, var(--accent) 12%, #fff);
  border-radius: 999px;
}

.drawer-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.btn {
  padding: 10px 12px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: var(--accent);
  border: none;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.btn.secondary {
  color: #222;
  background: #f0f2f5;
}

@media (min-width: 920px) {
  .drawer {
    inset: 0 0 0 auto;
    width: 520px;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .book-3d {
    transition: none;
  }

  .shine {
    display: none;
  }
}
</style>
