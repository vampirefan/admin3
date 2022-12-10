import { skipHydrate } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const appConfig = useAppConfig()
  const config = ref(useLocalStorage('app-config', appConfig))

  function initConfig() {
    setSidebarDark(config.value.sidebarDark)
  }

  function setSidebarDark(dark: boolean) {
    config.value.sidebarDark = dark
    if (dark) {
      useCssVar('--admin-sidebar-bg-color').value = '#22272e'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#18222c'
      useCssVar('--admin-sidebar-text-color').value = '#e5eaf3'
    }
    else {
      useCssVar('--admin-sidebar-bg-color').value = 'transparent'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#ecf5ff'
      useCssVar('--admin-sidebar-text-color').value = '#2c3e50'
    }
  }

  return { config: skipHydrate(config), initConfig, setSidebarDark }
})
