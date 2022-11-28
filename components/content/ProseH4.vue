<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h4?.icon && prose.headings?.icon)
const icon = computed(() => prose.h4?.icon || prose.headings?.icon)
</script>

<template>
  <h4 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h4>
</template>

<style scoped>
h4 {
  display: block;
  font-size: var(--prose-h4-font-size);
  font-weight: var(--prose-h4-font-weight);
  letter-spacing: var(--prose-h4-letter-spacing);
  line-height: var(--prose-h4-line-height);
  margin: var(--prose-h4-margin)
}

h4 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h4-icon-size);
  margin-left: 10px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h4-icon-size)
}

h4:hover :deep(.icon) {
  opacity: 1
}
</style>
