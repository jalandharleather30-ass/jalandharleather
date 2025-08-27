'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product, PRODUCT_CATEGORIES } from '@/types'
import { urlFor } from '@/sanity/lib/client'
import { getProductImage } from '@/lib/productImageHelpers'

interface CollectionGridProps {
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

export default function CollectionGrid({ products }: CollectionGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products
    }
    return products.filter(product => product.category === selectedCategory)
  }, [products, selectedCategory])

  const categories = [
    { value: 'all', label: 'All Products' },
    ...PRODUCT_CATEGORIES
  ]

  if (products.length === 0) {
    return (
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-secondary-900 mb-2">No Products Yet</h3>
        <p className="text-secondary-600 mb-8">
          Products will appear here once they are added to the CMS.
        </p>
        <Link href="/admin" className="btn-primary">
          Add Products in CMS
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-16">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-primary-600 text-white shadow-elegant'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-secondary-600">No products found in this category.</p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          animate="show"
          key={selectedCategory} // Re-animate when category changes
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              variants={item}
              className="group relative bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden"
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
                      alt={product.name}
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

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md bg-primary-50 text-xs font-medium text-primary-700"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary-100 text-xs font-medium text-secondary-600">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

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
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Results count */}
      <div className="mt-12 text-center">
        <p className="text-sm text-secondary-600">
          Showing {filteredProducts.length} of {products.length} products
          {selectedCategory !== 'all' && (
            <span> in {categories.find(c => c.value === selectedCategory)?.label}</span>
          )}
        </p>
      </div>
    </div>
  )
}
