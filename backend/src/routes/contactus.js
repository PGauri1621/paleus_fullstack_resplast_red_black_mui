import express from 'express'
import { sendContactMail } from '../services/mailer.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required',
    })
  }

  try {
    await sendContactMail({ name, email, phone, message })

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Email error:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to send message',
    })
  }
})

export default router
