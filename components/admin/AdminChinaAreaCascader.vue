<script setup lang="ts">
import level from '@province-city-china/level'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const options = useTreeMap(level, (data: any) => {
  return {
    value: data.code,
    label: data.name,
  }
})
</script>

<template>
  <ClientOnly>
    <el-cascader v-model="value" :options="options" v-bind="$attrs" />
  </ClientOnly>
</template>
