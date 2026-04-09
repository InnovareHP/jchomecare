import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Resend } from 'resend'
import { render } from '@react-email/components'
import { CareerApplicationEmail } from '@/emails/CareerApplicationEmail'
import { getServerSideURL } from '@/utilities/getURL'

const DEFAULT_TO_EMAIL = 'lhanivor@gmail.com'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })

    const formData = await req.formData()

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const coverLetter = formData.get('coverLetter') as string
    const resumeFile = formData.get('resume') as File | null

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    // Look up the career/position title
    let positionTitle = `Position #${position}`
    try {
      const career = await payload.findByID({
        collection: 'careers',
        id: Number(position),
      })
      if (career?.title) {
        positionTitle = career.title
      }
    } catch {
      // Fallback to generic title
    }

    // Build attachments
    const attachments: { filename: string; content: Buffer }[] = []
    const hasResume = !!(resumeFile && resumeFile.size > 0)

    if (hasResume) {
      const buffer = Buffer.from(await resumeFile!.arrayBuffer())
      attachments.push({
        filename: resumeFile!.name,
        content: buffer,
      })
    }

    const toEmail = process.env.APPLICATION_EMAIL || DEFAULT_TO_EMAIL

    const html = await render(
      CareerApplicationEmail({
        firstName,
        lastName,
        email,
        phone,
        positionTitle,
        coverLetter: coverLetter || undefined,
        hasResume,
        siteUrl: process.env.NEXT_PUBLIC_SERVER_URL,
      }),
    )

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'noreply@jchomecare.com',
      to: toEmail,
      subject: `New Career Application: ${positionTitle} — ${firstName} ${lastName}`,
      html,
      attachments,
    })

    return NextResponse.json({ success: true, message: 'Application submitted successfully!' })
  } catch (error) {
    console.error('Career application submission error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
