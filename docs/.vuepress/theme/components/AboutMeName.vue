<script setup>

</script>

<template>
  <div class="about-me-name">
    <p> 你好，很高兴认识你！👋</p>
    <p class="about-me-card-text-big"> 你可以叫我 rand777 </p>
    <p> 为了您的眼部健康，本站根据 「WCAG AA 对比度标准」 启用护眼模式，默认主体色为「浅荷绿」，可到右上角切换。</p>
  </div>
</template>

<style scoped>
.about-me-name{
  border-radius: 12px;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  background-image: linear-gradient(120deg, var(--vp-c-brand-3), var(--vp-c-brand-soft));
  background-size: 200% 200%;
  >p{
    color: var(--vp-c-text-1);
  }
}
</style>
