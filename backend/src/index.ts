import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { adminRouter } from './routes/admin.js'
import { bookingsRouter } from './routes/bookings.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 4000)

app.use(cors())
app.use(express.json())

app.get('/health', (_request, response) => {
  response.json({ ok: true, service: 'upacar-api' })
})

app.use('/api/bookings', bookingsRouter)
app.use('/api/admin', adminRouter)

app.listen(port, () => {
  console.log(`UpaCar API listening on http://localhost:${port}`)
})
