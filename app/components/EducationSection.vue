<script setup lang="ts">

import type { PageFeatureProps } from '@nuxt/ui'
import PictureLife from '~/assets/images/picture-life.svg'

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
  },
  {
    title: 'Московский институт психоанализа',
    description: 'Слушатель программы профессиональной переподготовки по направлению «Психология зависимого поведения»',
    icon: 'i-lucide-book-open',
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

   <PictureLife class="w-full" ref="Картина жизни" />

  </UPageSection>
</template>


<style scoped>

:deep(svg .fill-none-puzzle) {
  fill: var(--color-primary);
}

:deep(svg .stroke-puzzles) {
  stroke: var(--color-primary);
}

:deep(svg .dark .stroke-puzzles) {
  stroke: var(--color-secondary-900);
}

:deep(svg .stroke-man) {
  stroke: var(--color-black);
  stroke-width: 0.3;
}



</style>
