/**
 * /api/login 的后端返回：
 */
export interface loginResponse {
  // 用户名
  username: string
  // 权限角色
  roles: Array<string>
  // 访问接口使用的 token
  accessToken: string
  // accessToken 的过期时长
  maxAge: number
  // 用于调用刷新 accessToken 的接口时所需的 token
  refreshToken: string
}

/** TODO: for http result dto */
// export interface httpResult<T> {
//   success: boolean
//   data: T
// }

/** 登录 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const storage = useStorage()
  const user = (await storage.getItem('db:users')).find((user: any) => user.username === 'mock')
  user.username = body?.username
  // mock login api response
  return {
    success: true,
    data: user,
  }
  // return http.request<UserResult>('post', '/login', { data })
})

