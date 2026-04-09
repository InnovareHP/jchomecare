import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/components'
import { ContactEmail } from '@/emails/ContactEmail'

const DEFAULT_TO_EMAIL = 'christina@jchomecare.net'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, subject, message } = body as {
      firstName: string
      lastName: string
      email: string
      phone?: string
      subject: string
      message: string
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    const toEmail = process.env.CONTACT_EMAIL || DEFAULT_TO_EMAIL

    const html = await render(
      ContactEmail({
        firstName,
        lastName,
        email,
        phone: phone || undefined,
        subject,
        message,
        siteUrl: process.env.NEXT_PUBLIC_SERVER_URL,
      }),
    )

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'noreply@jchomecare.com',
      to: toEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html,
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
