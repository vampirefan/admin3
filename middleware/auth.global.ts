import { storeToRefs } from 'pinia'

const whiteList = ['/', '/doc/*']

function pathToRegExp(path: string) {
  const pattern = path.replaceAll('/', '\/').replaceAll('*', '.*')
  return new RegExp(`^${pattern}$`)
}

export default defineNuxtRouteMiddleware((to) => {
  /* Hack: 关闭对非 /doc 的页面中 content 模块因为 documentDriven 而发起的 query 请求 */
  if (to.path.startsWith('/doc'))
    to.meta.documentDriven = true
  else to.meta.documentDriven = false

  const userStore = useUserStore()
  const { authToken } = storeToRefs(userStore)
  if (authToken.value) {
    const permissionStore = usePermissionStore()
    if (permissionStore.menus.length === 0)
      permissionStore.generateMenus()

    const { menus, taggedMenus, currentMenu } = storeToRefs(permissionStore)
    const tagged = taggedMenus.value.find(menu => menu.path === to.path)
    if (tagged)
      currentMenu.value = tagged
    const menuItem = useTreeFind(menus.value, (menu: any) => menu.path === to.matched[0].path)
    if (!tagged && menuItem) {
      const menuTag = JSON.parse(JSON.stringify(menuItem))
      menuTag.path = to.path
      permissionStore.addMenuTag(menuTag)
    }
  }

  /** 路径不在白名单内，重定向至登陆页面 */
  else if (!whiteList.some(path => pathToRegExp(path).test(to.path))) {
    return navigateTo('/')
  }
})
