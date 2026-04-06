'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '@/utilities/ui'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  resume: FileList | null
  coverLetter: string
}

export const CareerApplicationForm: React.FC<{
  careerId: number
  careerTitle: string
}> = ({ careerId, careerTitle }) => {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setServerError('')

    const formData = new FormData()
    formData.append('firstName', data.firstName)
    formData.append('lastName', data.lastName)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('position', String(careerId))
    formData.append('coverLetter', data.coverLetter || '')

    if (data.resume && data.resume.length > 0) {
      formData.append('resume', data.resume[0])
    }

    try {
      const res = await fetch('/careers/apply', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.')
        return
      }

      setSubmitted(true)
    } catch {
      setServerError('Network error. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">Application Sent!</h4>
        <p className="text-sm text-gray-500">
          Thank you for applying for <span className="font-medium text-gray-700">{careerTitle}</span>.
          We&apos;ll review your application and get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {serverError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
            errors.firstName ? 'border-red-300' : 'border-gray-200',
          )}
          placeholder="Jane"
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && (
          <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          id="lastName"
          type="text"
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
            errors.lastName ? 'border-red-300' : 'border-gray-200',
          )}
          placeholder="Doe"
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && (
          <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
            errors.email ? 'border-red-300' : 'border-gray-200',
          )}
          placeholder="jane@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email',
            },
          })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9]',
            errors.phone ? 'border-red-300' : 'border-gray-200',
          )}
          placeholder="(616) 555-0123"
          {...register('phone', { required: 'Phone number is required' })}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
      </div>

      {/* Resume */}
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
          Resume
        </label>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#73a9d9]/10 file:text-[#73a9d9] hover:file:bg-[#73a9d9]/20 file:cursor-pointer file:transition-colors"
          {...register('resume')}
        />
        <p className="mt-1 text-xs text-gray-400">PDF, DOC, or DOCX (optional)</p>
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
          Cover Letter / Message
        </label>
        <textarea
          id="coverLetter"
          rows={4}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73a9d9]/30 focus:border-[#73a9d9] resize-none"
          placeholder="Tell us why you'd be a great fit..."
          {...register('coverLetter')}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full rounded-full bg-[#73a9d9] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/20',
          isSubmitting && 'opacity-60 cursor-not-allowed',
        )}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
