import { usePermissionStore } from '~~/composables/permission'

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
    if (permissionStore.routes.length === 0)
      permissionStore.generateRoutes()
  }
  /** 路径不在白名单内，重定向至登陆页面 */
  else if (!whiteList.some(path => pathToRegExp(path).test(to.path))) {
    return navigateTo('/')
  }
})
