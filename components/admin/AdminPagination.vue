<script setup lang="ts">
const props = defineProps({
  total: {
    required: true,
    type: Number,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 50, 100, 200]
    },
  },
  pagerCount: {
    type: Number,
    default: 7,
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper',
  },
  background: {
    type: Boolean,
    default: true,
  },
  autoScroll: {
    type: Boolean,
    default: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:page', 'update:limit', 'pagination'])
const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  },
})
const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  },
})
function handleSizeChange(val: number) {
  if (currentPage.value * val > props.total)
    currentPage.value = 1

  emit('pagination', { page: currentPage.value, limit: val })
  if (props.autoScroll)
    scrollTo(0, 800)
}
function handleCurrentChange(val: number) {
  emit('pagination', { page: val, limit: pageSize.value })
  if (props.autoScroll)
    scrollTo(0, 800)
}
</script>

<template>
  <div :class="{ hidden }">
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="background"
      :layout="layout" :page-sizes="pageSizes" :pager-count="pagerCount" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>
