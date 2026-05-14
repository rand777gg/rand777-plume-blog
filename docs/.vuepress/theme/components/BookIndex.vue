<template>
  <Bookshelf :books="Books" @select="(b) => console.log('select', b)" />
</template>

<script setup lang="ts">
import Bookshelf from './Bookshelf.vue'

const rawBooks = [
  {
    id: 0,
    title: '操作系统导论',
    author: 'Remzi H. Arpaci-Dusseau等',
    cover: 'czxtdl.png',
    rating: null,
    year: null,
    pages: 480,
    tags: ['操作系统', '计算机'],
    description: '设计软件的上层思想与构建方法。',
    target: '/read/OS/guidance/chap01/'
  },
  // {
  //   id: ,
  //   title: '普通逻辑学',
  //   author: '上海人民出版社',
  //   cover: 'ptljx.png',
  //   rating: 4.9,
  //   year: 2008,
  //   pages: 388,
  //   tags: ['逻辑学', '哲学'],
  //   description: '让问题更像问题，而非答案。',
  //   target: '/read/ordinary-logic/'
  // },
  {
    id: 1,
    title: '医学导论',
    author: '马建辉 闻德亮',
    cover: 'yxdl.png',
    rating: 5.0,
    year: 2024,
    pages: 202,
    tags: ['医学', '历史', '导论'],
    target: '/read/introduction-to-medicine/correspondent-index-of-chinese-and-english-terms/'
  },
  // {
  //   id: ,
  //   title: '医学史',
  //   author: '张大庆',
  //   cover: 'yxs.png',
  //   rating: 5.0,
  //   year: 2024,
  //   pages: 287,
  //   tags: ['医学', '历史'],
  //   target: '/read/history-of-medicine/chap02/'
  // },
]

// 统一加上前缀
const Books = rawBooks.map(b => ({
  ...b,
  cover: b.cover ? `/book-covers/${b.cover}` : ''
}))
</script>
