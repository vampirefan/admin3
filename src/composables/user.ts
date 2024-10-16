import { skipHydrate } from 'pinia'

/**
 * 无感刷新 token
 * refreshToken 的过期时间（比如30天）应大于 accessToken 的过期时间（比如2小时）
 * 在 cookie（过期自动销毁）里存放: { auth-token: accessToken }
 * 在 localStorage（浏览器关闭自动销毁）里存放：{ user-info: { username, roles, refreshToken, maxAge } }
 */
// const authTokenOption = { maxAge: 2 * 60 * 60 }
const userInfoInit = { username: '', roles: [] as Array<string>, refreshToken: '', maxAge: 60 }

export const useUserStore = defineStore('user', () => {
  /* state */
  const authToken = ref(useLocalStorage('admin3-auth-token', ''))
  const userInfo = ref(useLocalStorage('admin3-user-info', userInfoInit))

  /* actions */
  /* 登入 */
  async function login(loginData: any) {
    /* 利用模拟后端返回用户登录结果 */
    const loginResponse = await $api<any>('/login', { method: 'post', body: loginData })
    /* 前端直接模拟返回用户登录结果 */
    // const loginResponse = {
    //   ...users_data[0],
    //   username: loginData.username
    // }

    if (loginResponse) {
      const { username, roles, accessToken, maxAge, refreshToken } = loginResponse
      authToken.value = accessToken
      userInfo.value = { username, roles, refreshToken, maxAge }
    }
    return loginResponse
  }

  /* 前端登出（不调用接口） */
  async function logOut() {
    authToken.value = ''
    userInfo.value = { ...userInfoInit }
    navigateTo('/')
  }

  /* 刷新 token */
  async function handRefreshToken(refreshData: any) {
    const refreshTokenResponse: any = await $api('/refreshToken', { method: 'post', body: refreshData })
    if (refreshTokenResponse) {
      const { accessToken, maxAge, refreshToken } = refreshTokenResponse
      authToken.value = accessToken
      userInfo.value.refreshToken = refreshToken
      userInfo.value.maxAge = maxAge
    }
    return refreshTokenResponse
  }

  /**
   * 为了让 userInfo 能先从客户端的 LocalStorage 中取值。使用 skipHydrate() 的辅助函数。
   * 详见：https://pinia.vuejs.org/zh/cookbook/composables.html#ssr
   */
  return {
    authToken,
    userInfo: skipHydrate(userInfo),
    login,
    logOut,
    handRefreshToken,
  }
})
