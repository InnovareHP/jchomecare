import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  RevealText,
  HoverCard,
  AnimatedLine,
} from '@/components/Motion'
import Image from 'next/image'

const services = [
  {
    num: '01',
    title: 'Dementia Care',
    desc: 'Dementia touches the lives of so many families. Our caregivers are specially trained to understand the disease and provide exceptional, compassionate care. We create safe, structured environments that reduce confusion and agitation while preserving dignity and quality of life.',
    highlights: [
      'Trained specialist caregivers',
      'Safe & structured environments',
      'Dignity-first approach',
    ],
  },
  {
    num: '02',
    title: 'Activities of Daily Living',
    desc: 'These are the essential tasks people need to complete each day to care for themselves. These include bathing, dressing, grooming, toileting, mobility, and eating. Our trained caregivers provide respectful, compassionate assistance with ADLs, helping clients maintain comfort, safety, and dignity in their daily lives.',
    highlights: ['Bathing & grooming', 'Mobility assistance', 'Meal support'],
  },
  {
    num: '03',
    title: 'Companionship',
    desc: 'We offer compassionate companionship from dedicated caregivers who build genuine connections and enhance quality of life. Whether it\u2019s conversation, shared activities, or simply being present, our companions provide the social interaction and emotional support that everyone deserves.',
    highlights: ['Meaningful conversations', 'Shared activities', 'Emotional support'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-28 md:py-40 bg-white overflow-hidden">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/services-hero-section.jpg"
          alt="Hero"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="container relative z-10 text-center">
          <RevealText delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight max-w-3xl mx-auto">
              Care designed
              <br />
              around <span className="text-[#73a9d9]">you</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-white font-light max-w-lg mx-auto">
              Compassionate home health care services tailored to meet the unique needs of every
              client.
            </p>
          </RevealText>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-24 md:space-y-36">
            {services.map((service, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={service.num}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}
                  >
                    <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
                      {isEven ? (
                        <FadeInLeft>
                          <ServiceContent service={service} />
                        </FadeInLeft>
                      ) : (
                        <FadeInRight>
                          <ServiceContent service={service} />
                        </FadeInRight>
                      )}
                    </div>

                    <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
                      {isEven ? (
                        <FadeInRight>
                          <ServiceCard service={service} />
                        </FadeInRight>
                      ) : (
                        <FadeInLeft>
                          <ServiceCard service={service} />
                        </FadeInLeft>
                      )}
                    </div>
                  </div>

                  {i < services.length - 1 && (
                    <AnimatedLine className="mt-24 md:mt-36 h-[1px] w-full bg-gray-100 rounded-full" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[#73a9d9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#73a9d9] via-[#5a93c4] to-[#4a7fad]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to get the care you deserve?
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Contact us today to discuss how we can create a personalized care plan for your loved
              one.
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

function ServiceContent({ service }: { service: (typeof services)[number] }) {
  return (
    <>
      <p className="text-6xl font-bold text-black">{service.num}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {service.title}
      </h2>
      <AnimatedLine className="mt-5 h-[2px] w-12 bg-[#faf3a2] rounded-full" />
      <p className="mt-5 text-gray-500 leading-relaxed text-lg">{service.desc}</p>
    </>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <HoverCard>
      <div className="rounded-2xl bg-gradient-to-br from-white to-[#faf3a2]/10 border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-xl hover:shadow-gray-100/60">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-6">
          What&apos;s included
        </p>
        <div className="space-y-4">
          {service.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white p-4 border border-gray-100/80"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#73a9d9]" />
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </HoverCard>
  )
}

export const metadata: Metadata = {
  title: 'Services',
  description:
    'JC Home Care offers dementia care, activities of daily living assistance, companionship, and more. Our trained caregivers provide compassionate, personalized home health care.',
  openGraph: {
    title: 'Services | JC Home Care',
    description:
      'Dementia care, ADL assistance, companionship, and more. Compassionate home health care services from JC Home Care.',
  },
}
