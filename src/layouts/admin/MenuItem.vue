<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

interface childrenType {
  path?: string
  hidden?: boolean
  noShowingChildren?: boolean
  children?: childrenType[]
  meta?: {
    icon?: string
    title?: string
  }
  showTooltip?: boolean
}

const onlyChild = ref<childrenType>({})

function hasOneShowingChild(
  children: childrenType[] = [],
  parent: childrenType,
) {
  const showingChildren = children.filter((item: any) => {
    if (item.hidden) {
      return false
    }
    else {
      onlyChild.value = item
      return true
    }
  })
  if (showingChildren.length === 1)
    return true
  if (showingChildren.length === 0) {
    onlyChild.value = { ...parent, noShowingChildren: true }
    return true
  }
  return false
}
</script>

<template>
  <el-menu-item
    v-if="!props.item?.hidden
      && hasOneShowingChild(item.children, item)
      && (!onlyChild.children || onlyChild.noShowingChildren) && onlyChild.meta" :index="onlyChild.path"
  >
    <Icon v-if="onlyChild.meta.icon" class="svg-fill mr2 text-xl" mode="svg" :name="onlyChild.meta.icon" />

    <template #title>
      <span>{{ onlyChild.meta?.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else-if="!props.item?.hidden" :index="item.path">
    <template #title>
      <Icon v-if="item.meta.icon" class="svg-fill mr2 text-xl" mode="svg" :name="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </template>
    <MenuItem v-for="child in item.children" :key="child.path" :item="child" />
  </el-sub-menu>
</template>

<style scoped>
.svg-fill,
.svg-fill * {
  fill: currentColor !important;
}
</style>
