<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h4 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h4>
</template>

