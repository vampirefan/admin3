<script setup lang="ts">
import { ElMessage } from 'element-plus'
const router = useRouter()
const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)
const usernameInput = ref('')
userStore.$subscribe((mutation, state) => {
  userInfo.value = state.userInfo
})

const isLoggedIn = computed(() => {
  return userStore.authToken && userInfo.value && userInfo.value.username
})

const login = async () => {
  if (usernameInput.value)
    userStore.login({ username: usernameInput.value, password: '' })
  else
    ElMessage.error('请输入任意用户名！')
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
    <h1 class="flex items-center justify-center color-green-5 text-5xl gap-6">
      <img src="/image/admin3-logo.png" alt="Admin3" height="100">
      Admin3
    </h1>
    <el-alert title="正在开发中" type="warning" center show-icon :closable="false" />
    <div class="color-teal-6 text-xl py-4">
      <span class="pr-2">一个基于 Nuxt 3 的后台管理模板，查看</span>
      <Icon name="i-twemoji-open-book" class="vertical-bottom" />
      <a class="underline font-semibold cursor-pointer" @click="router.push('/doc/guide')">
        <span class="pl-1">使用指南</span>
      </a>
    </div>

    <ClientOnly>
      <div v-if="isLoggedIn" class="mt-4">
        <el-row class="flex justify-center mb-4">
          <span>{{ userInfo.username }}，你好！</span>
        </el-row>
        <el-row class="flex justify-center">
          <el-button type="success" plain @click="router.push('/admin/welcome')">
            <Icon name="i-carbon-carbon-for-ibm-dotcom" class="pr-1" />
            前往管理后台
          </el-button>
          <el-button type="primary" plain @click="logout()">
            <Icon name="i-carbon-logout" class="pr-1" />
            登出
          </el-button>
        </el-row>
      </div>
      <el-input v-else v-model="usernameInput" class="m-4 w-1/2 h-12" placeholder="输入任意用户名">
        <template #prepend>
          <Icon name="i-twemoji-smiling-face-with-sunglasses" />
        </template>
        <template #append>
          <el-button @click="login()">
            登录
          </el-button>
        </template>
      </el-input>
    </ClientOnly>

    <div class="mt-16 flex justify-center gap-2">
      <CommonDarkToggle class="pb-2 text-xl" />
      <el-link class="text-2xl" :underline="false" href="https://github.com/vampirefan/admin3" target="_blank">
        <Icon name="i-logos-github-octocat" />
      </el-link>
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
