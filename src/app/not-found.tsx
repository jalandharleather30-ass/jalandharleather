import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Jalandhar Leather',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-lg text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary-600 mb-4 font-serif">404</h1>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-serif">
          Page Not Found
        </h2>
        <p className="text-lg text-secondary-600 mb-8 leading-7">
          We couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered an incorrect URL.
        </p>

        {/* Navigation Options */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto text-center inline-block"
          >
            Return Home
          </Link>
          <Link
            href="/collection"
            className="btn-secondary w-full sm:w-auto text-center inline-block"
          >
            Browse Collection
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-secondary-200">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Popular Pages
          </h3>
          <div className="space-y-2">
            <Link href="/collection/ladies-handbags" className="block text-primary-600 hover:text-primary-700 transition-colors">
              Ladies Handbags
            </Link>
            <Link href="/our-story" className="block text-primary-600 hover:text-primary-700 transition-colors">
              Our Story
            </Link>
            <Link href="/craftsmanship" className="block text-primary-600 hover:text-primary-700 transition-colors">
              Craftsmanship
            </Link>
            <Link href="/contact" className="block text-primary-600 hover:text-primary-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
