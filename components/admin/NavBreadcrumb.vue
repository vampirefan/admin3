<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const permissionStore = usePermissionStore()
const { routes } = storeToRefs(permissionStore)
const levelList = computed(() => {
  const matched = useTreeFindPath(routes.value, (item: any) => item.path === route.path)
  const indexRoute = { path: '/admin/welcome', meta: { title: '首页' } }
  /* 判断是否为首页 */
  if (route.path === indexRoute.path)
    return [indexRoute]
  else
    return [indexRoute].concat(matched)
})

function routerExists(path: string) {
  return router.options.routes.find(item => item.path === path)
}
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

