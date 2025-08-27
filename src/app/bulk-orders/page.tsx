import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BulkOrderForm from '@/components/BulkOrderForm'
import { 
  CheckIcon, 
  UsersIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Bulk & Custom Orders - Jalandhar Leather',
  description: 'Partner with Jalandhar Leather for bulk orders and custom leather goods. Perfect for businesses, events, and special occasions.',
}

export default function BulkOrdersPage() {
  const benefits = [
    {
      icon: UsersIcon,
      title: 'Dedicated Account Manager',
      description: 'Get personalized service with a dedicated account manager for your bulk orders.'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Timelines',
      description: 'We work with your schedule to ensure timely delivery of your bulk orders.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guarantee',
      description: 'Every piece in your bulk order maintains our high quality standards.'
    },
    {
      icon: TruckIcon,
      title: 'Worldwide Shipping',
      description: 'We ship bulk orders internationally with reliable logistics partners.'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Custom Design Support',
      description: 'Our design team helps bring your custom leather goods vision to life.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Pricing',
      description: 'Get attractive bulk pricing with volume discounts for larger orders.'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Share your requirements, quantity, and design preferences with our team.'
    },
    {
      step: '02',
      title: 'Quote & Timeline',
      description: 'Receive a detailed quote with pricing, specifications, and delivery timeline.'
    },
    {
      step: '03',
      title: 'Sample Approval',
      description: 'Review and approve product samples before we begin full production.'
    },
    {
      step: '04',
      title: 'Production',
      description: 'Our skilled artisans craft your order with the same attention to detail.'
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Every piece undergoes thorough quality inspection before packaging.'
    },
    {
      step: '06',
      title: 'Delivery',
      description: 'Your bulk order is securely packaged and shipped to your location.'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl font-serif">
            Bulk & Custom Orders
          </h1>
          <p className="mt-6 text-xl leading-8 text-secondary-600">
            Partner with us for premium leather goods in any quantity. Perfect for businesses, corporate gifts, events, and special occasions.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-secondary-600 mt-1">Bulk Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-secondary-600 mt-1">Business Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">15</div>
              <div className="text-sm text-secondary-600 mt-1">Days Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99%</div>
              <div className="text-sm text-secondary-600 mt-1">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
              Why Choose Us for Bulk Orders?
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Experience the advantages of partnering with Jalandhar Leather
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              From concept to delivery, we make bulk ordering simple and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
                
                <div className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8 text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum Order */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4 font-serif">
                Minimum Order Quantities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">Standard Products</h3>
                  <p className="text-secondary-600">Minimum order: 25 pieces</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">Custom Designs</h3>
                  <p className="text-secondary-600">Minimum order: 50 pieces</p>
                </div>
              </div>
              <p className="text-sm text-secondary-500 mt-6">
                * Special arrangements can be made for smaller quantities. Contact us to discuss your specific needs.
              </p>
              
              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919004672562?text=Hello! I'm interested in bulk orders for leather products. Could you please provide more information about minimum quantities and pricing?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Quick WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
              Get Your Bulk Order Quote
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote
            </p>
          </div>

          <BulkOrderForm />
        </div>

        {/* Contact Info */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-secondary-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Need to Discuss Your Requirements?
            </h3>
            <p className="text-secondary-600 mb-6">
              Our bulk order specialists are available to help you with any questions or special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919004672562"
                className="btn-primary"
              >
                Call +91 9004672562
              </a>
              <a
                href="mailto:jalandharleather30@gmail.com"
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
