import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

export interface MddhsEligibilityEmailProps {
  name: string
  email: string
  phone: string
  message: string
  siteUrl: string
}

export const MddhsEligibilityEmail = ({
  name,
  email,
  phone,
  message,
  siteUrl,
}: MddhsEligibilityEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>MDDHS eligibility request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src={`${siteUrl}/logo.png`}
              width="120"
              height="120"
              alt="JC Home Care"
              style={logo}
            />
          </Section>

          <Section style={banner}>
            <Text style={bannerLabel}>MDDHS Eligibility Request</Text>
            <Heading style={bannerTitle}>New paid caregiver inquiry</Heading>
          </Section>

          <Section style={content}>
            <Text style={sectionTitle}>Contact</Text>

            <Row style={infoRow}>
              <Column style={labelCol}>Name</Column>
              <Column style={valueCol}>{name}</Column>
            </Row>
            <Hr style={divider} />

            <Row style={infoRow}>
              <Column style={labelCol}>Email</Column>
              <Column style={valueCol}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Column>
            </Row>
            <Hr style={divider} />

            <Row style={infoRow}>
              <Column style={labelCol}>Phone</Column>
              <Column style={valueCol}>
                <Link href={`tel:${phone}`} style={link}>
                  {phone}
                </Link>
              </Column>
            </Row>

            <Hr style={sectionDivider} />
            <Text style={sectionTitle}>Caregiving Situation</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={replyHint}>
            <Text style={replyHintText}>Reply directly to this email to respond to {name}.</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This request was submitted through the{' '}
              <Link href={`${siteUrl}/mddhs`} style={footerLink}>
                MDDHS page
              </Link>
              .
            </Text>
            <Text style={footerMuted}>JC Home Care &middot; Grand Rapids, Michigan</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default MddhsEligibilityEmail

const brandBlue = '#73a9d9'
const brandBlueDark = '#5a93c4'

const main: React.CSSProperties = {
  backgroundColor: '#f4f4f5',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '40px 0',
}

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  margin: '0 auto',
  maxWidth: '600px',
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
}

const header: React.CSSProperties = {
  padding: '32px 0 16px',
  textAlign: 'center' as const,
}

const logo: React.CSSProperties = {
  margin: '0 auto',
}

const banner: React.CSSProperties = {
  backgroundColor: brandBlue,
  padding: '24px 40px',
  textAlign: 'center' as const,
}

const bannerLabel: React.CSSProperties = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
}

const bannerTitle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '22px',
  fontWeight: 700,
  margin: '0',
  lineHeight: '1.3',
}

const content: React.CSSProperties = {
  padding: '32px 40px',
}

const sectionTitle: React.CSSProperties = {
  color: '#18181b',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.04em',
  margin: '0 0 16px',
  textTransform: 'uppercase' as const,
}

const infoRow: React.CSSProperties = {
  padding: '10px 0',
}

const labelCol: React.CSSProperties = {
  color: '#71717a',
  fontSize: '14px',
  fontWeight: 500,
  width: '100px',
  verticalAlign: 'top' as const,
}

const valueCol: React.CSSProperties = {
  color: '#18181b',
  fontSize: '14px',
  fontWeight: 500,
}

const link: React.CSSProperties = {
  color: brandBlueDark,
  textDecoration: 'none',
}

const divider: React.CSSProperties = {
  borderColor: '#f4f4f5',
  borderTop: '1px solid #f4f4f5',
  margin: '0',
}

const sectionDivider: React.CSSProperties = {
  borderColor: '#e4e4e7',
  borderTop: '1px solid #e4e4e7',
  margin: '24px 0',
}

const messageText: React.CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: '8px',
  color: '#3f3f46',
  fontSize: '14px',
  lineHeight: '1.7',
  margin: '0',
  padding: '16px 20px',
  whiteSpace: 'pre-wrap' as const,
}

const replyHint: React.CSSProperties = {
  padding: '0 40px 24px',
}

const replyHintText: React.CSSProperties = {
  backgroundColor: '#eff6ff',
  borderRadius: '8px',
  color: brandBlueDark,
  fontSize: '13px',
  fontWeight: 500,
  margin: '0',
  padding: '12px 16px',
  textAlign: 'center' as const,
}

const footer: React.CSSProperties = {
  backgroundColor: '#fafafa',
  borderTop: '1px solid #f4f4f5',
  padding: '24px 40px',
  textAlign: 'center' as const,
}

const footerText: React.CSSProperties = {
  color: '#71717a',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: '0 0 8px',
}

const footerLink: React.CSSProperties = {
  color: brandBlueDark,
  textDecoration: 'underline',
}

const footerMuted: React.CSSProperties = {
  color: '#a1a1aa',
  fontSize: '12px',
  margin: '0',
}
