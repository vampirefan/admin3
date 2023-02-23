/* 可以在这里定义默认的首页 */
import { defineStore } from 'pinia'

export const constantRoutes: any[] = [{
  path: '/admin/Welcome',
  meta: {
    icon: 'i-ep-menu',
    title: '首页',
    affix: true,
  },
}]
export const usePermissionStore = defineStore('permission', () => {
  const menus = ref<any[]>([])
  /* 如果想帮用户保存 taggedMenus ，可以将其写入 localStorage */
  const taggedMenus = ref(useLocalStorage('tagged-menus', constantRoutes))
  const currentMenu = ref(constantRoutes[0])

  async function generateMenus() {
    // 向后端请求路由数据
    const routersResponse = await $api('/routers')
    menus.value = constantRoutes.concat(routersResponse)
  }

  function addMenuTag(menuTag: any) {
    taggedMenus.value.push(menuTag)
    currentMenu.value = menuTag
  }

  function removeMenuTag(menuTag: any) {
    const menuIndex = taggedMenus.value.findIndex(menu => menu.path === menuTag.path)
    /* 至少保留一个 MenuTag */
    if (taggedMenus.value.length > 1)
      taggedMenus.value.splice(menuIndex, 1)

    /* 如果不是第一个 tag, 则返回前一个 MenuTag；否则返回第一个 MenuTag */
    if (menuIndex > 0) {
      currentMenu.value = taggedMenus.value[menuIndex - 1]
      return currentMenu.value
    }
    else {
      currentMenu.value = taggedMenus.value[0]
      return currentMenu.value
    }
  }

  function removeAllTaggedMenus() {
    if (taggedMenus.value.length > 1)
      taggedMenus.value.splice(1, taggedMenus.value.length - 1)
    currentMenu.value = taggedMenus.value[0]
    return currentMenu.value
  }

  return {
    menus,
    taggedMenus,
    currentMenu,
    generateMenus,
    addMenuTag,
    removeMenuTag,
    removeAllTaggedMenus,
  }
})
