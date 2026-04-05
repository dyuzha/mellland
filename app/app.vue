<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

const title = 'Топ психолог'
const description = 'Онлайн консультации'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UApp :toaster="{ expand: false }">

    <UMain>
      <NuxtPage />
    </UMain>

  </UApp>
</template>
