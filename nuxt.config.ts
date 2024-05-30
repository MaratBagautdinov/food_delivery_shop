// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
        port: 5432, // Redis port
        host: "127.127.126.49", // Redis host
        username: "postgres", // needs Redis >= 6
        password: "postgres",
        db: "postgres",
        tls: {} // tls/ssl
      }
    }
  }
})
