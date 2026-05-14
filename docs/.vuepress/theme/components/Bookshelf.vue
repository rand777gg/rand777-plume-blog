<!--suppress CssUnresolvedCustomProperty -->
<template>
  <transition name="fade-scale">
    <div v-if="visible" class="bookshelf" :style="{'--accent': accent }">
      <!-- Shelves -->
      <div :class="['shelf-rows', `layout-${layout}`]">
        <template v-for="(book, idx) in visibleBooks" :key="book.id ?? idx">
          <button
              class="book"
              :class="{ 'is-hovered': hoveredId === (book.id ?? idx) }"
              @mouseenter="hoveredId = (book.id ?? idx)"
              @mouseleave="hoveredId = null"
              @mousemove="onMouseMove($event)"
              @click="openDetail(book)"
              :aria-label="`查看 ${book.title} 的详情`"
          >
            <!-- 3D Cover -->
            <div class="book-3d" :style="bookStyle(book)">
              <img class="cover" :src="book.cover" :alt="`${book.title} 封面`"/>
              <div class="spine" :title="`${book.title}｜${book.author}`">{{
                  shortTitle(book.title)
                }}
              </div>
              <div class="shine"/>
            </div>

            <!-- Quick info on hover -->
            <transition name="fade">
              <div v-if="hoveredId === (book.id ?? idx)" class="hover-card" role="tooltip">
                <div class="title" :title="book.title">{{ book.title }}</div>
                <div class="author">{{ book.author }}</div>
                <div class="meta">
                  <span v-if="book.year">{{ book.year }}</span>
                  <span v-if="book.pages"> · {{ book.pages }} 页 </span>
                </div>
                <div class="rating" v-if="book.rating">
                  <span v-for="n in 5" :key="n" class="star"
                        :class="{ on: n <= Math.round(book.rating) }">★</span>
                  <span class="score">{{ book.rating.toFixed(1) }}</span>
                </div>
              </div>
            </transition>
          </button>
        </template>

        <!-- Empty state -->
        <div v-if="visibleBooks.length === 0" class="empty"> 没有匹配的图书</div>
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
            <button class="close" @click="detail = null" aria-label="关闭">×</button>
            <div class="drawer-body">
              <img class="drawer-cover" :src="detail.cover" :alt="`${detail.title} 封面`"/>
              <div class="drawer-info">
                <h2 class="drawer-title">{{ detail.title }}</h2>
                <div class="drawer-author">{{ detail.author }}</div>
                <div class="drawer-meta">
                  <span v-if="detail.year"> 出版：{{ detail.year }}</span>
                  <span v-if="detail.pages"> · {{ detail.pages }} 页 </span>
                  <span v-if="detail.isbn"> · ISBN：{{ detail.isbn }}</span>
                </div>
                <div v-if="detail.tags?.length" class="tags">
                  <span v-for="tag in detail.tags" :key="tag" class="tag">#{{ tag }}</span>
                </div>
                <p v-if="detail.description" class="desc">{{ detail.description }}</p>
                <div class="drawer-actions">
                  <button
                      class="btn"
                      @click="handleSelect(detail)"
                  >
                    选择此书
                  </button>
                  <a class="btn secondary" v-if="detail.link" :href="detail.link" target="_blank"
                     rel="noopener">
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

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'

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

const visible = ref(false)

onMounted(() => {
  // 延迟显示，避免初始渲染时的闪烁
  setTimeout(() => {
    visible.value = true
  }, 100)
})

const emit = defineEmits<{
  (e: 'select', book: BookItem): void
}>()

const accent = computed(() => props.accent ?? '#2f6fef')

const query = ref('')
const sortKey = ref<'title' | 'author' | 'year' | 'rating'>('title')
const layout = ref<'shelf' | 'grid'>('shelf')
const hoveredId = ref<string | number | null>(null)
const detail = ref<BookItem | null>(null)

const visibleBooks = computed(() => {
  const q = query.value.trim().toLowerCase()
  const filtered = props.books.filter((b) =>
      !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
  )
  return [...filtered].sort((a, b) => {
    const key = sortKey.value
    if (key === 'rating') return (b.rating ?? 0) - (a.rating ?? 0)
    if (key === 'year') return (b.year ?? 0) - (a.year ?? 0)
    return String(a[key] ?? '').localeCompare(String(b[key] ?? ''))
  })
})

