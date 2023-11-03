<script setup lang="ts">
import ColorModeButton from "./components/ColorModeButton.vue";
</script>

<template>
  <div class="max-w-3xl px-4 mx-auto z-20">
    <header class="mt-8 mb-4 flex justify-between items-center bg-gray-200 dark:bg-gray-900 rounded p-4">
      <div>
        <h1 class="text-2xl font-semibold">
          <NuxtLink to="/">gregross.dev</NuxtLink>
        </h1>
      </div>

      <div class="flex items-center">
        <UButton label="Contact" />
        <ColorModeButton />
      </div>
    </header>

    <NuxtPage />
    <Particles />
  </div>
  

</template>

<style>
body {
  @apply bg-gray-100 text-sm text-primary-500 dark:text-primary-400;
}
</style>
