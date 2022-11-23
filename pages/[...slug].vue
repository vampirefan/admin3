<!-- 根据 content 目录自动生成路由 -->
<script setup lang="ts">
const route = useRoute()

const { page } = useContent()
const frontmatter = useContentHead(page)
</script>

<template>
  <NuxtLayout name="doc">
    <ContentDoc />
  </NuxtLayout>
</template>

