import {
  FadeIn,
  FadeInUp,
  HoverCard,
  RevealText,
  StaggerContainer,
  StaggerItem,
} from '@/components/Motion'
import { CtaButton } from './CtaButton'

const steps = [
  {
    num: '1',
    title: 'Check Your Eligibility',
    desc: 'See if you qualify to become a paid caregiver for a loved one who needs care and support at home.',
  },
  {
    num: '2',
    title: 'Get Support & Guidance',
    desc: 'Our team helps guide you through applications, paperwork, and each step needed to begin care.',
  },
  {
    num: '3',
    title: 'Start Earning While Caring',
    desc: 'Receive pay for the care you already provide while supporting your loved one safely at home.',
  },
]

export function ThreeSteps() {
  return (
    <section className="py-24 md:py-32 bg-[#73a9d9]">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Support Your Loved Ones
              <br />
              in{' '}
              <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-8">
                3 Simple Steps
              </span>
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
              We make the process easy to understand by helping families navigate eligibility,
              paperwork, and caregiver support from start to finish.
            </p>
          </FadeIn>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-8 items-stretch">
          {steps.map((step, index) => {
            const cornerClass =
              index === 0
                ? 'rounded-tl-[18px] rounded-br-[18px]'
                : index === steps.length - 1
                  ? 'rounded-tr-[18px] rounded-bl-[18px]'
                  : 'rounded-[18px]'
            return (
              <StaggerItem key={step.num} className="flex">
                <HoverCard className="w-full">
                  <div
                    className={`relative flex flex-col items-center text-center bg-[#f5f5f5] ${cornerClass} px-6 pt-14 pb-8 min-h-[240px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
                  >
                    {/* Number Circle */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#f7ee9a] text-[#5f6780] text-2xl font-bold shadow-sm">
                      {step.num}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeInUp delay={0.3}>
          <div className="mt-14 flex justify-center">
            <CtaButton variant="inverse" />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
