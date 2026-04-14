import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactMail = async ({
  name,
  email,
  phone,
  message,
}) => {
  await resend.emails.send({
    from: 'Website Contact <onboarding@resend.dev>', // temporary sender
    to: process.env.CONTACT_RECEIVER,
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