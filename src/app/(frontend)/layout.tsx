import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { draftMode } from 'next/headers'

import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(plusJakarta.variable, GeistMono.variable, 'overflow-x-hidden')}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'JC Home Care | Home Health Care Services in Grand Rapids, MI',
    template: '%s | JC Home Care — Grand Rapids, MI',
  },
  description:
    'JC Home Care provides compassionate, personalized home health care services in Grand Rapids, Michigan. Dementia care, ADL assistance, companionship & more. Call 616-500-2190.',
  keywords: [
    'home health care Grand Rapids',
    'home care Grand Rapids MI',
    'dementia care Grand Rapids',
    'in-home caregiver Michigan',
    'activities of daily living assistance',
    'ADL assistance Grand Rapids',
    'senior care Grand Rapids',
    'elder care Michigan',
    'companionship care',
    'home health aide Grand Rapids',
    'JC Home Care',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jchomecare.net',
    siteName: 'JC Home Care',
    title: 'JC Home Care | Home Health Care Services in Grand Rapids, MI',
    description:
      'Changing the face of home care. Compassionate, personalized home health care services in Grand Rapids, Michigan. Call 616-500-2190.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://jchomecare.net',
  },
}
