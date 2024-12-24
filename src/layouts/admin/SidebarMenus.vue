<script setup lang="ts">
import { storeToRefs } from 'pinia'
import MenuItem from './MenuItem.vue'

const route = useRoute()
const permissionStore = usePermissionStore()
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
const { menus, currentMenu } = storeToRefs(permissionStore)

const defaultActive = computed(() => {
  return currentMenu.value?.activePath
    ? currentMenu.value.activePath
    : currentMenu.value?.path || route.fullPath
})

const menuStyle = computed(() => {
  return {
    '--el-menu-bg-color': 'var(--admin-sidebar-bg-color)',
    '--el-menu-text-color': 'var(--admin-sidebar-text-color)',
    '--el-menu-hover-bg-color': 'var(--admin-sidebar-hover-bg-color)',
  }
})

const menuTreeData = computed(() => {
  if (config.value.layout === 'mix') {
    const menuPath = useTreeFindPath(menus.value, (menu: any) => {
      return menu.path.includes(defaultActive.value)
    })
    if (menuPath.length > 0 && menuPath[0].children && menuPath[0].children.length > 0)
      return menuPath[0].children
    else return menuPath
  }
  else {
    return menus.value
  }
})
</script>

<template>
  <ScrollPanel class="h-full" :dt="{ bar: { background: 'var(--admin-color-300)' } }">
    <el-menu
      :style="menuStyle" :ellipsis="false" router unique-opened :collapse="config.sidebarCollapse"
      :collapse-transition="false" :default-active="defaultActive"
      :default-openeds="menuTreeData.map((menu: any) => menu.path)"
    >
      <MenuItem v-for="(item, index) in menuTreeData" :key="item.path + index" :item="item" />
    </el-menu>
  </ScrollPanel>
</template>

<style scoped>
:deep(.el-menu) {
  border-right: unset;
}

:deep(.el-menu-item) {
  border-bottom: 3px solid var(--admin-sidebar-bg-color);
}

:deep(.el-menu-item.is-active),
:deep(.el-menu--collapse .el-sub-menu.is-active) {
  font-weight: bold;
  color: var(--admin-sidebar-hover-text-color);
  background-color: var(--admin-sidebar-hover-bg-color);
}

:deep(.el-menu-item:hover) {
  color: var(--admin-sidebar-hover-text-color);
}

:deep(.el-sub-menu__title:hover) {
  color: var(--admin-sidebar-hover-text-color);
  background-color: var(--admin-sidebar-hover-bg-color);
}
</style>
