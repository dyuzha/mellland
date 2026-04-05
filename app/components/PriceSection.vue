<script setup lang="ts">
import type { PricingPlanProps } from '@nuxt/ui'

const isDark = useColorMode().value === 'dark'

const plans = ref<PricingPlanProps[]>([
  {
    title: 'Индивидуальная терапия',
    description: 'Личное пространство для ваших изменений',
    price: '2980₽',
    features: [
      'Конфиденциальность и безопасность',
      'Индивидуальный подход',
      'Длительность сессии — 60 минут',
      'Онлайн или очно',
      'Запись в удобное время'
    ],
    button: {
      label: 'Записаться',
      to: '#contancts',
    },
    variant: isDark ? 'subtle' : 'outline'
  },

  {
    title: '🎁 Первый шаг',
    description: 'Знакомство без обязательств',
    price: '1500₽',
    discount: 'Бесплатно',
    scale: true,
    features: [
      'Познакомимся и определим ваш запрос',
      'Длительность — 30 минут',
    ],
    button: {
      label: 'Начать менять свою жизнь',
      to: '#contancts',
    },
    variant: isDark ? 'subtle' : 'outline'
  },

  {
    title: 'Абонемент на 5 сессий',
    description: 'Системный подход к изменениям',
    price: '14900₽',
    discount: '12665₽',
    features: [
      'Экономия 15% от разовых сессий',
      'Гибкое расписание',
      'Домашние задания между встречами',
      'Поддержка в чате',
      'Длительность сессии — 60 минут'
    ],
    button: {
      label: 'Выбрать абонемент',
      to: '#contancts',
    },
    variant: isDark ? 'subtle' : 'outline'
  }
])


</script>

<template>

  <UPageSection id="price" title="/ Цены"
    :ui="{
      title: 'text-left text-secondary'
    }"
    class="basic-gradient"
  >
    <UPricingPlans scale :plans="plans" class="font-sans"/>
  </UPageSection>
</template>
