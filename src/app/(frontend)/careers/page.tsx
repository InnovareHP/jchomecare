import type { Metadata } from 'next'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import {
  FadeIn,
  FadeInUp,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from '@/components/Motion'

export default async function CareersPage() {
  const payload = await getPayload({ config: configPromise })

  const careers = await payload.find({
    collection: 'careers',
    depth: 0,
    limit: 50,
    overrideAccess: false,
    draft: false,
    sort: '-publishedAt',
    where: {
      and: [
        { _status: { equals: 'published' } },
        { listingStatus: { equals: 'open' } },
      ],
    },
  })

  const hasOpenings = careers.docs && careers.docs.length > 0

  const employmentTypeLabels: Record<string, string> = {
    'full-time': 'Full-Time',
    'part-time': 'Part-Time',
    'per-diem': 'Per Diem',
    contract: 'Contract',
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#73a9d9]/10 via-white to-[#faf3a2]/10 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <RevealText delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-4">
                Join Our Team
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.06] tracking-tight">
                Build a career
                <br />
                in{' '}
                <span className="relative inline-block text-[#73a9d9]">
                  care
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#faf3a2]/40 rounded-full -z-10" />
                </span>
              </h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="mt-6 text-lg text-gray-500 font-light max-w-md">
                We&apos;re looking for compassionate people who want to make a difference in the
                lives of others. Explore our open positions below.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          {hasOpenings ? (
            <>
              <FadeIn className="mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  {careers.docs.length} open position{careers.docs.length !== 1 && 's'}
                </p>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {careers.docs.map((career) => {
                  const date = career.publishedAt
                    ? new Date(career.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : null

                  return (
                    <StaggerItem key={career.id}>
                      <HoverCard>
                        <Link href={`/careers/${career.slug}`} className="group block h-full">
                          <article className="relative h-full rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9] to-[#73a9d9]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="inline-block rounded-full bg-[#73a9d9]/10 px-3 py-1 text-xs font-semibold text-[#73a9d9]">
                                {employmentTypeLabels[career.employmentType] ?? career.employmentType}
                              </span>
                              {career.department && (
                                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                                  {career.department}
                                </span>
                              )}
                            </div>

                            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#73a9d9] transition-colors leading-snug">
                              {career.title}
                            </h2>

                            {career.summary && (
                              <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                                {career.summary}
                              </p>
                            )}

                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                {career.location && <span>{career.location}</span>}
                                {career.location && date && <span>&middot;</span>}
                                {date && <span>{date}</span>}
                              </div>
                              <span className="text-sm font-medium text-[#73a9d9] flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
                                Apply <span>&rarr;</span>
                              </span>
                            </div>
                          </article>
                        </Link>
                      </HoverCard>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </>
          ) : (
            <FadeIn className="text-center max-w-md mx-auto py-16">
              <p className="text-6xl font-bold text-black mb-6">00</p>
              <p className="text-xl font-semibold text-gray-900">No openings right now</p>
              <p className="mt-3 text-gray-400">
                We don&apos;t have any open positions at the moment, but we&apos;re always looking
                for great people. Check back soon!
              </p>
              <FadeInUp delay={0.2}>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 text-[#73a9d9] font-medium hover:gap-3 transition-all"
                >
                  <span>&larr;</span> Back to home
                </Link>
              </FadeInUp>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#faf3a2]">
        <div className="container">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-4">
              Why JC Home Care?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Make a real difference every day
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Join a team that values compassion, integrity, and the wellbeing of every client. We
              offer competitive pay, flexible schedules, and a supportive work environment.
            </p>
            <FadeInUp delay={0.2}>
              <a
                href="tel:6165002190"
                className="mt-8 group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20"
              >
                Questions? Call 616-500-2190{' '}
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </FadeInUp>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the JC Home Care team. Browse open positions and apply online. We are looking for compassionate caregivers in Grand Rapids, MI.',
  openGraph: {
    title: 'Careers | JC Home Care',
    description:
      'Browse open positions and apply to join the JC Home Care team in Grand Rapids, MI.',
  },
}
