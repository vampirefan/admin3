// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    keepalive: true,
  },

  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: 'server/db',
      },
    },
  },

  /** full-Static mode payload extraction option:
   *  see: https://github.com/nuxt/framework/discussions/7691?sort=new */
  experimental: {
    payloadExtraction: false,
  },

  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
  ],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '@/assets/css/main.css',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
})
