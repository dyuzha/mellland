// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

  colorMode: {
    preference: 'light', // или 'dark'
    fallback: 'light'
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon-light.svg',
          media: '(prefers-color-scheme: light)'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon-dark.svg',
          media: '(prefers-color-scheme: dark)'
        }
      ]
    }
  },


  fonts: {
    provider: 'google'
  },

  devtools: {
    enabled: true
  },

  vite: {
    plugins: [svgLoader()]
  },


  // ui: {
  //   theme: {
  //     colors: [
  //       'primary',
  //       'secondary',
  //       'tertiary',
  //       'info',
  //       'success',
  //       'warning',
  //       'error',
  //       'coffie',
  //       'slate',
  //       'basic',
  //       'back',
  //       'gray',
  //     ]
  //   }
  // },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
