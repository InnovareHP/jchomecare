import {
  AnimatedLine,
  FadeIn,
  FadeInUp,
  RevealText,
  StaggerContainer,
  StaggerItem,
} from '@/components/Motion'
import { CtaButton } from './CtaButton'

const faqs = [
  {
    q: 'Can I get paid to care for a family member?',
    a: 'Depending on eligibility requirements and available programs, family caregivers may qualify for compensation while caring for a loved one at home.',
  },
  {
    q: 'Who qualifies for caregiver support services?',
    a: 'Eligibility may depend on your loved one’s medical needs, care requirements, and program qualifications. Our team can help you determine eligibility.',
  },
  {
    q: 'Do you help with the application process?',
    a: 'Yes. We guide families through documentation, applications, approvals, and onboarding steps.',
  },
  {
    q: 'How do I get started?',
    a: 'Contact our team to schedule a free eligibility review and learn what options may be available for your family.',
  },
]

export function Faq() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-[#73a9d9] leading-tight">
              Frequently Asked{' '}
              <span className="underline decoration-[#faf3a2] decoration-4 underline-offset-8">
                Questions
              </span>
            </h2>
          </RevealText>
          <AnimatedLine className="mt-5 mx-auto h-[2px] w-16 bg-[#faf3a2] rounded-full" />
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item) => (
            <StaggerItem key={item.q}>
              <details className="group rounded-xl bg-[#73a9d9]/10 border border-[#73a9d9]/20 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 bg-[#73a9d9] text-white font-semibold text-base">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 transition-transform group-open:rotate-180">
                    &#9662;
                  </span>
                </summary>
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed bg-white">
                  {item.a}
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.2}>
          <div className="mt-12 flex justify-center">
            <CtaButton />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
