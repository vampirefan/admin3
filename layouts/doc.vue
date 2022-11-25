<script setup lang="ts">

</script>

<template>
  <main>
    <DocHeader />
    <DocAside />
    <div class="max-w-4xl px-4 py-10 m-auto pl-32 pt-16">
      <main class="prose prose-gray dark:prose-invert max-w-none">
        <slot />
      </main>
    </div>
  </main>
</template>

<style lang="css">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>
