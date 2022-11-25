<script setup lang="ts">
const router = useRouter()
const menuButton = [
  { title: '使用指南', icon: 'i-twemoji-blue-book', link: '/doc' },
  { title: '示例组件', icon: 'i-twemoji:toolbox', link: '' },
]
const framework = [
  { title: 'Nuxt', icon: 'i-logos-nuxt-icon' },
  { title: 'Typescript', icon: 'i-logos-typescript-icon' },
  { title: 'Eslint', icon: 'i-logos-eslint' },
  { title: 'Commitizen', icon: 'i-logos-commitizen' },
]
const ui = [
  { title: 'Element-Plus', icon: 'i-logos-element' },
  { title: 'Unocss', icon: 'i-logos-unocss' },
  { title: 'TailwindCSS', icon: 'i-logos-tailwindcss-icon' },
  { title: 'Iconify', icon: 'i-carbon-face-satisfied' },
]
</script>

<template>
  <main class="w-1/2 ma py-20 px-10 text-center">
    <h1 class="color-green-5 text-4xl">
      ADMIN 3
    </h1>
    <p class="color-teal-6 text-xl">
      Another Vue3 admin template. Just want to get a clean and ready-to-use template.
    </p>

    <el-button v-for="item in menuButton" :key="item.title" class="m-8 w-48 h-12 text-xl" size="large"
      @click="router.push(item.link)">
      <div :class="item.icon" /><span class="pl-4">{{ item.title }}</span>
    </el-button>
    <div text="xl gray4" m-5 flex justify-center gap-3>
      <BaseHomeLink />
      <a i-carbon-logo-github href="https://github.com/vampirefan/admin3" target="_blank" />
      <BaseDarkToggle />
    </div>

    <el-divider />

    <h3 class="color-green-4 text-left ml-8">
      Frameworks
    </h3>
    <el-row :gutter="12">
      <el-col v-for="item in framework" :key="item.title" :span="6">
        <el-card shadow="hover" class="mb">
          <div :class="`${item.icon} inline-block`" /><span class="pl">{{ item.title }}</span>
        </el-card>
      </el-col>
    </el-row>
    <h3 class="color-green-4 text-left ml-8">
      UIs
    </h3>
    <el-row :gutter="12">
      <el-col v-for="item in ui" :key="item.title" :span="6">
        <el-card shadow="hover" class="mb">
          <div :class="`${item.icon} inline-block`" /><span class="pl">{{ item.title }}</span>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>
