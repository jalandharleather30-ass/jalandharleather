import { client, queries } from '@/sanity/lib/client'
import { Product } from '@/types'
import ProductsGrid from '@/components/ProductsGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function LadiesJacketsPage() {
  let products: Product[] = []

  try {
    // Fetch all products and filter for jackets
    const allProducts = await client.fetch(queries.getAllProducts)
    products = allProducts.filter((product: Product) => 
      product.category === 'ladies-jackets'
    )
  } catch (error) {
    console.log('Failed to fetch products:', error)
  }

  // If no products from CMS, show placeholder products
  if (products.length === 0) {
    products = [
      {
        _id: 'jacket-1',
        name: 'Classic Brown Leather Jacket',
        slug: { current: 'classic-brown-leather-jacket' },
        category: 'ladies-jackets',
        price: 12000,
        description: 'Premium brown leather jacket crafted from the finest leather. Timeless style meets modern comfort with attention to detail.',
        features: [
          'Premium Full-grain Leather',
          'YKK Zippers',
          'Quilted Lining',
          'Adjustable Waist',
          'Multiple Pockets',
          'Classic Fit'
        ],
        materials: 'Full-grain leather',
        dimensions: 'Size Specific',
        isAvailable: true,
        isFeatured: true,
        images: []
      },
      {
        _id: 'jacket-2',
        name: 'Black Biker Leather Jacket',
        slug: { current: 'black-biker-leather-jacket' },
        category: 'ladies-jackets',
        price: 11500,
        description: 'Edgy black leather jacket with asymmetrical zip and quilted shoulders. Perfect for a bold, contemporary look.',
        features: [
          'Asymmetrical Front Zip',
          'Quilted Shoulders',
          'Multiple Zip Pockets',
          'Slim Fit Design',
          'Premium Hardware',
          'Fully Lined'
        ],
        materials: 'Premium leather',
        dimensions: 'Size Specific',
        isAvailable: true,
        isFeatured: true,
        images: []
      },
      {
        _id: 'jacket-3',
        name: 'Vintage Style Leather Jacket',
        slug: { current: 'vintage-style-leather-jacket' },
        category: 'ladies-jackets',
        price: 10500,
        description: 'Vintage-inspired leather jacket with distressed finish. Classic silhouette with modern comfort features.',
        features: [
          'Distressed Leather Finish',
          'Vintage Brass Hardware',
          'Comfortable Fit',
          'Interior Pockets',
          'Durable Construction',
          'Timeless Design'
        ],
        materials: 'Vintage-style leather',
        dimensions: 'Size Specific',
        isAvailable: true,
        isFeatured: false,
        images: []
      }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-700 to-secondary-800 py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
              Ladies Leather Jackets
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-200">
              Timeless and stylish leather jackets that blend comfort with sophisticated design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <ProductsGrid products={products} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Premium Ladies Leather Jackets | Handcrafted Fashion',
  description: 'Stylish ladies leather jackets handcrafted in Jalandhar. Premium full-grain leather, YKK zippers, quilted lining. Classic and modern designs for timeless elegance.',
  keywords: [
    'ladies leather jackets', 'premium leather jackets', 'handcrafted jackets',
    'genuine leather jackets', 'designer leather jackets', 'women leather coats',
    'luxury leather jackets', 'jalandhar leather jackets', 'traditional crafted jackets',
    'full grain leather jackets', 'stylish leather jackets', 'classic leather jackets'
  ],
  openGraph: {
    title: 'Premium Ladies Leather Jackets | Jalandhar Leather',
    description: 'Stylish ladies leather jackets handcrafted in Jalandhar. Premium full-grain leather, YKK zippers, quilted lining.',
    images: [
      {
        url: '/images/products/jacket-1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Ladies Leather Jackets Collection - Jalandhar Leather',
      }
    ],
  },
  alternates: {
    canonical: '/collection/ladies-jackets',
  }
}
