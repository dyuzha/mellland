<template>
    <UPageSection
    id="work"
    title="/ Запросы, с которыми я работаю"
    class=""
    :ui="{
      title: 'text-left'
    }"
    >

      <div class="flex items-center gap-8 @container">
        <!-- Сетка -->
        <ul class="
            grid mx-auto min-w-0 w-full
            grid-cols-1 gap-4
            sm:grid-cols-2 sm:gap-0
            md:grid-cols-3 md:-gap-0
            max-w-5xl
            auto-rows-fr
            ">
          <li v-for="(item, index) in workItems" :key="item.id" class="
              flex
              items-center justify-center text-center
              md:border-3 sm:border-3 border border-primary
              bg-transparent w-full rounded-xl
              p-4
              sm:aspect-square sm:rounded-full sm:text-base sm:p-8
              md:aspect-square md:rounded-full md:text-[2cqw] md:p-8 lg:p-8
          " :class="getOverlap(index)">
            {{ item.label }}
          </li>
        </ul>

      </div>
    </UPageSection>
</template>

<script setup lang="ts">
const workItems = [
  { id: 1, label: 'Тревога, паника и страхи' },
  { id: 2, label: 'Сниженное настроение и апатия' },
  { id: 3, label: 'Прокрастинация и тайм-менеджмент' },
  { id: 4, label: 'Жизненные кризисы и адаптация' },
  { id: 5, label: 'Самооценка и перфекционизм' },
  { id: 6, label: 'Выгорание и личные границы' },
]

// Для десктопа добавляем небольшой overlap через отрицательные margin
function getOverlap(index: number) {
  const overlapClasses = [
    'md:mt-0  md:ml-3   sm:mt-0  sm:ml-2  ',
    'md:mt-0  md:-ml-0  sm:mt-0  sm:-ml-2 ',
    'md:mt-0  md:-ml-3  sm:-mt-4 sm:ml-2  ',
    'md:-mt-3 md:ml-3   sm:-mt-4 sm:-ml-2 ',
    'md:-mt-3 md:ml-0   sm:-mt-4 sm:ml-2  ',
    'md:-mt-3 md:-ml-3  sm:-mt-4 sm:-ml-2 ',
  ]
  return overlapClasses[index] || ''
}
</script>
