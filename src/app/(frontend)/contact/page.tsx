import type { Metadata } from 'next'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-24">
        <FadeInUp className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-500">
            We&apos;re here to help. Reach out to us today.
          </p>
        </FadeInUp>
      </section>

      <div className="container"><div className="border-t border-gray-100" /></div>

      {/* Contact Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <StaggerContainer className="max-w-2xl mx-auto space-y-12" staggerDelay={0.12}>
            {/* Christina */}
            <StaggerItem>
              <h2 className="text-2xl font-bold text-gray-900">Christina Sanders</h2>
              <p className="mt-1 text-gray-500">Owner &amp; Operator</p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            {/* Phone & Email */}
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:6165002190"
                    className="text-lg font-medium text-[#4783b5] hover:underline"
                  >
                    616-500-2190
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    24/7 phone calls accepted for clients
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:christina@jchomecare.net"
                    className="text-lg font-medium text-[#4783b5] hover:underline"
                  >
                    christina@jchomecare.net
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            {/* Office Hours */}
            <StaggerItem>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Office Hours &amp; Non-Client Calls
              </p>
              <p className="text-gray-900 font-medium">Monday &ndash; Friday</p>
              <p className="text-gray-600">9:00 AM &ndash; 5:00 PM</p>
            </StaggerItem>

            <StaggerItem>
              <div className="border-t border-gray-100" />
            </StaggerItem>

            {/* Social */}
            <StaggerItem>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Follow Us
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100090885794398"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4783b5] font-medium hover:underline"
              >
                Facebook
              </a>
            </StaggerItem>
          </StaggerContainer>
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
