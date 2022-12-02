import SvgIcon from '@/components/SvgIcon.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('SvgIcon', SvgIcon)
})
