'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { urlFor } from '@/sanity/lib/client'
import { getProductImage, getFallbackAlt } from '@/lib/productImageHelpers'

interface FeaturedProductsProps {
  products?: Product[]
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

export default function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  // Show placeholder if no products
  if (products.length === 0) {
    return (
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl font-serif">
              Featured Products
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover our handpicked selection of premium leather goods
            </p>
          </motion.div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-secondary-600 mb-8">
              Products will appear here once they are added to the CMS
            </p>
            <Link href="/admin" className="btn-primary">
              Add Products in CMS
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-secondary-50">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-primary-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <span className="text-sm text-secondary-500 mt-2">Scroll down</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl font-serif">
            Featured Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            Discover our handpicked selection of premium leather goods, each piece crafted with precision and passion.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.slice(0, 6).map((product, index) => (
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
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary-700 backdrop-blur-sm">
                      {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>

                  {/* Availability indicator */}
                  {!product.isAvailable && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-secondary-600 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Price */}
                  {product.price && (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary-600">
                        ₹{product.price.toLocaleString()}+
                      </span>
                      <span className="text-xs text-secondary-500">Starting price</span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      View Details
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/collection"
            className="btn-primary text-lg px-8 py-4"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
