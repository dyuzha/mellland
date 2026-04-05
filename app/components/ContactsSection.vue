<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Telegram',
    to: 'https://ya.ru',
    color: 'primary',
    variant: 'solid',
    trailingIcon: 'i-lucide-send-horizontal'
  },
  {
    label: 'Max',
    to: 'https://ya.ru',
    color: 'secondary',
    variant: 'outline',
    trailingIcon: 'i-lucide-message-circle'
  },
  {
    label: 'Instagram',
    to: 'https://ya.ru',
    color: 'primary',
    variant: 'soft',
    trailingIcon: 'i-lucide-camera'
  },
])
</script>

<template>
  <UPageSection
    title="/ Мои контакты"
    orientation="horizontal"
    description="Идеальный результат терапии - когда вы забываете, зачем пришли к психологу."
    class="basic-gradient"
    :links="links"
    :ui="{
      title: 'text-left text-secondary'
    }"
  >

    <NuxtImg src="/images/about-photo.jpg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
      class="w-full h-full object-cover" />


  </UPageSection>
</template>
