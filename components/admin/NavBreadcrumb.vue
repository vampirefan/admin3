<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const levelList = ref<any[]>([])

const permissionStore = usePermissionStore()
const routes = ref<any[]>(permissionStore.routes)
permissionStore.$subscribe((mutation, state) => {
  routes.value = state.routes
  getBreadcrumb()
})

function getBreadcrumb() {
  const matched = useTreeFindPath(routes.value, (item: any) => item.path === route.path)
  const dashboardRoute = [{ path: '/admin', meta: { title: '首页' } }]
  // 判断是否为首页
  if (route.path === '/admin/welcome')
    levelList.value = dashboardRoute
  else
    levelList.value = dashboardRoute.concat(matched)
}

function routerExists(path: string) {
  return router.options.routes.find(item => item.path === path)
}

getBreadcrumb()
</script>

<template>
  <el-breadcrumb separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <el-link v-if="routerExists(item.path)" :underline="false" @click.prevent="navigateTo(item.path)">
          {{ item.meta.title }}
        </el-link>
        <span v-else class="vertical-mid">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

