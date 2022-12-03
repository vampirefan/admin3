import { acceptHMRUpdate } from 'pinia'
// const router = useRouter()

/**
 * 无感刷新 token
 * refreshToken 的过期时间（比如30天）应大于 accessToken 的过期时间（比如2小时）
 * 在 cookie（过期自动销毁）里存放: { auth-token: { accessToken , maxAge } }
 * 在 sessionStorage（浏览器关闭自动销毁）里存放：{ user-info: { username, roles, refreshToken, maxAge } }
 */

export const useUserStore = defineStore('user', () => {
  // state
  const authToken = useCookie('auth-token', { maxAge: 0 })
  const userInfo = useSessionStorage('user-info', { username: '', roles: [] as Array<string>, refreshToken: '', maxAge: 0 })

  // actions
  function removeToken() {
    authToken.value = null
    userInfo.value = null
  }

  /** 登入 */
  async function loginByUsername(data: any) {
    const { data: loginResponse } = await $fetch('/api/login', { method: 'post', body: data })
    if (loginResponse) {
      const { username, roles, accessToken, maxAge, refreshToken } = loginResponse
      authToken.value = JSON.stringify({ accessToken, maxAge })
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
      authToken.value = JSON.stringify({ accessToken, maxAge })
      userInfo.value.refreshToken = refreshToken
      userInfo.value.maxAge = maxAge
    }
    // console.log(result)
    return refreshTokenResponse
  }
  return { authToken, userInfo, loginByUsername, logOut, handRefreshToken }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
