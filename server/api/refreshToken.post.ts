export interface RefreshTokenResult {
  success: boolean
  data: {
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

/** 刷新token */
export default defineEventHandler(async () => {
  // mock login api response
  return {
    success: true,
    data: {
      accessToken,
      refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
      expires: new Date(new Date(new Date()).getTime() + expiresIn),
    },
  }
  // return http.request<RefreshTokenResult>('post', '/refreshToken', { data })
})
