import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamImage from '@/components/TeamImage'

export const metadata: Metadata = {
  title: 'Our Story | Aashta Mehta & Jalandhar Leather Since 2018',
  description: 'Discover the inspiring journey of Aashta Mehta and Jalandhar Leather since 2018. From traditional craftsmanship to modern design, learn about our commitment to premium leather goods and heritage.',
  keywords: [
    'aashta mehta story', 'jalandhar leather founder', 'leather craft heritage',
    'traditional leather making', 'indian leather artisan', 'handmade leather story',
    'punjab leather tradition', 'leather business journey', 'craftsmanship legacy',
    'leather goods heritage', 'family leather business', 'artisan leather story'
  ],
  openGraph: {
    title: 'Our Story | Aashta Mehta & Jalandhar Leather Since 2018',
    description: 'Discover the inspiring journey of Aashta Mehta and Jalandhar Leather since 2018. From traditional craftsmanship to modern design.',
    images: [
      {
        url: '/images/about/founder.png',
        width: 1200,
        height: 630,
        alt: 'Aashta Mehta - Founder of Jalandhar Leather',
      }
    ],
  },
  alternates: {
    canonical: '/our-story',
  }
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl font-serif">
            Our Story
          </h1>
          <p className="mt-6 text-xl leading-8 text-secondary-600">
            A journey of passion, craftsmanship, and dedication to creating timeless leather goods
          </p>
        </div>

        {/* Team Photo Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary-100 to-primary-200">
              <Image
                src="/images/about/team.png"
                alt="Jalandhar Leather Team - Dedicated artisans and craftspeople"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-bold text-secondary-900 font-serif">Our Dedicated Team</h3>
                <p className="text-sm text-secondary-600 mt-1">Skilled artisans bringing traditional craftsmanship to modern designs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto mt-16 max-w-4xl">
          {/* Story Text - Centered */}
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">Since 2018</h2>
              <p className="text-xl text-secondary-600 leading-9 max-w-3xl mx-auto">
                Since 2018, Jalandhar Leather has been crafting high-quality leather goods that blend timeless elegance with modern design. Based in Jalandhar, we specialize in creating products that reflect skilled craftsmanship and premium material selection, ensuring durability and style for our customers across India and beyond.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">Our Vision</h2>
              <p className="text-xl text-secondary-600 leading-9 max-w-3xl mx-auto">
                To become the leading name in premium handcrafted leather goods, known for our unwavering commitment to quality, sustainability, and customer satisfaction. We envision a world where every leather product tells a story of excellence and craftsmanship.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">Our Mission</h2>
              <p className="text-xl text-secondary-600 leading-9 max-w-3xl mx-auto">
                To create exceptional leather products that stand the test of time, using traditional techniques combined with contemporary design. We are committed to supporting skilled artisans, using sustainable practices, and delivering products that exceed our customers' expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">Our Values</h2>
            <p className="mt-4 text-lg text-secondary-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Quality First</h3>
              <p className="text-secondary-600">
                We never compromise on quality. Every product undergoes rigorous quality checks to ensure it meets our high standards.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v18a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8l4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Traditional Craftsmanship</h3>
              <p className="text-secondary-600">
                Our skilled artisans use time-honored techniques passed down through generations to create exceptional products.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Sustainability</h3>
              <p className="text-secondary-600">
                We are committed to sustainable practices, using responsibly sourced materials and eco-friendly processes.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="bg-secondary-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">Meet Our Founder</h2>
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Aashta Mehta</h3>
                <p className="text-lg text-secondary-600 leading-8 mb-6">
                  With a passion for traditional craftsmanship and an eye for contemporary design, Aashta founded Jalandhar Leather in 2018 with a vision to create premium leather goods that honor both heritage and innovation.
                </p>
                <p className="text-lg text-secondary-600 leading-8 mb-6">
                  Her commitment to quality and attention to detail has driven the company's growth from a small workshop to a respected name in the leather goods industry. Under her leadership, we continue to push the boundaries of craftsmanship while staying true to our core values.
                </p>
                <div className="flex items-center space-x-4 text-sm text-secondary-500">
                  <span>Founder & Creative Director</span>
                  <span>•</span>
                  <span>Since 2018</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src="/images/about/founder.png"
                    alt="Aashta Mehta - Founder of Jalandhar Leather"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-soft object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-secondary-900/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">Our Journey</h2>
            <p className="mt-4 text-lg text-secondary-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-12">
            {/* 2018 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary-600">2018</span>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">The Beginning</h3>
                <p className="text-secondary-600">
                  Jalandhar Leather was founded with a vision to create premium handcrafted leather goods that combine traditional techniques with modern design.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary-600">2020</span>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Expansion</h3>
                <p className="text-secondary-600">
                  We expanded our product line to include ladies handbags, premium purses, and custom accessories, serving customers across India.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary-600">2022</span>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Bulk Orders</h3>
                <p className="text-secondary-600">
                  We began serving B2B clients with bulk orders and custom designs, establishing ourselves as a trusted partner for businesses.
                </p>
              </div>
            </div>

            {/* Present */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary-600">Today</span>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Digital Presence</h3>
                <p className="text-secondary-600">
                  We've launched our digital platform to better serve our customers and showcase our complete collection of premium leather goods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <div className="bg-primary-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Experience Our Craftsmanship?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Discover our collection of premium leather goods, each piece crafted with love and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/collection" className="btn-accent text-lg px-8 py-4">
                View Our Collection
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-primary-50">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
