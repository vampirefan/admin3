/* 模拟登录 */
export default defineMockEventHandler(async (event) => {
  const body = await readBody(event)
  const storage = useStorage()
  const mockedUsers = await storage.getItem('db:users_data.json') as any[]
  const user = mockedUsers[0]
  /* 模拟用户登录的返回 */
  return {
    ...user,
    username: body?.username || '模拟用户',
  }
})
