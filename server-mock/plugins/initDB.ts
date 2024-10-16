import * as init_data from '@/utils/fixtures'

export default defineNitroPlugin(async () => {
  const storage = useStorage()
  for (const data of Object.entries(init_data)) {
    const dbData = await storage.getItem(`db:${data[0]}.json`)
    if (!dbData)
      await storage.setItem(`db:${data[0]}.json`, data[1])
  }

  // eslint-disable-next-line no-console
  console.log('Mocked Database is ready.')
})
