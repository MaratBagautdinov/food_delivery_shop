// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-file-storage', 'nuxt-swiper', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ssr: false,
})
