<template>
  <div class="space-y-3">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.28em] text-teal-800/75">
      {{ eyebrow }}
    </p>
    <div class="space-y-3">
      <h2 class="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
        {{ title }}
      </h2>
      <p v-if="description" class="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>
