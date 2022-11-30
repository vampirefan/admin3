<script setup lang="ts">
// const contentQuery = queryContent('doc')
// const { data: navigation } = await useAsyncData('navigation', () => {
//   return fetchContentNavigation(contentQuery)
// })
// const route = useRoute()
// const parentPath = route.path.substring(0, route.path.lastIndexOf('/'))
// const links = computed(() => {
//   const parent = useTreeFind(navigation.value, (item: any) => {
//     return item._path === parentPath
//   })
//   return parent.children
// })
const { navigation } = useContent()
const navTree = navigation.value.find((nav: any) => nav._path === '/doc').children
const route = useRoute()
</script>

<template>
  <aside class="sidebar">
    <ul class="sidebar-items">
      <li v-for="folder of navTree" :key="folder._path">
        <p class="sidebar-item sidebar-heading active">
          {{ folder.title }}
        </p>
        <ul class="sidebar-item-children">
          <li v-for="file of folder.children" :key="file._path" class="block"
            :class="[route.path === file._path ? 'router-link-active router-link-exact-active router-link-active sidebar-item active' : 'sidebar-item']">
            <NuxtLink :to="file._path">
              {{ file.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
a {
  font-weight: unset;
}

.sidebar {
  font-size: 16px;
  width: var(--sidebar-width);
  position: fixed;
  z-index: 10;
  margin: 0;
  top: var(--navbar-height);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--c-border);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-brand) var(--c-border);
  background-color: var(--c-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color),
    border-color var(--t-color);
}

.sidebar::-webkit-scrollbar {
  width: 7px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: var(--c-border);
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: var(--c-brand);
}

.sidebar .sidebar-items {
  padding: 1.5rem 0
}

.sidebar-item {
  cursor: default;
  border-left: .25rem solid transparent;
  color: var(--c-text)
}

.sidebar-item:focus-visible {
  outline-width: 1px;
  outline-offset: -1px
}

.sidebar-item.active:not(p.sidebar-heading) {
  font-weight: 600;
  color: var(--c-text-accent);
  border-left-color: var(--c-text-accent)
}

.sidebar-item.sidebar-heading {
  transition: color .15s ease;
  font-size: 1.1em;
  font-weight: 700;
  padding: .35rem 1.5rem .35rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0
}

.sidebar-item.sidebar-heading+.sidebar-item-children {
  transition: height .1s ease-out;
  overflow: hidden;
  margin-bottom: .75rem
}

.sidebar-item.sidebar-heading.collapsible {
  cursor: pointer
}

.sidebar-item.sidebar-heading.collapsible .arrow {
  position: relative;
  top: -.12em;
  left: .5em
}

.sidebar-item:not(.sidebar-heading) {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  padding: .35rem 1rem .35rem 2rem;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box
}

.sidebar-item:not(.sidebar-heading)+.sidebar-item-children {
  padding-left: 1rem;
  font-size: .95em
}

.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {
  padding: .25rem 1rem .25rem 1.75rem
}

.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  font-weight: 500;
  border-left-color: transparent
}

a.sidebar-heading+.sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  border-left-color: transparent
}

a.sidebar-item {
  cursor: pointer
}

a.sidebar-item:hover {
  color: var(--c-text-accent)
}
</style>
