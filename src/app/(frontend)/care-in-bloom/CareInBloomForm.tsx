'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '@/utilities/ui'
import { sendCareInBloomRequest } from './actions'

type FormValues = {
  senderName: string
  senderEmail: string
  senderPhone: string
  recipientName: string
  recipientLocation: string
  message: string
}

const fieldCls = (err: boolean) =>
  cn(
    'w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
    err ? 'border-red-300' : 'border-gray-200',
  )

export const CareInBloomForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      senderName: '',
      senderEmail: '',
      senderPhone: '',
      recipientName: '',
      recipientLocation: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setServerError('')
    const result = await sendCareInBloomRequest(data)
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
          Thank you! We&apos;ll be in touch soon to arrange the delivery.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {serverError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      {/* ── Sender's Information ── */}
      <div>
        <p className="text-xl font-semibold q text-black mb-3">Sender&apos;s Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label htmlFor="senderName" className="block text-sm font-medium text-black mb-1">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              id="senderName"
              type="text"
              className={fieldCls(!!errors.senderName)}
              placeholder="Your Name"
              {...register('senderName', { required: 'Required' })}
            />
            {errors.senderName && (
              <p className="mt-0.5 text-[11px] text-red-500">{errors.senderName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senderEmail" className="block text-sm font-medium text-black mb-1">
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              id="senderEmail"
              type="email"
              className={fieldCls(!!errors.senderEmail)}
              placeholder="Your Email"
              {...register('senderEmail', {
                required: 'Required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
            />
            {errors.senderEmail && (
              <p className="mt-0.5 text-[11px] text-red-500">{errors.senderEmail.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senderPhone" className="block text-sm font-medium text-black mb-1">
              Phone
            </label>
            <input
              id="senderPhone"
              type="tel"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]"
              placeholder="Phone"
              {...register('senderPhone')}
            />
          </div>
        </div>
      </div>

      {/* ── Recipient's Information ── */}
      <div>
        <p className="text-xl font-semibold q text-black mb-3">Recipient&apos;s Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="recipientName" className="block text-sm font-medium text-black mb-1">
              Recipient&apos;s Name <span className="text-red-400">*</span>
            </label>
            <input
              id="recipientName"
              type="text"
              className={fieldCls(!!errors.recipientName)}
              placeholder="Recipient's Name"
              {...register('recipientName', { required: 'Required' })}
            />
            {errors.recipientName && (
              <p className="mt-0.5 text-[11px] text-red-500">{errors.recipientName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="recipientLocation"
              className="block text-sm font-medium text-black mb-1"
            >
              Recipient&apos;s Location <span className="text-red-400">*</span>
            </label>
            <input
              id="recipientLocation"
              type="text"
              className={fieldCls(!!errors.recipientLocation)}
              placeholder="Recipient's Location"
              {...register('recipientLocation', { required: 'Required' })}
            />
            {errors.recipientLocation && (
              <p className="mt-0.5 text-[11px] text-red-500">{errors.recipientLocation.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Message ── */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={cn(
            'w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9] resize-none',
            errors.message ? 'border-red-300' : 'border-gray-200',
          )}
          placeholder="Share anything that would make this delivery extra special..."
          {...register('message', { required: 'Required' })}
        />
        {errors.message && (
          <p className="mt-0.5 text-[11px] text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full rounded-full bg-[#73a9d9] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20',
          isSubmitting && 'opacity-60 cursor-not-allowed',
        )}
      >
        {isSubmitting ? 'Sending...' : 'Send Comfort Today'}
      </button>
    </form>
  )
}
