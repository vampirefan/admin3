import Icon from '~~/components/Icon.vue'
import IconifyOnline from '~~/components/IconifyOnline.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Icon', Icon)
  nuxtApp.vueApp.component('IconifyOnline', IconifyOnline)
})
