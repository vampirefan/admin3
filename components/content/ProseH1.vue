<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h1?.icon && prose.headings?.icon)
const icon = computed(() => prose.headings?.icon)
</script>

<template>
  <h1 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h1>
</template>

<style scoped>
h1 {
  display: block;
  font-size: var(--prose-h1-font-size);
  font-weight: var(--prose-h1-font-weight);
  letter-spacing: var(--prose-h1-letter-spacing);
  line-height: var(--prose-h1-line-height);
  margin: var(--prose-h1-margin)
}

h1 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h1-icon-size);
  margin-left: 12px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h1-icon-size)
}

h1:hover :deep(.icon) {
  opacity: 1
}
</style>
