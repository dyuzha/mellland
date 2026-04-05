<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([

  {
    description: 'Меня зовут Дарья, я практикующий когнитивно-поведенческий терапевт, член Ассоциации когнитивно-поведенческой психотерапии.',
    // icon: 'i-lucide-handshake',
  },
  {
    description: 'Моя работа строится на уважении к личности - её уникальности, ценности и достоинству - и на создании безопасного, доверительного пространства.',
    // icon: 'i-lucide-handshake',
  },
  {
    description: 'Индивидуально. По-настоящему. На основе того, что работает. Я помогаю вам строить жизнь, в которой вы чувствуете себя целостно.',
    // icon: 'i-lucide-user-pen',
  }
])
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 basic-gradient" id="about">

    <UPageSection title="/ Обо мне" orientation="horizontal" class="grain " :ui="{
      title: 'text-secondary md:pb-10',
      description: 'text-secondary',
      features: 'md:pb-10 ',
    }">
      <template #features>

        <div class="**:text-secondary **:md:text-xl flex flex-col gap-5">
          <UPageFeature
            description="Меня зовут Дарья, я практикующий когнитивно-поведенческий терапевт, член Ассоциации когнитивно-поведенческой психотерапии." />

          <UPageFeature description="Психолог временно держит вас за руку, чтобы вы научились идти уверенно сами." />

          <UPageFeature
            description="Моя работа строится на уважении к личности - её уникальности, ценности и достоинству - и на создании безопасного, доверительного пространства." />
        </div>

      </template>

      <template #footer>
        <div class="
              mt-6 relative
              pl-10 py-10
              italic
            ">
          <span class="
                absolute
                top-0 left-6
                text-8xl
                font-sans-head
                text-gray-50/40
              ">“</span>
          <p class="
              text-xl text-secondary">Психолог временно держит вас за руку, чтобы вы научились идти уверенно сами.</p>
        </div>
      </template>

      <NuxtImg src="/images/about-photo.jpg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
        class="w-full h-full object-cover" />

    </UPageSection>
  </div>
</template>
