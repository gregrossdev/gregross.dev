<template>
  <div class="max-w-3xl px-4 mx-auto">
    <header class="mt-8 mb-4 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-semibold">
          <NuxtLink to="/">Nuxt Blog</NuxtLink>
        </h1>
        <p class="text-gray-500">Simple blog powered by Nuxt Content</p>
      </div>

      <div class="flex items-center">
        <Btn>Contact</Btn>
        <ColorModeButton />
      </div>
    </header>

    <NuxtPage />

  </div>
</template>

<style>
body {
  @apply bg-gray-100 text-sm;
}
</style>
<script>
import ColorModeButton from "./components/ColorModeButton.vue";
export default {
  components: {ColorModeButton}
}
</script>