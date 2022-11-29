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

