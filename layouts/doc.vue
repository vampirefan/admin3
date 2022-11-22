<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-primary-800 sm:rounded">
    <main class="prose prose-gray dark:prose-invert max-w-none">
      <slot />
    </main>
  </div>
</template>

<style lang="css">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>
