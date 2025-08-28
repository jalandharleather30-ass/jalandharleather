import { client, queries } from '@/sanity/lib/client'
import { Product, HeroSection as HeroType, SiteSettings } from '@/types'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Handmade Leather Goods | Jalandhar Leather Since 2018',
  description: 'Discover exquisite handcrafted leather handbags, purses, jackets & custom accessories from Jalandhar, India. Founded by Aashta Mehta in 2018. Premium quality, traditional craftsmanship, modern design.',
  keywords: [
    'jalandhar leather homepage', 'premium leather goods india', 'handmade leather handbags',
    'aashta mehta leather designer', 'traditional indian craftsmanship', 'luxury leather accessories',
    'custom leather goods jalandhar', 'genuine leather products', 'handcrafted leather bags',
    'punjab leather artisan', 'leather goods manufacturer', 'wholesale leather suppliers'
  ],
  openGraph: {
    title: 'Premium Handmade Leather Goods | Jalandhar Leather Since 2018',
    description: 'Discover exquisite handcrafted leather handbags, purses, jackets & custom accessories from Jalandhar, India. Founded by Aashta Mehta in 2018.',
    images: [
      {
        url: '/images/hero/hero-1.png',
        width: 1200,
        height: 630,
        alt: 'Jalandhar Leather Premium Handbags Collection',
      }
    ],
  },
  alternates: {
    canonical: '/',
  }
}

export default async function Home() {
  // Fetch data from Sanity CMS
  let featuredProducts: Product[] = []
  let heroData: HeroType | null = null
  let siteSettings: SiteSettings | null = null

  try {
    // Fetch featured products first
    featuredProducts = await client.fetch(queries.getFeaturedProducts)
    
    // If we don't have enough featured products, supplement with regular products
    if (featuredProducts.length < 6) {
      const allProducts = await client.fetch(queries.getAllProducts)
      const additionalProducts = allProducts
        .filter((product: Product) => !featuredProducts.some((fp: Product) => fp._id === product._id))
        .slice(0, 6 - featuredProducts.length)
      featuredProducts = [...featuredProducts, ...additionalProducts]
    }
    
    // Fetch hero section data
    heroData = await client.fetch(queries.getHeroSection)
    
    // Fetch site settings for USPs
    siteSettings = await client.fetch(queries.getSiteSettings)
  } catch (error) {
    console.log('CMS data not yet available:', error)
    // Will use default data in components
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection heroData={heroData} />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Featured Products */}
      <FeaturedProducts products={featuredProducts} />
      
      {/* USPs Section */}
      <USPSection usps={siteSettings?.usps} />
      
      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Ready to Experience Premium Leather?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Contact us today for custom orders, bulk inquiries, or to learn more about our handcrafted leather goods.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="btn-accent text-lg px-8 py-4"
              >
                Get in Touch
              </a>
              <a
                href="/bulk-orders"
                className="text-lg font-semibold leading-6 text-white hover:text-primary-100 transition-colors"
              >
                Bulk Orders <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
