import Aura from '@primevue/themes/aura'
import { primeLocaleCN } from './src/assets/primeLocaleCN'

const baseUrl = '/'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  srcDir: 'src/',

  /* 模拟后端 */
  serverDir: 'server-mock/',

  nitro: {
    devStorage: {
      db: {
        driver: 'fs',
        base: 'server-mock/db',
      },
    },
  },

  runtimeConfig: {
    public: {
      iconifyProvider: 'https://api.iconify.design',
      apiBase: '/mock-api', // 'http://localhost:8001/mock-api'
    },
  },

  app: {
    baseURL: baseUrl,
  },

  /* 禁用载入的 nuxt loading 动画 */
  spaLoadingTemplate: false,

  experimental: {
    /* 加快首次启动速度 */
    watcher: 'chokidar',
    /* 生成静态文件 */
    payloadExtraction: false,
  },

  css: [
    '@/assets/css/main.css',
  ],

  modules: [
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
  ],

  elementPlus: {
    defaultLocale: 'zh-cn',
    globalConfig: {
      size: 'default',
    },
  },

  primevue: {
    options: {
      locale: primeLocaleCN,
      theme: {
        preset: Aura,
      },
    },
    composables: {
      include: '*',
    },
  },

  compatibilityDate: '2024-09-30',
})
