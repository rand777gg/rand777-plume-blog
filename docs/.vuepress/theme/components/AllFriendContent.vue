<script setup lang="ts">
import FRIENDS from '../data/friends.json'
</script>

<template>
  <div class="friends-content">
    <a
      v-for="(item, index) in FRIENDS" :key="index" :href="item.link" target="_blank"
      class="vp-blog-post-item friend-item"
    >
      <img :src="item.avatar" alt="头像">
      <div>
        <p class="friend-item-name">{{ item.name }}</p>
        <p class="friend-item-desc">{{ item.desc }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.friends-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 8px 0;

  > a {
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    padding: 4px 0;
  }
}

.friend-item {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  background-color: var(--main-card-background);
  border: 1px solid var(--main-card-border);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.04);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 4px 16px rgb(0 0 0 / 0.08);
  }

  &:active {
    transform: scale(0.98);
  }

  > img {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.3s ease;

    @media screen and (max-width: 480px) {
      width: 56px;
      height: 56px;
    }
  }

  &:hover > img {
    transform: scale(1.05);
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }
}

.friend-item-name {
  margin: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s ease;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
}

.friend-item:hover .friend-item-name {
  color: var(--vp-c-brand-1);
}

.friend-item-desc {
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
}

.friend-item:hover .friend-item-desc {
  opacity: 1;
}

/* Enhanced focus styles for accessibility */
.friend-item:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

/* Loading animation for images */
.friend-item > img {
  background-color: var(--vp-c-bg-soft);
  background-image:
    linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 0.4),
      transparent
    );
  background-size: 200% 100%;
}

/* Performance optimizations */
.friends-content {
  contain: layout style;
}

.friend-item {
  will-change: transform;

  contain: layout style;
}
</style>
