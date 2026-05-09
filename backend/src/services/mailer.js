import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactMail = async ({
  name,
  email,
  phone,
  message,
}) => {
  try {
    console.log('========== EMAIL REQUEST ==========')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Message:', message)

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',

      to: ['gauriparvate@gmail.com'],

      reply_to: email,

      subject: `New Contact Inquiry – ${name}`,

      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log('========== RESEND RESPONSE ==========')
    console.log(response)

    return response
  } catch (error) {
    console.log('========== RESEND ERROR ==========')
    console.error(error)

    throw error
  }
}