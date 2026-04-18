<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

import Logo from '~/assets/images/logo.svg'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Обо мне',
    to: '#about',
    // icon: 'i-lucide-info'
  },
  {
    label: 'Запросы',
    to: '#work',
    // icon: 'i-lucide-briefcase-business',
  },
  {
    label: 'Образование',
    to: '#education',
    // icon: 'i-lucide-graduation-cap',
  },
  {
    // label: 'Форматы консультаций',
    label: 'Форматы',
    to: '#price',
    // icon: 'i-lucide-russian-ruble',
  },
  {
    label: 'Контакты',
    to: '#contacts',
    // icon: 'i-lucide-contact',
  }
])
</script>

<template>
  <UHeader
  mode='modal'
  :ui="{
    root: 'bg-transparent backdrop-blur-none border-none static w-full'
  }"
  >
    <template #title>
      <Logo class="h-6 w-6 text-highlighted dark:text-primary" ref="Дарья Сафронова" />
    </template>

    <UNavigationMenu
    :items="items"
    :ui="{
      // linkLabel: 'break-words whitespace-normal min-w-0',
    }"
    class=""/>


    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items"
      orientation="vertical"
      hightlight=true
      variant="link"
      class="flex flex-col items-center justify-center h-full text-center"
      :ui="{
        link: 'text-2xl'
      }"
      />
    </template>

  </UHeader>
</template>
