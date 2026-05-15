<template xmlns="">
  <div class="container">
    <div
        ref="containerRef"
        :class="['background-container', className]"
        :style="style"
        aria-label="PixelBlast interactive background"
    />
    <div class="head-social">

      <a href="https://stackoverflow.com/users/21395974/rand777" target="_blank"
         class="head-social-btn">
        <icon name="mdi:stackoverflow"/>
      </a>
      <a href="https://github.com/rand777gg/rand777-plume-blog" target="_blank"
         class="head-social-btn">
        <icon name="mdi:github"/>
      </a>
      <router-link to="/blog/" class="head-social-avatar">
        <img
            src="https://avatars.githubusercontent.com/u/91131723?s=400&u=cc52bb8ae67e4a4706570ac84399dc7519cfa749&v=4"
            alt="avatar">
      </router-link>
      <a href="mailto:hi@rand777.com" target="_blank" class="head-social-btn">
        <icon class="head-social-btn" name="ic:baseline-email"></icon>
      </a>
      <a href="/more/academy/" class="head-social-btn">
        <icon class="head-social-btn" name="solar:square-academic-cap-outline"></icon>
      </a>
    </div>

    <div class="about-me" v-show="showAboutMe">
      <div class="card-content grid-row-3-2">
        <AboutMeName/>
        <AboutMeText>
          <template #motto>
            <slot name="motto">
              <p class="about-me-card-title-normal">🐧の 哲学 </p>
              <p class="about-me-card-text-big about-me-card-text-color"> 摇摇晃晃，</p>
              <p class="about-me-card-text-big about-me-card-text-color" align="right"
                 style="margin-bottom: 12px;"> 也能到达目的地。</p>
            </slot>
          </template>
        </AboutMeText>
      </div>

      <div class="card-content grid-row-3-2">
        <AboutMeSkill/>
        <AboutMeLife/>
      </div>

      <div class="card-content grid-row-1-1">
        <AboutMeText>
          <template #motto>
            <slot name="motto">
              <p class="about-me-card-title-normal">GitHub</p>
              <p class="about-me-card-text-big"> 提交记录 </p>
              <img
                  :src="snakeImage"
                  alt="github contribution grid snake animation"
                  style="visibility: visible; max-width: 100%;"
              />
            </slot>
          </template>
        </AboutMeText>
        <AboutMeCharacter/>
      </div>

      <div class="card-content grid-row-1">
        <AboutMeFriendLink/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

.head-social {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  align-items: center;
  position: relative;
  z-index: 1;
}

.about-me {
  position: relative;
  z-index: 1;
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
  @media screen and (max-width: 770px) {
    width: 94%;
  }
}

.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

canvas {
  z-index: -1;
  position: fixed;
  top: -1px;
  left: -1px;
  pointer-events: none;
  overflow: hidden;
}

.head-social {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  align-items: center;

  .head-social-avatar {
    margin: 20px;
    border-radius: 30%;
    overflow: hidden;
    width: 60px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .head-social-btn {
    cursor: pointer;
    font-size: 30px;
    margin: 0;
    transition: transform 0.2s, color 0.3s;
    color: var(--vp-c-text-2);

    &:hover {
      color: var(--vp-c-brand-1);
      transform: scale(1.2);
    }
  }
}


&:hover {
  background: var(--about-card-hover-bg);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--main-border-shadow);
}


.about-me {
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
  @media screen and (max-width: 770px) {
    width: 94%;
  }
}

.card-content {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
}

.grid-row-3-2 {
  grid-template-columns: 3fr 2fr;
}

.grid-row-1-1 {
  grid-template-columns: 1fr 1fr;
}

.grid-row-1 {
  grid-template-columns: 1fr;
}

@keyframes gradient-animation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

</style>

<script setup lang="ts">
import AboutMeName from "./AboutMeName.vue";
import AboutMeText from "./AboutMeText.vue";
import AboutMeSkill from "./AboutMeSkill.vue";
import AboutMeCharacter from "./AboutMeCharacter.vue";
import AboutMeLife from "./AboutMeLife.vue";
import AboutMeFriendLink from "./AboutMeFriendLink.vue";
import {Effect, EffectComposer, EffectPass, RenderPass} from 'postprocessing';
import * as THREE from 'three';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  useTemplateRef,
  watch,
  type CSSProperties
} from 'vue';
import {useDarkMode} from 'vuepress-theme-plume/composables'

