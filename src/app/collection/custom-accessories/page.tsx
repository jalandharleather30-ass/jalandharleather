import { client, queries } from '@/sanity/lib/client'
import { Product } from '@/types'
import ProductsGrid from '@/components/ProductsGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default async function CustomAccessoriesPage() {
  let products: Product[] = []

  try {
    // Fetch all products and filter for accessories
    const allProducts = await client.fetch(queries.getAllProducts)
    products = allProducts.filter((product: Product) => 
      product.category === 'custom-accessories'
    )
  } catch (error) {
    console.log('Failed to fetch products:', error)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-accent-500 py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
              Customized Leather Accessories
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Personalized leather accessories crafted to your specifications with premium materials.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
              >
                Request Custom Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <ProductsGrid products={products} />
          
          {products.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">
                Custom Made to Order
              </h3>
              <p className="text-secondary-600 mb-6">
                Our custom leather accessories are made to your exact specifications. Contact us to discuss your requirements.
              </p>
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Custom Quote
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Custom Leather Accessories | Personalized Designs',
  description: 'Custom leather accessories personalized to your specifications. Leather keychains, phone cases, belts & more. Custom engraving, premium materials, handcrafted quality.',
  keywords: [
    'custom leather accessories', 'personalized leather goods', 'custom engraving leather',
    'leather keychains custom', 'personalized leather gifts', 'custom leather phone case',
    'bespoke leather accessories', 'custom leather design', 'personalized leather belts',
    'jalandhar custom leather', 'handmade custom accessories', 'leather goods customization'
  ],
  openGraph: {
    title: 'Custom Leather Accessories | Jalandhar Leather',
    description: 'Custom leather accessories personalized to your specifications. Leather keychains, phone cases, belts & more.',
    images: [
      {
        url: '/images/products/accessory-1.png',
        width: 1200,
        height: 630,
        alt: 'Custom Leather Accessories Collection - Jalandhar Leather',
      }
    ],
  },
  alternates: {
    canonical: '/collection/custom-accessories',
  }
}
