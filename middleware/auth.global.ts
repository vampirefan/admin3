import { storeToRefs } from 'pinia'

const whiteList = ['/', '/doc/*']

function pathToRegExp(path: string) {
  const pattern = path.replaceAll('/', '\/').replaceAll('*', '.*')
  return new RegExp(`^${pattern}$`)
}

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  const authToken = userStore.authToken
  if (authToken) {
    const permissionStore = usePermissionStore()
    const { menus, taggedMenus } = storeToRefs(permissionStore)
    if (permissionStore.menus.length === 0)
      permissionStore.generateMenus()
    const tagged = taggedMenus.value.find(menu => menu.path === to.path)
    if (!tagged) {
      const menuItem = useTreeFind(menus.value, (menu: any) => menu.path === to.path)
      if (menuItem)
        permissionStore.addMenuTag(menuItem)
    }
  }

  /** 路径不在白名单内，重定向至登陆页面 */
  else if (!whiteList.some(path => pathToRegExp(path).test(to.path))) {
    return navigateTo('/')
  }
})
