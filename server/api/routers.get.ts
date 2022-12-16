/** 路由接口 */
export default defineEventHandler(async () => {
  /** mock routers api response */
  const storage = useStorage()
  return {
    success: true,
    data: await storage.getItem('db:routers'),
  }
  // return http.request<UserResult>('get', '/routers', { data })
})
