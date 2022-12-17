<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Navbar from './admin/Navbar.vue'
import Sidebar from './admin/Sidebar.vue'
import Tagbar from './admin/Tagbar.vue'

const { config } = storeToRefs(useConfigStore())
const route = useRoute()
const mainKey = ref(route.fullPath)
onActivated(() => {
  mainKey.value = route.fullPath
})
onDeactivated(() => {
  mainKey.value = ''
})
</script>

<template>
  <div>
    <Navbar />
    <Sidebar />
    <Tagbar />

    <section class="main">
      <el-scrollbar>
        <Transition :name="config.transitionType" appear mode="out-in">
          <div v-show="mainKey">
            <slot />
          </div>
        </Transition>
      </el-scrollbar>
    </section>
  </div>
</template>

<style>
.main {
  overflow: hidden;
  overflow-y: auto;
  width: calc(100vw - var(--admin-sidebar-width));
  position: absolute;
  z-index: 1001;
  top: calc(var(--admin-navbar-height) + var(--admin-tagbar-height));
  left: var(--admin-sidebar-width);
  bottom: 0;
}

.slide-enter-active,
.fade-enter-active,
.blur-enter-active,
.scale-enter-active {
  transition: all var(--t-transform);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-enter-from {
  opacity: 0;
}

.blur-enter-from {
  opacity: 0;
  filter: blur(0.5rem);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
</style>
