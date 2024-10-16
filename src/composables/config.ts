import { updatePreset, updateSurfacePalette } from '@primevue/themes'
import { useTitle } from '@vueuse/core'
import { type Action, ElMessageBox } from 'element-plus'
import { defineStore, skipHydrate } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const appConfig = useAppConfig()
  const config = ref<any>(useLocalStorage('admin3-app-config', appConfig))

  function initConfig() {
    config.value = { ...appConfig, ...config.value }
    setTitle(config.value.title)
    setVersion(appConfig.version)
    setLayout(config.value.layout)
    setSidebarWidth(config.value.sidebarWidth)
    setSidebarCollapse(config.value.sidebarCollapse)
    setNavBreadcrumb(config.value.navBreadcrumb)
    setTagbar(config.value.tagbar)
    setTransitionType(config.value.transitionType)
    setPrimePreset(config.value.primePreset)
    setPrimaryColor(config.value.primaryColor)
    setSurfaceColor(config.value.surfaceColor)
  }
  function resetConfig() {
    config.value = { ...appConfig }
    initConfig()
  }

  function setTitle(title: string | undefined) {
    useTitle().value = title
    config.value.title = title
  }

  function setVersion(version: string) {
    /* 版本号更新判断可以通过比对config.value.version(缓存中的版本号) 和 app.config.version(应用部署的版本号) 来实现 */
    if (config.value.version !== version) {
      ElMessageBox.alert(`当前版本：${config.value.version}，发现新版本：${version}，请点击确定进行更新！`, '网站更新', {
        callback: (action: Action) => {
          if (action === 'confirm') {
            config.value.version = version
            location.reload()
          }
        },
      })
    }
  }

  function setLayout(layout: string) {
    config.value.layout = layout
  }

  function setSidebarWidth(width: number | any) {
    useCssVar('--admin-sidebar-width').value = `${width}px`
    config.value.sidebarWidth = width
  }

  function setSidebarCollapse(collapse: boolean | any) {
    if (collapse)
      useCssVar('--admin-sidebar-width').value = useCssVar('--admin-sidebar-collapse-width').value
    else
      useCssVar('--admin-sidebar-width').value = `${config.value.sidebarWidth}px`
    config.value.sidebarCollapse = collapse
  }

  function setNavBreadcrumb(navBreadcrumb: boolean | any) {
    config.value.navBreadcrumb = navBreadcrumb
  }

  function setTagbar(tagbar: boolean | any) {
    if (tagbar)
      useCssVar('--admin-tagbar-height').value = '2.5rem'
    else
      useCssVar('--admin-tagbar-height').value = '0rem'
    config.value.tagbar = tagbar
  }

  function setTransitionType(transitionType: string) {
    config.value.transitionType = transitionType
  }

  function setPrimePreset(preset: string) {
    config.value.primePreset = preset
    changePrimePreset(preset)
  }
  function setPrimaryColor(color: string) {
    config.value.primaryColor = color
    updatePreset(getPresetExt.value)
  }
  function setSurfaceColor(color: string) {
    config.value.surfaceColor = color
    const palette = primeVueSurfaceOptions.find(item => item.name === color)?.palette
    if (palette)
      updateSurfacePalette(palette)
  }

  return {
    config: skipHydrate(config),
    initConfig,
    resetConfig,
    setTitle,
    setVersion,
    setLayout,
    setSidebarWidth,
    setSidebarCollapse,
    setNavBreadcrumb,
    setTagbar,
    setTransitionType,
    setPrimePreset,
    setPrimaryColor,
    setSurfaceColor,
  }
})
