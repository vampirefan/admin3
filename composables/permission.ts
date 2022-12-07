export const constantRoutes: any[] = [
  {
    path: '/admin',
    name: 'home',
    redirect: '/admin/welcome',
    meta: {
      icon: 'i-ep-menu',
      title: '首页',
    },
    children: [
      {
        path: '/admin/welcome',
        name: 'welcome',
        meta: {
          icon: 'i-ep-menu',
          title: '首页',
        },
      },
    ],
  },
]

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<any[]>([])

  async function generateRoutes() {
    // 向后端请求路由数据
    const { data: routersResponse } = await $fetch('/api/routers', { method: 'get' })
    routes.value = constantRoutes.concat(routersResponse)
  }
  return { routes, generateRoutes }
})
