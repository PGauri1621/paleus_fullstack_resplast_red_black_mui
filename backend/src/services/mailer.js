import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactMail = async ({
  name,
  email,
  phone,
  message,
}) => {
  try {
    const response = await resend.emails.send({
      from: 'Divija Polymers <contact@send.divijapolymers.co.in>',

      to: ['kale_dv@rediffmail.com'],

      reply_to: email,

      subject: `New Contact Inquiry – ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    })

   // console.log('========== RESEND RESPONSE ==========')
    console.log(response)

    return response
  } catch (error) {
    console.log('========== RESEND ERROR ==========')
    console.error(error)

    throw error
  }
}