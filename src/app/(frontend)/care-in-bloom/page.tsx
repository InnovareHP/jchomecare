import type { Metadata } from 'next'
import Image from 'next/image'
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  AnimatedLine,
} from '@/components/Motion'
import { CareInBloomForm } from './CareInBloomForm'

const steps = [
  {
    title: 'It Starts With You',
    desc: "Know someone who's in the hospital or recovering at home? Simply share their info with us, and we'll take it from there.",
  },
  {
    title: 'Crafted with Care',
    desc: "We prepare a fresh bouquet with a handwritten 'Get Well Soon' card, bringing comfort and a little brightness to their day.",
  },
  {
    title: 'Delivered with Heart',
    desc: "We personally deliver it, creating a simple but meaningful moment that fills their spirits and reminds them they're cared for.",
  },
]

function FlowerBadge({ n }: { n: number }) {
  return (
    <div className="absolute -top-10">
      <svg viewBox="0 0 50 62" width="96" height="96" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            cx="28"
            cy="11"
            rx="6"
            ry="8"
            fill="#73a9d9"
            transform={`rotate(${i * 45} 28 28)`}
          />
        ))}
        <circle cx="28" cy="28" r="15" fill="#73a9d9" />
        <text
          x="28"
          y="28"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="16"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          {n}
        </text>
      </svg>
    </div>
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Care in Bloom',
  url: 'https://jchomecare.net/care-in-bloom',
  description:
    'Send a handcrafted bouquet and a heartfelt note to a loved one facing illness, loneliness, or a difficult season. Care in Bloom by JC Home Care.',
  provider: {
    '@type': 'HomeHealthCareService',
    name: 'JC Home Care',
    url: 'https://jchomecare.net',
    telephone: '+1-616-500-2190',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grand Rapids',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
  },
}

export default function CareInBloomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/care-in-bloom-hero.png"
          alt="Care in Bloom — Send comfort through flowers"
          fill
          className="object-cover object-center"
          priority
        />
        {/* left-side gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#73a9d9]/40 via-black/45 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-sm md:max-w-lg py-16 md:py-24">
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.06]">
              <span className="text-white">Care in </span>
              <span className="relative inline-block text-[#73a9d9]">
                Bloom
                <AnimatedLine className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#faf3a2] rounded-full" />
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Send comfort through fresh bouquets and kind messages—delivered with care.
            </p>
            <a
              href="#send-form"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/30"
            >
              Send Comfort Today
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. About ────────────────────────────────────────────────── */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="container pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                <Image
                  src="/care-in-bloom-about.png"
                  alt="Bringing comfort through flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <h2 className="text-3xl md:text-4xl font-bold text-[#73a9d9] leading-tight">
                Bringing Comfort, One Bouquet at a Time
              </h2>
              <AnimatedLine className="mt-5 h-[2px] w-12 bg-[#faf3a2] rounded-full" />
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Care in Bloom was born from a simple belief — that every person facing a difficult
                season deserves to know they are loved. Through kind appointments, we send joy and
                love, carrying that warmth to individuals who need it most.
              </p>
              <FadeInUp delay={0.15}>
                <a
                  href="#send-form"
                  className="mt-8 group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20"
                >
                  Send Comfort Today
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </FadeInUp>
            </FadeInRight>
          </div>
        </div>

        {/* ── Wave: white → yellow ── */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#faf3a2"
            fillOpacity="1"
            d="M0,32L120,64C240,96,480,160,720,165.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* ── 3. How It Works ─────────────────────────────────────────── */}
      <section className="bg-[#faf3a2] pt-14 md:pt-20">
        <div className="container pb-14 md:pb-20">
          <div className="text-center mb-12">
            <RevealText>
              <h2 className="text-3xl md:text-4xl font-bold text-[#73a9d9] leading-tight">
                How Care in Bloom Works
              </h2>
            </RevealText>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-lg text-black font-medium max-w-xl mx-auto leading-relaxed">
                Kindness goes a long way. We turn your gesture into flowers, comfort, and a simple
                reminder — they&apos;re not alone.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto"
            staggerDelay={0.15}
          >
            {steps.map((step, i) => (
              <StaggerItem className="relative" key={i}>
                <HoverCard>
                  <div className="bg-white rounded-2xl p-7 md:p-8 text-center shadow-sm h-full flex flex-col items-center ">
                    <FlowerBadge n={i + 1} />
                    <h3 className="mt-4 text-lg font-bold text-gray-900 mb-3 relative py-2">
                      {step.title}
                      <AnimatedLine className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#73a9d9] rounded-full mb-1 " />
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed pt-2">{step.desc}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-10">
            <a
              href="#send-form"
              className="group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20"
            >
              Send Comfort Today
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </FadeIn>
        </div>

        {/* ── Wave: yellow → blue ── */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#73a9d9"
            fillOpacity="1"
            d="M0,64L40,90.7C80,117,160,171,240,197.3C320,224,400,224,480,192C560,160,640,96,720,96C800,96,880,160,960,186.7C1040,213,1120,203,1200,170.7C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* ── 4. Form ─────────────────────────────────────────────────── */}
      <section id="send-form" className="bg-[#73a9d9] py-14 md:py-20">
        <div className="container max-w-2xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Send a Little Sunshine</h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-md mx-auto">
                Sometimes all it takes is knowing someone cares. Fill out the form below and
                we&apos;ll bring a little sunshine to their day.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div className="rounded-2xl bg-white max-w-3xl mx-auto px-6 py-7 md:px-9 md:py-9 shadow-xl">
              <CareInBloomForm />
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Care in Bloom — Send Comfort Through Flowers',
  description:
    'Send a handcrafted bouquet and heartfelt note to someone facing illness, loneliness, or a difficult season. Care in Bloom by JC Home Care delivers comfort to Grand Rapids, MI.',
  openGraph: {
    title: 'Care in Bloom — Send Comfort Through Flowers',
    description:
      'Send a bouquet of comfort to someone you love. Care in Bloom delivers handcrafted flowers and kindness across Grand Rapids, Michigan.',
    url: 'https://jchomecare.net/care-in-bloom',
  },
  alternates: {
    canonical: 'https://jchomecare.net/care-in-bloom',
  },
}
