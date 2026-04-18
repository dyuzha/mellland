<template>


  <UFooter :ui="{ center: 'border-none' }">

    <template #left>
      <p class="text-sm">
        Built by
        <a href="https://dyuzha.ru" class="underline hover:text-primary">
          Matvey Dyuzhev
        </a>
      </p>
    </template>

        © {{ new Date().getFullYear() }}

    <template #right>
      <UButton to="https://t.me/safronovaya" target="_blank" icon="i-simple-icons-telegram" aria-label="Telegram"
        variant="ghost" />
      <UButton to="https://web.max.ru/112086828" target="_blank" icon="i-lucide-message-circle" aria-label="Telegram"
        variant="ghost" />
    </template>
  </UFooter>
</template>
