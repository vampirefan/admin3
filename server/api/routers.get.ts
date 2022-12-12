const routers = [
  {
    name: 'demo', /** 路由名称（唯一） */
    path: '/admin/demo', /** 路由地址（必填） */
    meta: {
      title: '演示demo', /** 菜单标题 */
      icon: 'i-carbon-tool-box', /** 菜单图标（iconify 使用 'i-'，svg 使用 'svg-'） */
    },
    children: [{
      name: 'demo-elementplus',
      path: '/admin/demo/elementplus',
      meta: {
        title: 'Element 组件',
        icon: 'i-ep-element-plus',
        showParent: true,
        noCache: true,
      },
    }, {
      name: 'demo-icon',
      path: '/admin/demo/icon',
      meta: {
        title: 'Iconify 在线图标',
        icon: 'i-carbon-face-satisfied',
        showParent: true,
        noCache: true,
      },
    }],
  },
]

/** 路由接口 */
export default defineEventHandler(async () => {
  /** mock routers api response */
  return {
    success: true,
    data: routers,
  }
  // return http.request<UserResult>('get', '/routers', { data })
})

