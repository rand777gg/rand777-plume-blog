<script setup>
import FRIENDS from '../data/friends.json'
</script>

<template>
  <div class="friends-content">
    <a :href="item.link" target="_blank" class="vp-blog-post-item friend-item" v-for="(item, index) in FRIENDS"
       :key="index">
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
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  @media screen and (max-width: 480px) {
    gap: 8px;
    padding: 4px 0;
  }

  > a {
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
}

.friend-item {
  border-radius: 12px;
  padding: 16px;
  background-color: var(--main-card-background);
  border: 1px solid var(--main-card-border);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  &:hover {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    background-color: var(--vp-c-bg-soft);
  }
  
  &:active {
    transform: scale(0.98);
  }

  > img {
    border-radius: 10px;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
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
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.friend-item-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  transition: color 0.2s ease;
  
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
}

.friend-item:hover .friend-item-name {
  color: var(--vp-c-brand-1);
}

.friend-item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
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
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  background-size: 200% 100%;
}

/* Performance optimizations */
.friends-content {
  contain: layout style;
}

.friend-item {
  contain: layout style;
  will-change: transform;
}
</style>
