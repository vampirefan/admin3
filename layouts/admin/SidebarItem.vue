<script setup lang="ts">
const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
})

interface childrenType {
  path?: string
  noShowingChildren?: boolean
  children?: childrenType[]
  meta?: {
    icon?: string
    title?: string
    showParent?: boolean
  }
  showTooltip?: boolean
}

const onlyChild = ref<childrenType>({})

function hasOneShowingChild(
  children: childrenType[] = [],
  parent: childrenType,
) {
  const showingChildren = children.filter((item: any) => {
    onlyChild.value = item
    return true
  })
  if (showingChildren[0]?.meta?.showParent)
    return false
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
  <el-menu-item v-if="
  hasOneShowingChild(props.item.children, props.item)
  && (!onlyChild.children || onlyChild.noShowingChildren) && onlyChild.meta" :index="onlyChild.path">
    <AdminIcon v-if="onlyChild.meta.icon" :name="onlyChild.meta.icon" />
    <template #title>
      <span>{{ onlyChild.meta.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template v-if="item.meta" #title>
      <AdminIcon v-if="item.meta.icon" :name="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </template>
    <SidebarItem v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" />
  </el-sub-menu>
</template>
