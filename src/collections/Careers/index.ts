import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from 'payload'
import { revalidatePath } from 'next/cache'

export const Careers: CollectionConfig<'careers'> = {
  slug: 'careers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    location: true,
    employmentType: true,
    department: true,
  },
  admin: {
    defaultColumns: ['title', 'department', 'employmentType', 'location', 'listingStatus', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Careers',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Job Title',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'department',
          type: 'text',
          label: 'Department',
          admin: { width: '33%' },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          defaultValue: 'Grand Rapids, MI',
          admin: { width: '33%' },
        },
        {
          name: 'employmentType',
          type: 'select',
          label: 'Employment Type',
          required: true,
          defaultValue: 'full-time',
          options: [
            { label: 'Full-Time', value: 'full-time' },
            { label: 'Part-Time', value: 'part-time' },
            { label: 'Per Diem', value: 'per-diem' },
            { label: 'Contract', value: 'contract' },
          ],
          admin: { width: '33%' },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Description',
          fields: [
            {
              name: 'summary',
              type: 'textarea',
              label: 'Short Summary',
              required: true,
              maxLength: 300,
              admin: {
                description: 'Brief description shown on the careers listing page.',
              },
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Full Job Description',
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
            },
          ],
        },
        {
          label: 'Requirements',
          fields: [
            {
              name: 'requirements',
              type: 'richText',
              label: 'Requirements & Qualifications',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
            },
          ],
        },
      ],
    },
    {
      name: 'listingStatus',
      type: 'select',
      label: 'Listing Status',
      required: true,
      defaultValue: 'open',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [
      ({ doc, previousDoc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          if (doc._status === 'published') {
            payload.logger.info(`Revalidating careers at /careers/${doc.slug}`)
            revalidatePath('/careers')
            revalidatePath(`/careers/${doc.slug}`)
          }

          if (previousDoc?._status === 'published' && doc._status !== 'published') {
            payload.logger.info(`Revalidating old career at /careers/${previousDoc.slug}`)
            revalidatePath('/careers')
            revalidatePath(`/careers/${previousDoc.slug}`)
          }
        }
        return doc
      },
    ],
    afterDelete: [
      ({ doc, req: { context } }) => {
        if (!context.disableRevalidate) {
          revalidatePath('/careers')
          if (doc?.slug) {
            revalidatePath(`/careers/${doc.slug}`)
          }
        }
        return doc
      },
    ],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
