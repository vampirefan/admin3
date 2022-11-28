<script setup lang="ts">
defineProps<{ id: string }>()

const { prose } = useAppConfig()
const hasIcon = computed(() => prose.h5?.icon && prose.headings?.icon)
const icon = computed(() => prose.h5?.icon || prose.headings?.icon)
</script>

<template>
  <h5 :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
      <i v-if="hasIcon" :class="`icon ${icon}`" />
    </NuxtLink>
  </h5>
</template>

<style scoped>
h5 {
  display: block;
  font-size: var(--prose-h5-font-size);
  font-weight: var(--prose-h5-font-weight);
  line-height: var(--prose-h5-line-height);
  margin: var(--prose-h5-margin)
}

h5 :deep(.icon) {
  display: inline-block;
  height: var(--prose-h5-icon-size);
  margin-left: 8px;
  opacity: 0;
  transition: opacity .1s;
  width: var(--prose-h5-icon-size)
}

h5:hover :deep(.icon) {
  opacity: 1
}
</style>
