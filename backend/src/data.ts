export type BookingStatus = 'new' | 'confirmed' | 'review' | 'completed'

export type BookingRecord = {
  id: string
  fullName: string
  mobile: string
  pickupDate: string
  duration: string
  message: string
  status: BookingStatus
  createdAt: string
}

export const bookings: BookingRecord[] = [
  {
    id: 'bk_001',
    fullName: 'Maria Santos',
    mobile: '09175551212',
    pickupDate: '2026-08-03',
    duration: '3 Days',
    message: 'Pickup in Imus and return on the third day.',
    status: 'new',
    createdAt: '2026-07-25T09:00:00.000Z',
  },
  {
    id: 'bk_002',
    fullName: 'Juan Dela Cruz',
    mobile: '09171112222',
    pickupDate: '2026-08-06',
    duration: '1 Week',
    message: 'Needs delivery and driver documents uploaded.',
    status: 'confirmed',
    createdAt: '2026-07-24T11:30:00.000Z',
  },
]

export const customers = [
  { name: 'Maria Santos', contact: 'maria.santos@email.com', lastRental: '3 Days' },
  { name: 'Juan Dela Cruz', contact: '+63 917 555 1212', lastRental: '1 Week' },
  { name: 'Anna Reyes', contact: 'anna.reyes@email.com', lastRental: '1 Day' },
]

export const vehicle = {
  name: 'Toyota Vios',
  status: 'available' as const,
  location: 'Imus, Cavite',
  transmission: 'Automatic',
}
