<template>
  <section id="hero" class="">
    <UContainer class="
      flex flex-col
      md:flex-row
      w-full h-full
      basic-gradient
    "
    :ui="{ base: 'md:px-0 sm:px-0 lg:px-0' }"
    >
      <!-- Right column: nav + content -->
      <div class="w-full md:w-1/2 flex flex-col gap-4 md:order-2 order-1 ">
        <Header />
        <CTA class="flex-1 h-full" />
          <MainLine
          class="w-full h-auto mb-20 text-primary"
          />
      </div>


      <!-- Left column: photo -->
      <div class="w-full mb-8 md:mb-0 md:w-1/2 md:order-1 order-2">
        <NuxtImg src="/images/hero-photo.jpg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
          class="w-full h-full object-cover" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import MainLine from '~/assets/images/main-line.svg'
</script>

