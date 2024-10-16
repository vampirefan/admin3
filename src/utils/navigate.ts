import { storeToRefs } from 'pinia'

export function closeAndNavigateTo(to: any) {
  const permissionStore = usePermissionStore()
  const { currentMenu } = storeToRefs(permissionStore)
  permissionStore.removeMenuTag(currentMenu.value)
  return navigateTo(to)
}

export function closeAndNavigateBack() {
  const permissionStore = usePermissionStore()
  const { currentMenu } = storeToRefs(permissionStore)
  permissionStore.removeMenuTag(currentMenu.value)
  const router = useRouter()
  return router.back()
}

export function openUrl(url: any) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'temp-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('temp-link')!)
}
