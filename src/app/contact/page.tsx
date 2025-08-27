import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Jalandhar Leather | Custom Orders & Inquiries',
  description: 'Contact Jalandhar Leather for custom orders, bulk inquiries, or questions about our premium handmade leather goods. Email: jalandharleather30@gmail.com. Based in Jalandhar, Punjab, India.',
  keywords: [
    'contact jalandhar leather', 'custom leather orders', 'bulk leather orders',
    'leather goods inquiry', 'jalandhar leather contact', 'custom leather design',
    'leather manufacturer contact', 'wholesale leather goods', 'leather goods supplier',
    'contact aashta mehta', 'jalandhar punjab leather', 'leather goods quote'
  ],
  openGraph: {
    title: 'Contact Jalandhar Leather | Custom Orders & Inquiries',
    description: 'Contact Jalandhar Leather for custom orders, bulk inquiries, or questions about our premium handmade leather goods.',
    images: [
      {
        url: '/images/about/workshop-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Contact Jalandhar Leather Workshop',
      }
    ],
  },
  alternates: {
    canonical: '/contact',
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl font-serif">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-50 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-secondary-900">Phone</h3>
                    <a 
                      href="tel:+919004672562"
                      className="mt-1 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      +91 9004672562
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-secondary-900">Email</h3>
                    <a 
                      href="mailto:jalandharleather30@gmail.com"
                      className="mt-1 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      jalandharleather30@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-secondary-900">Address</h3>
                    <p className="mt-1 text-sm text-secondary-600">
                      Kapurthala Road, 1 & 3,<br />
                      Leather Complex Rd,<br />
                      Jalandhar, Punjab 144021, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-secondary-900">Business Hours</h3>
                    <div className="mt-1 text-sm text-secondary-600">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919004672562?text=Hello! I found your contact page and would like to inquire about your leather products. Could you please help me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-soft hover:shadow-elegant focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full text-center inline-block"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map Link */}
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=Kapurthala+Road,+1+%26+3,+Leather+Complex+Rd,+Jalandhar,+Punjab+144021,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-soft hover:shadow-elegant focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full text-center inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center font-serif">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7234567890123!2d75.5861!3d31.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bb45c5b4567%3A0x1234567890abcdef!2sLeather%20Complex%20Rd%2C%20Jalandhar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
