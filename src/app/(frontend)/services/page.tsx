import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-24">
        <FadeInUp className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-500">
            We offer a range of compassionate home health care services tailored to meet the unique
            needs of every client.
          </p>
        </FadeInUp>
      </section>

      <div className="container"><div className="border-t border-gray-100" /></div>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 gap-16 max-w-2xl mx-auto" staggerDelay={0.2}>
            {/* Dementia Care */}
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4783b5]">01</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Dementia Care</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dementia touches the lives of so many families. Our caregivers are specially trained
                to understand the disease and provide exceptional, compassionate care. We create
                safe, structured environments that reduce confusion and agitation while preserving
                dignity and quality of life.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            {/* ADL */}
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4783b5]">02</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Activities of Daily Living</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                These are the essential tasks people need to complete each day to care for
                themselves. These include bathing, dressing, grooming, toileting, mobility, and
                eating. Our trained caregivers provide respectful, compassionate assistance with
                ADLs, helping clients maintain comfort, safety, and dignity in their daily lives.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            {/* Companionship */}
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4783b5]">03</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Companionship</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We offer compassionate companionship from dedicated caregivers who build genuine
                connections and enhance quality of life. Whether it&apos;s conversation, shared
                activities, or simply being present, our companions provide the social interaction
                and emotional support that everyone deserves.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Get the Care You Deserve?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Contact us today to discuss how we can create a personalized care plan for your loved
              one.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#4783b5] text-white px-8 py-3.5 text-base font-medium transition-colors hover:bg-[#3a6d96]"
              >
                Contact Us
              </Link>
              <a
                href="tel:6165002190"
                className="inline-block rounded-full border border-gray-200 text-gray-700 px-8 py-3.5 text-base font-medium transition-colors hover:border-[#4783b5] hover:text-[#4783b5]"
              >
                616-500-2190
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
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
