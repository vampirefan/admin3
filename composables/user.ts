import { skipHydrate } from 'pinia'
import { useStorage } from '@vueuse/core'

/**
 * 无感刷新 token
 * refreshToken 的过期时间（比如30天）应大于 accessToken 的过期时间（比如2小时）
 * 在 cookie（过期自动销毁）里存放: { auth-token: accessToken }
 * 在 localStorage（浏览器关闭自动销毁）里存放：{ user-info: { username, roles, refreshToken, maxAge } }
 */

export const useUserStore = defineStore('user', () => {
  /** state */
  const authToken = ref(useCookie('auth-token', { maxAge: 2 * 60 * 60 })) // 2小时过期
  const userInfo = ref(useStorage('user-info', { username: '', roles: [] as Array<string>, refreshToken: '', maxAge: 60 }))

  /** actions */
  function removeToken() {
    authToken.value = null
    userInfo.value = null
  }

  /** 登入 */
  async function login(data: any) {
    const { data: loginResponse } = await $fetch('/api/login', { method: 'post', body: data })
    if (loginResponse) {
      const { username, roles, accessToken, maxAge, refreshToken } = loginResponse
      authToken.value = accessToken
      userInfo.value = { username, roles, refreshToken, maxAge }
    }
    return loginResponse
  }

  /** 前端登出（不调用接口） */
  async function logOut() {
    userInfo.value.username = ''
    userInfo.value.roles = []
    removeToken()
    // router.push('/login')
    // useMultiTagsStoreHook().handleTags('equal', [...routerArrays])
    // resetRouter()
  }
  /** 刷新 token  */
  async function handRefreshToken(data: any) {
    const { data: refreshTokenResponse } = await $fetch('/api/refreshToken', { method: 'post', body: data })
    if (refreshTokenResponse) {
      const { accessToken, maxAge, refreshToken } = refreshTokenResponse
      authToken.value = accessToken
      userInfo.value.refreshToken = refreshToken
      userInfo.value.maxAge = maxAge
    }
    // console.log(result)
    return refreshTokenResponse
  }
  /**
   * 为了让 userInfo 能先从客户端的 LocalStorage 中取值。使用 skipHydrate() 的辅助函数。
   * 详见：https://pinia.vuejs.org/zh/cookbook/composables.html#ssr
   */
  return { authToken, userInfo: skipHydrate(userInfo), login, logOut, handRefreshToken }
})

