<script setup lang="ts">

</script>

<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-character">
    <p class="about-me-card-title-normal">
      性格
    </p>
    <div class="about-me-character-content">
      <div class="about-me-character-type">
        <p class="about-me-card-text-big about-me-card-text-color">
          指挥官
        </p>
        <p class="about-me-card-text-big">
          ENTJ-A
        </p>
      </div>
      <div class="about-me-character-img" />
    </div>
  </div>
</template>

<style scoped>
.about-me-character {
  padding: 20px;

  &:hover .about-me-character-img {
    transform: scale(1.1);
  }
}

.about-me-character-content {
  display: flex;
}

.about-me-character-type {
  width: fit-content;
}

.about-me-character-img {
  position: relative;
  display: flex;
  flex: 1;
  align-items: end;
  width: fit-content;
  min-height: 110px;
  background-image: url("/assets/ENTJ_male.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  transition: transform 1s;
}
</style>
