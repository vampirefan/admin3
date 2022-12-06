<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h2 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h2>
</template>

<style scoped>
h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--doc-border);
  transition: border-color var(--t-color);
}

h2:focus-visible {
  outline: none;
}

h2:hover .header-anchor {
  opacity: 1
}

.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 0;
  user-select: none;
}

.header-anchor:focus-visible {
  opacity: 1
}
</style>
