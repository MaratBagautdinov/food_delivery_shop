// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-file-storage', 'nuxt-swiper', '@pinia/nuxt', 'nuxt-primevue'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  primevue: {
    options: {
      unstyled: true
    },
    components: {
      include: ['InputMask']
    }
  },
  ssr: false,
})
