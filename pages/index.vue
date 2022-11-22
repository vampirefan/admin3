<script setup lang="ts">
const router = useRouter()
const menuButton = [
  { title: "快速开始", icon: "i-twemoji:star-struck", link: '/admin/guide' },
  { title: "相关文档", icon: "i-twemoji-blue-book", link: '/admin/doc' },
  { title: "示例组件", icon: "i-twemoji:toolbox", link: '' },
]
const framework = [
  { title: "Nuxt", icon: "i-logos-nuxt-icon" },
  { title: "Typescript", icon: "i-logos-typescript-icon" },
  { title: "Eslint", icon: 'i-logos-eslint' },
  { title: 'Commitizen', icon: 'i-logos-commitizen' }
]
const ui = [
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


    <el-button size="large" m-16 v-for="item in menuButton" :key="item.title" @click="router.push(item.link)">
      <div :class="item.icon"></div><span class="pl-2">{{ item.title }}</span>
    </el-button>
    <el-divider></el-divider>

    <h3 class="color-green-4 text-left ml-8">Frameworks</h3>
    <el-row :gutter="12">
      <el-col :span="6" v-for="item in framework" :key="item.title">
        <el-card shadow="hover" class="mb">
          <div :class="item.icon + ' inline-block'"></div><span pl>{{ item.title }}</span>
        </el-card>
      </el-col>
    </el-row>
    <h3 class="color-green-4 text-left ml-8">UIs</h3>
    <el-row :gutter="12">
      <el-col :span="6" v-for="item in ui" :key="item.title">
        <el-card shadow="hover" class="mb">
          <div :class="item.icon + ' inline-block'"></div><span pl>{{ item.title }}</span>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>
