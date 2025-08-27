import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd, { organizationSchema, websiteSchema, localBusinessSchema } from '@/components/JsonLd'
import WhatsAppChat from '@/components/WhatsAppChat'

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jalandhar Leather - Premium Handmade Leather Goods | Since 2018",
    template: "%s | Jalandhar Leather"
  },
  description: "Premium handmade leather goods from Jalandhar, India. Exquisite ladies handbags, leather purses, jackets & custom accessories. Traditional craftsmanship meets modern design. Founded by Aashta Mehta in 2018.",
  keywords: [
    // Primary Keywords
    "jalandhar leather", "premium leather goods", "handmade leather", "leather handbags", 
    "leather purses", "leather jackets", "custom leather accessories",
    
    // Location-based Keywords
    "jalandhar leather goods", "indian leather craftsman", "punjab leather products",
    
    // Product-specific Keywords
    "ladies leather handbags", "premium leather purses", "handcrafted leather jackets",
    "custom leather design", "personalized leather accessories", "luxury leather bags",
    
    // Quality & Craft Keywords
    "genuine leather", "full grain leather", "traditional leather craft", 
    "artisan leather goods", "handstitched leather", "premium leather quality",
    
    // Business Keywords
    "bulk leather orders", "wholesale leather goods", "custom leather manufacturing",
    "leather goods supplier", "aashta mehta leather", "established 2018"
  ],
  authors: [{ name: "Aashta Mehta", url: "https://jalandharleather.com" }],
  creator: "Aashta Mehta",
  publisher: "Jalandhar Leather",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jalandharleather.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jalandhar Leather - Premium Handmade Leather Goods | Since 2018',
    description: 'Premium handmade leather goods from Jalandhar, India. Exquisite ladies handbags, leather purses, jackets & custom accessories. Traditional craftsmanship meets modern design.',
    url: 'https://jalandharleather.com',
    siteName: 'Jalandhar Leather',
    images: [
      {
        url: '/images/hero/hero-1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Jalandhar Leather Handbags - Handcrafted Excellence',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalandhar Leather - Premium Handmade Leather Goods',
    description: 'Premium handmade leather goods from Jalandhar, India. Traditional craftsmanship meets modern design.',
    images: ['/images/hero/hero-1.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/logo/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png', 
        sizes: '32x32',
        url: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/logo/icon.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
    yahoo: 'your-yahoo-verification-code-here',
  },
  category: 'Fashion & Accessories',
  other: {
    'business:contact_data:locality': 'Jalandhar',
    'business:contact_data:region': 'Punjab', 
    'business:contact_data:country_name': 'India',
    'product:brand': 'Jalandhar Leather',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'article:author': 'Aashta Mehta',
    'article:published_time': '2018-01-01T00:00:00.000Z',
    'article:modified_time': new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
