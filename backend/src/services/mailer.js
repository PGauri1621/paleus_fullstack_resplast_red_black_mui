import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactMail = async ({
  name,
  email,
  phone,
  message,
}) => {
  await resend.emails.send({

    from: 'Divija Polymers <contact@send.divijapolymers.co.in>',

    to: 'kale_dv@rediffmail.com',

    reply_to: email,

    subject: `New Contact Inquiry – ${name}`,

    html: `
      <h3>New Contact Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })
}