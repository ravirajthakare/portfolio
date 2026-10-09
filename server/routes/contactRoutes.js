import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  const { name, email, message } = req.body ?? {}
  const errors = {}

  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    errors.name = 'Name must be 2 to 100 characters.'
  }
  if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) || email.length > 200) {
    errors.email = 'Please provide a valid email address.'
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000) {
    errors.message = 'Message must be 10 to 2000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }

  // Phase 16: save to MongoDB here.
  console.log(`New contact message from ${name.trim()}`)

  res.status(201).json({ message: 'Message received. Thank you!' })
})

export default router