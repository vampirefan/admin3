<script setup lang="ts">
// const router = useRouter()
const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)
const usernameInput = ref('')
userStore.$subscribe((mutation, state) => {
  userInfo.value = state.userInfo
})

const login = async () => {
  if (usernameInput.value)
    userStore.loginByUsername({ username: usernameInput.value, password: '' })
}
const logout = async () => {
  userStore.logOut()
}

const framework = [
  { title: 'Nuxt', icon: 'i-logos-nuxt-icon' },
  { title: 'Vue3', icon: 'i-logos-vue' },
  { title: 'VueUse', icon: 'i-logos-vueuse' },
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
    <h1 class="flex items-center justify-center color-green-5 text-6xl gap-6">
      <img src="/admin3-logo.png" alt="Admin3" height="100">
      Admin3
    </h1>
    <el-alert title="正在开发中" type="warning" center show-icon :closable="false" />
    <p class="color-teal-6 text-xl">
      一个基于 Nuxt 3 的后台管理模板，查看
      <NuxtLink to="/doc/guide" class="underline font-semibold pl-2">
        <i class="i-twemoji-open-book inline-block vertical-bottom" />
        <span class="pl-1">使用指南</span>
      </NuxtLink>
    </p>
    <div v-if="userInfo && userInfo.username" class="mt-10 ">
      <el-row class="flex justify-center mb-4">
        <span>{{ userInfo.username }}，你好！</span>
      </el-row>
      <el-row class="flex justify-center">
        <el-button type="success" plain>
          <i class="i-carbon-carbon-for-ibm-dotcom pr-1" />前往后台
        </el-button>
        <el-button type="primary" plain @click="logout()">
          <i class="i-carbon-logout pr-1" />登出
        </el-button>
      </el-row>
    </div>
    <el-input v-else v-model="usernameInput" class="m-4 w-1/2 h-12" placeholder="输入任意用户名">
      <template #prepend>
        <i class="i-twemoji-smiling-face-with-sunglasses" />
      </template>
      <template #append>
        <el-button @click="login()">
          登录
        </el-button>
      </template>
    </el-input>
    <div class="text-2xl m-6 flex justify-center gap-4">
      <a i-logos-github-octocat href="https://github.com/vampirefan/admin3" target="_blank" />
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
