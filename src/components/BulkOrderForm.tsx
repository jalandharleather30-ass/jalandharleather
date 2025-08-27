'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { BulkOrderForm as BulkOrderFormType, PRODUCT_CATEGORIES } from '@/types'

export default function BulkOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm<BulkOrderFormType>()

  const selectedCategory = watch('productCategory')

  const onSubmit = async (data: BulkOrderFormType) => {
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
          formType: 'bulk-order',
          productType: data.productCategory,
          message: data.requirements
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitMessage('Thank you for your bulk order inquiry! Our team will contact you within 24 hours with a detailed quote.')
        reset()
      } else {
        setSubmitMessage('Sorry, there was an error submitting your inquiry. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Bulk order submission error:', error)
      setSubmitMessage('Sorry, there was an error submitting your inquiry. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-elegant border border-secondary-100 p-8 lg:p-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-secondary-900 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              {...register('companyName', { required: 'Company name is required' })}
              className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.companyName ? 'border-red-300' : 'border-secondary-300'
              }`}
              placeholder="Enter your company name"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
            )}
          </div>

          {/* Contact Person */}
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-secondary-900 mb-2">
              Contact Person *
            </label>
            <input
              type="text"
              id="contactPerson"
              {...register('contactPerson', { required: 'Contact person name is required' })}
              className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.contactPerson ? 'border-red-300' : 'border-secondary-300'
              }`}
              placeholder="Enter contact person name"
            />
            {errors.contactPerson && (
              <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Honeypot field - hidden from users, bots might fill it */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
            <label htmlFor="website_url_bulk">Website URL (leave empty)</label>
            <input
              type="text"
              id="website_url_bulk"
              {...register('website_url')}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone number is required' })}
              className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.phone ? 'border-red-300' : 'border-secondary-300'
              }`}
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Category */}
          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-secondary-900 mb-2">
              Product Category *
            </label>
            <select
              id="productCategory"
              {...register('productCategory', { required: 'Please select a product category' })}
              className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.productCategory ? 'border-red-300' : 'border-secondary-300'
              }`}
            >
              <option value="">Select a category</option>
              {PRODUCT_CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
              <option value="mixed">Mixed Categories</option>
              <option value="custom">Custom Design</option>
            </select>
            {errors.productCategory && (
              <p className="mt-1 text-sm text-red-600">{errors.productCategory.message}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-secondary-900 mb-2">
              Estimated Quantity *
            </label>
            <select
              id="quantity"
              {...register('quantity', { required: 'Please select quantity range' })}
              className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.quantity ? 'border-red-300' : 'border-secondary-300'
              }`}
            >
              <option value="">Select quantity range</option>
              <option value="25-50">25-50 pieces</option>
              <option value="51-100">51-100 pieces</option>
              <option value="101-250">101-250 pieces</option>
              <option value="251-500">251-500 pieces</option>
              <option value="500+">500+ pieces</option>
            </select>
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
            )}
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-secondary-900 mb-2">
            Detailed Requirements *
          </label>
          <textarea
            id="requirements"
            rows={6}
            {...register('requirements', { required: 'Please describe your requirements' })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none ${
              errors.requirements ? 'border-red-300' : 'border-secondary-300'
            }`}
            placeholder="Please describe your requirements in detail including:
• Specific product types or designs
• Materials preferences
• Colors/finishes
• Custom branding requirements
• Timeline expectations
• Budget considerations
• Any special requirements"
          />
          {errors.requirements && (
            <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
          )}
        </div>

        {/* Additional Info */}
        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-secondary-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-secondary-600">
            <li className="flex items-start">
              <span className="font-medium text-primary-600 mr-2">1.</span>
              We'll review your requirements and contact you within 24 hours
            </li>
            <li className="flex items-start">
              <span className="font-medium text-primary-600 mr-2">2.</span>
              Our team will provide a detailed quote with pricing and timeline
            </li>
            <li className="flex items-start">
              <span className="font-medium text-primary-600 mr-2">3.</span>
              We'll create samples for your approval before starting production
            </li>
            <li className="flex items-start">
              <span className="font-medium text-primary-600 mr-2">4.</span>
              Your dedicated account manager will guide you through the entire process
            </li>
          </ul>
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
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto py-4 px-12 rounded-lg font-medium text-lg transition-all duration-200 ${
              isSubmitting
                ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
                : 'btn-primary hover:shadow-elegant'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="loader mr-3"></div>
                Submitting Inquiry...
              </span>
            ) : (
              'Submit Bulk Order Inquiry'
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-secondary-500 text-center">
          Your information is secure and will only be used to process your bulk order inquiry. We respect your privacy and won't share your details with third parties.
        </p>
      </form>
    </motion.div>
  )
}
