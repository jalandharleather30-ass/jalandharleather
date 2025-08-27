'use client'

import { useState } from 'react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '919004672562' // Without + for WhatsApp API
  const message = 'Hello! I am interested in your leather products. Could you please help me?'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Open WhatsApp Chat"
        >
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.297"/>
          </svg>
        </button>

        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.297"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Jalandhar Leather</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4">
              {/* Welcome Message */}
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">JL</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Jalandhar Leather</span>
                </div>
                <p className="text-sm text-gray-700">
                  👋 Hi there! Welcome to Jalandhar Leather. 
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  How can we help you today? We're here to assist with:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Product inquiries</li>
                  <li>• Custom orders</li>
                  <li>• Size & color options</li>
                  <li>• Shipping information</li>
                </ul>
              </div>

              {/* Call to Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Start Chat on WhatsApp
              </a>

              {/* Alternative Contact */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 mb-2">Or call us directly:</p>
                <a 
                  href="tel:+919004672562" 
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  +91 9004672562
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
