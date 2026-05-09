import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactMail = async ({
  name,
  email,
  phone,
  message,
}) => {
  try {
    const data = await resend.emails.send({
      from: 'Divija Polymers <contact@divijapolymers.co.in>',

      to: ['kale_dv@rediffmail.com'],

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

    console.log('RESEND SUCCESS:', data)

    return data
  } catch (error) {
    console.error('RESEND ERROR:', error)
    throw error
  }
}