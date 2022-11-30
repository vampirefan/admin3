<script setup lang="ts">
const { toc } = useContent()
const route = useRoute()
const router = useRouter()
const scrollToHeading = (id: string) => {
  router.push(`#${id}`)
}
</script>

<template>
  <el-affix class="toc fixed top-20 right-5">
    <el-card>
      <p class="m-2">
        目录
      </p>
      <el-divider class="m-0" />
      <ul class="list-none">
        <li v-for="link in toc.links" :key="link.text" class="min-w-0 group"
          :class="[{ 'pl-3': link.depth === 3, 'pl-6': link.depth === 4 }]">
          <a :href="`#${link.id}`" class="block py-1 text-sm truncate lg:pr-3"
            :class="[route.hash.includes(link.id) ? 'underline font-semibold' : 'font-light']"
            @click.prevent="scrollToHeading(link.id)">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </el-card>
  </el-affix>
</template>

<style scoped>
.toc {
  width: var(--sidebar-width);
}
</style>

