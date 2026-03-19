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

const services = [
  {
    num: '01',
    title: 'Dementia Care',
    desc: 'Dementia touches the lives of so many families. Our caregivers are specially trained to understand the disease and provide exceptional, compassionate care. We create safe, structured environments that reduce confusion and agitation while preserving dignity and quality of life.',
    highlights: ['Trained specialist caregivers', 'Safe & structured environments', 'Dignity-first approach'],
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
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-white via-white to-[#4783b5]/5 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#4783b5]/[0.04] blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <RevealText>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4783b5] mb-4">
                Our Services
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Care designed around <span className="text-[#4783b5]">you</span>
              </h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="mt-6 text-xl text-gray-400 font-light max-w-xl">
                We offer a range of compassionate home health care services tailored to meet the unique
                needs of every client.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-24 md:space-y-36">
            {services.map((service, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={service.num}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                    {/* Text side */}
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

                    {/* Card side */}
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
      <section className="relative py-24 md:py-32 bg-[#4783b5] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4783b5] via-[#3a6d96] to-[#2d5a7b]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to get the care you deserve?
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Contact us today to discuss how we can create a personalized care plan for your loved one.
            </p>
          </FadeIn>
          <FadeInUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[#4783b5] px-8 py-4 text-base font-semibold transition-all hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02]"
              >
                Contact Us <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
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
      <p className="text-6xl font-bold text-[#4783b5]/10">{service.num}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {service.title}
      </h2>
      <AnimatedLine className="mt-5 h-[2px] w-12 bg-[#4783b5]/30 rounded-full" />
      <p className="mt-5 text-gray-500 leading-relaxed text-lg">
        {service.desc}
      </p>
    </>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <HoverCard>
      <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-[#4783b5]/[0.04] border border-gray-100 p-8 md:p-10 transition-shadow hover:shadow-xl hover:shadow-gray-100/60">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4783b5] mb-6">
          What&apos;s included
        </p>
        <div className="space-y-4">
          {service.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white p-4 border border-gray-100/80"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#4783b5]" />
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
