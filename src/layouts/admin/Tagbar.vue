<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { config } = storeToRefs(useConfigStore())
const permissionStore = usePermissionStore()
const { currentMenu, taggedMenus } = storeToRefs(permissionStore)
const tagScrollRef = ref<any>(null)

function handleScroll(event: any) {
  const wheelDelta = event.wheelDelta / 5 || -event.deltaY * 40
  const scrollbar = tagScrollRef.value
  const content = scrollbar.$el.querySelector('.p-scrollpanel-content')
  content.scrollLeft += wheelDelta
}
function isActive(path: string) {
  return currentMenu.value.path === path
}
function closeMenuTag(menuTag: any) {
  const previousMenu = permissionStore.removeMenuTag(menuTag)
  if (isActive(menuTag.path))
    navigateTo(previousMenu.path)
}
function closeAll() {
  navigateTo(permissionStore.removeAllTaggedMenus())
}
</script>

<template>
  <div v-if="config.tagbar" class="tagbar">
    <ScrollPanel
      ref="tagScrollRef" class="tagscroll"
      :dt="{ bar: { background: 'var(--admin-color-100)' } }"
      @wheel.passive="handleScroll"
    >
      <Tag
        v-for="tag in taggedMenus" :key="tag.path"
        severity="secondary" :class="`tagitem ${isActive(tag.path) ? 'is-active' : ''}`"
      >
        <span @click="navigateTo(tag.path)">{{ tag.meta?.title }}</span>
        <Icon v-if="!tag.meta?.affix" class="tagclose-icon" name="i-ep-close" @click="closeMenuTag(tag)" />
      </Tag>
    </ScrollPanel>
    <Button
      v-tooltip="{
        value: '关闭所有页面',
        pt: { text: 'text-sm' },
      }"
      outlined class="w-10" @click="closeAll()"
    >
      <Icon name="i-ep-close-bold" />
    </Button>
  </div>
</template>

<style scoped>
.tagbar {
  position: fixed;
  /* z-index: 1001; */
  top: var(--admin-navbar-height);
  left: var(--admin-sidebar-width);
  right: 0;
  height: var(--admin-tagbar-height);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  border-bottom: 1px solid var(--el-menu-border-color);
  transition: all var(--t-transform);
}

.tagscroll {
  flex: 1;
  margin-top: 1.2rem;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  white-space: nowrap;
}
.p-scrollpanel-content{
  padding-bottom: 1rem;
}

.tagitem {
  border-radius: 4px 4px 0 0;
  font-size: 0.85rem;
  margin: 0 0.2rem;
  padding: 0 0.5rem;
  border: 1px solid var(--admin-color-200);
  border-bottom: none;
  position: relative;
  display: inline-block;
  line-height: 1.8rem;
  cursor: pointer;
}

.tagitem.is-active {
  background-color: var(--admin-sidebar-bg-color);
  color: var(--admin-sidebar-text-color)
}

.tagitem:hover .tagclose-icon {
  margin-left: 0.5rem;
  width: 0.8rem;
}

.tagclose-icon {
  width: 0;
  font-size: 0.8rem;
  vertical-align: middle;
  transform: translateY(-15%);
  border-radius: 50%;
  transition: all var(--admin-transition-duration) var(--admin-transition-function-ease-in-out-bezier);
}
</style>
