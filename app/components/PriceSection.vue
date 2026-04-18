<script setup lang="ts">
import type { PricingPlanProps } from '@nuxt/ui'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')


const plans = computed<PricingPlanProps[]>(() => [
  {
    title: 'Индивидуальная терапия',
    description: 'Личное пространство для ваших изменений',
    price: '2100₽',
    features: [
      'Конфиденциальность и безопасность',
      'Длительность сессии — 60 минут'
    ],
    button: {
      label: 'Записаться',
      to: '#contacts',
    },
    variant: isDark.value ? 'solid' : 'outline',
  },

  {
    title: 'Начни бесплатно',
    price: '1500₽',
    discount: 'Free',
    scale: true,
    features: [
      'Познакомимся и определим ваш запрос',
      'Длительность сессии — 30 минут',
    ],
    button: {
      label: 'Начать менять свою жизнь',
      to: '#contacts',
    },
    variant: isDark.value ? 'solid' : 'outline',
  },

  {
    title: 'Абонемент на 5 сессий',
    description: 'Системный подход к изменениям',
    price: '10500₽',
    discount: '8925₽',
    features: [
      'Конфиденциальность и безопасность',
      'Экономия 15%',
      'Домашние задания между встречами',
      'Приоритет в расписании',
      'Длительность сессии — 60 минут'
    ],
    button: {
      label: 'Начать изменения выгодно',
      to: '#contacts',
    },
    variant: isDark.value ? 'solid' : 'outline',
  }
])


</script>

<template>

  <UPageSection id="price" title="/ Форматы консультаций"
    :ui="{
      title: 'text-left'
    }"
    class="bg-slate-600/20 dark:bg-elevated/80"
  >
    <UPricingPlans scale :plans="plans" class="font-sans2"/>
  </UPageSection>
</template>
