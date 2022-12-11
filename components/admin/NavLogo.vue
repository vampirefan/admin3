<template>
  <el-link class="logo text-lg cursor-text" :underline="false" type="success">
    <el-image class="w-8" src="/image/admin3-logo.png" fit="cover" />
    <span>Admin3 管理后台</span>
  </el-link>
</template>

<style scoped>
.logo {
  z-index: 1002;
  width: var(--admin-sidebar-width);
  height: var(--admin-navbar-height);
  background-color: var(--admin-sidebar-bg-color);
  border-right: solid 1px var(--el-menu-border-color);
  box-sizing: border-box;
}
</style>
