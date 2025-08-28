'use client'

interface JsonLdProps {
  data: Record<string, any>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jalandhar Leather",
  "alternateName": "Jalandhar Leather Goods",
  "description": "Premium handmade leather goods manufacturer specializing in ladies handbags, leather purses, jackets and custom accessories since 2018.",
  "url": "https://jalandharleather.com",
  "logo": "https://jalandharleather.com/logo/site.png",
  "image": "https://jalandharleather.com/images/hero/hero-1.png",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Aashta Mehta",
    "gender": "Female",
    "jobTitle": "Founder & Leather Artisan"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "email": "jalandharleather30@gmail.com",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  },
  "sameAs": [
    "https://facebook.com/jalandharleather",
    "https://instagram.com/jalandharleather",
    "https://twitter.com/jalandharleather"
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Handmade Leather Goods",
      "category": "Fashion Accessories"
    }
  }
}

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Jalandhar Leather",
  "url": "https://jalandharleather.com",
  "description": "Premium handmade leather goods from Jalandhar, India. Exquisite ladies handbags, leather purses, jackets & custom accessories.",
  "publisher": {
    "@type": "Organization",
    "name": "Jalandhar Leather"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://jalandharleather.com/collection?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jalandharleather.com",
  "name": "Jalandhar Leather",
  "description": "Premium handmade leather goods manufacturer and retailer specializing in ladies handbags, purses, jackets and custom leather accessories.",
  "url": "https://jalandharleather.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "jalandharleather30@gmail.com",
  "foundingDate": "2018",
  "priceRange": "₹400-₹15000",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "currenciesAccepted": "INR",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "postalCode": "144021",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.3260",
    "longitude": "75.5762"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "image": [
    "https://jalandharleather.com/images/hero/hero-1.png",
    "https://jalandharleather.com/images/about/workshop-exterior.png",
    "https://jalandharleather.com/images/products/handbag-1.png"
  ],
  "servesCuisine": "N/A",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "31.3260",
      "longitude": "75.5762"
    },
    "geoRadius": "50000"
  }
}

// Product Schema Generator
export const generateProductSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.images?.length ? `https://jalandharleather.com/images/products/${product.images[0]}.png` : undefined,
  "brand": {
    "@type": "Brand",
    "name": "Jalandhar Leather"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Jalandhar Leather"
  },
  "material": product.materials || "Genuine Leather",
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": product.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Jalandhar Leather"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
})
