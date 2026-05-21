import { AnimatedLine, FadeInLeft, FadeInRight } from '@/components/Motion'
import { CtaButton } from './CtaButton'
import Image from 'next/image'

export function WhyBecomeCaregiver() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInLeft>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src="/mddhs-why-become-caregiver.png"
                alt="Why become a paid caregiver?"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeInLeft>

          <FadeInRight>
            <h2 className="text-3xl md:text-4xl font-bold text-[#73a9d9] leading-tight">
              Why become a paid
              <br />
              <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-10">
                caregiver
              </span>
              ?
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed text-lg">
              Many families already provide daily care for loved ones without knowing financial
              support may be available. We help eligible caregivers access programs that provide
              compensation, guidance, and ongoing support — so families can continue receiving
              quality care at home.
            </p>
            <div className="mt-8">
              <CtaButton variant="pill" />
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
