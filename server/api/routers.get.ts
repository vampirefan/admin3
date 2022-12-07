const routers = [
  {
    name: 'demo', /** 路由名称（唯一） */
    path: '/admin/demo', /** 路由地址（必填） */
    meta: {
      icon: 'i-carbon-tool-box', /** 菜单图标（iconify 使用 'i-'，svg 使用 'svg-'） */
      title: '演示demo', /** 菜单标题 */
    },
    children: [{
      name: 'demo-icon',
      path: '/admin/demo/icon',
      meta: {
        icon: 'i-carbon-face-satisfied',
        title: '图标',
        showParent: true,
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

