<script setup lang="ts">
const helloArray = ['侬好', 'hello', 'こんにちは', 'bonjour', '안녕하세요 ', 'Hai', 'hallo', 'aloha', 'salama', 'salve', 'xin chào', 'hej', 'Olá']

const scrollWrapperRef = ref()
const scrollItemRef = ref()
const interval = ref(1)
const left = ref(100)
const { pause, resume } = useIntervalFn(() => {
  left.value -= 0.02
  if (left.value < 0 - scrollItemRef.value?.clientWidth / scrollWrapperRef.value?.clientWidth * 100)
    left.value = 100
}, interval)
</script>

<template>
  <AdminContainer>
    <Message severity="secondary">
      <template #icon>
        <Icon name="i-carbon-information" />
      </template>
      这里提供了一个封装好的组件<code>{{ "<AdminMarquee>" }}</code>。另外，也提供了几种实现思路。
    </Message>
    <Divider align="left">
      <p class="font-bold">
        1.  {{ "<AdminMarquee>" }} 组件，该组件源码取自 Vue3-Marquee
      </p>
    </Divider>
    <AdminMarquee
      class="border border-gray rounded-5 border-solid bg-gray-2"
      :gradient="true"
      :gradient-color="[255, 255, 255]"
      gradient-length="30%"
      :duration="25"
      :pause-on-hover="true"
    >
      <span
        v-for="(word, index) in helloArray"
        :key="index"
        class="m4 text-xl"
        :class="{ odd: index % 2 === 0, even: index % 2 === 1 }"
      > {{ word }}
      </span>
    </AdminMarquee>

    <div class="my10 h[150px]">
      <AdminMarquee
        class="border border-gray rounded-5 border-solid bg-gray-2"
        :vertical="true"
        :gradient-color="[255, 255, 255]"
        gradient-length="30%"
        :pause-on-hover="true"
      >
        <span
          v-for="(word, index) in helloArray"
          :key="index"
          class="m4 w[400px] text-center text-xl"
          :class="{ odd: index % 2 === 0, even: index % 2 === 1 }"
        > {{ word }}
        </span>
      </AdminMarquee>
    </div>

    <Divider align="left">
      <p class="font-bold">
        2. 使用 vueuse 中的 useIntervalFn() 实现动态更新文字元素的样式实现其滚动效果。
      </p>
    </Divider>
    <div ref="scrollWrapperRef" class="el-alert border border-gray border-solid !rounded-5 !bg-gray-2 !py0" @mouseenter="pause" @mouseleave="resume">
      <div ref="scrollItemRef" class="position-relative p4 text-xl" :style="{ left: `${left}%` }">
        <span
          v-for="(word, index) in helloArray"
          :key="index"
          class="m4 text-xl"
          :class="{ odd: index % 2 === 0, even: index % 2 === 1 }"
        > {{ word }}
        </span>
      </div>
    </div>

    <Divider align="left">
      <p class="font-bold">
        3. 使用 el-carousel(走马灯)实现的垂直滚动效果
      </p>
    </Divider>
    <el-carousel class="h[60px] border border-gray rounded-5 border-solid bg-gray-2" direction="vertical" :interval="1500" indicator-position="none" autoplay>
      <el-carousel-item v-for="(word, index) in helloArray" :key="index">
        <span class="block text-center text-xl line-height-[60px]">{{ word }} !</span>
      </el-carousel-item>
    </el-carousel>

    <Divider align="left">
      <p class="font-bold">
        4. 使用 unocss 的动画样式效果
      </p>
    </Divider>
    <div class="h[60px] flex items-center border border-gray rounded-5 border-solid bg-gray-2">
      <div class="w-full animate-bounce-alt animate-duration-1500 text-center text-xl">
        <span>{{ helloArray[0] }}!</span>
      </div>
    </div>
  </AdminContainer>
</template>

<style scoped>
.word {
  font-size: 30px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>
