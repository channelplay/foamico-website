'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'

const navigation = [
  {
    name: 'Products',
    href: '/products',
    dropdownItems: [
      { 
        name: 'Sova', 
        href: null, 
        desc: 'Premium Comfort',
      },
      { 
        name: 'Ultima', 
        href: null, 
        desc: 'Ultimate Luxury',
      },
    ]
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
]

export default function Navigation() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      const isScrolled = window.scrollY > 20
      if (scrolledRef.current !== isScrolled) {
        scrolledRef.current = isScrolled
        setScrolled(isScrolled)
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateScrollState)
      }
    }

    updateScrollState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F6F4F0] shadow-lg' 
          : 'bg-[#F6F4F0]/95 backdrop-blur-sm'
      }`}>
        
        <Container>
          <div className="flex justify-between items-center h-[70.4px] md:h-[88px]">
            {/* Logo */}
            <Link href="/" className="group" onClick={() => setMobileMenuOpen(false)}>
              <motion.div 
                className="relative flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Image
                  src="/foamico-logo-black.png"
                  alt="Foamico Logo"
                  width={207}
                  height={69}
                  className="h-[40.48px] md:h-[70.84px] w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 text-dark hover:text-primary transition-colors active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

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
                        setHoveredProduct(null)
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
                            className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-2xl overflow-hidden flex"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ width: '360px' }}
                          >
                            {/* Left Column - Product Lines */}
                            <div className="bg-white p-4 flex-1">
                              {item.dropdownItems.map((dropdownItem, index) => (
                                <div
                                  key={dropdownItem.name}
                                  className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                                  onMouseEnter={() => setHoveredProduct(dropdownItem.name)}
                                >
                                  <div>
                                    <p className="font-semibold text-base text-[#2c2c2c]">
                                      {dropdownItem.name}
                                    </p>
                                  </div>
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              ))}
                            </div>
                            
                            {/* Right Column - Categories (only visible on hover) */}
                            <AnimatePresence>
                              {hoveredProduct && (
                                <motion.div 
                                  className="bg-[#f8f8f8] p-4 border-l border-gray-200"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ width: '160px' }}
                                >
                                  <div className="space-y-2">
                                    <Link
                                      href={hoveredProduct === 'Sova' ? '/products/sovaclassic' : '/products/ultimaclassic'}
                                      className="block py-2 px-3 text-[#2c2c2c] hover:bg-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                      Classic
                                    </Link>
                                    <Link
                                      href={hoveredProduct === 'Sova' ? '/products/sovapremium' : '/products/ultimapremium'}
                                      className="block py-2 px-3 text-[#2c2c2c] hover:bg-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                      Premium
                                    </Link>
                                    <Link
                                      href={hoveredProduct === 'Sova' ? '/products/sovaluxury' : '/products/ultimaluxury'}
                                      className="block py-2 px-3 text-[#2c2c2c] hover:bg-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                      Luxury
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
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
            </div>

          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-[70.4px] md:top-[88px] right-0 bottom-0 w-full sm:w-80 bg-[#F6F4F0] shadow-2xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <div>
                      <button
                        id="mobile-products-button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between py-3 px-3 text-lg font-medium text-dark hover:text-primary hover:bg-soft-cream transition-all rounded-lg active:scale-[0.98] min-h-[44px]"
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-products-panel"
                      >
                        {item.name}
                        <motion.svg
                          animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            id="mobile-products-panel"
                            role="region"
                            aria-labelledby="mobile-products-button"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-4 space-y-1"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <div key={dropdownItem.name} className="py-1">
                                <Link
                                  href={dropdownItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-3 px-3 font-semibold text-dark hover:text-primary hover:bg-soft-cream transition-all rounded-lg active:scale-[0.98] min-h-[44px]"
                                >
                                  {dropdownItem.name}
                                </Link>
                                <p className="text-sm text-light-gray mt-1 px-3">{dropdownItem.desc}</p>
                                
                                {dropdownItem.subCategories && (
                                  <div className="mt-2 pl-4 space-y-1">
                                    {dropdownItem.subCategories.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-3 px-3 text-sm text-light-gray hover:text-primary hover:bg-soft-cream transition-all rounded-lg active:scale-[0.98] min-h-[44px]"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-3 text-lg font-medium text-dark hover:text-primary hover:bg-soft-cream transition-all rounded-lg active:scale-[0.98] min-h-[44px]"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer for fixed navigation */}
      <div className="h-[70.4px] md:h-[88px]" />
    </>
  )
}