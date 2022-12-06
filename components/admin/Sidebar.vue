<script lang="ts" setup>
const route = useRoute()
const isCollapse = ref(false)
</script>

<template>
  <div class="sidebar">
    <!-- <Logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar>
      <el-menu router unique-opened mode="vertical" :collapse="isCollapse" :default-active="route.path">
        <el-menu-item index="/admin/welcome">
          <el-icon><i class="i-ep-menu" /></el-icon>
          <template #title>
            首页
          </template>
        </el-menu-item>
        <el-sub-menu index="one">
          <template #title>
            <el-icon>
              <i class="i-ep-location" />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="one-1">
            item one
          </el-menu-item>
          <el-menu-item index="one-2">
            item two
          </el-menu-item>
          <el-sub-menu index="one-4">
            <template #title>
              <span>item four</span>
            </template>
            <el-menu-item index="one-4-1">
              item one
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="three" disabled>
          <el-icon>
            <i class="i-ep-document" />
          </el-icon>
          <template #title>
            Navigator Three
          </template>
        </el-menu-item>
        <el-menu-item v-for="index in 15" :key="index" :index="index">
          <el-icon>
            <i class="i-ep-setting" />
          </el-icon>
          <template #title>
            test {{ index }}
          </template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.sidebar {
  overflow: hidden;
  width: var(--admin-sidebar-width);
  position: fixed;
  z-index: 1001;
  top: var(--admin-navbar-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

.el-menu {
  min-height: calc(100vh - var(--admin-navbar-height));
}
</style>
