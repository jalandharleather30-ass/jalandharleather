'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HeroSection as HeroType } from '@/types'
import { urlFor } from '@/sanity/lib/client'

interface HeroSectionProps {
  heroData?: HeroType | null
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  // Hero images for slider
  const heroImages = [
    {
      src: "/images/hero/hero-1.png",
      alt: "Premium Jalandhar Leather Handbags - Handcrafted Excellence",
      caption: "Premium Leather Craftsmanship"
    },
    {
      src: "/images/hero/hero-2.png", 
      alt: "Luxury Leather Purses Collection - Jalandhar Leather",
      caption: "Luxury Purses Collection"
    },
    {
      src: "/images/hero/hero-3.png",
      alt: "Handcrafted Leather Jackets - Premium Quality",
      caption: "Handcrafted Leather Jackets"
    },
    {
      src: "/images/hero/hero-4.png",
      alt: "Custom Leather Accessories - Bespoke Craftsmanship", 
      caption: "Custom Leather Accessories"
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Default hero content if no CMS data
  const defaultHero = {
    title: "Where Craft Meets Class",
    subtitle: "Discover our exquisite collection of handmade leather goods crafted with precision and passion since 2018.",
    heroImage: null,
    ctaText: "Explore Collection",
    ctaLink: "/collection"
  }

  // Use CMS data but force the button text to be shorter
  const hero = heroData ? {
    ...heroData,
    ctaText: "Explore Collection" // Force shorter button text
  } : defaultHero

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
                    className="btn-primary text-base px-6 py-3"
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

      {/* Hero Image Slider */}
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
              {/* Image Slider */}
              <div className="relative w-full h-full overflow-hidden">
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0 
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-sm font-medium text-secondary-900">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => 
                  prev === 0 ? heroImages.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => 
                  (prev + 1) % heroImages.length
                )}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
