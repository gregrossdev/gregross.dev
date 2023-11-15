<template>
  <div class="bg-white p-4">
    <p class="mb-2 font-semibold text-gray-500 md:mb-3 lg:text-lg">
      🚀 Introducing
    </p>

    <h2 class="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
      Greg Ross's Digital Space
    </h2>

    <p class="text-gray-500 md:text-lg">
      Launching into the Tech Cosmos: In this corner of the internet, I'm on
      a mission to demystify the wonders of technologies, unravel the secrets of
      coding patterns, and explore the ever-expanding universe of bits and
      bytes. From funky coding challenges to navigating through the labyrinth of
      the latest frameworks, strap in for a wild ride.
    </p>
  </div>
  <HomePageBlogList>
    <div v-if="pending">Loading ...</div>
    <div
      v-else
      v-for="{
        articleId,
        articleSlug,
        articleIcon,
        articleType,
        articleTitle,
      } in articles"
      :key="articleSlug"
      class="lg:w-1/3 md:w-1/2"
    >
      <article class="p-2 w-full">
        <NuxtLink
          :to="'/article/' + articleSlug"
          class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
        >
          <Icon
            :name="articleIcon"
            size="24"
            class="object-cover object-center flex-shrink-0 rounded-full mr-4"
          />
          <div class="flex-grow">
            <p class="text-gray-500">{{ articleType.toUpperCase() }}</p>
            <h2 class="text-gray-900 title-font font-medium">
              {{ articleTitle }}
            </h2>
          </div>
        </NuxtLink>
      </article>
    </div>
  </HomePageBlogList>
</template>

<script setup lang="ts">
const { pending, data: articles } = await useLazyFetch("/api/notion-cms");

// const state = reactive({
//   articles: [],
// });

// const res = await fetch("http://localhost:3000/api/notion-cms")

// res.json().then((articles) => {
//   console.log(articles);
//   state.articles = articles;
// });
</script>
