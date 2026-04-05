<template>
  <UPageSection title="/ Мое образование"
    :ui="{
      title: 'text-left text-secondary'
    }"
    class="basic-gradient"
  >

        <!-- Список образования -->
        <div class="flex flex-col gap-8 md:gap-12">

          <!-- Карточка -->
          <div v-for="(item, index) in education" :key="index"
            class="
            gap-4 md:gap-6
            p-6
            border-b-1 border-primary
            rounded-lg md:rounded-none
          ">

            <div>
              <h3 class="text-xl md:text-2xl font-semibold text-primary">
                {{ item.school }}
              </h3>
              <p class="text-base md:text-lg text-gray-700">
                {{ item.degree }}
              </p>
            </div>

          </div>

        </div>

  </UPageSection>
</template>

<script setup lang="ts">
const education = [
  {
    school: 'Кубанский государственный университет',
    degree: 'Профессиональная переподготовка по направлению «Психология»'
  },
  {
    school: 'Московский психолого-социальный университет',
    degree: 'Магистратура по специальности «Психология»'
  },
  {
    school: 'Ассоциация когнитивно-поведенческой психотерапии (АКПП)',
    degree: 'Повышение квалификации по программе «Когнитивно-поведенческая терапия»\nЧлен Ассоциации когнитивно-поведенческой психотерапии (АКПП)'
  }
]
</script>
