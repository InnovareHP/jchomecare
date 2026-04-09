import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getCareersSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://jchomecare.net'

    const results = await payload.find({
      collection: 'careers',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((career) => Boolean(career?.slug))
          .map((career) => ({
            loc: `${SITE_URL}/careers/${career?.slug}`,
            lastmod: career.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['careers-sitemap'],
  {
    tags: ['careers-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getCareersSitemap()

  return getServerSideSitemap(sitemap)
}
