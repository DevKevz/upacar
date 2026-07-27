<template>
  <article class="glass-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-800 text-white shadow-lg shadow-teal-950/15">
      <span class="text-lg font-bold">{{ icon }}</span>
    </div>
    <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
