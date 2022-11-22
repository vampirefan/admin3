// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  css: [
    'element-plus/dist/index.css'
  ],
  content: {
    documentDriven: true
  },
  colorMode: {
    classSuffix: ''
  }
})
