import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client, queries } from '@/sanity/lib/client'
import { Product } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const product: Product = await client.fetch(queries.getProductBySlug(slug))
    
    if (!product) {
      return {
        title: 'Product Not Found - Jalandhar Leather',
      }
    }

    return {
      title: `${product.name} - Jalandhar Leather`,
      description: product.seo?.metaDescription || product.description,
      openGraph: {
        title: product.seo?.metaTitle || product.name,
        description: product.seo?.metaDescription || product.description,
        images: product.images && product.images[0] ? [
          {
            url: `/api/og?title=${encodeURIComponent(product.name)}`,
            width: 1200,
            height: 630,
            alt: product.name,
          }
        ] : [],
      },
    }
  } catch (error) {
    return {
      title: 'Product - Jalandhar Leather',
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product: Product | null = null

  try {
    const { slug } = await params
    product = await client.fetch(queries.getProductBySlug(slug))
  } catch (error) {
    console.log('Error fetching product:', error)
  }

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
