<script setup lang="ts">
import FRIENDS from '../data/friends.json'
</script>

<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-friends">
    <p class="about-me-card-title-normal">
      友情链接
    </p>
    <div class="about-me-friends-title">
      <p class="about-me-card-text-big about-me-card-text-color">
        好友们的博客
      </p>
      <router-link to="/more/friends/">
        <icon name="game-icons:three-friends" />
        所有好友
      </router-link>
    </div>
    <div class="about-me-friends-content">
      <a
        v-for="(item, index) in FRIENDS" :key="index" :href="item.link" target="_blank" class="about-me-friends-item"
        :title="`${item.name}:${item.link}`"
      >
        <img :src="item.avatar" alt="头像">
      </a>
    </div>
  </div>
</template>

<style scoped>
.about-me-friends-item {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  border-radius: 20%;

  &:hover > img {
    transform: scale(1.2);
  }

  > img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 770px) {
    width: 60px;
    height: 60px;
    margin: 5px;
  }
}

.about-me-friends-content {
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
  margin-top: 20px;
  overflow: hidden;
  line-height: 45px;
  text-overflow: ellipsis;

  @media screen and (max-width: 770px) {
    max-height: 200px;
  }
}

.about-me-friends {
  padding: 20px;
  overflow: inherit;
}

.about-me-friends-title {
  display: flex;
  justify-content: space-between;

  > a {
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    background: var(--vp-c-brand-2);
    border-radius: 10px;
    transition: background-color 0.2s;

    &:hover {
      background: var(--vp-c-brand-1);
    }

    @media screen and (max-width: 770px) {
      height: 30px;
      padding: 7px;
      font-size: 14px;
      border-radius: 5px;
    }
  }

  > p {
    display: inline-flex;
  }
}
</style>
