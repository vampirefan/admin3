<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()
const permissionStore = usePermissionStore()

const colorStyle = computed(() => {
  return {
    '--el-text-color-regular': 'var(--admin-sidebar-text-color)',
  }
})

const { menus } = storeToRefs(permissionStore)
const levelList = computed(() => {
  const matched = useTreeFindPath(menus.value, (item: any) => item.path === route.path)
  return matched
})

function routeExists(path: string) {
  return useRouter().options.routes.find(item => item.path === path)
}
</script>

<template>
  <el-breadcrumb separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :style="colorStyle">
        <el-link v-if="routeExists(item.path)" :underline="false" @click.prevent="navigateTo(item.path)">
          {{ item.meta.title }}
        </el-link>
        <span v-else class="vertical-mid">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
