// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: 'layout', mode: 'in-out' }
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", ["vue3-notion/nuxt", { css: true }]]
})