<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import MenuItem from './MenuItem.vue'

const permissionStore = usePermissionStore()
const { menus } = storeToRefs(permissionStore)
</script>

<template>
  <MenuItem v-for="(item, index) in menus" :key="item.path + index" :item="item" />
</template>
