<template>


  <UFooter :ui="{ center: 'border-none' }">

    <template #left>
      <p class="text-sm text-secondary">
        Built by
        <a href="https://dyuzha.ru" class="underline hover:text-primary">
          Matvey Dyuzhev
        </a>
      </p>
    </template>

        © {{ new Date().getFullYear() }}

    <template #right>
      <UButton to="https://t.me/safronovaya" target="_blank" icon="i-simple-icons-telegram" aria-label="Telegram"
        color="secondary" variant="ghost" />
    </template>
  </UFooter>
</template>
