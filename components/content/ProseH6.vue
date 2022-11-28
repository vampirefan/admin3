<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h6?.icon && prose.headings?.icon)
const icon = computed(() => prose.h6?.icon || prose.headings?.icon)
</script>

<template>
  <h6 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h6>
</template>

<style scoped>
h6 {
  display: block;
  font-size: var(--prose-h6-font-size);
  font-weight: var(--prose-h6-font-weight);
  line-height: var(--prose-h6-line-height);
  margin: var(--prose-h6-margin)
}

h6 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h6-icon-size);
  margin-left: 8px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h6-icon-size)
}

h6:hover :deep(.icon) {
  opacity: 1
}
</style>
