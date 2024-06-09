// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-file-storage', 'nuxt-swiper', '@pinia/nuxt', '@plugins/v-mask.js'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ssr: false,
})
