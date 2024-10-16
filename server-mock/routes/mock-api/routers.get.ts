/* 路由接口 */
export default defineMockEventHandler(async () => {
  /* 模拟获取 routers 菜单 */
  const routersData = await useStorage().getItem('db:routers_data.json')

  /* 进行真实请求 */
  // const apiBase = useRuntimeConfig().public.apiBase
  // const routersData = await useFetch(apiBase + '/routers', { method: 'post' })

  return routersData
})
