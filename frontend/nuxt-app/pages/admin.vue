<template>
  <div class="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside class="glass-panel rounded-[2rem] p-5">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <span class="font-display text-xl font-bold">U</span>
          </div>
          <div>
            <p class="font-display text-2xl font-semibold text-slate-900">UpaCar Admin</p>
            <p class="text-sm text-slate-500">Booking operations</p>
          </div>
        </div>

        <div class="mt-6 space-y-2">
          <button v-for="item in sidebarItems" :key="item" class="flex w-full items-center justify-between rounded-2xl bg-white/75 px-4 py-3 text-left text-sm font-medium text-slate-700 soft-border">
            <span>{{ item }}</span>
            <span class="text-slate-400">›</span>
          </button>
        </div>
      </aside>

      <main class="space-y-6">
        <section class="glass-panel rounded-[2rem] p-6 md:p-8">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-teal-800/70">Admin Login</p>
              <h1 class="mt-2 font-display text-4xl font-semibold text-slate-950">Simple dashboard for the owner</h1>
            </div>
            <span class="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">JWT-ready MVP</span>
          </div>

          <form class="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto]" @submit.prevent="login">
            <input v-model="credentials.email" class="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 focus:border-teal-700 focus:ring-4" placeholder="Admin email" type="email" />
            <input v-model="credentials.password" class="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none ring-teal-800/20 focus:border-teal-700 focus:ring-4" placeholder="Password" type="password" />
            <button class="rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white" type="submit">{{ loggedIn ? 'Logged in' : 'Log in' }}</button>
          </form>
          <p class="mt-3 text-sm text-slate-500">Demo credentials can be wired to the Express backend later. Current screen shows the operational layout.</p>
        </section>

        <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="glass-panel rounded-[1.75rem] p-5">
            <p class="text-sm text-slate-500">{{ stat.label }}</p>
            <p class="mt-2 text-3xl font-bold text-slate-950">{{ stat.value }}</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-teal-800">{{ stat.note }}</p>
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div class="glass-panel rounded-[2rem] p-6 md:p-8">
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-2xl font-semibold text-slate-950">Booking Requests</h2>
              <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">3 pending</span>
            </div>
            <div class="mt-5 space-y-3">
              <div v-for="booking in bookings" :key="booking.name" class="rounded-2xl bg-white/80 p-4 soft-border">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p class="font-semibold text-slate-900">{{ booking.name }}</p>
                    <p class="text-sm text-slate-500">{{ booking.date }} • {{ booking.duration }}</p>
                  </div>
                  <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="booking.statusClass">{{ booking.status }}</span>
                </div>
                <p class="mt-3 text-sm text-slate-600">{{ booking.message }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="glass-panel rounded-[2rem] p-6">
              <h2 class="text-2xl font-semibold text-slate-950">Calendar Availability</h2>
              <div class="mt-5 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span v-for="day in days" :key="day">{{ day }}</span>
              </div>
              <div class="mt-3 grid grid-cols-7 gap-2">
                <button v-for="slot in calendarSlots" :key="slot.day + slot.state" class="rounded-2xl px-2 py-3 text-sm font-semibold" :class="slot.state === 'available' ? 'bg-emerald-50 text-emerald-800' : slot.state === 'booked' ? 'bg-rose-100 text-rose-800' : 'bg-amber-50 text-amber-900'">
                  {{ slot.day }}
                </button>
              </div>
            </div>

            <div class="glass-panel rounded-[2rem] p-6">
              <h2 class="text-2xl font-semibold text-slate-950">Vehicle Availability</h2>
              <div class="mt-4 rounded-2xl bg-white/80 p-4 soft-border">
                <p class="font-semibold text-slate-900">Toyota Vios</p>
                <div class="mt-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Automatic • 5 Seater</span>
                  <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-2">
          <div class="glass-panel rounded-[2rem] p-6">
            <h2 class="text-2xl font-semibold text-slate-950">Customer List</h2>
            <div class="mt-4 space-y-3">
              <div v-for="customer in customers" :key="customer.name" class="rounded-2xl bg-white/80 p-4 soft-border">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-slate-900">{{ customer.name }}</p>
                    <p class="text-sm text-slate-500">{{ customer.contact }}</p>
                  </div>
                  <p class="text-sm font-medium text-slate-700">{{ customer.lastRental }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-panel rounded-[2rem] p-6">
            <h2 class="text-2xl font-semibold text-slate-950">Rental History & Payments</h2>
            <div class="mt-4 space-y-3">
              <div v-for="entry in history" :key="entry.label" class="rounded-2xl bg-white/80 p-4 soft-border">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-slate-900">{{ entry.label }}</p>
                    <p class="text-sm text-slate-500">{{ entry.detail }}</p>
                  </div>
                  <p class="font-semibold text-teal-900">{{ entry.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const loggedIn = ref(false)

const credentials = reactive({
  email: '',
  password: '',
})

const login = () => {
  loggedIn.value = true
}

const sidebarItems = ['Login', 'Booking Requests', 'Calendar Availability', 'Customer List', 'Rental History', 'Payments', 'Vehicle Availability']

const stats = [
  { label: 'Today', value: '5', note: 'Requests received' },
  { label: 'Pending', value: '3', note: 'Awaiting review' },
  { label: 'Available', value: '1', note: 'Active vehicle' },
  { label: 'Paid', value: '8', note: 'Completed bookings' },
]

const bookings = [
  { name: 'Maria Santos', date: 'Aug 3, 2026', duration: '3 Days', status: 'New', statusClass: 'bg-amber-50 text-amber-900', message: 'Pickup in Imus and return on the third day.' },
  { name: 'Juan Dela Cruz', date: 'Aug 6, 2026', duration: '1 Week', status: 'Confirmed', statusClass: 'bg-emerald-50 text-emerald-800', message: 'Needs delivery and driver documents uploaded.' },
  { name: 'Anna Reyes', date: 'Aug 10, 2026', duration: '1 Day', status: 'Review', statusClass: 'bg-sky-50 text-sky-800', message: 'Asking for late return flexibility for work travel.' },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const calendarSlots = [
  { day: '1', state: 'available' },
  { day: '2', state: 'available' },
  { day: '3', state: 'booked' },
  { day: '4', state: 'booked' },
  { day: '5', state: 'hold' },
  { day: '6', state: 'available' },
  { day: '7', state: 'available' },
  { day: '8', state: 'available' },
  { day: '9', state: 'available' },
  { day: '10', state: 'booked' },
  { day: '11', state: 'booked' },
  { day: '12', state: 'available' },
  { day: '13', state: 'available' },
  { day: '14', state: 'hold' },
]

const customers = [
  { name: 'Maria Santos', contact: 'maria.santos@email.com', lastRental: '3 Days' },
  { name: 'Juan Dela Cruz', contact: '+63 917 555 1212', lastRental: '1 Week' },
  { name: 'Anna Reyes', contact: 'anna.reyes@email.com', lastRental: '1 Day' },
]

const history = [
  { label: 'Rental History', detail: 'Completed trips and durations', value: '24 entries' },
  { label: 'Payments', detail: 'Reservation fees and balances', value: '₱38,000' },
]
</script>
