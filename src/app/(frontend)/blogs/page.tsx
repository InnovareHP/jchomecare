import type { Metadata } from 'next'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/Motion'

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
      {/* Header */}
      <section className="bg-white py-16 md:py-24">
        <FadeInUp className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Blog</h1>
          <p className="mt-4 text-lg text-gray-500">
            Stories, tips, and insights about home health care.
          </p>
        </FadeInUp>
      </section>

      <div className="container">
        <div className="border-t border-gray-100" />
      </div>

      {/* Blog list */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {hasPosts ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group block"
                    >
                      <article className="h-full border border-gray-100 rounded-xl p-6 transition-colors hover:border-[#4783b5]/30 hover:bg-gray-50/50">
                        {/* Categories */}
                        {blog.categories &&
                          Array.isArray(blog.categories) &&
                          blog.categories.length > 0 && (
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#4783b5] mb-3">
                              {blog.categories
                                .map((cat) => (typeof cat === 'object' ? cat.title : ''))
                                .filter(Boolean)
                                .join(', ')}
                            </p>
                          )}

                        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#4783b5] transition-colors">
                          {blog.title}
                        </h2>

                        {blog.meta?.description && (
                          <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                            {blog.meta.description}
                          </p>
                        )}

                        {date && (
                          <p className="mt-4 text-xs text-gray-400">{date}</p>
                        )}
                      </article>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          ) : (
            <FadeInUp className="text-center max-w-md mx-auto">
              <p className="text-gray-500 text-lg">No blog posts yet.</p>
              <p className="mt-2 text-gray-400 text-sm">Check back soon for new content!</p>
            </FadeInUp>
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
    description:
      'Stories, tips, and insights about home health care from JC Home Care.',
  },
}
