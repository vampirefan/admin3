// From https://github.com/xiaoxian521/vue-pure-admin

export interface DataInfo<T> {
  /** token */
  accessToken: string
  /** `accessToken`的过期时间（时间戳） */
  expires: T
  /** 用于调用刷新accessToken的接口时所需的token */
  refreshToken: string
  /** 用户名 */
  username?: string
  /** 当前登陆用户的角色 */
  roles?: Array<string>
}

export const sessionKey = 'user-info'
export const TokenKey = 'authorized-token'

/** 获取`token` */
export function getToken(): DataInfo<number> {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  const tokenCookie = useCookie(TokenKey)
  return tokenCookie.value
    ? JSON.parse(tokenCookie.value)
    : useSessionStorage(sessionKey, '').value
}

/**
 * @description 设置`token`以及一些必要信息并采用无感刷新`token`方案
 * 无感刷新：后端返回`accessToken`（访问接口使用的`token`）、`refreshToken`（用于调用刷新`accessToken`的接口时所需的`token`，`refreshToken`的过期时间（比如30天）应大于`accessToken`的过期时间（比如2小时））、`expires`（`accessToken`的过期时间）
 * 将`accessToken`、`expires`这两条信息放在key值为authorized-token的cookie里（过期自动销毁）
 * 将`username`、`roles`、`refreshToken`、`expires`这四条信息放在key值为`user-info`的sessionStorage里（浏览器关闭自动销毁）
 */
export function setToken(data: DataInfo<Date>) {
  let expires = 0
  const { accessToken, refreshToken } = data
  expires = new Date(data.expires).getTime()
  const cookieString = JSON.stringify({ accessToken, expires })
  if (expires > 0) {
    const tokenCookie = useCookie(TokenKey, {
      expires: new Date(data.expires),
    })
    tokenCookie.value = cookieString
  }
  else {
    const tokenCookie = useCookie(TokenKey)
    tokenCookie.value = cookieString
  }
  const userStore = useUserStore()
  const sessionData = useSessionStorage(sessionKey, {
    refreshToken,
    expires,
    username: '',
    roles: [] as string[],
  })
  if (data.username && data.roles) {
    const { username, roles } = data
    userStore.setUsername(username)
    userStore.serRoles(roles)
    sessionData.value.username = username
    sessionData.value.roles = roles
  }
  else {
    userStore.setUsername(sessionData.value.username)
    userStore.serRoles(sessionData.value.roles)
  }
}

/** 删除`token`以及key值为`user-info`的session信息 */
export function removeToken() {
  const tokenCookie = useCookie(TokenKey)
  tokenCookie.value = null
  sessionStorage.removeItem(sessionKey)
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return `Bearer ${token}`
}
