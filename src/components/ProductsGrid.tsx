'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { urlFor } from '@/sanity/lib/client'
import { getProductImage, getFallbackAlt } from '@/lib/productImageHelpers'

interface ProductsGridProps {
  products: Product[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {products.map((product) => (
        <motion.article
          key={product._id}
          className="group relative bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden"
          variants={item}
          whileHover={{ y: -8 }}
        >
          <Link href={`/products/${product.slug.current}`}>
            {/* Product Image */}
            <div className="relative h-64 bg-secondary-100 overflow-hidden rounded-t-2xl">
              {product.images && product.images[0] ? (
                <Image
                  src={urlFor(product.images[0]).width(400).height(300).url()}
                  alt={product.images[0].alt || product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <Image
                  src={getProductImage(product.name, product.category)}
                  alt={getFallbackAlt(product.name, product.category)}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              )}
              
              {/* Overlay with CTA */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center px-4 py-2 bg-white text-primary-600 font-medium rounded-lg shadow-lg">
                    View Details
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
                  {product.category || 'Leather Goods'}
                </span>
                {!product.isAvailable && (
                  <span className="text-xs font-medium text-red-500 uppercase tracking-wide">
                    Out of Stock
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                {product.name}
              </h3>
              
              {product.description && (
                <p className="mt-2 text-sm text-secondary-600 line-clamp-2">
                  {product.description}
                </p>
              )}
              
              {product.price && (
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center text-sm text-secondary-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Handcrafted
                  </div>
                </div>
              )}
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}
