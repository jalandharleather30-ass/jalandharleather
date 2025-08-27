import { client, queries } from '@/sanity/lib/client'
import { Product } from '@/types'
import ProductsGrid from '@/components/ProductsGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function LadiesHandbagsPage() {
  let products: Product[] = []

  try {
    // Fetch all products and filter for ladies handbags
    const allProducts = await client.fetch(queries.getAllProducts)
    products = allProducts.filter((product: Product) => 
      product.category === 'ladies-handbags'
    )
  } catch (error) {
    console.log('Failed to fetch products:', error)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
              Ladies Handbags
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Discover our exquisite collection of handcrafted leather handbags designed for the modern woman.
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
                We're adding new ladies handbags to our collection. Please check back soon!
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
  title: 'Premium Ladies Leather Handbags | Handcrafted in Jalandhar',
  description: 'Exquisite collection of ladies leather handbags handcrafted in Jalandhar. Premium tote bags, shoulder bags, crossbody bags. Genuine leather, traditional craftsmanship, modern designs.',
  keywords: [
    'ladies leather handbags', 'premium handbags jalandhar', 'handcrafted leather bags',
    'genuine leather handbags', 'tote bags leather', 'shoulder bags premium',
    'crossbody leather bags', 'designer handbags india', 'luxury leather handbags',
    'women leather bags', 'leather handbags online', 'punjab leather handbags'
  ],
  openGraph: {
    title: 'Premium Ladies Leather Handbags | Jalandhar Leather',
    description: 'Exquisite collection of ladies leather handbags handcrafted in Jalandhar. Premium tote bags, shoulder bags, crossbody bags.',
    images: [
      {
        url: '/images/products/handbag-1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Ladies Leather Handbags Collection - Jalandhar Leather',
      }
    ],
  },
  alternates: {
    canonical: '/collection/ladies-handbags',
  }
}
