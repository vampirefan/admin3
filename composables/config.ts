import { skipHydrate } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const appConfig = useAppConfig()
  const config = ref(useLocalStorage('app-config', appConfig))

  function initConfig() {
    setThemeDark(config.value.themeDark ?? appConfig.themeDark)
    setSidebarDark(config.value.sidebarDark ?? appConfig.sidebarDark)
    setSidebarWidth(config.value.sidebarWidth ?? appConfig.sidebarWidth)
    setSidebarCollapse(config.value.sidebarCollapse ?? appConfig.sidebarCollapse)
    setNavBreadcrumb(config.value.navBreadcrumb ?? appConfig.navBreadcrumb)
    setTagbar(config.value.tagbar ?? appConfig.tagbar)
    setTransitionType(config.value.transitionType ?? appConfig.transitionType)
  }
  function resetConfig() {
    config.value = { ...appConfig }
    initConfig()
  }

  function setThemeDark(dark: boolean) {
    useDark().value = dark
    config.value.themeDark = dark
  }

  function setSidebarDark(dark: boolean) {
    if (dark) {
      useCssVar('--admin-sidebar-bg-color').value = '#22272e'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#343435'
      useCssVar('--admin-sidebar-text-color').value = '#e5eaf3'
    }
    else {
      useCssVar('--admin-sidebar-bg-color').value = '#ffffff'
      useCssVar('--admin-sidebar-hover-bg-color').value = '#ecf5ff'
      useCssVar('--admin-sidebar-text-color').value = '#2c3e50'
    }
    config.value.sidebarDark = dark
  }

  function setSidebarWidth(width: number) {
    useCssVar('--admin-sidebar-width').value = `${width}px`
    config.value.sidebarWidth = width
  }

  function setSidebarCollapse(collapse: boolean) {
    if (collapse)
      useCssVar('--admin-sidebar-width').value = useCssVar('--admin-sidebar-collapse-width').value
    else
      useCssVar('--admin-sidebar-width').value = `${config.value.sidebarWidth}px`
    config.value.sidebarCollapse = collapse
  }

  function setNavBreadcrumb(navBreadcrumb: boolean) {
    config.value.navBreadcrumb = navBreadcrumb
  }

  function setTagbar(tagbar: boolean) {
    if (tagbar)
      useCssVar('--admin-tagbar-height').value = '2.5rem'
    else
      useCssVar('--admin-tagbar-height').value = '0rem'
    config.value.tagbar = tagbar
  }

  function setTransitionType(transitionType: string) {
    config.value.transitionType = transitionType
  }

  return {
    config: skipHydrate(config),
    initConfig,
    resetConfig,
    setThemeDark,
    setSidebarDark,
    setSidebarWidth,
    setSidebarCollapse,
    setNavBreadcrumb,
    setTagbar,
    setTransitionType,
  }
})
