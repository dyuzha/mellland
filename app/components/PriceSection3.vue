<template>

  <UPageSection title="/ 3"
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
          variant="outline"
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
            root: 'bg-primary [&_*]:text-secondary'
          }"
        />

        <UPricingPlan
          title="🎁 Первый шаг"
          description="Знакомство без обязательств"
          price="Бесплатно"
          variant="soft"
          scale="true"
          :features="[
            'Познакомимся и определим ваш запрос',
            'Установочная встреча',
            'Длительность — 30 минут',
          ]"
          :button="{
            label: 'Начать менять свою жизнь'
          }"
          :ui="{
            root: 'bg-primary/80',
            // root: 'bg-primary/40 ring-10 ring-primary',
            body: '[&_*]:text-secondary',
            footer: '[&_*]:text-secondary',
            button: 'bg-white'
          }"
        />

        <UPricingPlan
          title="Абонемент на 5 сессий"
          description="Системный подход к изменениям"
          price="14900₽"
          discount="12665₽"
          variant="subtle"
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
          :ui="{
            root: 'bg-basic-gradient',
            body: '[&_*]:text-secondary',
          }"
        />


    </UPricingPlans>

  </UPageSection>
</template>
