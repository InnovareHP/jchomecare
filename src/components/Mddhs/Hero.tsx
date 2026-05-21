import { FadeInLeft, FadeInUp, RevealText } from '@/components/Motion'
import { CtaButton } from './CtaButton'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <Image
          src="/bg-hero-mddhs.png"
          alt="MDDHS Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/10" />
      <div className="container relative z-10">
        <FadeInLeft>
          <div className="max-w-xl">
            <RevealText delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.06] tracking-tight">
                Earn While Caring
                <br />
                for{' '}
                <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-8">
                  Loved Ones
                </span>
              </h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-lg leading-relaxed">
                At JC Home Care, we help family members become paid caregivers for the people they
                already love and support.
              </p>
            </RevealText>
            <FadeInUp delay={0.3}>
              <div className="mt-10">
                <CtaButton variant="pill" />
              </div>
            </FadeInUp>
          </div>
        </FadeInLeft>
      </div>
    </section>
  )
}
