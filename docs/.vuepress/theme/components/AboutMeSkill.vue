<script setup lang="ts">
import { ref } from 'vue'

interface SkillItem {
  type: string
  icon: string
}

const technology = ref<SkillItem[]>([
  { type: 'ROS2', icon: 'skill-icons:ros-light' },
  { type: 'Vue3', icon: 'logos:vue' },
  { type: 'Spring', icon: 'devicon:spring' },
  { type: 'Flask', icon: 'logos:flask' },
  { type: 'HTML5', icon: 'logos:html-5' },
  { type: 'CSS3', icon: 'logos:css-3' },
  { type: 'TypeScript', icon: 'vscode-icons:file-type-typescriptdef' },
  { type: 'Python', icon: 'logos:python' },
  { type: 'C++', icon: 'devicon:cplusplus' },
  { type: 'Rust', icon: 'logos:rust' },
  { type: 'Java', icon: 'devicon:java' },
  { type: 'Go', icon: 'logos:go' },
  { type: 'GraphQL', icon: 'logos:graphql' },
  { type: 'MySQL', icon: 'devicon:mysql' },
  { type: 'PostgreSQL', icon: 'devicon:postgresql' },
  { type: 'Redis', icon: 'devicon:redis' },
  { type: 'MongoDB', icon: 'devicon:mongodb' },
  { type: 'ElasticSearch', icon: 'devicon:elasticsearch' },
  { type: 'RabbitMQ', icon: 'devicon:rabbitmq' },

])

// 工具
const tools = ref<SkillItem[]>([
  { type: 'WebStorm', icon: 'devicon:webstorm' },
  { type: 'VSCode', icon: 'vscode-icons:file-type-vscode' },
  { type: 'Android Studio', icon: 'devicon:androidstudio' },
  { type: 'pnpm', icon: 'vscode-icons:file-type-light-pnpm' },
  { type: 'npm', icon: 'logos:npm' },
  { type: 'Vite', icon: 'devicon:vitejs' },
  { type: 'IDEA', icon: 'logos:intellij-idea' },
  { type: 'Git', icon: 'devicon:git' },
  { type: 'GitHub', icon: 'devicon:github' },
  { type: 'GitLab', icon: 'devicon:gitlab' },
  { type: 'Docker', icon: 'devicon:docker' },
  { type: 'Postman', icon: 'devicon:postman' },
  { type: 'Netlify', icon: 'devicon:netlify' },
])
</script>

<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-skill">
    <div style="margin-left: 20px;">
      <p class="about-me-card-title-normal">
        技能
      </p>
      <p class="about-me-card-text-big">
        我会的一点点
      </p>
    </div>
    <!-- 第一行向左移动 -->
    <div class="marquee-row first-row">
      <div class="marquee-content">
        <span v-for="(item, index) in technology" :key="index"> <icon :name="item.icon" /> </span>
        <span v-for="(item, index) in technology" :key="index + technology.length"><icon :name="item.icon" /></span>
      </div>
    </div>
    <!-- 第二行向右移动 -->
    <div class="marquee-row second-row">
      <div class="marquee-content">
        <span v-for="(item, index) in tools" :key="index"><icon :name="item.icon" /></span>
        <span v-for="(item, index) in tools" :key="index + tools.length"><icon :name="item.icon" /></span>
      </div>
    </div>

    <div class="about-me-skill-detail">
      <span v-for="(item, index) in technology" :key="index"> <icon :name="item.icon" /> <span>{{ item.type }}</span>  </span>
    </div>
  </div>
</template>

<style scoped>
.about-me-skill {
  position: relative;
  z-index: 1;
  min-height: 316px;
  padding: 20px 0;

  &:hover .marquee-row {
    opacity: 0;
  }

  &:hover .about-me-skill-detail {
    opacity: 1;
  }
}

.about-me-skill-detail {
  position: absolute;
  top: 100px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.5s;

  >span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    margin: 0 6px 6px 0;
    font-size: 16px;
    color: var(--vp-c-text-2);
    background-color: var(--home-action-bnt-bg);
    border-radius: 8px;
  }
}

.marquee-row {
  width: 105%;
  margin-left: -6px;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.6s 0.1s;
  transform: rotateZ(-6deg);
}

.marquee-content {
  display: inline-flex;
  animation: marquee-left 30s linear infinite;

  >span {
    align-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 0 10px;
    font-size: 50px;
    background-color: var(--about-me-skill-item-bg);
    border-radius: 20%;
  }
}

.first-row {
  margin-top: 20px;
}

.second-row {
  margin-top: 20px;
}

.second-row .marquee-content {
  animation: marquee-right 50s linear infinite;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
