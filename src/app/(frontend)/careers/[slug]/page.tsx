import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import { FadeInUp, FadeInLeft, FadeInRight, RevealText, AnimatedLine } from '@/components/Motion'
import { CareerApplicationForm } from './CareerApplicationForm'
import RichText from '@/components/RichText'

type Args = {
  params: Promise<{ slug: string }>
}

export default async function CareerDetailPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'careers',
    depth: 0,
    limit: 1,
    overrideAccess: false,
    draft: false,
    where: {
      and: [
        { slug: { equals: slug } },
        { _status: { equals: 'published' } },
      ],
    },
  })

  const career = result.docs[0]
  if (!career) notFound()

  const employmentTypeLabels: Record<string, string> = {
    'full-time': 'Full-Time',
    'part-time': 'Part-Time',
    'per-diem': 'Per Diem',
    contract: 'Contract',
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#73a9d9]/10 via-white to-[#faf3a2]/10 overflow-hidden">
        <div className="container relative z-10 max-w-4xl mx-auto">
          <RevealText delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block rounded-full bg-[#73a9d9]/10 px-3 py-1 text-xs font-semibold text-[#73a9d9]">
                {employmentTypeLabels[career.employmentType] ?? career.employmentType}
              </span>
              {career.department && (
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                  {career.department}
                </span>
              )}
              {career.location && (
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                  {career.location}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.06] tracking-tight">
              {career.title}
            </h1>
          </RevealText>
          {career.summary && (
            <FadeInUp delay={0.2}>
              <p className="mt-6 text-lg text-gray-500 font-light max-w-2xl">{career.summary}</p>
            </FadeInUp>
          )}
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Job details */}
            <div className="lg:col-span-3">
              <FadeInLeft>
                {career.description && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                    <AnimatedLine className="h-[2px] w-16 bg-[#73a9d9] rounded-full mb-6" />
                    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[#73a9d9]">
                      <RichText data={career.description} />
                    </div>
                  </div>
                )}
                {career.requirements && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Requirements &amp; Qualifications
                    </h2>
                    <AnimatedLine className="h-[2px] w-16 bg-[#faf3a2] rounded-full mb-6" />
                    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[#73a9d9]">
                      <RichText data={career.requirements} />
                    </div>
                  </div>
                )}
              </FadeInLeft>
            </div>

            {/* Application form */}
            <div className="lg:col-span-2">
              <FadeInRight>
                <div className="sticky top-32 rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Apply for this position</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Fill out the form below and we&apos;ll be in touch.
                  </p>
                  <CareerApplicationForm careerId={career.id} careerTitle={career.title} />
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'careers',
    depth: 0,
    limit: 1,
    overrideAccess: false,
    draft: false,
    where: { slug: { equals: slug } },
  })

  const career = result.docs[0]

  const title = career ? `${career.title} — Now Hiring` : 'Career Opportunity'
  const description =
    career?.summary ??
    'View this career opportunity at JC Home Care in Grand Rapids, MI. Apply online today.'

  return {
    title,
    description,
    openGraph: {
      title: career ? `${career.title} | JC Home Care Careers` : 'Career | JC Home Care',
      description,
      url: `https://jchomecare.net/careers/${slug}`,
    },
    alternates: {
      canonical: `https://jchomecare.net/careers/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const careers = await payload.find({
    collection: 'careers',
    draft: false,
    limit: 100,
    overrideAccess: false,
    where: {
      _status: { equals: 'published' },
    },
    select: { slug: true },
  })

  return careers.docs.map(({ slug }) => ({ slug: slug! }))
}
