// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      baseURL: "/",
    },
  devtools: { enabled: false },
  css: ['~/assets/css/app.scss',
  "bootstrap-icons/font/bootstrap-icons.scss"]

})
