import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  AnimatedCounter,
  AnimatedLine,
} from '@/components/Motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero — editorial quote style */}
      <section className="relative py-28 md:py-40 bg-white overflow-hidden">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/about-hero-section.jpg"
          alt="Hero"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <RevealText delay={0.1}>
              <div className="relative">
                {/* Decorative quote mark */}
                <span className="absolute -top-8 -left-4 md:-left-10 text-[8rem] md:text-[10rem] font-serif leading-none text-[#faf3a2]/40 select-none pointer-events-none">
                  &ldquo;
                </span>
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Caring for others isn&apos;t just what we do
                  <span className="text-[#73a9d9]"> &mdash; it&apos;s who we are.</span>
                </h1>
              </div>
            </RevealText>
            <FadeInUp delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <AnimatedLine className="hidden sm:block h-[2px] w-20 bg-[#faf3a2] rounded-full" />
                <p className="text-lg text-white font-light max-w-md leading-relaxed">
                  Dedicated to providing compassionate and personalized home health care services to
                  every family we serve.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Mission — side by side */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeInLeft>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9]">
                Our Mission
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
                Quality care starts with heart
              </h2>
              <AnimatedLine className="mt-6 h-[2px] w-16 bg-[#faf3a2] rounded-full" />
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                At JC Home Care, our mission is to provide compassionate and personalized home
                health care services to our clients. We strive to improve the quality of life for
                those we serve, while prioritizing their safety and well-being.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Every person deserves to feel safe, supported, and respected in their own home. That
                belief is at the core of everything we do.
              </p>
            </FadeInLeft>

            <FadeInRight>
              <div className="rounded-2xl bg-gradient-to-br from-[#faf3a2]/15 to-white border border-[#faf3a2]/30 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-8">
                  What guides us
                </p>
                <div className="space-y-6">
                  {[
                    {
                      label: 'Empathy First',
                      desc: 'We lead with understanding and treat every client like family.',
                    },
                    {
                      label: 'Dignity Always',
                      desc: 'Respect and dignity are non-negotiable in every interaction.',
                    },
                    {
                      label: 'Personalized Approach',
                      desc: 'No two clients are the same — neither are our care plans.',
                    },
                    {
                      label: 'Continuous Growth',
                      desc: 'Our team trains continuously to deliver the best possible care.',
                    },
                  ].map((item, i) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#73a9d9]/10 text-[#73a9d9] text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.label}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Team & Services — cards */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary">
              Our team & expertise
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <HoverCard>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 h-full transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9] to-[#73a9d9]/30" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-4">
                    Our Team
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">Skilled professionals</h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    Our team of skilled and experienced professionals is dedicated to delivering the
                    highest quality of care and support to our clients. We work closely with
                    families and other caregivers to ensure that our services meet the unique needs
                    of each individual.
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 h-full transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9]/30 to-[#73a9d9]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-4">
                    Our Services
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">Comprehensive care</h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    We offer a wide range of home health care services, including dementia care, end
                    of life care, assistance with physical therapy exercises, activities of daily
                    living, and more. Our goal is to help our clients maintain their independence
                    and achieve their health and wellness goals.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-[#73a9d9] font-medium hover:gap-3 transition-all text-sm"
                  >
                    View all services <span>&rarr;</span>
                  </Link>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[#73a9d9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#73a9d9] via-[#5a93c4] to-[#4a7fad]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let us care for your loved one
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Get in touch today to learn more about our team and how we can help.
            </p>
          </FadeIn>
          <FadeInUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[#73a9d9] px-8 py-4 text-base font-semibold transition-all hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02]"
              >
                Contact Us{' '}
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <a
                href="tel:6165002190"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-medium transition-all hover:border-white hover:bg-white/10"
              >
                616-500-2190
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'About Us — Our Mission & Caregiving Team',
  description:
    'Meet the team behind JC Home Care. Owner Christina Sanders and our trained caregivers are dedicated to compassionate, personalized home health care in Grand Rapids, MI.',
  openGraph: {
    title: 'About JC Home Care — Our Mission & Caregiving Team',
    description:
      'Meet Christina Sanders and the compassionate caregiving team at JC Home Care. Personalized home health care in Grand Rapids, Michigan.',
    url: 'https://jchomecare.net/about',
  },
  alternates: {
    canonical: 'https://jchomecare.net/about',
  },
}
