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
