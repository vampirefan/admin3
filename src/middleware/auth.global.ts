import { storeToRefs } from 'pinia'

const whiteList = ['/', '/Home*']

function pathToRegExp(path: string) {
  const pattern = path.replace(/\//g, '\/').replace(/\*/g, '.*')
  return new RegExp(`^${pattern}$`)
}

export default defineNuxtRouteMiddleware(async (to: any) => {

  const userStore = useUserStore()
  const { authToken, userInfo } = storeToRefs(userStore)
  if (authToken.value && userInfo.value.username) {
    const permissionStore = usePermissionStore()
    const { menus, taggedMenus, currentMenu } = storeToRefs(permissionStore)
    // if (menus.value.length === 0)
    await permissionStore.generateMenus()

    const tagged = taggedMenus.value.find(menu => menu.path === to.path)
    if (tagged)
      currentMenu.value = tagged
    if (to.matched.length > 0 && to.matched[0].path) {
      /* Hack: 去掉浏览器自动给 href 末尾添加的 '/' */
      if (to.path.endsWith('/') && to.fullPath.endsWith('/') && to.href.endsWith('/')) {
        to.path = to.path.slice(0, -1)
        to.fullPath = to.fullPath.slice(0, -1)
        to.href = to.href.slice(0, -1)
      }

      const menuItem = useTreeFind(menus.value, (menu: any) => to.matched[0].path.replace(/[()]/g, '') === menu.path)
      if (!tagged && menuItem)
        permissionStore.addMenuTag({ ...menuItem })
    }
  }

  /* 路径不在白名单内，重定向至登陆页面 */
  else if (!whiteList.some(path => pathToRegExp(path).test(to.path))) {
    return navigateTo('/')
  }
})
