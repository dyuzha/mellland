<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Кубанский государственный университет',
    description: 'Профессиональная переподготовка по направлению «Психология»',
    icon: 'i-lucide-school',
    to: 'https://ya.ru'
  },
  {
    title: 'Московский психолого-социальный университет',
    description: 'Магистратура по специальности «Психология»',
    icon: 'i-lucide-graduation-cap',
    to: 'https://ya.ru'
  },
  {
    title: 'Ассоциация когнитивно-поведенческой психотерапии (АКПП)',
    description: 'Повышение квалификации по программе «Когнитивно-поведенческая терапия»\nЧлен Ассоциации когнитивно-поведенческой психотерапии (АКПП)',
    icon: 'i-lucide-university',
    to: 'https://ya.ru'
  }
])
</script>

<template>
  <UPageSection id="education" title="/ Моё образование"
    description="Постоянное обучение и повышение квалификации — основа качественной терапевтической работы"
    orientation="horizontal"
    :reverse=true
    :features="features" class="basic-gradient" :ui="{
      features: 'md:gap-5',
    }">

    <NuxtImg src="/images/education.jpeg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
      class="w-full h-full object-cover" />
  </UPageSection>
</template>
