// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-file-storage', 'nuxt-swiper', '@pinia/nuxt', 'nuxt-primevue', 'vue-yandex-maps/nuxt'],
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
  yandexMaps: {
    apikey: 'adfee31a-a4a1-4d70-8dd0-f070c95bab9b',
  },
  ssr: false,
})
