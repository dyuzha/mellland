<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Telegram',
    to: 'https://ya.ru',
    color: 'primary',
    variant: 'solid',
    trailingIcon: 'i-simple-icons-telegram'
  },
  {
    label: 'Max',
    to: 'https://web.max.ru/112086828',
    color: 'secondary',
    variant: 'outline',
    trailingIcon: 'i-lucide-message-circle'
  },
  // {
  //   label: 'Instagram',
  //   to: 'https://ya.ru',
  //   color: 'primary',
  //   variant: 'soft',
  //   trailingIcon: 'i-lucide-camera'
  // },
])
</script>

<template>
  <UPageSection
    id="contacts"
    title="/ Мои контакты"
    orientation="horizontal"
    description="Идеальный результат терапии - когда вы забываете, зачем пришли к психологу."
    class="basic-gradient"
    :links="links"
  >

    <NuxtImg src="/images/pazl.jpeg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
      class="w-full h-full object-cover" />


  </UPageSection>
</template>
