<script setup lang="ts">

const inspires = [
  { title: "Nuxt", icon: "i-logos-nuxt-icon" },
  { title: "Typescript", icon: "i-logos-typescript-icon" },
  { title: "Eslint", icon: 'i-logos-eslint' },
  { title: "Element-Plus", icon: 'i-logos-element' },
  { title: "Unocss", icon: 'i-logos-unocss' },
  { title: "TailwindCSS", icon: 'i-logos-tailwindcss-icon' },
  { title: "Iconify", icon: 'i-carbon-face-satisfied' },
]
</script>

<template>
  <main class="w-1/2 ma py-20 px-10 text-center">
    <h1 class="color-green-5">ADMIN 3</h1>
    <p class="color-teal-6">Another Vue3 admin template. Just want to get a clean and ready-to-use template.</p>
    <el-divider></el-divider>

    <el-button size="large" m-4>
      <div class="i-twemoji:star-struck"></div><span class="pl-1">快速开始</span>
    </el-button>
    <el-button size="large" m-4>
      <div class="i-twemoji-blue-book"></div><span class="pl-1">相关文档</span>
    </el-button>
    <el-button size="large" m-4>
      <div class="i-twemoji:toolbox"></div><span class="pl-1">示例组件</span>
    </el-button>
    <el-divider></el-divider>

    <h3 class="color-green-4 text-left ml-8">Inspired By</h3>
    <el-row :gutter="12">
      <el-col :span="6" v-for="item in inspires" :key="item.title">
        <el-card shadow="hover" class="mb">
          <div :class="item.icon + ' inline-block'"></div><span pl>{{ item.title }}</span>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>

    <h3 class="color-green-4 text-left ml-8">Current Work</h3>
    <div class="text-left ml-10 color-gray-7">
      <p>1. Init with Nuxt 3.</p>
      <p>2. Add element-plus.</p>
      <p>3. Add unocss.</p>
    </div>

  </main>
</template>
