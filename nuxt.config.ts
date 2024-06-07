// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-file-storage', 'nuxt-swiper'],
  fileStorage: {
    mount: `public${process.env.STORAGE}`
  },
  ssr: false,
  content: {
    experimental: {
      clientDB: true
    }
  }
})
