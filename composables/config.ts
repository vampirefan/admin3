import { skipHydrate } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const appConfig = useAppConfig()
  const config = ref(useLocalStorage('app-config', appConfig))

  function initConfig() {
    setThemeDark(config.value.themeDark || appConfig.themeDark)
    setSidebarDark(config.value.sidebarDark || appConfig.sidebarDark)
    setSidebarWidth(config.value.sidebarWidth || appConfig.sidebarWidth)
  }
  function resetConfig() {
    config.value = { ...appConfig }
    initConfig()
  }

  function setThemeDark(dark: boolean) {
    config.value.themeDark = dark
    useDark().value = dark
  }

  function setSidebarDark(dark: boolean) {
    config.value.sidebarDark = dark
    if (dark) {
      useCssVar('--admin-sidebar-bg-color').value = '#22272e'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#343435'
      useCssVar('--admin-sidebar-text-color').value = '#e5eaf3'
    }
    else {
      useCssVar('--admin-sidebar-bg-color').value = 'transparent'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#ecf5ff'
      useCssVar('--admin-sidebar-text-color').value = '#2c3e50'
    }
  }

  function setSidebarWidth(width: number) {
    config.value.sidebarWidth = width
    useCssVar('--admin-sidebar-width').value = `${width}px`
  }

  return { config: skipHydrate(config), initConfig, resetConfig, setThemeDark, setSidebarDark, setSidebarWidth }
})
