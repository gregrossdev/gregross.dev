<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp()
const { mapPageUrl, pageLinkOptions } = useProps()


const { data, pending } = await useAsyncData(
  `page_by_slug_${route.params.slug}`,
  async () => {
    const pageTable = await $notion.getPageTable(
      "d8dbeb83c0744e72a3f941845578a40c"
    );
    const page = pageTable.find(
      (item) => item.slug === route.params.slug
    );
    const blockMap = await $notion.getPageBlocks(
      page ? page.id : route.params.slug
    );
    
    return blockMap;
  }
);

</script>

<template>
  <div class="container">
    <div v-if="pending" class="notion">Loading...</div>
  <div v-else>
    <NotionRenderer :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" />
  </div>
  </div>
  
</template>