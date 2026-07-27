<template>
  <section class="glass-panel rounded-[2rem] p-6 md:p-8">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-teal-800/70">Admin MVP</p>
        <h3 class="mt-2 font-display text-3xl text-slate-900">Simple dashboard for the owner</h3>
      </div>
      <NuxtLink class="rounded-full border border-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white" to="/admin">
        Open dashboard
      </NuxtLink>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-4">
      <div v-for="card in cards" :key="card.label" class="rounded-3xl bg-white/80 p-4 soft-border">
        <p class="text-sm text-slate-500">{{ card.label }}</p>
        <p class="mt-2 text-2xl font-bold text-slate-900">{{ card.value }}</p>
        <p class="mt-2 text-xs uppercase tracking-[0.2em] text-teal-800">{{ card.meta }}</p>
      </div>
    </div>

    <div class="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-3xl bg-slate-950 p-5 text-white">
        <p class="text-sm uppercase tracking-[0.25em] text-amber-300">Vehicle availability</p>
        <div class="mt-4 flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3">
          <div>
            <p class="font-semibold">Toyota Vios</p>
            <p class="text-sm text-slate-300">Automatic • Imus, Cavite</p>
          </div>
          <span class="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">Available</span>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div class="rounded-2xl bg-white/6 p-3">Booking requests<br><span class="text-white">3 pending</span></div>
          <div class="rounded-2xl bg-white/6 p-3">Payments<br><span class="text-white">1 awaiting</span></div>
        </div>
      </div>

      <div class="rounded-3xl bg-white/80 p-5 soft-border">
        <p class="text-sm uppercase tracking-[0.25em] text-teal-800">Quick actions</p>
        <div class="mt-4 space-y-3 text-sm text-slate-700">
          <div v-for="item in actions" :key="item" class="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span>{{ item }}</span>
            <span class="text-slate-400">›</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  { label: 'Requests', value: '12', meta: 'Pending review' },
  { label: 'Customers', value: '24', meta: 'Saved list' },
  { label: 'Revenue', value: '₱38k', meta: 'This month' },
  { label: 'Vehicle', value: '1', meta: 'Active unit' },
]

const actions = ['Login', 'Booking Requests', 'Calendar Availability', 'Customer List', 'Rental History', 'Payments']
</script>
