<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import NavBreadcrumb from './NavBreadcrumb.vue'
import Config from './Config.vue'

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
        <AdminIcon v-if="config.sidebarCollapse" name="i-ep-expand" />
        <AdminIcon v-else name="i-ep-fold" />
      </el-link>
      <NavBreadcrumb v-if="config.navBreadcrumb" class="mx-2" />
      <div class="flex-grow" />
      <Config class="mx-2" />
      <el-link class="mx-2" :underline="false" @click="navigateTo('/')">
        <AdminIcon name="i-twemoji-house-with-garden" />
      </el-link>
      <admin-dark-toggle class="mx-2" />
      <span class="mx-2">你好！{{ userInfo.username }}</span>
      <el-link class="mx-2" :underline="false" @click="userStore.logOut()">
        <AdminIcon name="i-carbon-logout" />
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
  transition: all var(--t-transform);
}
</style>
