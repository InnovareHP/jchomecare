import type { Metadata } from 'next'
import {
  Hero,
  WhyBecomeCaregiver,
  ThreeSteps,
  WhoWeSupport,
  WhyChooseUs,
  Faq,
  ReadyToGetStarted,
} from '@/components/Mddhs'

export default function MddhsPage() {
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
  title: 'MDDHS Paid Caregiver Program — JC Home Care',
  description:
    'Become a paid caregiver for your loved one through the MDDHS program. JC Home Care guides eligible families through eligibility, paperwork, and ongoing support in Grand Rapids, MI.',
  openGraph: {
    title: 'MDDHS Paid Caregiver Program — JC Home Care',
    description:
      'Earn while caring for loved ones. We help families access the MDDHS paid caregiver program in Grand Rapids, Michigan.',
    url: 'https://jchomecare.net/mddhs',
  },
  alternates: {
    canonical: 'https://jchomecare.net/mddhs',
  },
}
