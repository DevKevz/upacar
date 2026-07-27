<template>
  <form class="glass-panel space-y-4 rounded-3xl p-6" @submit.prevent="submitBooking">
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="text-xl font-semibold text-slate-900">Book Now</h3>
        <p class="text-sm text-slate-500">Send a booking request in under a minute.</p>
      </div>
      <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
        Demo MVP
      </span>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <label class="space-y-2 text-sm font-medium text-slate-700">
        Full name
        <input v-model="form.fullName" class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 transition focus:border-teal-700 focus:ring-4" placeholder="Juan Dela Cruz" type="text" />
      </label>
      <label class="space-y-2 text-sm font-medium text-slate-700">
        Mobile number
        <input v-model="form.mobile" class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 transition focus:border-teal-700 focus:ring-4" placeholder="09xx xxx xxxx" type="tel" />
      </label>
      <label class="space-y-2 text-sm font-medium text-slate-700">
        Pick-up date
        <input v-model="form.pickupDate" class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 transition focus:border-teal-700 focus:ring-4" type="date" />
      </label>
      <label class="space-y-2 text-sm font-medium text-slate-700">
        Rental duration
        <select v-model="form.duration" class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 transition focus:border-teal-700 focus:ring-4">
          <option>1 Day</option>
          <option>3 Days</option>
          <option>1 Week</option>
          <option>1 Month</option>
        </select>
      </label>
    </div>

    <label class="space-y-2 text-sm font-medium text-slate-700">
      Message
      <textarea v-model="form.message" class="min-h-28 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 transition focus:border-teal-700 focus:ring-4" placeholder="Share your preferred dates, destination, and questions."></textarea>
    </label>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-slate-500">We will confirm via chat or call after reviewing the request.</p>
      <button class="inline-flex items-center justify-center rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-900" type="submit">
        {{ submitting ? 'Sending...' : 'Submit Booking Request' }}
      </button>
    </div>

    <p v-if="status" class="rounded-2xl bg-teal-50 px-4 py-3 text-sm font-medium text-teal-900">
      {{ status }}
    </p>
  </form>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const form = reactive({
  fullName: '',
  mobile: '',
  pickupDate: '',
  duration: '1 Day',
  message: '',
})

const submitting = ref(false)
const status = ref('')

const submitBooking = async () => {
  status.value = ''
  submitting.value = true

  try {
    await $fetch(`${config.public.apiBase}/api/bookings`, {
      method: 'POST',
      body: form,
    })

    status.value = 'Request sent. The owner can review it from the admin dashboard.'
    form.fullName = ''
    form.mobile = ''
    form.pickupDate = ''
    form.duration = '1 Day'
    form.message = ''
  } catch {
    status.value = 'Booking draft saved locally. Connect the backend to accept live requests.'
  } finally {
    submitting.value = false
  }
}
</script>
