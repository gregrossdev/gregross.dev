// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@pinia/nuxt'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue', 'kotlin', 'rust', 'go']
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
          [
              'rehype-external-links',
              {
                  target: '_blank',
                  rel: 'noopener noreferer'
              }
          ]
      ]
  }
  },
  image: {
    // Options
  },
  experimental: {
    jsTsFormatResource: true,
    viewTransition: true,
  },
  ui: {
    primary: 'green',
    gray: 'cool'
  }
})