const isDark = useDarkMode()
const snakeImage = computed(() => {
  return isDark.value
      ? 'https://v6.gh-proxy.org/https://raw.githubusercontent.com/rand777gg/rand777gg/output/github-contribution-grid-snake-dark.svg'
      : 'https://v6.gh-proxy.org/https://raw.githubusercontent.com/rand777gg/rand777gg/output/github-contribution-grid-snake.svg'
})

export type PixelBlastVariant = 'square' | 'circle' | 'triangle' | 'diamond';

type PixelBlastProps = {
  variant?: PixelBlastVariant;
  pixelSize?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  antialias?: boolean;
  patternScale?: number;
  patternDensity?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleIntensityScale?: number;
  rippleThickness?: number;
  rippleSpeed?: number;
  liquidWobbleSpeed?: number;
  autoPauseOffscreen?: boolean;
  speed?: number;
  transparent?: boolean;
  edgeFade?: number;
  noiseAmount?: number;
};

const createTouchTexture = () => {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D context not available');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const trail: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    force: number;
    age: number;
  }[] = [];
  let last: { x: number; y: number } | null = null;
  const maxAge = 64;
  let radius = 0.1 * size;
  const speed = 1 / maxAge;
  const clear = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  const drawPoint = (p: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    force: number;
    age: number
  }) => {
    const pos = {x: p.x * size, y: (1 - p.y) * size};
    let intensity = 1;
    const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);
    const easeOutQuad = (t: number) => -t * (t - 2);
    if (p.age < maxAge * 0.3) intensity = easeOutSine(p.age / (maxAge * 0.3));
    else intensity = easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
    intensity *= p.force;
    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const offset = size * 5;
    ctx.shadowOffsetX = offset;
    ctx.shadowOffsetY = offset;
    ctx.shadowBlur = radius;
    ctx.shadowColor = `rgba(${color},${0.22 * intensity})`;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,1)';
    ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    ctx.fill();
  };
  const addTouch = (norm: { x: number; y: number }) => {
    let force = 0;
    let vx = 0;
    let vy = 0;
    if (last) {
      const dx = norm.x - last.x;
      const dy = norm.y - last.y;
      if (dx === 0 && dy === 0) return;
      const dd = dx * dx + dy * dy;
      const d = Math.sqrt(dd);
      vx = dx / (d || 1);
      vy = dy / (d || 1);
      force = Math.min(dd * 10000, 1);
    }
    last = {x: norm.x, y: norm.y};
    trail.push({x: norm.x, y: norm.y, age: 0, force, vx, vy});
  };
  const update = () => {
    clear();
    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i];
      const f = point.force * speed * (1 - point.age / maxAge);
      point.x += point.vx * f;
      point.y += point.vy * f;
      point.age++;
      if (point.age > maxAge) trail.splice(i, 1);
    }
    for (let i = 0; i < trail.length; i++) drawPoint(trail[i]);
    texture.needsUpdate = true;
  };
  return {
    canvas,
    texture,
    addTouch,
    update,
    set radiusScale(v: number) {
      radius = 0.1 * size * v;
    },
    get radiusScale() {
      return radius / (0.1 * size);
    },
    size
  };
};

