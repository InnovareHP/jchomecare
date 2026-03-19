import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { formatAuthors } from '@/utilities/formatAuthors'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

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
      {/* Header */}
      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-2xl mx-auto">
          <FadeIn>
            <Link
              href="/blogs"
              className="text-sm text-[#4783b5] hover:underline mb-6 inline-block"
            >
              &larr; Back to Blog
            </Link>
          </FadeIn>

          <FadeInUp delay={0.1}>
            {categories.length > 0 && (
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4783b5] mb-3">
                {categories.join(', ')}
              </p>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {blog.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              {hasAuthors && <span>By {formatAuthors(blog.populatedAuthors!)}</span>}
              {hasAuthors && date && <span>&middot;</span>}
              {date && <time dateTime={blog.publishedAt!}>{date}</time>}
            </div>
          </FadeInUp>
        </div>
      </section>

      <div className="container max-w-2xl mx-auto">
        <div className="border-t border-gray-100" />
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <FadeIn className="container max-w-2xl mx-auto" delay={0.2}>
          {blog.content && (
            <RichText
              className="prose prose-gray max-w-none"
              data={blog.content}
              enableGutter={false}
            />
          )}
        </FadeIn>
      </section>

      {/* Related blogs */}
      {blog.relatedBlogs && Array.isArray(blog.relatedBlogs) && blog.relatedBlogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-xl font-bold text-gray-900 mb-8">Related Posts</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blog.relatedBlogs.map((related) => {
                if (typeof related === 'string' || typeof related === 'number') return null
                return (
                  <StaggerItem key={related.id}>
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="group block border border-gray-100 rounded-xl p-5 transition-colors hover:border-[#4783b5]/30 hover:bg-white"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#4783b5] transition-colors">
                        {related.title}
                      </h3>
                    </Link>
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
