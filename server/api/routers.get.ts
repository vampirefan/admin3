const routers = [
  {
    path: '/admin/welcome', /** 路由地址（必填） */
    meta: {
      icon: 'i-ep-menu',
      title: '首页',
    },
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

