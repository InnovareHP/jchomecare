import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-24">
        <FadeInUp className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About JC Home Care</h1>
          <p className="mt-4 text-lg text-gray-500">
            Dedicated to providing compassionate and personalized home health care services.
          </p>
        </FadeInUp>
      </section>

      <div className="container"><div className="border-t border-gray-100" /></div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 gap-16 max-w-2xl mx-auto" staggerDelay={0.2}>
            <StaggerItem>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At JC Home Care, our mission is to provide compassionate and personalized home
                health care services to our clients. We strive to improve the quality of life for
                those we serve, while prioritizing their safety and well-being.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team of skilled and experienced professionals is dedicated to delivering the
                highest quality of care and support to our clients. We work closely with families
                and other caregivers to ensure that our services meet the unique needs of each
                individual.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We offer a wide range of home health care services, including dementia care, end of
                life care, assistance with physical therapy exercises, activities of daily living,
                and more. Our goal is to help our clients maintain their independence and achieve
                their health and wellness goals.
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
              Let Us Care for Your Loved One
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Get in touch today to learn more about our team and how we can help.
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
  title: 'About',
  description:
    'Learn about JC Home Care — our mission, our team, and the home health care services we provide. Compassionate care for your loved ones.',
  openGraph: {
    title: 'About | JC Home Care',
    description:
      'Our mission is to provide compassionate, personalized home health care. Learn about our team and services.',
  },
}
