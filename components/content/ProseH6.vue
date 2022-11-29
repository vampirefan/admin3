<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h6 :id="id">
    <NuxtLink :href="`#${id}`" class="header-anchor">
      #
    </NuxtLink>
    <slot />
  </h6>
</template>
