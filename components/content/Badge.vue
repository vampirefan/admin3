<script setup lang="ts">
const props = defineProps({
  /**
   * @values tip, warning, danger
   */
  type: {
    type: String,
    default: 'tip',
    validator(value: string) {
      return ['tip', 'warning', 'danger'].includes(value)
    },
  },
  /**
   * @values top, middle, bottom
   */
  // vertical: {
  //   type: String,
  //   default: 'top',
  //   validator(value: string) {
  //     return ['top', 'middle', 'bottom'].includes(value)
  //   },
  // },
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="inline">
    <span v-if="props.text" :class="[type]" class="badge">
      {{ props.text }}
    </span>
    <span v-else :class="[type]" class="badge">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
  </div>
</template>

<style scoped>
.badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 1px 6px;
  color: var(--doc-bg);
  vertical-align: top;
  transition: color var(--t-color), background-color var(--t-color)
}

.badge.tip {
  background-color: var(--doc-badge-tip)
}

.badge.warning {
  background-color: var(--doc-badge-warning)
}

.badge.danger {
  background-color: var(--doc-badge-danger)
}

.badge+.badge {
  margin-left: 5px
}
</style>
