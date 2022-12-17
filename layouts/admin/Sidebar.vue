<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
const route = useRoute()
const permissionStore = usePermissionStore()
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
const { menus } = storeToRefs(permissionStore)
const defaultActive = ref(route.path)
/* Hack for KeepAlive: 重新刷新以选中菜单 */
onActivated(() => {
  defaultActive.value = route.path
})
onDeactivated(() => {
  defaultActive.value = ''
})
</script>

<template>
  <ClientOnly>
    <Logo />
    <div class="sidebar">
      <el-scrollbar>
        <el-menu :key="route.fullPath" class="sidebar-menu" router unique-opened mode="vertical"
          :collapse="config.sidebarCollapse" :collapse-transition="false" :default-active="defaultActive">
          <SidebarItem v-for="(item, index) in menus" :key="item.path + index" :item="item" />
        </el-menu>
      </el-scrollbar>
    </div>
  </ClientOnly>
</template>

<style>
.sidebar {
  overflow: hidden;
  width: var(--admin-sidebar-width);
  position: fixed;
  z-index: 21;
  top: var(--admin-navbar-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
  transition: all var(--t-transform);
}

.sidebar-menu {
  min-height: calc(100vh - var(--admin-navbar-height));
  background-color: var(--admin-sidebar-bg-color);
}

.sidebar .el-menu.sidebar-menu,
.sidebar .el-menu.el-menu--inline,
.el-menu--vertical.el-menu--popup-container .el-menu {
  background-color: var(--admin-sidebar-bg-color);
}

.sidebar .el-menu-item:not(.is-active),
.sidebar .el-sub-menu__title:not(.is-active),
.el-menu--vertical.el-menu--popup-container .el-menu-item:not(.is-active) {
  color: var(--admin-sidebar-text-color)
}

.sidebar .el-sub-menu.is-active>.el-sub-menu__title {
  color: var(--el-menu-active-color)
}

.sidebar .el-menu-item.is-active,
.el-menu--vertical.el-menu--popup-container .el-menu-item:hover,
.sidebar .el-menu-item:hover,
.sidebar .el-sub-menu__title:hover {
  background-color: var(--admin-sidebar-hover-bg-color);
}
</style>
