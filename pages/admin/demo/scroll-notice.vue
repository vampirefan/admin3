<script setup lang="ts">
definePageMeta({ layout: 'admin' })
const scrollWrapperRef = ref()
const scrollItemRef = ref()
const interval = ref(1)
const left = ref(0)
const { pause, resume } = useIntervalFn(() => {
  left.value += 0.1
  if (left.value > scrollWrapperRef.value?.$el?.clientWidth / scrollItemRef.value?.clientWidth * 100)
    left.value = -100
}, interval)
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-divider>通过 vueuse 中的 useIntervalFn() 实现动态更新文字元素的样式实现其滚动效果。</el-divider>
      <el-alert ref="scrollWrapperRef" type="error" :closable="false" @mouseenter="pause" @mouseleave="resume">
        <div ref="scrollItemRef" class="text-xl position-relative" :style="{ left: `${left}%` }">
          <AdminIcon name="i-twemoji-party-popper" class="mx-3" /><span>我是一条很重要很重要的通知！！！</span>
        </div>
      </el-alert>
      <el-divider class="mt-12">
        通过 el-carousel(走马灯)实现的垂直滚动效果
      </el-divider>
      <el-carousel class="notice-wrapper" direction="vertical" :interval="2500" indicator-position="none">
        <el-carousel-item v-for="index in 4" :key="index">
          <span class="vertical-scroll text-xl">
            我是第 {{ index }} 条比较重要的消息
          </span>
        </el-carousel-item>
      </el-carousel>
      <el-divider class="mt-12">
        通过 unocss 的动画样式效果
      </el-divider>
      <el-alert type="error" :closable="false" center>
        <div class="animate-bounce-alt animate-duration-1500 text-xl w-full text-center">
          <AdminIcon name="i-twemoji-party-popper" class="mx-3" /><span>我也是一条很重要很重要的通知！！！</span>
        </div>
      </el-alert>
      <el-alert type="error" :closable="false" class="mt-6" center>
        <div class="animate-pulse-alt animate-duration-1000 text-xl">
          <AdminIcon name="i-twemoji-party-popper" class="mx-3" /><span>我还是一条很重要很重要的通知！！！</span>
        </div>
      </el-alert>
    </AdminContainer>
  </NuxtLayout>
</template>

<style scoped>
.notice-wrapper {
  background-color: var(--el-color-error-light-9);
  height: 3rem;
}

.vertical-scroll {
  color: var(--el-color-error);
  display: block;
  text-align: center;
  line-height: 3rem;
  margin: 0;
}
</style>
