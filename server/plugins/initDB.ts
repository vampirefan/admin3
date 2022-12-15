import { initData } from '@/server/db/init-data'
export default defineNitroPlugin(async () => {
  const storage = useStorage()
  for (const data of Object.entries(initData))
    await storage.setItem(`db:${data[0]}`, data[1])

  // eslint-disable-next-line no-console
  console.log('Database is ready.')
})
