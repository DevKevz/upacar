export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'UpaCar | Toyota Vios Rental in Imus, Cavite',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/upacar-icon.ico' }],
      meta: [
        { name: 'description', content: 'UpaCar MVP for renting a Toyota Vios in Imus, Cavite with simple booking and admin dashboard.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'http://localhost:4000',
    },
  },
})
