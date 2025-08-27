export interface Product {
  _id: string
  name: string
  slug: {
    current: string
  }
  category: string
  description: string
  features?: string[]
  materials?: string
  dimensions?: string
  price?: number
  isFeatured: boolean
  isAvailable: boolean
  stockQuantity?: number
  images: SanityImage[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SiteSettings {
  title: string
  tagline: string
  description: string
  contact: {
    phone: string
    email: string
    address: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  usps: USP[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImage
  }
}

export interface USP {
  title: string
  description: string
  icon: string
}

export interface HeroSection {
  title: string
  subtitle?: string
  heroImage: SanityImage
  ctaText: string
  ctaLink: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  website_url?: string // Honeypot field
}

export interface BulkOrderForm {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  quantity: string
  requirements: string
  productCategory: string
  website_url?: string // Honeypot field
}

export const PRODUCT_CATEGORIES = [
  { value: 'ladies-handbags', label: 'Ladies Handbags' },
  { value: 'premium-purses', label: 'Premium Leather Purses' },
  { value: 'ladies-jackets', label: 'Ladies Leather Jackets' },
  { value: 'custom-accessories', label: 'Customized Leather Accessories' },
] as const

export type ProductCategory = typeof PRODUCT_CATEGORIES[number]['value']
