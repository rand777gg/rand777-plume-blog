<script setup lang="ts">
</script>

<template>
  <div class="declaration-wrapper">
    <div class="declaration-row">
      <a class="declaration-item" href="https://ctext.org/zhs" target="_blank" rel="noopener">
        <img class="logo" src="https://ctext.org/logos/ctplogo1.gif" alt="Vue Bits" />
      </a>
      <a class="declaration-item" href="https://www.w3.org/Translations/WCAG21-zh/" target="_blank" rel="noopener">
        <img class="logo" src="/assets/wcag2.1AA.png" alt="WCAG 2.1 AA" />
      </a>
      <a class="declaration-item" href="https://sfdora.org/read/read-the-declaration-chinese/" target="_blank" rel="noopener">
        <img class="logo" src="/assets/Dorabadge.png" alt="DORA" />
      </a>
      <a class="declaration-item" href="https://orcid.org/" target="_blank" rel="noopener">
        <img class="logo small" src="/assets/orcid.png" alt="ORCID" />
      </a>
      <a class="declaration-item" href="https://www.jsdelivr.com/" target="_blank" rel="noopener">
        <img class="logo" src="/assets/jsd.png" alt="jsDelivr" />
      </a>
      <a class="declaration-item" href="https://www.who.int/" target="_blank" rel="noopener">
        <img class="logo" src="/assets/WHO.png" alt="Vercel" />
      </a>
      <a class="declaration-item" href="https://vue-bits.dev/" target="_blank" rel="noopener">
        <img class="logo" src="/assets/vue-bits.svg" alt="Vue Bits" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.declaration-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.declaration-row {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 8px 0;
  /* 保持横向布局，不换行 */
  white-space: nowrap;
}

.declaration-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 50px;
  width: auto; /* 保持原始宽高比，不拉伸 */
  display: block;
}

.logo.small {
  height: 40px;
  width: auto;
}
</style>