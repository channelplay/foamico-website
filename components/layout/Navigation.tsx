'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const navigation = [
  {
    name: 'Products',
    href: '/products',
    dropdownItems: [
      { name: 'Sova', href: '/products/sova' },
      { name: 'Ultima', href: '/products/ultima' },
      { name: 'Natura', href: '/products/natura' },
      { name: 'Marvel', href: '/products/marvel' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Foamico Logo black.png"
              alt="Foamico Logo"
              width={254}
              height={101}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdownItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button className="text-foamico-black hover:text-foamico-lime transition-colors duration-200 font-medium flex items-center space-x-1">
                      <span>{item.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {productsDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 pt-2 w-48"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        <div className="bg-white rounded-lg shadow-lg py-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-foamico-black hover:bg-[#E1EC9A] hover:text-[#77870D] transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foamico-black hover:text-foamico-lime transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/find-store">
              <button className="px-7 py-3 bg-gradient-to-r from-[#8BC34A] to-[#9CCC65] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                Store Locator
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foamico-black hover:text-foamico-lime hover:bg-foamico-lime-light transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-foamico-black">
                        {item.name}
                      </div>
                      <div className="pl-6">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-base text-foamico-gray-600 hover:text-[#77870D] hover:bg-[#E1EC9A]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foamico-black hover:text-foamico-lime hover:bg-foamico-lime-light"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button href="/find-store" size="medium" className="w-full">
                  Store Locator
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}