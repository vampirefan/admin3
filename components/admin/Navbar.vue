<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const configStore = useConfigStore()
const { userInfo } = storeToRefs(userStore)
const { config } = storeToRefs(configStore)

function toggleSidebarCollapse() {
  const collapse = config.value.sidebarCollapse
  configStore.setSidebarCollapse(!collapse)
}
</script>

<template>
  <ClientOnly>
    <el-menu class="navbar pr-4" mode="horizontal" :ellipsis="false">
      <el-link class="mx-2 text-lg" :underline="false" @click="toggleSidebarCollapse()">
        <Icon v-if="config.sidebarCollapse" name="i-ep-expand" />
        <Icon v-else name="i-ep-fold" />
      </el-link>
      <AdminNavBreadcrumb v-if="config.navBreadcrumb" class="mx-2" />
      <div class="flex-grow" />
      <AdminConfig class="mx-2" />
      <el-link class="mx-2" :underline="false" @click="navigateTo('/')">
        <Icon name="i-twemoji-house-with-garden" />
      </el-link>
      <CommonDarkToggle class="mx-2" />
      <span class="mx-2">你好！{{ userInfo.username }}</span>
      <el-link class="mx-2" :underline="false" @click="userStore.logOut()">
        <Icon name="i-carbon-logout" />
      </el-link>
    </el-menu>
  </ClientOnly>
</template>

<style scoped>
.navbar {
  position: fixed;
  z-index: 2001;
  top: 0;
  left: var(--admin-sidebar-width);
  right: 0;
  height: var(--admin-navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--el-menu-border-color);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  align-items: center;
}
</style>
