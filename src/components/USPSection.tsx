'use client'

import { motion } from 'framer-motion'
import { 
  HandThumbUpIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  CubeIcon,
  CheckBadgeIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { USP } from '@/types'

interface USPSectionProps {
  usps?: USP[]
}

// Icon mapping
const iconMap: { [key: string]: any } = {
  HandThumbUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CubeIcon,
  CheckBadgeIcon,
  HeartIcon,
}

const defaultUSPs: USP[] = [
  {
    title: "100% Handmade Excellence",
    description: "Every piece is carefully crafted by skilled artisans with attention to detail.",
    icon: "HandThumbUpIcon"
  },
  {
    title: "Premium & Sustainable Leather",
    description: "We use only the finest quality leather that ages beautifully over time.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Attention to Detail in Every Stitch",
    description: "Precision craftsmanship ensures durability and elegant finishing.",
    icon: "SparklesIcon"
  },
  {
    title: "Bulk Production & Custom Designs",
    description: "We cater to both individual customers and bulk orders with custom designs.",
    icon: "CubeIcon"
  }
]

export default function USPSection({ usps = defaultUSPs }: USPSectionProps) {
  // Use defaultUSPs if usps is null or undefined
  const displayUSPs = usps || defaultUSPs
  
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl font-serif">
            Why Choose Jalandhar Leather?
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            Our commitment to excellence and craftsmanship sets us apart in the world of premium leather goods.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {displayUSPs.map((usp, index) => {
              const IconComponent = iconMap[usp.icon] || HandThumbUpIcon
              
              return (
                <motion.div
                  key={usp.title}
                  className="relative p-8 bg-white rounded-2xl shadow-soft border border-secondary-100 hover:shadow-elegant transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                      {usp.title}
                    </h3>
                    <p className="mt-3 text-secondary-600 leading-6">
                      {usp.description}
                    </p>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-secondary-600 mb-8">
            Experience the difference of authentic craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/collection"
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Collection
            </motion.a>
            <motion.a
              href="/bulk-orders"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bulk Orders
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
