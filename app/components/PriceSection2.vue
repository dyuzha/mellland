<script setup lang="ts">
import type { PricingPlanProps } from '@nuxt/ui'

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
      label: 'Записаться'
    }
  },

  {
    title: '🎁 Первый шаг',
    description: 'Знакомство без обязательств',
    price: 'Бесплатно',
    scale: true,
    features: [
      'Познакомимся и определим ваш запрос',
      'Длительность — 30 минут',
    ],
    button: {
      label: 'Начать менять свою жизнь'
    }
  },

  {
    title: 'Абонемент на 5 сессий',
    description: 'Системный подход к изменениям',
    price: '9950₽',
    features: [
      'Экономия 15% от разовых сессий',
      'Гибкое расписание',
      'Домашние задания между встречами',
      'Поддержка в чате',
      'Длительность сессии — 60 минут'
    ],
    button: {
      label: 'Выбрать абонемент'
    }
  }
])



</script>

<template>

  <UPageSection title="/ 2"
    :ui="{
      title: 'text-left text-secondary'
    }"
    class="basic-gradient"
  >
    <UPricingPlans scale class="font-sans-ui">

        <UPricingPlan
          title="Индивидуальная терапия"
          description="Личное пространство для ваших изменений"
          price="2980₽"
          variant="soft"
          :features="[
            'Конфиденциальность и безопасность',
            'Индивидуальный подход',
            'Длительность сессии — 60 минут',
            'Онлайн или очно',
            'Запись в удобное время'
          ]"
          :button="{
            label: 'Записаться'
          }"
          :ui="{

          }"
        />

        <UPricingPlan
          title="🎁 Первый шаг"
          description="Знакомство без обязательств"
          price:='1500₽'
          discount="Бесплатно"
          variant="soft"
          scale="true"
          :features="[
            'Познакомимся и определим ваш запрос',
            'Длительность — 30 минут',
          ]"
          :button="{
            label: 'Начать менять свою жизнь'
          }"

          :ui="{
            // root: 'bg-primary/40 ring-10 ring-primary',
            body: '[&_*]:text-secondary',
            footer: '[&_*]:text-white',
            // button: 'bg-white'
          }"
        />

        <UPricingPlan
          title="Абонемент на 5 сессий"
          description="Системный подход к изменениям"
          price='14900₽'
          discount='12665₽'
          variant="soft"
          :features="[
            'Экономия 15% от разовых сессий',
            'Гибкое расписание',
            'Домашние задания между встречами',
            'Поддержка в чате',
            'Длительность сессии — 60 минут'
          ]"
          :button="{
            label: 'Выбрать абонемент'
          }"
        />


    </UPricingPlans>

  </UPageSection>
</template>
