import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  HoverCard,
  RevealText,
  StaggerContainer,
  StaggerItem,
} from '@/components/Motion'
import { CtaButton } from './CtaButton'
import Image from 'next/image'

type Tone = 'yellow' | 'blue'

type Item = {
  title: string
  desc: string
  icon: string
  tone: Tone
}

const whyChoose: Item[] = [
  {
    title: 'Get Paid to Care',
    desc: 'Receive financial support while caring for your loved one safely and comfortably at home.',
    icon: '/icon/money-icon.png',
    tone: 'yellow',
  },
  {
    title: 'Program Assistance',
    desc: 'We provide trusted support with applications, approvals, and caregiver enrollment services.',
    icon: '/icon/paper-icon.png',
    tone: 'yellow',
  },
  {
    title: 'Step-by-Step Guidance',
    desc: 'Our team helps guide you through paperwork, eligibility, and every step of the process.',
    icon: '/icon/heart-icon.png',
    tone: 'blue',
  },
  {
    title: 'Uninterrupted Care',
    desc: 'We’re here when you need rest, recovery, or respite.',
    icon: '/icon/shield-icon.png',
    tone: 'blue',
  },
  {
    title: 'Trusted Caregiver Support',
    desc: 'We help connect qualified individuals with trusted caregiver roles when needed.',
    icon: '/icon/family-icon.png',
    tone: 'blue',
  },
]

export function WhyChooseUs() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="block w-full -mb-px"
      >
        <path
          fill="#faf3a2"
          fillOpacity="1"
          d="M0,32L120,64C240,96,480,160,720,165.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <section className="pb-20 md:pb-28 bg-[#faf3a2]">
        <div className="container">
          <FadeIn className="max-w-2xl mb-12">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold text-[#73a9d9] leading-tight">
                Why Families Choose
                <br />
                JC Home Care
              </h2>
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="mt-5 text-base md:text-lg text-gray-700">
                Trusted guidance, compassionate support, and a smoother path to care.
              </p>
            </FadeIn>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left column: 2 yellow-icon cards + image stretching to match right col */}
            <div className="flex flex-col gap-6">
              <StaggerContainer className="space-y-5">
                {whyChoose.slice(0, 2).map((item) => (
                  <StaggerItem key={item.title}>
                    <WhyCard {...item} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <FadeInLeft className="flex-1 min-h-[280px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/why-choose-2-mddhs.png"
                    alt="Caregiver assisting elderly client at home"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </FadeInLeft>
            </div>

            {/* Right column: image floats above grid + 3 blue-icon cards */}
            <div className="flex flex-col gap-6 lg:-mt-24">
              <FadeInRight>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/why-choose-1-mddhs.png"
                    alt="Family caregiver providing in-home support"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </FadeInRight>
              <StaggerContainer className="space-y-5">
                {whyChoose.slice(2).map((item) => (
                  <StaggerItem key={item.title}>
                    <WhyCard {...item} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <FadeInUp delay={0.2}>
            <div className="mt-12 flex justify-center">
              <CtaButton />
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}

function WhyCard({ title, desc, icon }: Item) {
  return (
    <HoverCard>
      <div className="rounded-xl bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-black/5">
        <span className={`inline-flex items-center justify-center w-16 h-16 rounded-lg `}>
          <Image src={icon} alt="" width={80} height={80} className="object-contain" />
        </span>
        <h3 className="mt-4 text-2xl font-bold text-gray-900 text- leading-tight">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </HoverCard>
  )
}
