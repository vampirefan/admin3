<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { navigation } = useContent()
const navTree = navigation.value.find((nav: any) => nav._path === '/doc').children
const activeMenu = computed(() => {
  return route.path
})
function routerToLink(menuItem: any) {
  router.push(menuItem.index)
}
</script>

<template>
  <ClientOnly>
    <el-menu class="navbar px-12" mode="horizontal" :ellipsis="false" :default-active="activeMenu">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
        <img src="/image/admin3-logo.png" alt="Admin3" height="30" class="mr-2">
        Admin 3
      </el-link>
      <div class="flex-grow" />
      <el-sub-menu v-for="link of navTree" :key="link._path" :index="link._path">
        <template #title>
          <i :class="`${link.icon} pr`" />{{ link.title }}
        </template>
        <el-menu-item v-for="sublink of link.children" :key="sublink._path" :index="sublink._path"
          @click="routerToLink">
          {{ sublink.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-link class="ml-4" :underline="false" @click="routerToLink({ index: '/' })">
        <i class="i-twemoji-house-with-garden" />
      </el-link>
      <CommonDarkToggle class="ml-4" />
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
