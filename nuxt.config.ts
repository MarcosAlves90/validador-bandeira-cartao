// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()]
  }
})