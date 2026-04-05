<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Главная',
  },
  {
    label: 'Обо мне',
  },
  {
    label: 'Услуги',
  },
  {
    label: 'Образование',
  },
  {
    label: 'Контакты',
  }
])
</script>

<template>
  <UHeader
  mode='drawer'
  :ui="{
    root: 'bg-transparent backdrop-blur-none border-none static w-full  [&_*]:text-secondary'
  }"
  >
    <template #title>
      <NuxtImg
        src="/images/logo.png"
        ref="projectImage"
        format="webp"
        quality="80"
        class="h-6 mx-6"


        />
    </template>

    <UNavigationMenu :items="items" />


    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items"
      orientation="vertical"
      hightlight=true
      variant="link"
      class="
      flex flex-col items-center justify-center h-full text-center [&_*]:text-secondary"
      :ui="{
        link: 'text-2xl'
      }"
      />
    </template>

  </UHeader>
</template>
