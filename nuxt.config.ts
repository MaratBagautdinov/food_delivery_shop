// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-file-storage'],
  fileStorage: {
    mount: `${process.env.ROOT_PUBLIC_PATH}${process.env.STORAGE}`
  },
})
