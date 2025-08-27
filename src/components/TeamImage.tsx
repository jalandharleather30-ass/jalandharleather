'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TeamImageProps {
  src: string
  alt: string
  name: string
  title: string
  company: string
  since: string
  quote?: string
}

export default function TeamImage({ src, alt, name, title, company, since, quote }: TeamImageProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-elegant">
      {!imageError ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
            onError={handleImageError}
          />
          {/* Overlay with name on image */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-white">
              <div className="text-2xl font-bold font-serif">{name}</div>
              <div className="text-sm opacity-90">{title}</div>
            </div>
          </div>
        </div>
      ) : (
        /* Professional fallback design */
        <div className="relative w-full h-full bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="leather-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                  <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.2"/>
                  <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leather-pattern)" className="text-white"/>
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative flex items-center justify-center h-full p-8">
            <div className="text-center text-white">
              {/* Professional photo placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center border-3 border-white/30">
                <svg className="w-12 h-12 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              
              <div className="text-3xl font-bold mb-2 font-serif">{name}</div>
              <div className="text-lg mb-3 text-primary-100">{title}</div>
              <div className="text-base opacity-90 mb-4">{company}</div>
              
              {/* Achievement badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                {since}
              </div>
              
              {quote && (
                <div className="text-xs mt-3 opacity-75 italic">"{quote}"</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
