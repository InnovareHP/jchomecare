import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-32">
        <div className="container">
          <FadeInUp className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Compassionate Home Health Care Services
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-500">Changing the face of home care.</p>
            <p className="mt-3 text-lg text-[#4783b5] font-semibold">
              <a href="tel:6165002190">616-500-2190</a>
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#4783b5] text-white px-8 py-3.5 text-base font-medium transition-colors hover:bg-[#3a6d96]"
              >
                Get Started Today
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="border-t border-gray-100" />
      </div>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4783b5]">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Caring for others is a privilege
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              At JC Home Care, we believe that caring for others is a privilege. Our mission is to
              provide exceptional home health care and ensure your loved ones receive the best
              possible support in their own environment.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <StaggerItem className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Compassionate Care</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Every caregiver is trained to deliver care with empathy, patience, and genuine
                compassion.
              </p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Safety &amp; Comfort</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                We prioritize the safety and well-being of every client, creating a secure and
                comfortable environment.
              </p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Personalized Support</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                We work closely with families to tailor care plans that meet each individual&apos;s
                unique needs.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Reviews */}
      {/* <section className="py-16 md:py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Customer Reviews that Speak for Themselves
          </h2>
          <p className="mt-3 text-gray-500">Reviews coming soon!</p>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Connect With Us</h2>
            <p className="mt-4 text-white leading-relaxed">
              Ready to learn more about how we can help your family? Reach out today for a free
              consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white text-[#4783b5] px-8 py-3.5 text-base font-medium transition-colors hover:bg-[#3a6d96]"
              >
                Contact Us
              </Link>
              <a
                href="tel:6165002190"
                className="inline-block rounded-full border border-gray-200 text-white px-8 py-3.5 text-base font-medium transition-colors hover:border-[#4783b5] hover:text-[#4783b5]"
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
  title: 'JC Home Care | Compassionate Home Health Care Services',
  description:
    'JC Home Care provides compassionate home health care services including dementia care, activities of daily living, and companionship. Serving Grand Rapids, MI. Call 616-500-2190.',
  openGraph: {
    title: 'JC Home Care | Compassionate Home Health Care Services',
    description:
      'Changing the face of home care. Compassionate, personalized home health care services.',
  },
}
