import { Router } from 'express'
import { z } from 'zod'
import { bookings } from '../data.js'

const bookingSchema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().min(7),
  pickupDate: z.string().min(1),
  duration: z.string().min(1),
  message: z.string().optional().default(''),
})

export const bookingsRouter = Router()

bookingsRouter.get('/', (_request, response) => {
  response.json({ bookings })
})

bookingsRouter.post('/', (request, response) => {
  const parsed = bookingSchema.safeParse(request.body)

  if (!parsed.success) {
    return response.status(400).json({ error: 'Invalid booking payload', issues: parsed.error.flatten() })
  }

  const booking = {
    id: `bk_${Date.now()}`,
    ...parsed.data,
    status: 'new' as const,
    createdAt: new Date().toISOString(),
  }

  bookings.unshift(booking)

  return response.status(201).json({ booking })
})
