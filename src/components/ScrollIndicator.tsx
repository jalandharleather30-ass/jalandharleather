'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <div className="flex justify-center py-8 bg-white">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
