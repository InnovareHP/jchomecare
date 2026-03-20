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
import Image from 'next/image'

export default async function BlogsPage() {
  const payload = await getPayload({ config: configPromise })

  const blogs = await payload.find({
    collection: 'blogs',
    depth: 1,
    limit: 20,
    overrideAccess: false,
    draft: false,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const hasPosts = blogs.docs && blogs.docs.length > 0

  return (
    <>
      {/* Hero — oversized typographic */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/blog-hero-section.avif"
          alt="Hero"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <RevealText delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight">
                Stories, tips
                <br />
                &amp;{' '}
                <span className="relative inline-block text-[#73a9d9]">
                  insights
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#faf3a2]/40 rounded-full -z-10" />
                </span>
              </h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="mt-6 text-lg text-white font-light max-w-md">
                Thoughtful perspectives on home health care from our team.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Blog list */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          {hasPosts ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogs.docs.map((blog) => {
                const date = blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : null

                return (
                  <StaggerItem key={blog.id}>
                    <HoverCard>
                      <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                        <article className="relative h-full rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9] to-[#73a9d9]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                          {blog.categories &&
                            Array.isArray(blog.categories) &&
                            blog.categories.length > 0 && (
                              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#73a9d9] mb-3">
                                {blog.categories
                                  .map((cat) => (typeof cat === 'object' ? cat.title : ''))
                                  .filter(Boolean)
                                  .join(', ')}
                              </p>
                            )}

                          <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#73a9d9] transition-colors leading-snug">
                            {blog.title}
                          </h2>

                          {blog.meta?.description && (
                            <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                              {blog.meta.description}
                            </p>
                          )}

                          <div className="mt-6 flex items-center justify-between">
                            {date && <p className="text-xs text-gray-400">{date}</p>}
                            <span className="text-sm font-medium text-[#73a9d9] flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
                              Read <span>&rarr;</span>
                            </span>
                          </div>
                        </article>
                      </Link>
                    </HoverCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          ) : (
            <FadeIn className="text-center max-w-md mx-auto py-16">
              <p className="text-6xl font-bold text-black mb-6">00</p>
              <p className="text-xl font-semibold text-gray-900">No posts yet</p>
              <p className="mt-3 text-gray-400">
                We&apos;re working on sharing our stories. Check back soon!
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
    </>
  )
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the latest stories, tips, and insights about home health care from JC Home Care.',
  openGraph: {
    title: 'Blog | JC Home Care',
    description: 'Stories, tips, and insights about home health care from JC Home Care.',
  },
}
