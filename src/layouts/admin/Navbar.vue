<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import Config from './Config.vue'
import NavbarMenus from './NavbarMenus.vue'
import NavBreadcrumb from './NavBreadcrumb.vue'

const userStore = useUserStore()
const configStore = useConfigStore()
const { userInfo } = storeToRefs(userStore)
const { config } = storeToRefs(configStore)

function toggleSidebarCollapse() {
  const collapse = config.value.sidebarCollapse
  configStore.setSidebarCollapse(!collapse)
}

const menuStyle = computed(() => {
  return {
    '--el-menu-bg-color': 'var(--admin-sidebar-bg-color)',
    '--el-menu-text-color': 'var(--admin-sidebar-text-color)',
    '--el-menu-hover-bg-color': 'var(--admin-sidebar-hover-bg-color)',
  }
})

const route = useRoute()
const permissionStore = usePermissionStore()
const { currentMenu } = storeToRefs(permissionStore)
const defaultActive = computed(() => {
  return currentMenu.value?.activePath
    ? currentMenu.value.activePath
    : currentMenu.value?.path || route.fullPath
})
</script>

<template>
  <el-menu
    router class="navbar pr-4" :style="menuStyle" mode="horizontal" :ellipsis="false"
    :default-active="defaultActive"
  >
    <el-link class="navbar-text mx-6 text-lg" :underline="false" @click="toggleSidebarCollapse()">
      <Icon v-if="config.sidebarCollapse" name="i-ep-expand" class="text-xl" />
      <Icon v-else name="i-ep-fold" class="text-xl" />
    </el-link>

    <NavBreadcrumb v-if="config.layout === 'default' && config.navBreadcrumb" class="mx-2" />
    <NavbarMenus v-if="config.layout === 'mix'" />

    <div class="flex-grow" />

    <el-tooltip content="布局设置">
      <Config class="mx-2" />
    </el-tooltip>

    <el-tooltip content="前台首页">
      <el-link class="mx2" :underline="false" @click="navigateTo('/')">
        <Icon name="i-twemoji-house-with-garden" class="text-xl" />
      </el-link>
    </el-tooltip>

    <el-tooltip content="查看源码">
      <el-link class="navbar-text mx2" :underline="false" :href="sourceUrl" target="_blank">
        <Icon :name="sourceUrl.includes('github') ? 'i-carbon-logo-github' : 'i-logos-gitlab'" class="text-xl" />
      </el-link>
    </el-tooltip>

    <span class="mx">你好！{{ userInfo.username }}</span>
    <el-tooltip content="登出">
      <el-link class="navbar-text mx" :underline="false" @click="userStore.logOut()">
        <Icon name="i-carbon-logout" class="text-xl" />
      </el-link>
    </el-tooltip>
  </el-menu>
</template>

<style scoped>
.navbar {
  position: fixed;
  /* z-index: 2001; */
  top: 0;
  left: var(--admin-sidebar-width);
  right: 0;
  height: var(--admin-navbar-height);
  border-bottom: none;
  display: flex;
  align-items: center;
  background-color: var(--admin-navbar-bg-color);
  color: var(--admin-sidebar-text-color);
  transition: all var(--t-transform);
}

.navbar-text {
  color: var(--admin-sidebar-text-color);
}

:deep(.el-menu-item:hover),
:deep(.el-menu-item.is-active),
:deep(.el-menu-item:not(.is-disabled):hover) {
  border: unset;
  font-weight: bold !important;
  color: var(--admin-color-800) !important;
  background-color: var(--admin-sidebar-hover-bg-color) !important;
}

:deep(.el-sub-menu:hover),
:deep(.el-sub-menu.is-active),
:deep(.el-sub-menu.is-opened) {
  color: var(--admin-color-800);
  background-color: var(--admin-color-50);
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: var(--admin-sidebar-text-color);
  font-weight: bold;
  font-size: large;
  /* letter-spacing: 0.2rem; */
}

:deep(.el-sub-menu.is-active .el-sub-menu__title),
:deep(.el-sub-menu.is-opened .el-sub-menu__title) {
  color: var(--admin-color-800);
  background-color: var(--admin-sidebar-hover-bg-color);
  border: unset;
  /* border: 2px solid var(--admin-sidebar-hover-bg-color); */
}
</style>
