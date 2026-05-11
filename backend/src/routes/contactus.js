import express from 'express'
import { sendContactMail } from '../services/mailer.js'

const router = express.Router()

router.post('/', async (req, res) => {
  console.log('========== CONTACT ROUTE HIT ==========')

  console.log(req.body)

  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    console.log('VALIDATION FAILED')

    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required',
    })
  }

  try {
    console.log('CALLING RESEND MAILER')

    const response = await sendContactMail({
      name,
      email,
      phone,
      message,
    })

    console.log('MAIL SENT SUCCESSFULLY')
    console.log(response)

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.log('MAILER FAILED')

    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Failed to send message',
    })
  }
})

export default router