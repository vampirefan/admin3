<script setup lang="ts">
const router = useRouter()

function routerHome() {
  router.push({ path: '/' })
}
</script>

<template>
  <el-link :underline="false" @click="routerHome()">
    <i class="i-twemoji-house-with-garden" />
  </el-link>
</template>