const createLiquidEffect = (texture: THREE.Texture, opts?: {
  strength?: number;
  freq?: number
}) => {
  const fragment = `
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;
  return new Effect('LiquidEffect', fragment, {
    uniforms: new Map<string, THREE.Uniform>([
      ['uTexture', new THREE.Uniform(texture)],
      ['uStrength', new THREE.Uniform(opts?.strength ?? 0.025)],
      ['uTime', new THREE.Uniform(0)],
      ['uFreq', new THREE.Uniform(opts?.freq ?? 4.5)]
    ])
  });
};

const SHAPE_MAP: Record<PixelBlastVariant, number> = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3
};

const VERTEX_SRC = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){return fract(sin(n)*43758.5453);}

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`;

const MAX_CLICKS = 10;

const props = withDefaults(defineProps<PixelBlastProps>(), {
  variant: 'square',
  pixelSize: 4,
  color: '#47E054',
  antialias: true,
  patternScale: 2,
  patternDensity: 1,
  liquid: false,
  liquidStrength: 0.1,
  liquidRadius: 1,
  pixelSizeJitter: 0,
  enableRipples: true,
  rippleIntensityScale: 1,
  rippleThickness: 0.1,
  rippleSpeed: 0.3,
  liquidWobbleSpeed: 4.5,
  autoPauseOffscreen: true,
  speed: 0.5,
  transparent: false,
  edgeFade: 0.25,
  noiseAmount: 0
});

const containerRef = useTemplateRef<HTMLDivElement>('containerRef');
const visibilityRef = ref({visible: true});
const speedRef = ref(props.speed);

const threeRef = ref<{
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  material: THREE.ShaderMaterial;
  timer: THREE.Timer;
  clickIx: number;
  uniforms: {
    uResolution: { value: THREE.Vector2 };
    uTime: { value: number };
    uColor: { value: THREE.Color };
    uClickPos: { value: THREE.Vector2[] };
    uClickTimes: { value: Float32Array };
    uShapeType: { value: number };
    uPixelSize: { value: number };
    uScale: { value: number };
    uDensity: { value: number };
    uPixelJitter: { value: number };
    uEnableRipples: { value: number };
    uRippleSpeed: { value: number };
    uRippleThickness: { value: number };
    uRippleIntensity: { value: number };
    uEdgeFade: { value: number };
  };
  resizeObserver?: ResizeObserver;
  raf?: number;
  quad?: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  timeOffset?: number;
  composer?: EffectComposer;
  touch?: ReturnType<typeof createTouchTexture>;
  liquidEffect?: Effect;
} | null>(null);

interface PixelBlastConfig {
  antialias: boolean;
  liquid: boolean;
  noiseAmount: number;
}

const prevConfigRef = ref<PixelBlastConfig | null>(null);

let cleanup: (() => void) | null = null;

const setup = () => {
  const container = containerRef.value;
  if (!container) return;
  speedRef.value = props.speed;
  const needsReinitKeys: (keyof PixelBlastConfig)[] = ['antialias', 'liquid', 'noiseAmount'];
  const cfg: PixelBlastConfig = {
    antialias: props.antialias,
    liquid: props.liquid,
    noiseAmount: props.noiseAmount
  };
  let mustReinit = false;
  if (!threeRef.value) mustReinit = true;
  else if (prevConfigRef.value) {
    for (const k of needsReinitKeys)
      if (prevConfigRef.value[k] !== cfg[k]) {
        mustReinit = true;
        break;
      }
  }
  if (mustReinit) {
    if (threeRef.value) {
      const t = threeRef.value;
      t.resizeObserver?.disconnect();
      cancelAnimationFrame(t.raf!);
      t.quad?.geometry.dispose();
      t.material.dispose();
      t.composer?.dispose();
      t.renderer.dispose();
      if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
      threeRef.value = null;
    }
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2', {antialias: props.antialias, alpha: true});
    if (!gl) return;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      context: gl as WebGL2RenderingContext,
      antialias: props.antialias,
      alpha: true
    });
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);
    const uniforms = {
      uResolution: {value: new THREE.Vector2(0, 0)},
      uTime: {value: 0},
      uColor: {value: new THREE.Color(props.color)},
      uClickPos: {
        value: Array.from({length: MAX_CLICKS}, () => new THREE.Vector2(-1, -1))
      },
      uClickTimes: {value: new Float32Array(MAX_CLICKS)},
      uShapeType: {value: SHAPE_MAP[props.variant] ?? 0},
      uPixelSize: {value: props.pixelSize * renderer.getPixelRatio()},
      uScale: {value: props.patternScale},
      uDensity: {value: props.patternDensity},
      uPixelJitter: {value: props.pixelSizeJitter},
      uEnableRipples: {value: props.enableRipples ? 1 : 0},
      uRippleSpeed: {value: props.rippleSpeed},
      uRippleThickness: {value: props.rippleThickness},
      uRippleIntensity: {value: props.rippleIntensityScale},
      uEdgeFade: {value: props.edgeFade}
    };
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SRC,
      fragmentShader: FRAGMENT_SRC,
      uniforms,
      transparent: true,
      glslVersion: THREE.GLSL3,
      depthTest: false,
      depthWrite: false
    });
    const quadGeom = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(quadGeom, material);
    scene.add(quad);
    const timer = new THREE.Timer();
    const setSize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
      if (threeRef.value?.composer)
        threeRef.value.composer.setSize(renderer.domElement.width, renderer.domElement.height);
      uniforms.uPixelSize.value = props.pixelSize * renderer.getPixelRatio();
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    const randomFloat = () => {
      if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
        const u32 = new Uint32Array(1);
        window.crypto.getRandomValues(u32);
        return u32[0] / 0xffffffff;
      }
      return Math.random();
    };
    const timeOffset = randomFloat() * 1000;
    let composer: EffectComposer | undefined;
    let touch: ReturnType<typeof createTouchTexture> | undefined;
    let liquidEffect: Effect | undefined;
    if (props.liquid) {
      touch = createTouchTexture();
      touch.radiusScale = props.liquidRadius;
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      liquidEffect = createLiquidEffect(touch.texture, {
        strength: props.liquidStrength,
        freq: props.liquidWobbleSpeed
      });
      const effectPass = new EffectPass(camera, liquidEffect);
      effectPass.renderToScreen = true;
      composer.addPass(renderPass);
      composer.addPass(effectPass);
    }
    if (props.noiseAmount > 0) {
      if (!composer) {
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
      }
      const noiseEffect = new Effect(
          'NoiseEffect',
          `uniform float uTime; uniform float uAmount; float hash(vec2 p){return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} `,
          {
            uniforms: new Map<string, THREE.Uniform>([
              ['uTime', new THREE.Uniform(0)],
              ['uAmount', new THREE.Uniform(props.noiseAmount)]
            ])
          }
      );
      const noisePass = new EffectPass(camera, noiseEffect);
      noisePass.renderToScreen = true;
      if (composer && composer.passes.length > 0)
        composer.passes.forEach(p => {
          // EffectPass has renderToScreen; ensure we turn it off before adding a new final pass
          if ('renderToScreen' in p) (p as { renderToScreen?: boolean }).renderToScreen = false;
        });
      composer.addPass(noisePass);
    }
    if (composer) composer.setSize(renderer.domElement.width, renderer.domElement.height);
    const mapToPixels = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const scaleX = renderer.domElement.width / rect.width;
      const scaleY = renderer.domElement.height / rect.height;
      const fx = (e.clientX - rect.left) * scaleX;
      const fy = (rect.height - (e.clientY - rect.top)) * scaleY;
      return {
        fx,
        fy,
        w: renderer.domElement.width,
        h: renderer.domElement.height
      };
    };
    const onPointerDown = (e: PointerEvent) => {
      const {fx, fy} = mapToPixels(e);
      const ix = threeRef.value?.clickIx ?? 0;
      uniforms.uClickPos.value[ix].set(fx, fy);
      uniforms.uClickTimes.value[ix] = uniforms.uTime.value;
      if (threeRef.value) threeRef.value.clickIx = (ix + 1) % MAX_CLICKS;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!touch) return;
      const {fx, fy, w, h} = mapToPixels(e);
      touch.addTouch({x: fx / w, y: fy / h});
    };
    renderer.domElement.addEventListener('pointerdown', onPointerDown, {
      passive: true
    });
    renderer.domElement.addEventListener('pointermove', onPointerMove, {
      passive: true
    });
    let raf = 0;
    const animate = () => {
      if (props.autoPauseOffscreen && !visibilityRef.value.visible) {
        raf = requestAnimationFrame(animate);
        return;
      }
      uniforms.uTime.value = timeOffset + timer.getElapsed() * speedRef.value;
      if (liquidEffect) liquidEffect.uniforms.get('uTime')!.value = uniforms.uTime.value;
      if (composer) {
        if (touch) touch.update();
        composer.passes.forEach(p => {
          if (p instanceof EffectPass) {
            const effs = (p as unknown as { effects?: Effect[] }).effects;
            effs?.forEach(eff => {
              const u = eff.uniforms.get('uTime');
              if (u) u.value = uniforms.uTime.value;
            });
          }
        });
        composer.render();
      } else renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    threeRef.value = {
      renderer,
      scene,
      camera,
      material,
      timer,
      clickIx: 0,
      uniforms,
      resizeObserver: ro,
      raf,
      quad,
      timeOffset,
      composer,
      touch,
      liquidEffect
    };
  } else {
    const t = threeRef.value!;
    t.uniforms.uShapeType.value = SHAPE_MAP[props.variant] ?? 0;
    t.uniforms.uPixelSize.value = props.pixelSize * t.renderer.getPixelRatio();
    t.uniforms.uColor.value.set(props.color);
    t.uniforms.uScale.value = props.patternScale;
    t.uniforms.uDensity.value = props.patternDensity;
    t.uniforms.uPixelJitter.value = props.pixelSizeJitter;
    t.uniforms.uEnableRipples.value = props.enableRipples ? 1 : 0;
    t.uniforms.uRippleIntensity.value = props.rippleIntensityScale;
    t.uniforms.uRippleThickness.value = props.rippleThickness;
    t.uniforms.uRippleSpeed.value = props.rippleSpeed;
    t.uniforms.uEdgeFade.value = props.edgeFade;
    if (props.transparent) t.renderer.setClearAlpha(0);
    else t.renderer.setClearColor(0x000000, 1);
    if (t.liquidEffect) {
      const uStrength = t.liquidEffect?.uniforms.get('uStrength');
      if (uStrength) uStrength.value = props.liquidStrength;
      const uFreq = t.liquidEffect?.uniforms.get('uFreq');
      if (uFreq) uFreq.value = props.liquidWobbleSpeed;
    }
    if (t.touch) t.touch.radiusScale = props.liquidRadius;
  }
  prevConfigRef.value = cfg;

  cleanup = () => {
    if (threeRef.value && mustReinit) return;
    if (!threeRef.value) return;
    const t = threeRef.value;
    t.resizeObserver?.disconnect();
    cancelAnimationFrame(t.raf!);
    t.quad?.geometry.dispose();
    t.material.dispose();
    t.composer?.dispose();
    t.renderer.dispose();
    if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
    threeRef.value = null;
  };
};

