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
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'one-dark-pro',
        default: 'github-light',
      },
      preload: ['js', 'ts', 'html', 'css', 'vue', 'diff'],
    },
  },
})
