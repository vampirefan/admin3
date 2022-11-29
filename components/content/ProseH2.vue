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
