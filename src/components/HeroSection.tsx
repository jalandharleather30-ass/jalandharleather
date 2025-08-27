'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection as HeroType } from '@/types'
import { urlFor } from '@/sanity/lib/client'

interface HeroSectionProps {
  heroData?: HeroType | null
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  // Default hero content if no CMS data
  const defaultHero = {
    title: "Where Craft Meets Class",
    subtitle: "Discover our exquisite collection of handmade leather goods crafted with precision and passion since 2018.",
    heroImage: null,
    ctaText: "Explore Our Collection",
    ctaLink: "/collection"
  }

  const hero = heroData || defaultHero

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-8xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          {/* Background decoration */}
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-48 text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 pt-6 lg:px-8 lg:pt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl lg:text-7xl font-serif">
                  <span className="block text-primary-600">Jalandhar</span>
                  <span className="block">Leather</span>
                </h1>
                <motion.p
                  className="mt-6 text-xl leading-8 text-secondary-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {hero.title}
                </motion.p>
                <motion.p
                  className="mt-4 text-lg leading-7 text-secondary-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {hero.subtitle}
                </motion.p>
                <motion.div
                  className="mt-10 flex items-center gap-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link
                    href={hero.ctaLink}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    {hero.ctaText}
                  </Link>
                  <Link
                    href="/our-story"
                    className="text-lg font-semibold leading-6 text-secondary-900 hover:text-primary-600 transition-colors"
                  >
                    Our Story <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div
          className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {hero.heroImage ? (
            <Image
              src={urlFor(hero.heroImage).width(800).height(600).url()}
              alt={hero.heroImage.alt || "Jalandhar Leather Hero"}
              fill
              className="object-cover object-center"
              priority
            />
          ) : (
            <>
              <Image
                src="/images/hero/hero-1.png"
                alt="Premium Jalandhar Leather Handbags - Handcrafted Excellence"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-secondary-900">Premium Leather Craftsmanship</p>
              </div>
            </>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
