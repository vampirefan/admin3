<script setup lang="ts">
const props = defineProps({
  name: String,
  filled: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const icon: Record<string, any> = ref('')
try {
  const iconsImport = import.meta.glob('assets/svg/**/**.svg', { as: 'raw', eager: false })
  const rawIcon = await iconsImport[`/assets/svg/${props.name}.svg`]()
  icon.value = rawIcon
}
catch {
  console.error(`[svg-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`)
}
</script>

<template>
  <span class="svg-icon" :class="{ 'svg-icon--fill': !filled }" v-html="icon" />
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
