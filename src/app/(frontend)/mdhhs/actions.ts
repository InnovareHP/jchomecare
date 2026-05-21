'use server'

import { Resend } from 'resend'
import { render } from '@react-email/components'
import { MdhhsEligibilityEmail } from '@/emails/MdhhsEligibilityEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionResult = { success: true } | { success: false; error: string }

export async function sendMdhhsEligibility(data: {
  name: string
  email: string
  phone: string
  message: string
}): Promise<ActionResult> {
  const { name, email, phone, message } = data

  if (!name || !email || !phone || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please provide a valid email address.' }
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL || 'christina@jchomecare.net'

    const html = await render(
      MdhhsEligibilityEmail({
        name,
        email,
        phone,
        message,
        siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || '',
      }),
    )

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'noreply@jchomecare.com',
      to: toEmail,
      replyTo: email,
      subject: `MDHHS Eligibility Request: ${name}`,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error('MDHHS eligibility action error:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
