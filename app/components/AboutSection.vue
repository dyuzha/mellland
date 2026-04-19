<template>
  <section class="basic-gradient max-h-full" id="about">
    <UContainer class="p-0 md:py-4 sm:py-6 lg:py-8">
      <UPageSection title="/ Обо мне" orientation="horizontal" class="grain-accented" :ui="{
        title: 'md:pb-10',
        features: 'md:pb-10 ',
      }">
        <template #features>

          <div class="**:text-toned **:md:text-xl flex flex-col gap-5">
            <UPageFeature
              description="Меня зовут Дарья, я практикующий когнитивно-поведенческий терапевт, член Ассоциации когнитивно-поведенческой психотерапии." />

            <UPageFeature
              description="Регулярно прохожу супервизию, участвую в интервизиях." />

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
                text-dimmed
              ">“</span>
            <p class="
              text-xl text-toned ">Психолог временно держит вас за руку, чтобы вы научились идти уверенно сами.</p>
          </div>
        </template>

        <NuxtImg src="/images/about-photo.jpg" alt="Психолог Дарья Сафронова" format="webp" quality="80"
          class="w-full h-full object-cover" />

      </UPageSection>

    </UContainer>
  </section>

</template>
