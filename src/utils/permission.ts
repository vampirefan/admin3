import { storeToRefs } from 'pinia'

export function checkPermission(permissions: string | string[]): boolean {
  const permissionStore = usePermissionStore()
  const { userPermissions } = storeToRefs(permissionStore)
  const permissionsToCheck = Array.isArray(permissions) ? permissions : [permissions]
  return permissionsToCheck.some(permission =>
    userPermissions.value.map(item => item.label).includes(permission),
  )
}

export function checkRole(roles: string | string[]): boolean {
  const permissionStore = usePermissionStore()
  const { userRoles } = storeToRefs(permissionStore)
  const rolesToCheck = Array.isArray(roles) ? roles : [roles]
  return rolesToCheck.some(role =>
    userRoles.value.map(item => item.label).includes(role),
  )
}
