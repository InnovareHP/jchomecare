'use server'

import { Resend } from 'resend'
import { render } from '@react-email/components'
import { CareInBloomEmail } from '@/emails/CareInBloomEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionResult = { success: true } | { success: false; error: string }

export async function sendCareInBloomRequest(data: {
  senderName: string
  senderEmail: string
  senderPhone?: string
  recipientName: string
  recipientLocation: string
  message: string
}): Promise<ActionResult> {
  const { senderName, senderEmail, senderPhone, recipientName, recipientLocation, message } = data

  if (!senderName || !senderEmail || !recipientName || !recipientLocation || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(senderEmail)) {
    return { success: false, error: 'Please provide a valid email address.' }
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL || 'christina@jchomecare.net'

    const html = await render(
      CareInBloomEmail({
        senderName,
        senderEmail,
        senderPhone: senderPhone || undefined,
        recipientName,
        recipientLocation,
        message,
        siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || '',
      }),
    )

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'noreply@jchomecare.com',
      to: toEmail,
      replyTo: senderEmail,
      subject: `Care in Bloom Request: Bouquet for ${recipientName}`,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error('Care in Bloom action error:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
