/** 模拟刷新token接口 */
export default defineMockEventHandler(async () => {
  // mock login api response
  return {
    accessToken: 'mocked-access-token', // 模拟访问 token
    refreshToken: 'mockedRefreshedToken.adminRefresh', // 模拟刷新 token
    maxAge: 60, // 过期时间, 单位: 秒, 默认 1 分钟过期，
  }
})
