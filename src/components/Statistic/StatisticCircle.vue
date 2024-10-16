<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '统计',
  },
  num: {
    type: String,
    default: '0%',
  },
  data: {
    type: String,
    default: '0',
  },
  unit: {
    type: String,
    default: 'kb',
  },
})
</script>

<template>
  <div class="circle-component">
    <div class="circle-component-left">
      <div class="circle-component-rotate" />
      <div class="circle-component-inner">
        <span class="circle-component-num">{{ props.num }}</span>
      </div>
    </div>
    <div class="circle-component-right">
      <span class="circle-component-name">{{ props.name }}</span>
      <span class="circle-component-data"><strong>{{ props.data }}</strong> {{ props.unit }}</span>
    </div>
  </div>
</template>

<style scoped>
.circle-component {
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 150px;
  border: 1px solid rgba(0, 133, 255, 0.5);
  background-image: linear-gradient(to bottom, rgba(0, 154, 255, 0.1), rgba(0, 85, 255, 0.05));
}

.circle-component-left {
  width: 150px;
  height: 150px;
}

.circle-component-rotate {
  content: "";
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: url(/image/screen/circleBar.png) no-repeat center center;
  background-size: 120px 120px;
  animation: 3s rotate linear infinite;
  position: relative;
  top: 15px;
  left: 15px;
}

.circle-component-inner {
  width: 100px;
  height: 100px;
  background: url(/image/screen/circleInner.png) no-repeat center center;
  background-size: 100px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 95px;
  left: 25px;
}

.circle-component-num {
  color: #ffffff;
  font-size: 1.25em;
}

.circle-component-right {
  display: flex;
  flex-direction: column;
}

.circle-component-name {
  color: #ffffff;
  font-size: 1.25em;
  margin-top: 40px;
}

.circle-component-data {
  color: #4AC9FF;
  margin-top: 10px;
  font-size: 1.25em;
}
</style>
