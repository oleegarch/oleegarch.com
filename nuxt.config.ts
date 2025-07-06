import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-particles',
    'nuxt-swiper'
  ],

  components: [
    {
      path: '@/components/particles',
      pathPrefix: false
    },
    {
      path: '@/components',
      pathPrefix: true
    }
  ],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  particles: {
    mode: 'slim',
    lazy: true
  }
})