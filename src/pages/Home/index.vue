<script setup lang="ts">
import { navigateTo } from '#app'
import { storeToRefs } from 'pinia'
import { guideUrl } from '~/utils/docs'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const configStore = useConfigStore()

const isLoggedIn = computed(() => {
  return userStore.authToken && userInfo.value?.username
})
const usernameInput = ref('')
async function login() {
  if (usernameInput.value)
    userStore.login({ username: usernameInput.value, password: '' })
  else
    ElNotification.error('请输入任意用户名！')
}
const { enter } = useMagicKeys()
watch(enter, (value) => {
  if (value)
    login()
})

async function logout() {
  userStore.logOut()
}

const carouselRef = ref<any>()
const { isOutside } = useMouseInElement(carouselRef)
watch(isOutside, (value) => {
  if (value)
    carouselRef.value.startAutoplay()
  else
    carouselRef.value.stopAutoplay()
})
</script>

<template>
  <div class="home-body">
    <Toast />
    <main class="ma w[1050px] px-10 py-20 text-center">
      <div class="flex items-center justify-center text-5xl color-teal-9 font-bold font-serif">
        <img src="/image/logo/admin3.png" alt="Admin3" class="mr h[100px]">
        <span>Admin</span>
        <span class="ml">3</span>
      </div>

      <Tag class="mb ml-10 font-bold font-mono">
        {{ configStore.config.version }}
      </Tag>

      <div class="py-4 text-xl color-gray-6 font-semibold">
        <span class="pr-2">基于 Nuxt 3(Vue3) 以及 PrimeVue/ElementPlus 组件的后台管理模板，查看</span>
        <Icon name="i-twemoji-open-book" class="vertical-bottom" />
        <a class="cursor-pointer underline" @click="openUrl(guideUrl)">
          <span class="pl-2">使用指南</span>
        </a>
      </div>
      <Transition name="bounce">
        <div v-if="!isLoggedIn" class="ma my w[400px]">
          <InputGroup>
            <InputGroupAddon>
              <Icon name="i-twemoji-smiling-face-with-sunglasses" />
            </InputGroupAddon>
            <InputText v-model="usernameInput" autofocus placeholder="请输入任意用户名" />
            <Button @click="login()">
              登录
            </Button>
          </InputGroup>
        </div>
      </Transition>
      <Transition name="bounce">
        <div v-if="isLoggedIn" class="my">
          <div class="mb-6 flex justify-center text-lg">
            <span class="font-bold underline">{{ userInfo.username }}</span>
            <span>，你好！</span>
          </div>
          <div class="flex justify-center gap-5">
            <Button raised severity="success" @click="navigateTo('/admin')">
              <Icon name="i-carbon-carbon-for-ibm-dotcom" />
              进入后台
            </Button>
            <Button raised severity="danger" @click="logout()">
              <Icon name="i-carbon-logout" />
              退出登录
            </Button>
          </div>
        </div>
      </Transition>

      <div class="mt-8">
        <Button v-tooltip.bottom="'项目源码'" text @click="openUrl(sourceUrl)">
          <Icon :name="sourceUrl.includes('github') ? 'i-logos-github-icon' : 'i-logos-gitlab'" size="2rem" />
        </Button>
      </div>

      <Divider />
      <h2 class="m-4 text-left color-teal-6">
        框架 & UIs
      </h2>
      <Carousel
        ref="carouselRef" :value="docList" :num-visible="5" :num-scroll="1" circular :autoplay-interval="3000"
        :show-indicators="false" :show-navigators="false" class="mt10"
      >
        <template #item="slotProps">
          <div class="m4 cursor-pointer bg-white py6 opacity-90 hover-shadow-md" @click="openUrl(slotProps.data.url)">
            <Icon v-if="slotProps.data.icon" class="text-4xl" :name="slotProps.data.icon" />
            <img v-else-if="slotProps.data.image" class="h10 w10" :src="slotProps.data.image">
            <div class="mt2 color-gray-6">
              {{ slotProps.data.label }}
            </div>
          </div>
        </template>
      </Carousel>
    </main>
  </div>
</template>

<style scoped>
.home-body {
  background-image: url('/image/bg.jpg');
  background-size: cover;
  min-height: 100vh;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
