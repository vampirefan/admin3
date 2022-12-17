<script setup lang="ts">
const route = useRoute()
const { navigation } = useContent()
const navTree = navigation.value.find((nav: any) => nav._path === '/doc').children
</script>

<template>
  <ClientOnly>
    <el-menu class="navbar px-12" mode="horizontal" :ellipsis="false" :default-active="route.path">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
        <img src="/image/admin3-logo.png" alt="Admin3" height="30" class="mr-2">
        Admin 3
      </el-link>
      <div class="flex-grow" />
      <el-sub-menu v-for="link of navTree" :key="link._path" :index="link._path">
        <template #title>
          <AdminIcon :name="link.icon" />{{ link.title }}
        </template>
        <el-menu-item v-for="sublink of link.children" :key="sublink._path" :index="sublink._path"
          @click="navigateTo(sublink._path)">
          {{ sublink.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-link class="ml-4 text-xl" :underline="false" @click="navigateTo('/')">
        <AdminIcon name="i-twemoji-house-with-garden" />
      </el-link>
      <AdminDarkToggle class="ml-4 text-xl" />
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
  height: var(--doc-navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--doc-border);
  background-color: var(--doc-bg-navbar);
  transition: background-color var(--t-color), border-color var(--t-color);
}
</style>
