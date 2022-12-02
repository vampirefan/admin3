export interface UserResult {
  success: boolean
  data: {
    /** 用户名 */
    username: string
    /** 当前登陆用户的角色 */
    roles: Array<string>
    /** `token` */
    accessToken: string
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date
  }
}

const accessToken = 'mocked-access-token'
/** 过期时间 单位：毫秒 默认 1分钟过期，方便演示 */
const expiresIn = 60000

/** 登录 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // mock login api response
  return {
    success: true,
    data: {
      username: body ? body.username as string : 'manager',
      // 这里模拟角色，根据自己需求修改
      roles: ['admin'],
      accessToken,
      // 这里模拟刷新token，根据自己需求修改
      refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
      expires: new Date(new Date(new Date()).getTime() + expiresIn),
    },
  }
  // return http.request<UserResult>('post', '/login', { data })
})

