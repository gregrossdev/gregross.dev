<script lang="ts" setup>
import { useBlogStore} from "../stores/blog";
const blogStore = useBlogStore();

useHead({
  title: "Nuxt Content Blog Demo",
});

</script>

<template>
  <div>
    <!-- Blog List  -->
    <ContentList
        path="/posts"
        fields="title,date,thumbnail"
        :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
        v-slot="{ list }"
    >
      <!-- Blog Card  -->
      <UCard
          v-for="blog in list"
          :key="blog._path"
          class="blog-card bg-gray-200 dark:bg-gray-900 rounded-2xl overflow-hidden mb-4 "
          :class="{active: blogStore.activeArticle && article._id === blogStore.activeArticle._id}"
      >
        <figure class="h-[300px] relative">
          <img
              v-if="blog.thumbnail"
              :src="blog.thumbnail"
              :alt="blog.title"
              class="blog-thumbnail absolute w-full h-full object-cover"
          />
        </figure>

        <div class="blog-card--meta my-4 ml-4">
          <h2 class="blog-title text-2xl font-bold">
            <NuxtLink :to="blog.slug" @click="blogStore.setActiveArticle(article)">{{ blog.title }}</NuxtLink>
          </h2>
          <div class="text-sm text-gray-500 mt-px block">{{ blog.date }}</div>
          <div v-if="blog.tags" class="mt-2 text-xs">
            <UButton v-for="tag in blog.tags" class="mr-2">
              {{ tag }}
            </UButton>
          </div>
        </div>
      </UCard>
      <!-- ./ Blog Card  -->
    </ContentList>
    <!-- ./ Blog List  -->
  </div>
</template>

<style>
  .blog-thumbnail {
    view-transition-name: blog-thumbnail;
  }

  .blog-title {
    view-transition-name: blog-title;
  }
</style>