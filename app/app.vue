<script setup lang="ts">

// onMounted(() => {
//   document.documentElement.classList.add('light')
// })

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
  ],

  htmlAttrs: {
    lang: 'ru',
    // class: 'light'
  }
})

const title = 'Психолог Дарья Сафронова | КПТ-терапевт онлайн'
const description = 'КПТ-терапевт и психолог. Безопасное пространство, чтобы разобраться в себе и изменить жизнь. Онлайн-терапия. Первая встреча бесплатно.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
})
</script>

<template>
  <UApp :toaster="{ expand: false }">

    <UMain>
      <NuxtPage />
    </UMain>

  </UApp>
</template>
