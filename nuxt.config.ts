// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    keepalive: true,
  },

  runtimeConfig: {
    public: {
      iconifyProvider: 'https://api.iconify.design',
    },
  },

  nitro: {
    devStorage: {
      db: {
        driver: 'fs',
        base: 'server/db',
      },
    },
  },

  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '@/assets/css/main.css',
  ],

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

  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },

  /* Fix unocss sourcemap warning */
  sourcemap: {
    server: true,
    client: false,
  },

})
