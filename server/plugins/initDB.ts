import { initData } from '@/server/db/init-data'
export default defineNitroPlugin(() => {
  const storage = useStorage()
  if (!storage.hasItem('db:routers')) {
    for (const data of Object.entries(initData))
      storage.setItem(`db:${data[0]}`, data[1])
  }
  // eslint-disable-next-line no-console
  console.log('database ready')
})
