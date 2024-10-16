<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '统计',
  },
  number: {
    type: String,
    default: '0000',
  },
  unit: {
    type: String,
    default: '(个)',
  },
})
</script>

<template>
  <div class="num-show">
    <div class="num-show-row-1">
      <div class="num-show-title">
        {{ props.title }}
      </div>
      <div class="num-show-unit">
        {{ props.unit }}
      </div>
    </div>
    <div class="num-show-row-2">
      <div class="num-show-border">
        <div class="num-show-number">
          {{ props.number[0] }}
        </div>
      </div>
      <div class="num-show-border">
        <div class="num-show-number">
          {{ props.number[1] }}
        </div>
      </div>
      <div class="num-show-border">
        <div class="num-show-number">
          {{ props.number[2] }}
        </div>
      </div>
      <div class="num-show-border">
        <div class="num-show-number">
          {{ props.number[3] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.num-show {
  display: flex;
  flex-direction: column;
}

.num-show-row-1 {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8em;
}

.num-show-title {
  color: #ffffff;
  font-size: 1em;
}

.num-show-unit {
  color: #93AECE;
  font-size: 1em;
}

.num-show-row-2 {
  display: flex;
}

.num-show-border {
  width: 2.8em;
  height: 4em;
  line-height: 4em;
  text-align: center;
  border-radius: 3px;
  margin-right: 0.5em;

  background-color: #0085FF;
}

.num-show-number {
  color: #ffffff;
  font-size: 3.2em;
  font-family: 'digiface';
}
</style>
