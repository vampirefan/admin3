<script setup lang="ts">
const { toc, page } = useContent()
const route = useRoute()
const scrollToHeading = (id: string) => {
  navigateTo(`#${id}`)
}
</script>

<template>
  <el-card class="toc">
    <p class="m-2">
      {{ page.title }}
    </p>
    <el-divider class="m-0" />
    <ul class="list-none">
      <li v-for="link in toc.links" :key="link.text" class="min-w-0">
        <a :href="`#${link.id}`" class="text-sm truncate lg:pr-3"
          :class="[route.hash.includes(link.id) ? 'underline font-semibold' : 'font-light']"
          @click.prevent="scrollToHeading(link.id)">
          {{ link.text }}
        </a>
        <ul v-if="link.children" class="list-none">
          <li v-for="sublink in link.children" :key="sublink.text" class="min-w-0">
            <span class="px-2">-</span>
            <a :href="`#${sublink.id}`" class=" text-sm truncate lg:pr-3"
              :class="[route.hash.includes(sublink.id) ? 'underline font-semibold' : 'font-light']"
              @click.prevent="scrollToHeading(sublink.id)">
              {{ sublink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </el-card>
</template>

<style scoped>
.toc {
  width: var(--doc-sidebar-width);
  position: fixed;
  top: 5rem;
  right: 1.25rem;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--doc-brand) var(--doc-border);
  background-color: var(--doc-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color),
    border-color var(--t-color);
}

ul {
  padding-left: 0.3rem;
  line-height: 1.7;
}
</style>

