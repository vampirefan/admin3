<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h5 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h5>
</template>

<style scoped>
h5 {
  font-size: 1.05rem;
}

h5:focus-visible {
  outline: none;
}

h5:hover .header-anchor {
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
