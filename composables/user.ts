// import { acceptHMRUpdate } from 'pinia'
import { removeToken, setToken } from '~~/utils/auth'
// const router = useRouter()

export interface userType {
  // 用户名
  username?: string
  // 页面级别权限
  roles?: Array<string>
}

export const useUserStore = defineStore('user', () => {
  const user = useSessionStorage('user-info', { username: 'manager', roles: ['admin'] })

  /** 存储用户名 */
  function setUsername(username: string) {
    user.value.username = username
  }
  /** 存储角色 */
  function serRoles(roles: Array<string>) {
    user.value.roles = roles
  }
  /** 登入 */
  async function loginByUsername(data: any) {
    const { data: result } = await $fetch('/api/login', { method: 'post', body: data })
    if (result)
      setToken(result)

    // console.log(result)
    return result
  }

  /** 前端登出（不调用接口） */
  function logOut() {
    user.value.username = ''
    user.value.roles = []
    removeToken()
    // router.push('/login')
    // useMultiTagsStoreHook().handleTags('equal', [...routerArrays])
    // resetRouter()
  }
  /** 刷新`token` */
  async function handRefreshToken(data: any) {
    const result = await $fetch('/api/refreshToken', { method: 'post', body: data })
    if (result)
      setToken(result.data)
    // console.log(result)
    return result
  }
  return { user, setUsername, serRoles, loginByUsername, logOut, handRefreshToken }
})

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
