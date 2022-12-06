<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
})
</script>

<template>
  <div :class="[`highlight-${language}`]" class="w-full text-gray-50 relative my-4 overflow-hidden rounded-lg">
    <span v-if="filename || language"
      class="absolute top-1 right-1 z-0 rounded-lg py-1 pr-2 font-mono text-xs leading-none tracking-tight text-gray-400 opacity-100">
      {{ filename || language }}
    </span>

    <slot />
  </div>
</template>

<style scoped>
:deep(pre) {
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding: 1rem;
  line-height: 1.65;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  background-color: rgba(17, 24, 39, 1);
}

:deep(code) {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 0.85rem;
}

:deep(line) {
  display: inline-table;
  min-height: 1rem;
}

:deep(.line.highlight) {
  background-color: #343b44;
}
</style>
