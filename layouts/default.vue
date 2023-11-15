<template>
  <div class="site">
    <header class="text-gray-600 body-font">
      <div class="p-4">
        <NuxtLink
          to="/"
          class="flex title-font font-medium items-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <h1 class="ml-3 text-xl">gregross.dev</h1>
        </NuxtLink>
      </div>
    </header>
    <main class="grow bg-gray-50 text-gray-600 body-font">
        <slot />
    </main>

    <footer class="text-gray-600 body-font align-bottom ">
      <div class="p-4">
        <NuxtLink
          to="/"
          class="flex title-font font-medium items-center md:justify-start text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">gregross.dev</span>
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>


<style>
.site {
  @apply min-h-screen flex flex-col max-w-3xl mx-auto;
}

</style>