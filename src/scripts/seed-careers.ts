import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config.js'

const careers = [
  {
    title: 'Certified Nursing Assistant (CNA)',
    department: 'Nursing',
    location: 'Grand Rapids, MI',
    employmentType: 'full-time' as const,
    listingStatus: 'open' as const,
    summary:
      'Provide compassionate, hands-on care to clients in their homes. Assist with daily living activities including bathing, dressing, mobility, and meal preparation.',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'About the Role' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'As a CNA at JC Home Care, you will be the heart of our mission — delivering personalized, one-on-one care that helps clients maintain their independence and dignity in the comfort of their own homes. You will work closely with our care coordination team to ensure each client receives the attention they deserve.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'What You\'ll Do' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Assist clients with activities of daily living (ADLs) including bathing, grooming, dressing, and toileting\n• Help with meal planning and preparation based on dietary needs\n• Provide medication reminders and monitor health changes\n• Assist with mobility, transfers, and light exercise routines\n• Maintain a clean and safe home environment\n• Document care activities and report changes to the supervising nurse',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    requirements: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Active CNA certification in the State of Michigan\n• Minimum 1 year of home care or long-term care experience preferred\n• CPR/First Aid certification (or willingness to obtain)\n• Valid driver\'s license and reliable transportation\n• Excellent communication and interpersonal skills\n• Ability to lift up to 50 lbs and perform physical tasks\n• Compassionate, patient, and dependable personality\n• Must pass a background check and drug screening',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  },
  {
    title: 'Home Health Aide (HHA)',
    department: 'Care Services',
    location: 'Grand Rapids, MI',
    employmentType: 'part-time' as const,
    listingStatus: 'open' as const,
    summary:
      'Support clients with personal care, companionship, and light housekeeping in their homes. Flexible schedules available with competitive hourly pay.',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'About the Role' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'We are seeking a warm and reliable Home Health Aide to join our growing team. In this role, you\'ll provide essential support to clients who need assistance with everyday tasks while offering meaningful companionship. This is a great opportunity for someone who wants flexible hours while making a genuine impact.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'What You\'ll Do' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Provide personal care assistance including bathing, grooming, and dressing\n• Perform light housekeeping duties such as laundry, dishes, and tidying\n• Prepare nutritious meals and snacks\n• Accompany clients to appointments and errands\n• Offer companionship through conversation, games, and activities\n• Monitor and report any changes in client condition',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    requirements: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• High school diploma or equivalent\n• Home Health Aide certification preferred (training available)\n• Previous caregiving experience is a plus\n• Valid driver\'s license and reliable transportation\n• Strong communication skills and a caring attitude\n• Ability to work independently and follow care plans\n• Must pass background check and drug screening',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  },
  {
    title: 'Registered Nurse (RN) — Care Supervisor',
    department: 'Nursing',
    location: 'Grand Rapids, MI',
    employmentType: 'full-time' as const,
    listingStatus: 'open' as const,
    summary:
      'Lead and supervise a team of home health aides and CNAs. Conduct client assessments, develop care plans, and ensure quality standards are met across all visits.',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'About the Role' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'JC Home Care is looking for an experienced Registered Nurse to serve as a Care Supervisor. In this leadership role, you will oversee the quality of care delivered by our field staff, conduct initial and ongoing client assessments, and serve as the clinical point of contact for families and healthcare providers.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'What You\'ll Do' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Conduct comprehensive client assessments and develop individualized care plans\n• Supervise and mentor CNAs and Home Health Aides\n• Perform scheduled supervisory visits to ensure care plan compliance\n• Coordinate with physicians, therapists, and family members\n• Handle clinical documentation and regulatory compliance\n• Participate in on-call rotation for after-hours clinical questions\n• Lead training sessions for new and existing staff',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    requirements: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Active RN license in the State of Michigan\n• Minimum 2 years of home health or clinical nursing experience\n• Supervisory or leadership experience preferred\n• Strong assessment, critical thinking, and documentation skills\n• Proficiency with electronic health records\n• Excellent organizational and time management abilities\n• Valid driver\'s license and reliable transportation\n• CPR/BLS certification required',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  },
  {
    title: 'Companion Caregiver',
    department: 'Care Services',
    location: 'Grand Rapids, MI',
    employmentType: 'per-diem' as const,
    listingStatus: 'open' as const,
    summary:
      'Provide companionship and non-medical support to elderly clients. Perfect for someone who loves connecting with people and wants a flexible, rewarding role.',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'About the Role' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Our Companion Caregivers play a vital role in reducing isolation and improving the quality of life for our clients. This per-diem position offers ultimate flexibility — pick up shifts that work with your schedule while bringing joy and connection to someone\'s day.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'What You\'ll Do' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Provide friendly companionship through conversation and shared activities\n• Assist with light meal preparation and snacks\n• Accompany clients on walks, to appointments, or social outings\n• Help with light housekeeping and organization\n• Play games, read, or watch shows together\n• Provide transportation for errands and appointments\n• Report any concerns about client wellbeing to the care team',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    requirements: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• High school diploma or equivalent\n• No certification required — we provide training\n• Genuine passion for helping and connecting with elderly individuals\n• Valid driver\'s license and reliable transportation\n• Strong communication skills and a positive attitude\n• Ability to be patient, empathetic, and respectful\n• Must pass background check',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  },
  {
    title: 'Office Coordinator',
    department: 'Administration',
    location: 'Grand Rapids, MI',
    employmentType: 'full-time' as const,
    listingStatus: 'open' as const,
    summary:
      'Manage daily office operations, coordinate caregiver schedules, handle client intake calls, and support the administrative side of our growing home care agency.',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'About the Role' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'We\'re looking for a highly organized and personable Office Coordinator to be the backbone of our operations. You\'ll be the first voice families hear when they call, the go-to person for scheduling, and a key player in keeping everything running smoothly behind the scenes.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'What You\'ll Do' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• Answer incoming calls and handle client inquiries with warmth and professionalism\n• Coordinate and manage caregiver schedules and shift coverage\n• Process new client intake and maintain accurate records\n• Support payroll, billing, and accounts receivable tasks\n• Maintain office supplies and equipment\n• Assist with recruitment efforts and onboarding new staff\n• Ensure compliance with state regulations and company policies',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    requirements: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: '• High school diploma required; associate\'s degree or higher preferred\n• 1-2 years of office or administrative experience\n• Home care or healthcare industry experience is a plus\n• Proficiency in Microsoft Office and scheduling software\n• Excellent phone etiquette and customer service skills\n• Strong organizational skills and attention to detail\n• Ability to multitask in a fast-paced environment\n• Bilingual (English/Spanish) is a plus',
              },
            ],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding careers...')

  for (const career of careers) {
    const existing = await payload.find({
      collection: 'careers',
      where: { title: { equals: career.title } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  Skipping "${career.title}" (already exists)`)
      continue
    }

    await payload.create({
      collection: 'careers',
      // Cast needed: seed data lexical nodes omit `version` for brevity
      data: career as any,
    })

    console.log(`  Created "${career.title}"`)
  }

  console.log('Done! Created sample career listings.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
