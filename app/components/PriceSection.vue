<script setup lang="ts">
import type { PricingPlanProps } from "@nuxt/ui";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const plans = computed<PricingPlanProps[]>(() => [
  {
    title: "Индивидуальная терапия",
    description: "Личное пространство для ваших изменений",
    price: "3000₽",
    features: [
      "Конфиденциальность и безопасность",
      "Длительность сессии — 60 минут",
      "Гибкое расписание",
      "Инструменты для самостоятельной работы",
    ],
    button: {
      label: "Записаться",
      to: "#contacts",
    },
    variant: isDark.value ? "solid" : "outline",
  },

  {
    title: "Пакет на 5 сессий",
    price: "15000₽",
    discount: "12750₽",
    description: "Системный подход к изменениям",
    badge: {
      label: "-15%",
      color: "neutral",
    },

    scale: true,
    features: [
      "Конфиденциальность и безопасность",
      "Домашние задания между встречами",
      "Приоритет в расписании",
      "Индивидуальный план работы",
      "Длительность сессии — 60 минут",
    ],
    button: {
      label: "Начать менять свою жизнь",
      to: "#contacts",
    },
    variant: isDark.value ? "solid" : "outline",
  },

  {
    title: "Пакет на 10 сессий",
    description: "Глубокие и устойчивые изменения",
    price: "30000₽",
    discount: "24000₽",
    badge: {
      label: "-20%",
      color: "neutral",
    },
    features: [
      "Конфиденциальность и безопасность",
      "Домашние задания ",
      "Приоритет в расписании",
      "Глубокая проработка запросов",
      "Длительность сессии — 60 минут",
    ],
    button: {
      label: "Выбрать пакет на 10 сессий",
      to: "#contacts",
    },
    variant: isDark.value ? "solid" : "outline",
  },
]);
</script>

<template>
  <UPageSection
    id="price"
    title="/ Форматы консультаций"
    :ui="{
      title: 'text-left',
    }"
    class="bg-slate-600/20 dark:bg-elevated/80"
  >
    <UPricingPlans scale :plans="plans" class="font-sans2" />
  </UPageSection>
</template>
