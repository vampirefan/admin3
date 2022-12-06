<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h3 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h3>
</template>

<style scoped>
h3 {
  font-size: 1.35rem;
}

h3:focus-visible {
  outline: none;
}

h3:hover .header-anchor {
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
