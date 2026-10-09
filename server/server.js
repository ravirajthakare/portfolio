import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contactRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.use('/api/contact', contactRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})