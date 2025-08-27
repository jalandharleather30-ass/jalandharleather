'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Our Collection', 
    href: '/collection',
    dropdown: [
      { name: 'Ladies Handbags', href: '/collection/ladies-handbags' },
      { name: 'Premium Leather Purses', href: '/collection/premium-purses' },
      { name: 'Ladies Leather Jackets', href: '/collection/ladies-jackets' },
      { name: 'Customized Leather Accessories', href: '/collection/custom-accessories' },
    ]
  },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Craftsmanship', href: '/craftsmanship' },
  { name: 'Bulk & Custom Orders', href: '/bulk-orders' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Add a slight delay before closing dropdown to prevent flickering
  const handleMouseLeave = (itemName: string) => {
    setTimeout(() => {
      setActiveDropdown(prev => prev === itemName ? null : prev)
    }, 100)
  }

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Jalandhar Leather</span>
            <Image
              className="h-12 w-auto"
              src="/logo/site.png"
              alt="Jalandhar Leather"
              width={200}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => handleMouseLeave(item.name)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium leading-6 text-secondary-900 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.name}
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown menu with improved hover area */}
                  {activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-elegant border border-secondary-100 py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={() => handleMouseLeave(item.name)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium leading-6 text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="btn-primary text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Jalandhar Leather</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo/site.png"
                  alt="Jalandhar Leather"
                  width={150}
                  height={32}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="-mx-3 block rounded-lg px-3 py-1 text-sm leading-7 text-secondary-600 hover:bg-secondary-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
