<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

import Hands from '~/assets/images/hands.svg'

const links = ref<ButtonProps[]>([
  {
    label: 'Telegram',
    to: 'https://t.me/safronovaya',
    variant: 'solid',
    trailingIcon: 'i-simple-icons-telegram'
  },
  {
    label: 'Max',
    to: 'https://max.ru/u/f9LHodD0cOIuT-KHYMWYUDXnTB_3UEyenptnv5HmCJQbjibH6GjkNg1LSEc',
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


   <Hands class="w-full" ref="Дарья Сафронова" />


  </UPageSection>
</template>

<style scoped>

:deep(svg .fill-right-puzzle) {
  fill: var(--color-secondary);
}

:deep(svg .fill-left-puzzle) {
  fill: var(--color-primary);
}

:deep(svg .fill-main) {
  fill: var(--color-hand-500);
}

:deep(svg .fill-dark) {
  fill: var(--color-hand-800);
}

:deep(svg .fill-light) {
  fill: var(--color-hand-300);
}


</style>
