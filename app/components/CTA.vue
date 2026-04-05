<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Записаться',
    variant: 'subtle',
    color: 'primary',
    trailingIcon: 'i-lucide-arrow-right',
    href: '#contacts'
  }
])
</script>

<template>
  <UPageSection
  title="Сафронова Дарья"
  description="КПТ терапевт"
  headline="Психолог"
  variant="naked"
  :links="links"
  :ui="{
    wrapper: 'h-full flex flex-col',
  }" />

</template>
