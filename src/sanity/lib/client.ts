import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Write client for API routes (with token for mutations)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Only available on server-side
})

// Set up the image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for fetching data
export const queries = {
  // Fetch all products
  getAllProducts: `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    category,
    description,
    features,
    materials,
    dimensions,
    price,
    isFeatured,
    isAvailable,
    stockQuantity,
    images,
    seo
  }`,

  // Fetch featured products for homepage
  getFeaturedProducts: `*[_type == "product" && isFeatured == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    category,
    description,
    images,
    price,
    isAvailable,
    stockQuantity
  }`,

  // Fetch products by category
  getProductsByCategory: (category: string) => `*[_type == "product" && category == "${category}"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    category,
    description,
    images,
    price,
    isAvailable,
    stockQuantity
  }`,

  // Fetch single product by slug
  getProductBySlug: (slug: string) => `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    name,
    slug,
    category,
    description,
    features,
    materials,
    dimensions,
    price,
    isAvailable,
    stockQuantity,
    images,
    seo
  }`,

  // Fetch site settings
  getSiteSettings: `*[_type == "siteSettings"][0] {
    title,
    tagline,
    description,
    contact,
    socialMedia,
    usps,
    seo
  }`,

  // Fetch hero section
  getHeroSection: `*[_type == "heroSection"][0] {
    title,
    subtitle,
    heroImage,
    ctaText,
    ctaLink
  }`,

  // Get product categories
  getCategories: `*[_type == "product"] | order(category asc) {
    category
  }`,
}
