export interface refreshTokenResponse {
  // 访问接口使用的 token
  accessToken: string
  // accessToken 的过期时长
  maxAge: number
  // 用于调用刷新 accessToken 的接口时所需的 token
  refreshToken: string
}

/** 刷新token */
export default defineEventHandler(async () => {
  // mock login api response
  return {
    success: true,
    data: {
      accessToken: 'mocked-access-token', // 模拟访问 token
      refreshToken: 'mockedRefreshedToken.adminRefresh', // 模拟刷新 token
      maxAge: 60, // 过期时间, 单位: 秒, 默认 1 分钟过期，
    },
  }
  // return http.request<RefreshTokenResult>('post', '/refreshToken', { data })
})
