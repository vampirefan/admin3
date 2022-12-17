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
  const authToken = userStore.authToken
  if (authToken) {
    const permissionStore = usePermissionStore()
    if (permissionStore.menus.length === 0)
      permissionStore.generateMenus()

    const { menus, taggedMenus } = storeToRefs(permissionStore)
    const tagged = taggedMenus.value.find(menu => menu.path === to.path)
    const menuItem = useTreeFind(menus.value, (menu: any) => menu.path === to.path)
    if (!tagged && menuItem)
      permissionStore.addMenuTag(menuItem)
  }

  /** 路径不在白名单内，重定向至登陆页面 */
  else if (!whiteList.some(path => pathToRegExp(path).test(to.path))) {
    return navigateTo('/')
  }
})