onMounted(() => {
  setup();
});

onBeforeUnmount(() => {
  cleanup?.();
});

watch(
    props,
    () => {
      cleanup?.();
      setup();
    },
    {deep: true}
);

interface Dot {
  x: number
  y: number
  originalX: number
  originalY: number
  opacity: number
  blinkSpeed: number
  direction: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const dotSize = 4
const spacing = 33
const dots = ref<Dot[]>([])
const mouseX = ref(-1)
const mouseY = ref(-1)
const mouseRadius = 80
let animationFrameId: number

const showAboutMe = ref(true)
const toggleAboutMe = () => {
  showAboutMe.value = !showAboutMe.value
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx.value = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('mouseleave', handleMouseLeave)
}

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const handleMouseLeave = () => {
  mouseX.value = -1
  mouseY.value = -1
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx.value) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  createDots()
}

const createDots = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  dots.value = []
  for (let x = spacing; x < canvas.width; x += spacing) {
    for (let y = spacing; y < canvas.height; y += spacing) {
      dots.value.push({
        x,
        y,
        originalX: x,
        originalY: y,
        opacity: Math.random(),
        blinkSpeed: Math.random() * 0.02 + 0.005,
        direction: Math.random() > 0.5 ? 1 : -1
      })
    }
  }
}

