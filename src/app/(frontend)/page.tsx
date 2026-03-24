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
export default function HomePage() {
  return (
    <>
      {/* Hero — split layout with floating cards */}
      <section className="relative min-h-[50vh] flex items-center bg-white overflow-hidden">
        {/* Decorative elements */}
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/hero-section.jpg"
          alt="Hero"
          width={1000}
          height={1000}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
            {/* Left — text */}
            <div>
              <RevealText delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.06] text-white tracking-tight">
                  Care that feels
                  <br />
                  like{' '}
                  <span className="relative inline-block text-[#73a9d9]">
                    family
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-white rounded-full -z-10" />
                  </span>
                </h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="mt-7 text-lg md:text-xl text-white font-light max-w-lg leading-relaxed">
                  Compassionate, personalized home health care — because your loved ones deserve the
                  very best.
                </p>
              </RevealText>
              <FadeInUp delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white pl-7 pr-5 py-3.5 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/25 hover:scale-[1.02]"
                  >
                    Get Started
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                  <a
                    href="tel:6165002190"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-base font-medium text-white transition-all hover:border-[#73a9d9] hover:text-[#73a9d9]"
                  >
                    616-500-2190
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — asymmetric layout */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInLeft>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
                Caring for others is a privilege
              </h2>
              <AnimatedLine className="mt-6 h-[2px] w-16 bg-[#faf3a2] rounded-full" />
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                At JC Home Care, we believe that caring for others is a privilege. Our mission is to
                provide exceptional home health care and ensure your loved ones receive the best
                possible support in their own environment.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[#73a9d9] font-medium hover:gap-3 transition-all"
              >
                Learn more about us <span>&rarr;</span>
              </Link>
            </FadeInLeft>

            <FadeInRight>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Compassionate Care',
                    desc: 'Every caregiver delivers care with empathy, patience, and genuine compassion.',
                  },
                  {
                    title: 'Safety & Comfort',
                    desc: 'We prioritize safety and well-being, creating a secure and comfortable environment.',
                  },
                  {
                    title: 'Personalized Support',
                    desc: 'Care plans tailored to meet each individual\u2019s unique needs.',
                  },
                  {
                    title: 'Trusted Team',
                    desc: 'Skilled professionals dedicated to the highest quality of care and support.',
                  },
                ].map((item, i) => (
                  <HoverCard key={item.title}>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full transition-shadow hover:shadow-lg hover:shadow-gray-100 hover:border-[#73a9d9]/20">
                      <p className="text-xs font-bold text-black mb-3">0{i + 1}</p>
                      <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </HoverCard>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Services preview — interactive cards */}
      <section className="py-24 md:py-36 bg-[#faf3a2]">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary">Our Services</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Dementia Care',
                desc: 'Specially trained caregivers provide compassionate care in safe, structured environments that preserve dignity and quality of life.',
                href: '/services',
              },
              {
                num: '02',
                title: 'Activities of Daily Living',
                desc: 'Respectful assistance with bathing, dressing, grooming, mobility, and more — helping clients maintain comfort and independence.',
                href: '/services',
              },
              {
                num: '03',
                title: 'Companionship',
                desc: 'Dedicated caregivers who build genuine connections through conversation, shared activities, and meaningful presence.',
                href: '/services',
              },
            ].map((service) => (
              <StaggerItem key={service.num}>
                <HoverCard>
                  <Link href={service.href} className="group block h-full">
                    <div className="relative rounded-2xl bg-white border border-gray-100 p-8 h-full transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9] to-[#73a9d9]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <p className="text-4xl font-bold text-black">{service.num}</p>
                      <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-[#73a9d9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                      <p className="mt-6 text-sm font-medium text-[#73a9d9] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <span>&rarr;</span>
                      </p>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      {/* //fix color */}

      {/* CTA — bold gradient */}
      <section className="relative py-24 md:py-32 bg-[#73a9d9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#73a9d9] via-[#5a93c4] to-[#4a7fad]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to get started?
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Reach out today for a free consultation. Let us show you how compassionate,
              personalized care can make a difference for your family.
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
  title: 'JC Home Care | Compassionate Home Health Care Services',
  description:
    'JC Home Care provides compassionate home health care services including dementia care, activities of daily living, and companionship. Serving Grand Rapids, MI. Call 616-500-2190.',
  openGraph: {
    title: 'JC Home Care | Compassionate Home Health Care Services',
    description:
      'Changing the face of home care. Compassionate, personalized home health care services.',
  },
}