function shortTitle(title: string, max = 24) {
  return title.length > max ? title.slice(0, max - 1) + '…' : title
}

// parallax
let mouseX = 0, mouseY = 0

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
    transform: `rotateY(${mouseX * 8}deg)rotateX(${-mouseY * 6}deg)`,
  } as Record<string, string>
}

function openDetail(b: BookItem) {
  detail.value = b
  emit('select', b)
}

function handleSelect(book: BookItem) {
  if (book.target) {
    window.open(book.target, '_self') // 跳转到 target
  } else {
    emit('select', book)
  }
}

</script>

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
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  margin-bottom: 10px;
  background: var(--bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.search input {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;
  min-width: 220px;
  outline: none;
}

.search input::placeholder {
  color: #3B3B3B;
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
  align-items: center;
  gap: 8px;
}

.select .label {
  font-size: 12px;
}

.select select {
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
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
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
      to bottom,
      color-mix(in oklab, var(--shelf-color) 86%, #000) 0 6px,
      color-mix(in oklab, var(--shelf-color) 78%, #000) 6px 14px,
      transparent 14px 120px
  );
  opacity: .12;
  pointer-events: none;
}

/* Book item */
.book {
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  background: transparent;
  border: none;
  cursor: pointer;
  perspective: 800px;
  outline-offset: 4px;
}

.book:focus-visible {
  outline: 2px solid var(--accent);
}

.book-3d {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 180ms ease, box-shadow 180ms ease, translate 200ms ease;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .18);
  background: linear-gradient(145deg, var(--book-highlight), var(--book-base));
}

.book.is-hovered .book-3d {
  translate: 0 -4px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, .24);
}

.cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transform: translateZ(10px);
}

.spine {
  position: absolute;
  inset: 0 auto 0 0;
  width: 22px;
  padding: 8px 4px;
  background: linear-gradient(to right,
  color-mix(in oklab, var(--book-base) 84%, #000),
  color-mix(in oklab, var(--book-base) 70%, #000)
  );
  color: #fff;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  transform: translateZ(12px);
  font-weight: 600;
  letter-spacing: .04em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.shine {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, .3) 55%, transparent 70%);
  mix-blend-mode: screen;
  transform: translateZ(16px);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 220ms ease;
}

.book.is-hovered .shine {
  opacity: .6;
}

/* Hover card */
.hover-card {
  position: absolute;
  left: 50%;
  bottom: -10px;
  translate: -50% 100%;
  min-width: 180px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #fff;
  color: #222;
  box-shadow: var(--shadow);
  text-align: left;
  z-index: 3;
}

.hover-card .title {
  font-weight: 700;
  margin-bottom: 4px;
}

.hover-card .author {
  color: #666;
  font-size: 13px;
}

.hover-card .meta {
  color: #888;
  font-size: 12px;
  margin-top: 2px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}

.star {
  filter: grayscale(1);
  opacity: .4;
}

.star.on {
  filter: none;
  opacity: 1;
}

.score {
  font-size: 12px;
  color: #555;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 160ms ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Drawer */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.drawer {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 18px;
  padding: 20px;
  width: min(640px, 90%);
  max-height: 90%;
  overflow-y: auto;
  position: relative;
}

@media (prefers-color-scheme: dark) {
  .drawer-backdrop {
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
  }

  .drawer {
    background: var(--vp-code-block-bg);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    color: var(--vp-c-text-1);
  }
}

.drawer-enter-active, .drawer-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}

.drawer-enter-from, .drawer-leave-to {
  opacity: 0;
  transform: scale(.96);
}

.close {
  position: absolute;
  right: 12px;
  top: 8px;
  border: none;
  background: transparent;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
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
  object-fit: cover;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.drawer-title {
  font-size: 20px;
  margin: 2px 0 6px;
}

.drawer-author {
  color: #666;
  margin-bottom: 6px;
}

.drawer-meta {
  color: #777;
  font-size: 13px;
  margin-bottom: 10px;
}

.desc {
  color: #444;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.tag {
  background: color-mix(in oklab, var(--accent) 12%, #fff);
  color: color-mix(in oklab, var(--accent) 74%, #000);
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
}

.drawer-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.btn {
  border: none;
  border-radius: 12px;
  padding: 10px 12px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow);
}

.btn.secondary {
  background: #f0f2f5;
  color: #222;
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





