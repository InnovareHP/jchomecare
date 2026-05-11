import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/components'
import { CareInBloomEmail } from '@/emails/CareInBloomEmail'

const DEFAULT_TO_EMAIL = 'christina@jchomecare.net'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { senderName, senderEmail, senderPhone, recipientName, recipientLocation, message } =
      body as {
        senderName: string
        senderEmail: string
        senderPhone?: string
        recipientName: string
        recipientLocation: string
        message: string
      }

    if (!senderName || !senderEmail || !recipientName || !recipientLocation || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    const toEmail = process.env.CONTACT_EMAIL || DEFAULT_TO_EMAIL

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

    return NextResponse.json({ success: true, message: 'Request sent successfully!' })
  } catch (error) {
    console.error('Care in Bloom form submission error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
