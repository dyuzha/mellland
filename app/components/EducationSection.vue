<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Кубанский государственный университет',
    description: 'Профессиональная переподготовка по направлению «Психология»',
    icon: 'i-lucide-school',
  },
  {
    title: 'Московский психолого-социальный университет',
    description: 'Магистратура по специальности «Психология»',
    icon: 'i-lucide-graduation-cap',
  },
  {
    title: 'Ассоциация когнитивно-поведенческой психотерапии (АКПП)',
    description: 'Повышение квалификации по программе «Когнитивно-поведенческая терапия»',
    icon: 'i-lucide-university',
  }
])
</script>

<template>
  <UPageSection id="education" title="/ Моё образование"
    class="basic-gradient"
    description="Постоянное обучение и повышение квалификации — основа качественной терапевтической работы"
    orientation="horizontal"
    :reverse=true
    :features="features"
    :ui="{
      features: 'md:gap-5',
    }">

    <NuxtImg src="/images/education.jpeg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
      class="w-full h-full object-cover" />
  </UPageSection>
</template>
