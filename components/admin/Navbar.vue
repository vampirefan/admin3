<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)
</script>

<template>
  <ClientOnly>
    <el-menu class="navbar pr-4" mode="horizontal" :ellipsis="false">
      <el-link :underline="false" @click="ElMessage('呀，被发现了！折叠菜单还没做...')">
        <Icon name="i-ep-fold" class="mx-2 text-lg" />
      </el-link>
      <AdminNavBreadcrumb class="mx-2" />
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
  z-index: 20;
  top: 0;
  left: var(--admin-sidebar-width);
  right: 0;
  height: var(--admin-navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--el-menu-border-color);
  display: flex;
  align-items: center;
}
</style>
