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
  // mock login api response
  return {
    success: true,
    data: {
      username: body ? body.username as string : 'manager', // 模拟登录用户
      roles: ['admin'], // 模拟角色
      accessToken: 'mocked-access-token', // 模拟访问 token
      maxAge: 60, // 过期时间, 单位: 秒, 默认 1 分钟过期，
      refreshToken: 'mockedRefreshedToken.adminRefresh', // 模拟刷新 token

    },
  }
  // return http.request<UserResult>('post', '/login', { data })
})

