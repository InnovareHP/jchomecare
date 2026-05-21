import { FadeIn, FadeInUp, RevealText } from '@/components/Motion'
import { EligibilityForm } from './EligibilityForm'

export function ReadyToGetStarted() {
  return (
    <section
      id="mddhs-contact"
      className="relative py-24 md:py-32 bg-[#73a9d9] overflow-hidden scroll-mt-24 rounded-tl-[100px] rounded-tr-[100px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#73a9d9] via-[#5a93c4] to-[#4a7fad]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="container relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to{' '}
              <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-8">
                Get Started?
              </span>
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
              Speak with our team for personalized guidance and support through every step of the
              process.
            </p>
          </FadeIn>
        </FadeIn>

        <FadeInUp delay={0.2}>
          <div className="max-w-2xl mx-auto rounded-2xl bg-white p-6 md:p-10 shadow-xl shadow-black/10">
            <EligibilityForm />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
