<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)
const router = useRouter()
</script>

<template>
  <ClientOnly>
    <el-menu class="navbar pr-8" mode="horizontal" :ellipsis="false">
      <el-link class="logo text-lg" :underline="false" type="success" @click="router.push('/admin')">
        <el-image class="w-8" src="/image/admin3-logo.png" fit="cover" />
        <span>Admin3 管理后台</span>
      </el-link>
      <el-link :underline="false" @click="ElMessage('呀，被发现了！菜单折叠还没做...')">
        <Icon name="i-ep-fold" class="pl-4 text-lg" />
      </el-link>
      <AdminNavBreadcrumb class="pl-4" />
      <div class="flex-grow" />
      <el-link class="ml-4" :underline="false" @click="router.push('/')">
        <Icon name="i-twemoji-house-with-garden" />
      </el-link>
      <CommonDarkToggle class="mx-4" />
      <span>你好！{{ userInfo.username }}</span>
    </el-menu>
  </ClientOnly>
</template>

<style scoped>
.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: var(--admin-navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--el-menu-border-color);
  display: flex;
  align-items: center;
}

.logo {
  width: var(--admin-sidebar-width)
}
</style>
