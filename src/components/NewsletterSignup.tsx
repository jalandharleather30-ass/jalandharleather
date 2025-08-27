'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary-600 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-primary-100">
          You've been successfully subscribed to our newsletter. We'll keep you updated with our latest collections and exclusive offers.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-primary-600 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2 font-serif">
          Stay in Touch
        </h3>
        <p className="text-primary-100">
          Subscribe to our newsletter for exclusive updates, new collections, and special offers.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-lg border-0 bg-white text-secondary-900 placeholder-secondary-500 focus:ring-2 focus:ring-accent-500 focus:outline-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !email}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
            isLoading || !email
              ? 'bg-primary-400 text-primary-200 cursor-not-allowed'
              : 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </div>
          ) : (
            'Subscribe to Newsletter'
          )}
        </button>
      </form>
      
      <p className="text-primary-200 text-xs text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}
