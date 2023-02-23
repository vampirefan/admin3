import { ElMessage } from 'element-plus'
import type { SearchParameters } from 'ofetch'

interface ApiOptions {
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
  body?: RequestInit['body'] | Record<string, any>
  params?: SearchParameters
  query?: SearchParameters
  headers?: any[]
}

export const $api = <responseType>(url: string, opts?: ApiOptions) => {
  const target = `/api${url}`

  return $fetch<responseType>(target, {
    ...opts,
    async onRequest({ options }) {
      const userStore = useUserStore()
      if (userStore.authToken) {
        options.headers = {
          ...options.headers,
          token: userStore.authToken,
        }
      }
    },
    // async onRequestError({ error }) {
    //   console.log('request 出错啦,error信息是=========', error)
    // },
    async onResponse({ response }) {
      const { success, msg, data } = response._data
      if (success) {
        /* 将 返回数据中的 data 作为返回值 */
        response._data = data
      }
      else {
        ElMessage.error(msg)
        // console.log(data)
      }
    },
    // async onResponseError({ error }) {
    //   console.log('response 出错啦,error信息是=========', error)
    // },
  })
}
