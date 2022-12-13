<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { config } = storeToRefs(useConfigStore())
const permissionStore = usePermissionStore()
const { taggedMenus } = storeToRefs(permissionStore)
const tagScrollRef = ref<any>(null)

function handleScroll(event: any) {
  const wheelDelta = event.wheelDelta / 5 || -event.deltaY * 40
  const scrollbar = tagScrollRef.value
  scrollbar.setScrollLeft(scrollbar.wrapRef.scrollLeft + wheelDelta)
}
function isActive(path: string) {
  return useRoute().path === path
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
    <el-scrollbar ref="tagScrollRef" class="tagscroll" @wheel.prevent="handleScroll">
      <div v-for="tag in taggedMenus" :key="tag.path" :class="`tagitem ${isActive(tag.path) ? 'is-active' : ''}`">
        <span @click="navigateTo(tag.path)">{{ tag.meta?.title }}</span>
        <Icon v-if="!tag.meta?.affix" class="tagclose-icon" name="i-ep-close" @click="closeMenuTag(tag)" />
      </div>
    </el-scrollbar>
    <el-tooltip content="关闭所有页面">
      <el-button plain class="w-10" @click="closeAll()">
        <Icon name="i-ep-close-bold" />
      </el-button>
    </el-tooltip>
  </div>
</template>

<style scoped>
.tagbar {
  position: fixed;
  z-index: 2000;
  top: var(--admin-navbar-height);
  left: var(--admin-sidebar-width);
  right: 0;
  height: var(--admin-tagbar-height);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  border-bottom: 1px solid var(--el-menu-border-color);
}

.tagscroll {
  flex: 1;
  overflow: hidden;
  margin-top: 0.6rem;
  white-space: nowrap;
  position: relative;
}

.tagitem {
  border-radius: 4px 4px 0 0;
  font-size: 0.85rem;
  margin: 0 0.1rem;
  padding: 0 0.6rem;
  border: 1px solid var(--el-menu-border-color);
  border-bottom: none;
  position: relative;
  display: inline-block;
  line-height: 1.8rem;
  cursor: pointer;
  transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
}

.tagitem.is-active {
  background-color: var(--admin-sidebar-hover-bg-color);
  color: var(--admin-sidebar-text-color)
}

.tagitem:hover {
  color: var(--el-color-primary);
  cursor: pointer;
}

.tagitem:hover .tagclose-icon {
  margin-left: 0.2rem;
  width: 0.8rem;
}

.tagclose-icon {
  width: 0;
  font-size: 0.8rem;
  vertical-align: middle;
  transform: translateY(-15%);
  border-radius: 50%;
  transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
}

.tagclose-icon:hover {
  background-color: var(--el-text-color-placeholder);
  color: #fff;
}
</style>
