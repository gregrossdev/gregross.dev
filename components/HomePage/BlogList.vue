<template>
    <div class="container mx-auto">
      <header class="flex flex-col w-full p-4">
        <h2
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Articles
        </h2>
        <section class="flex flex-wrap gap-2">
          <button
            type="button"
            class="px-4 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Icon name="🤓" size="16" />
            <span class="ml-2">SWE</span>
          </button>
        </section>
      </header>
      <section class="flex flex-wrap p-4">
        <slot />
      </section>
    </div>
</template>
