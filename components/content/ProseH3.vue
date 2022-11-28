<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h3?.icon && prose.headings?.icon)
const icon = computed(() => prose.h3?.icon || prose.headings?.icon)
</script>

<template>
  <h3 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h3>
</template>

<style scoped>
h3 {
  display: block;
  font-size: var(--prose-h3-font-size);
  font-weight: var(--prose-h3-font-weight);
  letter-spacing: var(--prose-h3-letter-spacing);
  line-height: var(--prose-h3-line-height);
  margin: var(--prose-h3-margin)
}

h3 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h3-icon-size);
  margin-left: 12px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h3-icon-size)
}

h3:hover :deep(.icon) {
  opacity: 1
}
</style>
