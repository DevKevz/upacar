import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { bookings, customers, vehicle } from '../data.js'
import { requireAdmin } from '../middleware/auth.js'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const adminRouter = Router()

adminRouter.post('/login', (request, response) => {
  const parsed = loginSchema.safeParse(request.body)

  if (!parsed.success) {
    return response.status(400).json({ error: 'Invalid login payload' })
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@upacar.local'
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'upacar123'

  if (parsed.data.email !== adminEmail || parsed.data.password !== adminPassword) {
    return response.status(401).json({ error: 'Invalid credentials' })
  }

  const secret = process.env.JWT_SECRET ?? 'change-me-for-local-dev'
  const token = jwt.sign({ email: parsed.data.email, role: 'admin' }, secret, { expiresIn: '1d' })

  return response.json({ token })
})

adminRouter.get('/dashboard', requireAdmin, (_request, response) => {
  response.json({
    stats: {
      bookingRequests: bookings.length,
      customers: customers.length,
      vehicleStatus: vehicle.status,
    },
    vehicle,
    customers,
    bookings,
  })
})
