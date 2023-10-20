// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@pinia/nuxt'],
  content: {
    // ... options
  },
  image: {
    // Options
  },
  experimental: {
    jsTsFormatResource: true,
    viewTransition: true,
  },
})