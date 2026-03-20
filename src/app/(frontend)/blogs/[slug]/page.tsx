import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { formatAuthors } from '@/utilities/formatAuthors'
import {
  FadeIn,
  FadeInUp,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  AnimatedLine,
} from '@/components/Motion'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const blog = await queryBlogBySlug({ slug: decodeURIComponent(slug) })

  if (!blog) {
    notFound()
  }

  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const hasAuthors =
    blog.populatedAuthors &&
    blog.populatedAuthors.length > 0 &&
    formatAuthors(blog.populatedAuthors) !== ''

  const categories =
    blog.categories && Array.isArray(blog.categories)
      ? blog.categories
          .map((cat) => (typeof cat === 'object' ? cat.title : ''))
          .filter(Boolean)
      : []

  return (
    <>
      {/* Hero — editorial with accent bar */}
      <section className="relative bg-white overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#73a9d9] via-[#73a9d9]/60 to-[#faf3a2]" />

        <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#faf3a2]/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10 max-w-3xl mx-auto py-16 md:py-24">
          <FadeIn>
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-[#73a9d9] transition-all mb-10"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 group-hover:border-[#73a9d9] transition-colors text-xs">&larr;</span>
              All posts
            </Link>
          </FadeIn>

          <RevealText delay={0.1}>
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {categories.map((cat) => (
                  <span key={cat} className="inline-flex items-center rounded-full bg-[#73a9d9]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#73a9d9]">
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              {blog.title}
            </h1>
          </RevealText>

          <FadeInUp delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              {hasAuthors && (
                <span className="inline-flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#73a9d9]/10 flex items-center justify-center text-xs font-bold text-[#73a9d9]">
                    {(formatAuthors(blog.populatedAuthors!) ?? '').charAt(0)}
                  </span>
                  <span className="font-medium text-gray-700">{formatAuthors(blog.populatedAuthors!) ?? ''}</span>
                </span>
              )}
              {date && (
                <span className="text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <time dateTime={blog.publishedAt!}>{date}</time>
                </span>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>

      <div className="container max-w-3xl mx-auto">
        <AnimatedLine className="h-[1px] w-full bg-gray-100 rounded-full" />
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <FadeIn className="container max-w-3xl mx-auto" delay={0.2}>
          {blog.content && (
            <RichText
              className="prose prose-gray prose-lg max-w-none"
              data={blog.content}
              enableGutter={false}
            />
          )}
        </FadeIn>
      </section>

      {/* Related blogs */}
      {blog.relatedBlogs && Array.isArray(blog.relatedBlogs) && blog.relatedBlogs.length > 0 && (
        <section className="py-20 bg-[#faf3a2]/10">
          <div className="container max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#73a9d9] mb-2">
                Keep Reading
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                Related Posts
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {blog.relatedBlogs.map((related) => {
                if (typeof related === 'string' || typeof related === 'number') return null
                return (
                  <StaggerItem key={related.id}>
                    <HoverCard>
                      <Link
                        href={`/blogs/${related.slug}`}
                        className="group block"
                      >
                        <div className="relative rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-gray-100/50 hover:border-[#73a9d9]/20 overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73a9d9] to-[#73a9d9]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#73a9d9] transition-colors">
                            {related.title}
                          </h3>
                          <p className="mt-3 text-sm font-medium text-[#73a9d9] flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read post <span>&rarr;</span>
                          </p>
                        </div>
                      </Link>
                    </HoverCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const blogs = await payload.find({
    collection: 'blogs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return blogs.docs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const blog = await queryBlogBySlug({ slug: decodeURIComponent(slug) })

  if (!blog) return {}

  return {
    title: blog.title,
    description: blog.meta?.description || undefined,
    openGraph: {
      title: `${blog.title} | JC Home Care`,
      description: blog.meta?.description || undefined,
    },
  }
}

const queryBlogBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blogs',
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
