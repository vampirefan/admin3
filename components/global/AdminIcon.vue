<script setup lang="ts">
const props = defineProps({
  /**
   * 图标名称
   * - 使用 'svg-' 引入 Svg 图标
   * - 使用 'i-' 引入 iconify 图标
   * */
  name: {
    type: String,
    default: 'i-ep-element-plus',
  },
  filled: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const svgIcon: Record<string, any> = ref('')
if (props.name.startsWith('svg-')) {
  const svgName = props.name.substring(4)
  try {
    const iconsImport = import.meta.glob('assets/svg/**/**.svg', { as: 'raw', eager: false })
    const rawIcon = await iconsImport[`/assets/svg/${svgName}.svg`]()
    svgIcon.value = rawIcon
  }
  catch {
    console.error(`[svg-icons] Icon '${svgName}' doesn't exist in 'assets/icons'`)
  }
}
</script>

<template>
  <el-icon>
    <div v-if="name.startsWith('i-')" class="inline-block" :class="name" />
    <span v-else class="svg-icon" :class="{ 'svg-icon--fill': !filled }" v-html="svgIcon" />
  </el-icon>
</template>

<style>
.svg-icon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}

.svg-icon.svg-icon--fill,
.svg-icon.svg-icon--fill * {
  fill: currentColor !important;
}
</style>
