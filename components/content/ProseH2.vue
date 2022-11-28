<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h2?.icon && prose.headings?.icon)
const icon = computed(() => prose.h2?.icon || prose.headings?.icon)
</script>

<template>
  <h2 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h2>
</template>

<style scoped>
h2 {
  display: block;
  font-size: var(--prose-h2-font-size);
  font-weight: var(--prose-h2-font-weight);
  letter-spacing: var(--prose-h2-letter-spacing);
  line-height: var(--prose-h2-line-height);
  margin: var(--prose-h2-margin)
}

h2 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h2-icon-size);
  margin-left: 12px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h2-icon-size)
}

h2:hover :deep(.icon) {
  opacity: 1
}
</style>
