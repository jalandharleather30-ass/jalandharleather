import { Metadata } from 'next'
import { client, queries } from '@/sanity/lib/client'
import { Product, PRODUCT_CATEGORIES } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionGrid from '@/components/CollectionGrid'

export const metadata: Metadata = {
  title: 'Our Complete Leather Collection | Browse All Premium Products',
  description: 'Browse our complete collection of premium handmade leather goods. Ladies handbags, leather purses, jackets & custom accessories. All products handcrafted in Jalandhar with traditional techniques.',
  keywords: [
    'leather collection jalandhar', 'all leather products', 'complete leather range',
    'browse leather goods', 'leather handbags collection', 'leather purses catalog',
    'ladies leather jackets', 'custom leather accessories', 'premium leather products',
    'handmade leather catalog', 'indian leather goods', 'jalandhar leather collection'
  ],
  openGraph: {
    title: 'Complete Leather Collection | Jalandhar Leather',
    description: 'Browse our complete collection of premium handmade leather goods. Ladies handbags, leather purses, jackets & custom accessories.',
    images: [
      {
        url: '/images/products/handbag-1.png',
        width: 1200,
        height: 630,
        alt: 'Jalandhar Leather Complete Product Collection',
      }
    ],
  },
  alternates: {
    canonical: '/collection',
  }
}

export default async function CollectionPage() {
  let products: Product[] = []

  try {
    const result = await client.fetch(queries.getAllProducts)
    products = Array.isArray(result) ? result : []
  } catch (error) {
    console.log('CMS data not yet available:', error)
    products = []
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl font-serif">
            Our Collection
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Discover our handcrafted leather goods, each piece meticulously created with premium materials and traditional techniques.
          </p>
        </div>

        {/* Collection Grid */}
        <CollectionGrid products={products} />
      </div>

      <Footer />
    </main>
  )
}
