import type { Metadata } from 'next'
import {
  Hero,
  WhyBecomeCaregiver,
  ThreeSteps,
  WhoWeSupport,
  WhyChooseUs,
  Faq,
  ReadyToGetStarted,
} from '@/components/Mdhhs'

export default function MdhhsPage() {
  return (
    <>
      <Hero />
      <WhyBecomeCaregiver />
      <ThreeSteps />
      <WhoWeSupport />
      <WhyChooseUs />
      <Faq />
      <ReadyToGetStarted />
    </>
  )
}

export const metadata: Metadata = {
  title: 'MDHHS Paid Caregiver Program — JC Home Care',
  description:
    'Become a paid caregiver for your loved one through the MDHHS program. JC Home Care guides eligible families through eligibility, paperwork, and ongoing support in Grand Rapids, MI.',
  openGraph: {
    title: 'MDHHS Paid Caregiver Program — JC Home Care',
    description:
      'Earn while caring for loved ones. We help families access the MDHHS paid caregiver program in Grand Rapids, Michigan.',
    url: 'https://jchomecare.net/mdhhs',
  },
  alternates: {
    canonical: 'https://jchomecare.net/mdhhs',
  },
}
