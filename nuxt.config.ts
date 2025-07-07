import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      title: 'Oleg Mikhailov',
      meta: [
        {
          name: 'description',
          content: "Oleg Mikhailov's Personal Portfolio"
        },
        {
          name: 'theme-color',
          content: '#111111'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, viewport-fit=cover'
        },
        { property: 'og:title', content: 'Oleg Mikhailov' },
        { property: 'og:description', content: 'Проекты, опыт и контакты' },
        { property: 'og:image', content: '/images/me.jpg' }
      ]
    }
  },
  
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