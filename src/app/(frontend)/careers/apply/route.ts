import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import nodemailer from 'nodemailer'

const DEFAULT_TO_EMAIL = 'jchomecare@example.com'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
})

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
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
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

    // Build email
    const attachments: nodemailer.SendMailOptions['attachments'] = []

    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      })
    }

    const toEmail = process.env.APPLICATION_EMAIL || DEFAULT_TO_EMAIL

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@jchomecare.com',
      to: toEmail,
      subject: `New Career Application: ${positionTitle} — ${firstName} ${lastName}`,
      html: `
        <h2>New Career Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Position</td><td style="padding:8px;">${positionTitle}</td></tr>
          ${coverLetter ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Cover Letter</td><td style="padding:8px;white-space:pre-wrap;">${coverLetter}</td></tr>` : ''}
        </table>
        ${resumeFile && resumeFile.size > 0 ? '<p><em>Resume attached.</em></p>' : '<p><em>No resume attached.</em></p>'}
      `,
      attachments,
    })

    return NextResponse.json({ success: true, message: 'Application submitted successfully!' })
  } catch (error) {
    console.error('Career application submission error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
