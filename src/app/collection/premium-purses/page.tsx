import { client, queries } from '@/sanity/lib/client'
import { Product } from '@/types'
import ProductsGrid from '@/components/ProductsGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function PremiumPursesPage() {
  let products: Product[] = []

  try {
    // Fetch all products and filter for purses
    const allProducts = await client.fetch(queries.getAllProducts)
    products = allProducts.filter((product: Product) => 
      product.category === 'premium-purses'
    )
  } catch (error) {
    console.log('Failed to fetch products:', error)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
              Premium Leather Purses
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-100">
              Elegant and sophisticated purses crafted from the finest leather for discerning women.
            </p>
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
                Coming Soon
              </h3>
              <p className="text-secondary-600">
                We're adding new premium purses to our collection. Please check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Premium Leather Purses & Wallets | Handcrafted Quality',
  description: 'Premium leather purses and wallets handcrafted in Jalandhar. RFID protection, multiple compartments, genuine leather. Compact designs, superior quality, traditional craftsmanship.',
  keywords: [
    'premium leather purses', 'leather wallets india', 'rfid leather wallet',
    'handcrafted purses', 'genuine leather wallet', 'ladies leather purse',
    'premium leather accessories', 'compact leather wallet', 'designer purses',
    'jalandhar leather purses', 'luxury leather wallet', 'traditional crafted purses'
  ],
  openGraph: {
    title: 'Premium Leather Purses & Wallets | Jalandhar Leather',
    description: 'Premium leather purses and wallets handcrafted in Jalandhar. RFID protection, multiple compartments, genuine leather.',
    images: [
      {
        url: '/images/products/purse-1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Leather Purses and Wallets Collection - Jalandhar Leather',
      }
    ],
  },
  alternates: {
    canonical: '/collection/premium-purses',
  }
}
