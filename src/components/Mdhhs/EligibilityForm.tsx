'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '@/utilities/ui'
import { sendMdhhsEligibility } from '@/app/(frontend)/mdhhs/actions'

type FormValues = {
  name: string
  email: string
  phone: string
  message: string
}

const fieldCls = (err: boolean) =>
  cn(
    'w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
    err ? 'border-red-300' : 'border-gray-200',
  )

const labelCls = 'block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5'

export const EligibilityForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { name: '', email: '', phone: '', message: '' },
  })

  const onSubmit = async (data: FormValues) => {
    setServerError('')
    const result = await sendMdhhsEligibility(data)
    if (!result.success) {
      setServerError(result.error)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-base font-bold text-gray-900 mb-1">Request Sent!</h4>
        <p className="text-sm text-gray-500">
          Thank you! Our team will reach out shortly to walk you through eligibility.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h3 className="text-xl font-bold text-[#73a9d9]">Check Your Eligibility</h3>
      <p className="-mt-3 text-sm text-gray-500">
        See if you qualify to become a paid caregiver for a loved one who needs care and support at
        home.
      </p>

      {serverError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="mdhhs-name" className={labelCls}>
            Your Name <span className="text-[#73a9d9]">*</span>
          </label>
          <input
            id="mdhhs-name"
            type="text"
            placeholder="Jane Doe"
            className={fieldCls(!!errors.name)}
            {...register('name', { required: 'Required' })}
          />
          {errors.name && <p className="mt-0.5 text-[11px] text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="mdhhs-email" className={labelCls}>
            Your Email <span className="text-[#73a9d9]">*</span>
          </label>
          <input
            id="mdhhs-email"
            type="email"
            placeholder="jane@example.com"
            className={fieldCls(!!errors.email)}
            {...register('email', {
              required: 'Required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
          />
          {errors.email && (
            <p className="mt-0.5 text-[11px] text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="mdhhs-phone" className={labelCls}>
            Phone <span className="text-[#73a9d9]">*</span>
          </label>
          <input
            id="mdhhs-phone"
            type="tel"
            placeholder="616-555-0123"
            className={fieldCls(!!errors.phone)}
            {...register('phone', { required: 'Required' })}
          />
          {errors.phone && (
            <p className="mt-0.5 text-[11px] text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="mdhhs-message" className={labelCls}>
          Tell Us About Your Caregiving Situation <span className="text-[#73a9d9]">*</span>
        </label>
        <textarea
          id="mdhhs-message"
          rows={4}
          placeholder="Share a little about your loved one, the care you already provide, and any questions you may have."
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9] resize-none',
            errors.message ? 'border-red-300' : 'border-gray-200',
          )}
          {...register('message', { required: 'Required' })}
        />
        {errors.message && (
          <p className="mt-0.5 text-[11px] text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-3.5 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/25 hover:scale-[1.02]',
            isSubmitting && 'opacity-60 cursor-not-allowed hover:scale-100',
          )}
        >
          {isSubmitting ? 'Sending...' : 'Check Your Eligibility'}
          {!isSubmitting && (
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          )}
        </button>
      </div>
    </form>
  )
}
