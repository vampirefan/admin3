<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h1 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h1>
</template>
