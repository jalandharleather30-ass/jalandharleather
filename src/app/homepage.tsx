import { client, queries } from '@/sanity/lib/client'
import { Product, HeroSection as HeroType, SiteSettings } from '@/types'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function Home() {
  // Fetch data from Sanity CMS
  let featuredProducts: Product[] = []
  let heroData: HeroType | null = null
  let siteSettings: SiteSettings | null = null

  try {
    // Fetch featured products
    featuredProducts = await client.fetch(queries.getFeaturedProducts)
    
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
