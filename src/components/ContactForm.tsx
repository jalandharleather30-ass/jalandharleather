'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ContactForm as ContactFormType } from '@/types'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormType>()

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'contact'
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
        reset()
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.name ? 'border-red-300' : 'border-secondary-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.email ? 'border-red-300' : 'border-secondary-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Honeypot field - hidden from users, bots might fill it */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
          <label htmlFor="website_url">Website URL (leave empty)</label>
          <input
            type="text"
            id="website_url"
            {...register('website_url')}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none ${
              errors.message ? 'border-red-300' : 'border-secondary-300'
            }`}
            placeholder="Tell us about your inquiry, custom requirements, or any questions you have..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <motion.div
            className={`p-4 rounded-lg ${
              submitMessage.includes('Thank you') 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitMessage}
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 ${
            isSubmitting
              ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
              : 'btn-primary hover:shadow-elegant'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="loader mr-3"></div>
              Sending Message...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-xs text-secondary-500 text-center">
          By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
        </p>
      </form>
    </motion.div>
  )
}
