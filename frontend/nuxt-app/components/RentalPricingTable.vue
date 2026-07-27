<template>
  <div class="glass-panel overflow-hidden rounded-3xl">
    <div class="border-b border-slate-900/10 px-6 py-5">
      <h3 class="text-xl font-semibold text-slate-900">Rental Price</h3>
      <p class="mt-1 text-sm text-slate-500">Simple packages for short and medium-term bookings.</p>
    </div>
    <div class="divide-y divide-slate-900/8">
      <div v-for="item in items" :key="item.duration" class="grid grid-cols-[1fr_auto] gap-4 px-6 py-4">
        <div>
          <p class="font-medium text-slate-900">{{ item.duration }}</p>
          <p class="text-sm text-slate-500">{{ item.note }}</p>
        </div>
        <p class="font-semibold text-teal-900">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    duration: string
    price: string
    note: string
  }>
}>()
</script>
