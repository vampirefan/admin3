import { VueUiXy } from 'vue-data-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueUiXy', VueUiXy)
})
