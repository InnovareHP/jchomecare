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
    <html className={cn(plusJakarta.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
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
    default: 'JC Home Care | Compassionate Home Health Care Services',
    template: '%s | JC Home Care',
  },
  description:
    'JC Home Care provides compassionate, personalized home health care services in Grand Rapids, MI. Dementia care, activities of daily living, companionship, and more. Call 616-500-2190.',
  keywords: [
    'home health care',
    'home care',
    'dementia care',
    'companionship',
    'activities of daily living',
    'ADL assistance',
    'Grand Rapids',
    'Michigan',
    'elder care',
    'senior care',
    'in-home care',
    'JC Home Care',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JC Home Care',
    title: 'JC Home Care | Compassionate Home Health Care Services',
    description:
      'Changing the face of home care. Compassionate, personalized home health care services for your loved ones.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
