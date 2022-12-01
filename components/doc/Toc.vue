<script setup lang="ts">
const { toc, page } = useContent()
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
  </el-affix>
</template>

<style scoped>
.toc {
  width: var(--sidebar-width);
}

ul {
  padding-left: 0.3rem;
}
</style>

