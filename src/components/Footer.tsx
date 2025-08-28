import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Our Collection', href: '/collection' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Craftsmanship', href: '/craftsmanship' },
    { name: 'Bulk & Custom Orders', href: '/bulk-orders' },
    { name: 'Contact Us', href: '/contact' },
  ],
  collection: [
    { name: 'Ladies Handbags', href: '/collection/ladies-handbags' },
    { name: 'Premium Leather Purses', href: '/collection/premium-purses' },
    { name: 'Ladies Leather Jackets', href: '/collection/ladies-jackets' },
    { name: 'Customized Accessories', href: '/collection/custom-accessories' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.971.016 6.75.072 5.531.128 4.745.333 4.077.63c-.727.31-1.348.72-1.963 1.334C1.5 2.579 1.089 3.2.78 3.927.482 4.594.277 5.381.221 6.6.165 7.821.149 8.246.149 11.867c0 3.621.016 4.046.072 5.267.056 1.219.261 2.006.559 2.674.31.727.72 1.348 1.334 1.963.615.615 1.236 1.025 1.963 1.334.668.298 1.455.503 2.674.559 1.221.056 1.646.072 5.267.072 3.621 0 4.046-.016 5.267-.072 1.219-.056 2.006-.261 2.674-.559.727-.31 1.348-.72 1.963-1.334.615-.615 1.025-1.236 1.334-1.963.298-.668.503-1.455.559-2.674.056-1.221.072-1.646.072-5.267 0-3.621-.016-4.046-.072-5.267-.056-1.219-.261-2.006-.559-2.674-.31-.727-.72-1.348-1.334-1.963C19.421 1.5 18.8 1.089 18.073.78c-.668-.298-1.455-.503-2.674-.559C14.178.016 13.753 0 12.017 0zM12.017 2.162c3.579 0 4.004.015 5.213.069 1.258.057 1.943.267 2.4.444.604.234 1.034.515 1.486.967.452.452.733.882.967 1.486.177.457.387 1.142.444 2.4.054 1.209.069 1.634.069 5.213 0 3.579-.015 4.004-.069 5.213-.057 1.258-.267 1.943-.444 2.4-.234.604-.515 1.034-.967 1.486-.452.452-.882.733-1.486.967-.457.177-1.142.387-2.4.444-1.209.054-1.634.069-5.213.069-3.579 0-4.004-.015-5.213-.069-1.258-.057-1.943-.267-2.4-.444-.604-.234-1.034-.515-1.486-.967-.452-.452-.733-.882-.967-1.486-.177-.457-.387-1.142-.444-2.4-.054-1.209-.069-1.634-.069-5.213 0-3.579.015-4.004.069-5.213.057-1.258.267-1.943.444-2.4.234-.604.515-1.034.967-1.486.452-.452.882-.733 1.486-.967.457-.177 1.142-.387 2.4-.444 1.209-.054 1.634-.069 5.213-.069z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.017 15.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zM12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM18.407 5.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-50 border-t border-secondary-200">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center py-1">
              <Image
                src="/logo/site.png"
                alt="Jalandhar Leather"
                width={340}
                height={85}
                className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm leading-6 text-secondary-600 max-w-md">
              Since 2018, Jalandhar Leather has been crafting high-quality leather goods that blend timeless elegance with modern design. Based in Jalandhar, we specialize in creating products that reflect skilled craftsmanship and premium material selection.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary-600" />
                <a href="tel:+919004672562" className="text-sm text-secondary-700 hover:text-primary-600 transition-colors">
                  +91 9004672562
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-600" />
                <a href="mailto:jalandharleather30@gmail.com" className="text-sm text-secondary-700 hover:text-primary-600 transition-colors">
                  jalandharleather30@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-primary-600 mt-0.5" />
                <p className="text-sm text-secondary-700">
                  Kapurthala Road, 1 & 3,<br />
                  Leather Complex Rd,<br />
                  Jalandhar, Punjab 144021, India
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-secondary-900">Quick Links</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Collection */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-secondary-900">Our Collection</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.collection.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-secondary-500">
            &copy; {new Date().getFullYear()} Jalandhar Leather. All rights reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary-400 hover:text-primary-600 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
