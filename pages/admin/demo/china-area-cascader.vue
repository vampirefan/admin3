<script setup lang="ts">
import level from '@province-city-china/level'
definePageMeta({ layout: 'admin' })
const options = useTreeMap(level, (data: any) => {
  return {
    value: data.code,
    label: data.name,
  }
})
const value = ref()
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-cascader v-model="value" class="w-1/4" :options="options" />
    </AdminContainer>
  </NuxtLayout>
</template>
