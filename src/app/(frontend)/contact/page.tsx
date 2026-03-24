import type { Metadata } from 'next'
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
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      {/* Hero — phone number as focal point */}
      <section className="relative py-24 md:py-36 bg-white overflow-hidden">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/contact-hero-section.avif"
          alt="Hero"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <RevealText delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              We&apos;d love to hear from you
            </h1>
          </RevealText>
          <FadeInUp delay={0.25}>
            <a href="tel:6165002190" className="mt-8 inline-block group">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#73a9d9] tracking-tight transition-colors group-hover:text-[#5a93c4]">
                616-500-2190
              </span>
              <span className="block mt-2 text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
                Tap to call &mdash; 24/7 for clients
              </span>
            </a>
          </FadeInUp>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:christina@jchomecare.net"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-[#73a9d9] hover:text-[#73a9d9]"
              >
                christina@jchomecare.net
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090885794398"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-[#73a9d9] hover:text-[#73a9d9]"
              >
                Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container">
          {/* Owner intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-5xl mx-auto">
            <FadeInLeft>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9]">
                Your Point of Contact
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
                Christina Sanders
              </h2>
              <p className="mt-2 text-lg text-gray-400">Owner &amp; Operator</p>
              <AnimatedLine className="mt-6 h-[2px] w-16 bg-[#faf3a2] rounded-full" />
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Christina personally oversees every aspect of JC Home Care, ensuring each client
                receives the compassionate, high-quality care they deserve.
              </p>
            </FadeInLeft>

            <FadeInRight>
              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                {/* Phone */}
                <StaggerItem>
                  <HoverCard>
                    <a href="tel:6165002190" className="group block">
                      <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full transition-all hover:shadow-lg hover:shadow-gray-100 hover:border-[#73a9d9]/20 hover:bg-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                          Phone
                        </p>
                        <p className="text-lg font-semibold text-[#73a9d9] group-hover:text-[#5a93c4] transition-colors">
                          616-500-2190
                        </p>
                        <p className="mt-2 text-xs text-gray-400">24/7 for clients</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>

                {/* Email */}
                <StaggerItem>
                  <HoverCard>
                    <a href="mailto:christina@jchomecare.net" className="group block">
                      <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full transition-all hover:shadow-lg hover:shadow-gray-100 hover:border-[#73a9d9]/20 hover:bg-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                          Email
                        </p>
                        <p className="text-base font-semibold text-[#73a9d9] group-hover:text-[#5a93c4] transition-colors break-all">
                          christina@jchomecare.net
                        </p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>

                {/* Office Hours */}
                <StaggerItem>
                  <HoverCard>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full transition-all hover:shadow-lg hover:shadow-gray-100 hover:border-[#73a9d9]/20">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                        Office Hours
                      </p>
                      <p className="text-base font-semibold text-gray-900">Mon &ndash; Fri</p>
                      <p className="mt-1 text-sm text-gray-500">9:00 AM &ndash; 5:00 PM</p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Social */}
                <StaggerItem>
                  <HoverCard>
                    <a
                      href="https://www.facebook.com/profile.php?id=100090885794398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full transition-all hover:shadow-lg hover:shadow-gray-100 hover:border-[#73a9d9]/20 hover:bg-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                          Follow Us
                        </p>
                        <p className="text-base font-semibold text-[#73a9d9] group-hover:text-[#5a93c4] transition-colors">
                          Facebook
                        </p>
                        <p className="mt-1 text-xs text-gray-400">Stay connected</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
              </StaggerContainer>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-16 bg-[#faf3a2]">
        <div className="container">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-4">
              We&apos;re Here for You
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              No question is too small
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Whether you&apos;re exploring care options for the first time or looking for a new
              provider, we&apos;re happy to chat. Reach out anytime — there&apos;s no obligation and
              no pressure.
            </p>
            <FadeInUp delay={0.2}>
              <a
                href="tel:6165002190"
                className="mt-8 group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20"
              >
                Call 616-500-2190{' '}
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </FadeInUp>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact JC Home Care at 616-500-2190 or christina@jchomecare.net. Office hours Monday-Friday 9am-5pm. 24/7 calls accepted for clients. Grand Rapids, MI home health care.',
  openGraph: {
    title: 'Contact | JC Home Care',
    description:
      'Get in touch with JC Home Care. Call 616-500-2190 or email christina@jchomecare.net.',
  },
}
