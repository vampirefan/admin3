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
  basePath: {
    type: String,
    default: '',
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

const onlyOneChild = ref<childrenType>({})

function hasOneShowingChild(
  children: childrenType[] = [],
  parent: childrenType,
) {
  const showingChildren = children.filter((item: any) => {
    onlyOneChild.value = item
    return true
  })
  if (showingChildren[0]?.meta?.showParent)
    return false
  if (showingChildren.length === 1)
    return true
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, noShowingChildren: true }
    return true
  }
  return false
}
</script>

<template>
  <div v-if="!item.hidden">
    <template v-if="
      hasOneShowingChild(props.item.children, props.item)
      && (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    ">
      <el-menu-item v-if="onlyOneChild.meta" :index="onlyOneChild.path">
        <template #title>
          <Icon :name="onlyOneChild.meta.icon" />
          {{ onlyOneChild.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template v-if="item.meta" #title>
        <Icon :name="item.meta.icon" />
        {{ item.meta.title }}
      </template>

      <AdminSidebarItem v-for="child in item.children" :key="child.path" :is-nest="true" :item="child"
        :base-path="child.path" />
    </el-sub-menu>
  </div>
</template>
