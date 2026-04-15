<script setup lang="ts">
import type { PricingPlanProps } from '@nuxt/ui'

const isDark = useColorMode().value === 'dark'

const plans = ref<PricingPlanProps[]>([
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
    variant: isDark ? 'subtle' : 'outline'
  },

  {
    title: 'Начни бесплатно',
    description: 'Познакомимся и определим ваш запрос',
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
    variant: isDark ? 'subtle' : 'outline'
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
      'Поддержка в чате',
      'Приоритет в расписании',
      'Длительность сессии — 60 минут'
    ],
    button: {
      label: 'Начать изменения выгодно',
      to: '#contacts',
    },
    variant: isDark ? 'subtle' : 'outline'
  }
])


</script>

<template>

  <UPageSection id="price" title="/ Тарифы"
    :ui="{
      title: 'text-left'
    }"
    class="basic-gradient"
  >
    <UPricingPlans scale :plans="plans" class="font-sans"/>
  </UPageSection>
</template>
