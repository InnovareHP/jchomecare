import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  RevealText,
  StaggerContainer,
  StaggerItem,
} from '@/components/Motion'
import { CtaButton } from './CtaButton'

import Image from 'next/image'

const yellowGroups = [
  {
    title: 'Parents',
    desc: 'Give your parents the comfort of receiving care at home while staying close to the family who knows and loves them most.',
    gradient: 'linear-gradient(90deg, rgba(250,243,162,1) 0%, rgba(250,243,162,0) 100%)',
  },
  {
    title: 'Grandparents',
    desc: 'Help your grandparents remain safe, comfortable, and supported in a familiar home environment every day.',
    gradient: 'linear-gradient(90deg, rgba(250,243,162,0) 0%, rgba(250,243,162,1) 100%)',
  },
  {
    title: 'Spouses',
    desc: 'Continue caring for your spouse with confidence while receiving support designed for family caregivers like you.',
    gradient: 'linear-gradient(90deg, rgba(250,243,162,1) 0%, rgba(250,243,162,0) 100%)',
  },
]

const neutralGroups = [
  {
    title: 'Children with Special Needs',
    desc: 'Provide dependable, compassionate care for children with special needs in the comfort and security of home.',
    gradient: 'linear-gradient(90deg, rgba(250,243,162,0) 0%, rgba(250,243,162,1) 100%)',
  },
  {
    title: 'Loved Ones with Health Conditions',
    desc: 'Support loved ones through daily challenges with trusted care that helps them feel safe, valued, and cared for.',
    gradient: 'linear-gradient(90deg, rgba(250,243,162,1) 0%, rgba(250,243,162,0) 100%)',
  },
]
export function WhoWeSupport() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-[#73a9d9] leading-tight">
              Who We{' '}
              <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-8">
                Support
              </span>
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base md:text-lg text-gray-500">
              We proudly assist family caregivers caring for:
            </p>
          </FadeIn>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          {/* Top row: 3 yellow cards left + image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FadeInLeft>
              <StaggerContainer className="space-y-5 h-full">
                {yellowGroups.map((g) => (
                  <StaggerItem key={g.title}>
                    <Card title={g.title} desc={g.desc} gradient={g.gradient} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInLeft>

            <FadeInRight>
              <div className="relative w-full h-full min-h-[260px] md:min-h-[320px] lg:min-h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/who-we-support-mddhs.png"
                  alt="Who we support"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeInRight>
          </div>

          {/* Bottom row: 2 neutral cards full width */}
          <StaggerContainer className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {neutralGroups.map((g) => (
              <StaggerItem key={g.title}>
                <Card title={g.title} desc={g.desc} gradient={g.gradient} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeInUp delay={0.2}>
          <div className="mt-12 flex justify-center">
            <CtaButton />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function Card({ title, desc, gradient }: { title: string; desc: string; gradient: string }) {
  return (
    <div
      className="h-full rounded-xl border border-[#f3e88f] p-5 transition-shadow hover:shadow-md"
      style={{ background: gradient }}
    >
      <h3 className="text-base font-bold text-gray-900 leading-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}
