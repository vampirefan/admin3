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
  const menus = ref<any[]>([])
  const taggedMenus = ref(useLocalStorage('tagged-menus', [{
    path: '/admin/welcome',
    meta: {
      icon: 'i-ep-menu',
      title: '首页',
      affix: true,
    },
  }]))

  async function generateMenus() {
    // 向后端请求路由数据
    const { data: routersResponse } = await $fetch('/api/routers', { method: 'get' })
    menus.value = constantRoutes.concat(routersResponse)
  }

  function addMenuTag(menuTag: any) {
    taggedMenus.value.push(menuTag)
  }
  function removeMenuTag(menuTag: any) {
    const menuIndex = taggedMenus.value.findIndex(menu => menu.path === menuTag.path)
    /* 首页不能删除 */
    if (menuIndex > 0)
      taggedMenus.value.splice(menuIndex, 1)
    /* 返回前一个 MenuTag */
    return taggedMenus.value[menuIndex - 1]
  }
  function removeAllTaggedMenus() {
    taggedMenus.value.splice(1, taggedMenus.value.length - 1)
    return taggedMenus.value[0]
  }
  return { menus, taggedMenus, generateMenus, addMenuTag, removeMenuTag, removeAllTaggedMenus }
})
