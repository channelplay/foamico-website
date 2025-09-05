'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const navigation = [
  {
    name: 'Products',
    href: '/products',
    dropdownItems: [
      { name: 'Sova', href: '/products/sova', desc: 'Premium Comfort' },
      { name: 'Ultima', href: '/products/ultima', desc: 'Ultimate Luxury' },
    ]
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        
        <Container>
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div 
                className="relative flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Image
                  src="/Foamico Logo black.png"
                  alt="Foamico Logo"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdownItems ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        setProductsDropdownOpen(true)
                        setHoveredItem(item.name)
                      }}
                      onMouseLeave={() => {
                        setProductsDropdownOpen(false)
                        setHoveredItem(null)
                      }}
                    >
                      <button 
                        className="flex items-center gap-2 text-sm font-medium text-dark hover:text-primary transition-colors duration-300"
                      >
                        <span className="relative">
                          {item.name}
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            productsDropdownOpen ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-6 py-4 hover:bg-soft-cream transition-colors duration-200 border-b border-gray-100 last:border-0"
                              >
                                <p className="font-medium text-dark hover:text-primary transition-colors">
                                  {dropdownItem.name}
                                </p>
                                <p className="text-xs text-light-gray mt-1">
                                  {dropdownItem.desc}
                                </p>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="text-sm font-medium text-dark hover:text-primary transition-colors duration-300">
                        {item.name}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              <Link href="/contact">
                <motion.button 
                  className="btn-primary text-xs"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-dark"
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
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="lg:hidden border-t border-gray-200"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-6 space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdownItems ? (
                        <>
                          <div className="px-4 pb-2 text-sm font-medium text-dark">
                            {item.name}
                          </div>
                          <div className="pl-8 space-y-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block py-2 text-sm text-light-gray hover:text-primary transition-colors"
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
                          className="block px-4 py-2 text-sm font-medium text-dark hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <button className="btn-primary w-full text-xs">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  )
}