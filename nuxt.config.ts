// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '@/assets/css/content.css',
  ],
  content: {
    documentDriven: {
      layoutFallbacks: ['content'],
    },
  },
})
