// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // 使用 ssr 则删掉这一行
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