const drawDots = () => {
  const canvas = canvasRef.value
  const context = ctx.value
  if (!canvas || !context) return
  context.clearRect(0, 0, canvas.width, canvas.height)

  dots.value.forEach(dot => {
    dot.opacity += dot.blinkSpeed * dot.direction
    if (dot.opacity <= 0.1) {
      dot.opacity = 0.1
      dot.direction = 1
    } else if (dot.opacity >= 1) {
      dot.opacity = 1
      dot.direction = -1
    }

    if (mouseX.value >= 0 && mouseY.value >= 0) {
      const dx = mouseX.value - dot.originalX
      const dy = mouseY.value - dot.originalY
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouseRadius) {
        const spreadFactor = (mouseRadius - distance) / mouseRadius
        const spreadDistance = 40 * spreadFactor
        const angle = Math.atan2(dy, dx)
        const targetX = dot.originalX - Math.cos(angle) * spreadDistance
        const targetY = dot.originalY - Math.sin(angle) * spreadDistance
        dot.x += (targetX - dot.x) * 0.1
        dot.y += (targetY - dot.y) * 0.1
      } else {
        dot.x += (dot.originalX - dot.x) * 0.1
        dot.y += (dot.originalY - dot.y) * 0.1
      }
    } else {
      dot.x += (dot.originalX - dot.x) * 0.1
      dot.y += (dot.originalY - dot.y) * 0.1
    }

    context.fillStyle = `rgba(71, 224, 84, ${dot.opacity})`
    context.fillRect(dot.x - dotSize / 2, dot.y - dotSize / 2, dotSize, dotSize)
  })
}

const animate = () => {
  drawDots()
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  const canvas = canvasRef.value
  if (canvas) {
    canvas.removeEventListener('mouseleave', handleMouseLeave)
  }
  cancelAnimationFrame(animationFrameId)
})
</script>
