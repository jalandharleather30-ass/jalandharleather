'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { urlFor } from '@/sanity/lib/client'
import { getProductImage, getFallbackAlt } from '@/lib/productImageHelpers'
import { 
  CheckIcon, 
  HeartIcon, 
  ShareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setSelectedImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Product link copied to clipboard!')
    }
  }

  return (
    <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-secondary-500 hover:text-secondary-700">
              Home
            </Link>
          </li>
          <li>
            <ChevronRightIcon className="h-4 w-4 text-secondary-400" />
          </li>
          <li>
            <Link href="/collection" className="text-secondary-500 hover:text-secondary-700">
              Collection
            </Link>
          </li>
          <li>
            <ChevronRightIcon className="h-4 w-4 text-secondary-400" />
          </li>
          <li>
            <span className="text-secondary-900 font-medium">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-6">
          {/* Main Image */}
          <motion.div
            className="relative aspect-square bg-secondary-100 rounded-2xl overflow-hidden cursor-zoom-in"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsImageModalOpen(true)}
          >
            {product.images && product.images[selectedImageIndex] ? (
              <Image
                src={urlFor(product.images[selectedImageIndex]).width(600).height(600).url()}
                alt={product.images[selectedImageIndex].alt || product.name}
                fill
                className="object-cover object-center"
                priority
              />
            ) : (
              <Image
                src={getProductImage(product.name, product.category)}
                alt={getFallbackAlt(product.name, product.category)}
                fill
                className="object-cover object-center"
                priority
              />
            )}

            {/* Navigation arrows */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-soft"
                >
                  <ChevronLeftIcon className="h-5 w-5 text-secondary-700" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-soft"
                >
                  <ChevronRightIcon className="h-5 w-5 text-secondary-700" />
                </button>
              </>
            )}

            {/* Image counter */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {product.images.length}
              </div>
            )}
          </motion.div>

          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index
                      ? 'border-primary-600'
                      : 'border-transparent hover:border-secondary-300'
                  }`}
                >
                  <Image
                    src={urlFor(image).width(150).height(150).url()}
                    alt={image.alt || `${product.name} ${index + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category */}
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>

          {/* Title and Actions */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
                {product.name}
              </h1>
              {product.price && (
                <p className="mt-4 text-2xl font-semibold text-primary-600">
                  ₹{product.price.toLocaleString()}+
                  <span className="text-base font-normal text-secondary-500 ml-2">Starting price</span>
                </p>
              )}
            </div>
            
            <div className="flex items-center space-x-4 ml-6">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-2 rounded-full hover:bg-secondary-100 transition-colors"
              >
                {isWishlisted ? (
                  <HeartSolidIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-secondary-600" />
                )}
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-secondary-100 transition-colors"
              >
                <ShareIcon className="h-6 w-6 text-secondary-600" />
              </button>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center">
            {product.isAvailable ? (
              <>
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-green-700 font-medium">Available for Order</span>
              </>
            ) : (
              <>
                <XMarkIcon className="h-5 w-5 text-red-500" />
                <span className="ml-2 text-red-700 font-medium">Currently Out of Stock</span>
              </>
            )}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Description</h2>
            <p className="text-secondary-600 leading-7">{product.description}</p>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications */}
          {(product.materials || product.dimensions) && (
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 mb-4">Specifications</h2>
              <dl className="space-y-3">
                {product.materials && (
                  <div className="flex flex-col sm:flex-row">
                    <dt className="font-medium text-secondary-900 sm:w-32 mb-1 sm:mb-0">Materials:</dt>
                    <dd className="text-secondary-600 sm:flex-1">{product.materials}</dd>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex flex-col sm:flex-row">
                    <dt className="font-medium text-secondary-900 sm:w-32 mb-1 sm:mb-0">Dimensions:</dt>
                    <dd className="text-secondary-600 sm:flex-1">{product.dimensions}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/919004672562?text=Hello! I am interested in your ${encodeURIComponent(product.name)}. Could you please provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold flex-1 text-center text-lg py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              WhatsApp Inquiry
            </a>
            <Link
              href="/bulk-orders?product=${encodeURIComponent(product.name)}"
              className="btn-secondary flex-1 text-center text-lg py-4"
            >
              Bulk Order Inquiry
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="font-semibold text-secondary-900 mb-3">Have Questions?</h3>
            <p className="text-sm text-secondary-600 mb-4">
              Our team is here to help you with any questions about this product.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="font-medium text-secondary-900 w-16">Phone:</span>
                <a href="tel:+919004672562" className="text-primary-600 hover:text-primary-700">
                  +91 9004672562
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-secondary-900 w-16">Email:</span>
                <a href="mailto:jalandharleather30@gmail.com" className="text-primary-600 hover:text-primary-700">
                  jalandharleather30@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && product.images && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-secondary-300 transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <Image
              src={urlFor(product.images[selectedImageIndex]).width(1000).height(1000).url()}
              alt={product.images[selectedImageIndex].alt || product.name}
              width={1000}
              height={1000}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
