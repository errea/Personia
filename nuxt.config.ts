// https://nuxt.com/docs/api/configuration/nuxt-config

//import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;', // contains just variables/mixins/functions needed for components and global styles ( do not include any compilable css)
        },
      },
    },
  },
  // styleResources: {
  //   scss: ["~/assets/style/variables.scss"],
  // },

  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: ["@nuxtjs/style-resources"],
});
