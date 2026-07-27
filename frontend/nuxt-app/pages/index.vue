<template>
  <div>
    <header class="sticky top-0 z-20 border-b border-white/40 bg-[#fffaf3]/88 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-950/10">
            <img src="/public/upacar-logo.jpg" alt="UpaCar logo" class="h-full w-full object-cover" />
          </div>
          <div>
            <p class="font-display text-xl font-bold text-slate-900">UpaCar</p>
            <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Imus, Cavite</p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#why">Why Us</a>
          <a href="#vehicle">Vehicle</a>
          <a href="#booking">Booking</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <a class="rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-900" href="#booking">
          Book Now
        </a>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <section class="grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            Daily • Weekly • Monthly Toyota Vios rental
          </div>

          <div class="space-y-5">
            <h1 class="font-display text-5xl font-semibold leading-tight text-slate-950 md:text-7xl">
              Affordable & Reliable Toyota Vios for Rent
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Clean, fuel-efficient, and ready for city trips or longer drives. Based in Imus, Cavite with simple booking and transparent pricing.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <div class="rounded-3xl bg-slate-950 px-5 py-4 text-white shadow-2xl shadow-slate-950/10">
              <p class="text-xs uppercase tracking-[0.24em] text-amber-300">Starting at</p>
              <p class="mt-1 font-display text-3xl font-semibold">₱1,500/day</p>
            </div>
            <div class="rounded-3xl bg-white/80 px-5 py-4 soft-border">
              <p class="text-xs uppercase tracking-[0.24em] text-teal-800">Location</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">Imus, Cavite</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <a class="rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-900" href="#booking">Book Now</a>
            <a class="rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white" href="#vehicle">See Vehicle</a>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-x-8 top-8 h-full rounded-[2.5rem] bg-teal-950/10 blur-3xl"></div>
          <section class="glass-panel relative overflow-hidden rounded-[2.5rem] p-6 md:p-8">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.26em] text-teal-800/70">Featured vehicle</p>
                <h2 class="mt-2 font-display text-4xl font-semibold text-slate-950">Toyota Vios</h2>
              </div>
              <span class="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">Available</span>
            </div>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div v-for="item in vehicleHighlights" :key="item" class="rounded-2xl bg-white/75 px-4 py-3 soft-border">
                <p class="text-sm font-medium text-slate-700">{{ item }}</p>
              </div>
            </div>

            <div class="mt-6 rounded-[2rem] bg-slate-950 p-5 text-white">
              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <p class="text-sm uppercase tracking-[0.24em] text-amber-300">Rental package</p>
                  <p class="mt-2 text-3xl font-semibold">₱1,500/day</p>
                  <p class="mt-2 text-sm text-slate-300">Great for errands, family trips, and point-to-point use.</p>
                </div>
                <div class="rounded-3xl bg-white/6 p-4">
                  <p class="text-sm uppercase tracking-[0.24em] text-teal-200">What’s included</p>
                  <ul class="mt-3 space-y-2 text-sm text-slate-200">
                    <li v-for="feature in includedFeatures" :key="feature">• {{ feature }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="why" class="section-shell py-16">
        <SectionHeading
          eyebrow="Why Choose UpaCar"
          title="Simple, practical, and budget-friendly rental experience"
          description="The MVP focuses on one dependable vehicle and a smooth booking process so the owner can manage requests without operational clutter."
        />

        <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="feature in whyChooseUs" :key="feature.title" :icon="feature.icon" :title="feature.title" :description="feature.description" />
        </div>
      </section>

      <section id="vehicle" class="grid gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-6">
          <SectionHeading
            eyebrow="Featured Vehicle"
            title="Toyota Vios"
            description="A reliable automatic sedan with the essentials for daily comfort and efficient travel."
          />

          <div class="glass-panel rounded-3xl p-6">
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div v-for="spec in specs" :key="spec.label" class="rounded-2xl bg-white/80 p-4 soft-border">
                <p class="text-sm text-slate-500">{{ spec.label }}</p>
                <p class="mt-1 font-semibold text-slate-900">{{ spec.value }}</p>
              </div>
            </div>
          </div>

          <div class="glass-panel rounded-3xl p-6">
            <h3 class="text-xl font-semibold text-slate-900">Booking Process</h3>
            <ol class="mt-4 grid gap-3 md:grid-cols-2">
              <li v-for="(step, index) in bookingSteps" :key="step" class="rounded-2xl bg-white/80 p-4 soft-border">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Step {{ index + 1 }}</p>
                <p class="mt-2 text-sm leading-6 text-slate-700">{{ step }}</p>
              </li>
            </ol>
          </div>
        </div>

        <div class="space-y-6">
          <RentalPricingTable :items="pricing" />
          <div class="glass-panel rounded-3xl p-6">
            <h3 class="text-xl font-semibold text-slate-900">Rental Requirements</h3>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl bg-white/80 p-4 soft-border">
                <p class="font-semibold text-slate-900">For Filipino Citizens</p>
                <ul class="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                  <li v-for="item in filipinoRequirements" :key="item">• {{ item }}</li>
                </ul>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 soft-border">
                <p class="font-semibold text-slate-900">For Foreigners</p>
                <ul class="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                  <li v-for="item in foreignerRequirements" :key="item">• {{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" class="grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="space-y-6">
          <SectionHeading
            eyebrow="Book a car"
            title="Quick booking request"
            description="Capture the essentials up front so the owner can respond fast and keep the single vehicle calendar clear."
          />

          <div class="glass-panel rounded-3xl p-6">
            <h3 class="text-xl font-semibold text-slate-900">Rental Terms</h3>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li v-for="term in rentalTerms" :key="term" class="rounded-2xl bg-white/70 px-4 py-3 soft-border">• {{ term }}</li>
            </ul>
          </div>
        </div>

        <BookingForm />
      </section>

      <section class="grid gap-8 py-16 lg:grid-cols-[1fr_0.95fr]">
        <div class="space-y-6">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Short and clear social proof"
            description="The initial version only needs a few strong reviews to build trust."
          />

          <div class="grid gap-4">
            <article v-for="review in reviews" :key="review.author" class="glass-panel rounded-3xl p-6">
              <p class="text-amber-500">{{ review.stars }}</p>
              <p class="mt-3 text-base leading-7 text-slate-700">“{{ review.text }}”</p>
              <p class="mt-4 text-sm font-semibold text-slate-900">{{ review.author }}</p>
            </article>
          </div>
        </div>

        <div id="faq" class="space-y-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Fast answers for first-time renters"
          />

          <div class="space-y-4">
            <details v-for="item in faqs" :key="item.question" class="glass-panel rounded-3xl p-5 open:shadow-xl">
              <summary class="cursor-pointer list-none text-base font-semibold text-slate-900">{{ item.question }}</summary>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" class="grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="glass-panel rounded-[2rem] p-6 md:p-8">
          <SectionHeading eyebrow="Contact" title="Reach UpaCar" description="The MVP keeps the contact surface simple so renters can move straight into booking." />
          <div class="mt-6 space-y-4 text-slate-700">
            <p class="rounded-2xl bg-white/75 px-4 py-3 soft-border">📍 Imus, Cavite</p>
            <p class="rounded-2xl bg-white/75 px-4 py-3 soft-border">📞 Mobile Number</p>
            <p class="rounded-2xl bg-white/75 px-4 py-3 soft-border">💬 Facebook Messenger</p>
            <p class="rounded-2xl bg-white/75 px-4 py-3 soft-border">📧 Email</p>
          </div>
        </div>

        <div class="space-y-6">
          <AdminPreview />
          <div class="glass-panel rounded-[2rem] p-6 md:p-8">
            <SectionHeading eyebrow="Future Features" title="Version 2 roadmap" />
            <div class="mt-6 grid gap-3 md:grid-cols-2">
              <div v-for="feature in futureFeatures" :key="feature" class="rounded-2xl bg-white/80 px-4 py-3 soft-border text-sm font-medium text-slate-700">
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const vehicleHighlights = ['Automatic Transmission', '5 Seater', 'Air Conditioning', 'Bluetooth Audio', 'Fuel Efficient', 'Spacious Trunk']

const includedFeatures = ['Comprehensive insurance', 'Clean and sanitized interior', 'USB charging', 'Owner support during rental']

const whyChooseUs = [
  { icon: '₱', title: 'Affordable Rates', description: 'Straightforward pricing designed for daily errands, family outings, and business trips.' },
  { icon: '✓', title: 'Well-maintained Vehicle', description: 'The Toyota Vios is kept clean, inspected, and ready for short or longer bookings.' },
  { icon: '⛽', title: 'Fuel Efficient', description: 'The sedan is practical for city runs and longer drives without unnecessary fuel costs.' },
  { icon: '🧼', title: 'Clean & Sanitized', description: 'The cabin is prepared before every booking so renters start from a fresh vehicle.' },
  { icon: '⏱', title: 'Flexible Duration', description: 'Choose between day, weekly, and monthly rental options depending on your schedule.' },
  { icon: '💬', title: 'Easy Booking Process', description: 'Send a request, wait for confirmation, upload documents, and pick up or arrange delivery.' },
]

const specs = [
  { label: 'Transmission', value: 'Automatic' },
  { label: 'Capacity', value: '5 Seater' },
  { label: 'Air Conditioning', value: 'Included' },
  { label: 'Connectivity', value: 'Bluetooth + USB' },
  { label: 'Cargo', value: 'Spacious Trunk' },
  { label: 'Coverage', value: 'Comprehensive Insurance' },
]

const pricing = [
  { duration: '1 Day', price: '₱1,500', note: 'Best for short trips and errands' },
  { duration: '3 Days', price: '₱4,200', note: 'Ideal for family outings or out-of-town use' },
  { duration: '1 Week', price: '₱9,500', note: 'Good value for recurring transport needs' },
  { duration: '1 Month', price: 'Contact Us', note: 'Custom monthly arrangement available' },
]

const bookingSteps = [
  'Choose your rental dates.',
  'Submit your booking request.',
  'Wait for confirmation.',
  'Upload your driver’s license.',
  'Pay the reservation fee.',
  'Pick up the vehicle or request delivery.',
]

const filipinoRequirements = ['Valid Driver’s License', 'One Government ID', 'Security Deposit', 'Signed Rental Agreement']
const foreignerRequirements = ['Passport', 'International Driver’s Permit', 'Hotel Address', 'Security Deposit']

const rentalTerms = [
  'Minimum 1-day rental',
  'No smoking inside the vehicle',
  'Return with the same fuel level',
  'Late return fees may apply',
  'Report accidents immediately',
]

const reviews = [
  { stars: '⭐⭐⭐⭐⭐', text: 'Very smooth transaction. Clean Toyota Vios and affordable price.', author: 'Customer review' },
  { stars: '⭐⭐⭐⭐⭐', text: 'Easy booking and friendly owner.', author: 'Customer review' },
]

const faqs = [
  { question: 'Is there a security deposit?', answer: 'Yes.' },
  { question: 'Can the car be delivered?', answer: 'Yes, within selected areas.' },
  { question: 'Is there a mileage limit?', answer: 'Depends on the rental package.' },
]

const futureFeatures = ['Multiple vehicles', 'Online payment via GCash, Maya, and cards', 'Driver add-on', 'Google Maps pickup location', 'Real-time availability calendar', 'Promo codes', 'Customer accounts', 'Booking history', 'Email and SMS notifications', 'Analytics dashboard']
</script>
