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
    icon: '◆',
    status: 'ACTIVE',
    dropdownItems: [
      { name: 'Sova', href: '/products/sova', power: 85 },
      { name: 'Ultima', href: '/products/ultima', power: 95 },
      { name: 'Natura', href: '/products/natura', power: 75 },
      { name: 'Marvel', href: '/products/marvel', power: 90 },
    ]
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      <nav className="sticky top-0 z-50 glass-panel border-b border-hud-cyan/30">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" />
        
        {/* Top Status Bar */}
        <div className="border-b border-hud-cyan/20 bg-cyber-dark/50">
          <Container>
            <div className="flex justify-between items-center py-1 text-[10px] font-mono">
              <div className="flex gap-4">
                <span className="text-hud-green/60">◉ CONNECTED</span>
                <span className="text-hud-cyan/60">LATENCY: 12ms</span>
              </div>
              <div className="flex gap-4">
                <span className="text-hud-orange/60">STATUS: ACTIVE</span>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="relative flex justify-between items-center h-20">
            {/* Logo with HUD Frame */}
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-hud-cyan/20 to-hud-pink/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative glass-panel px-4 py-2 border border-hud-cyan/50">
                  <div className="cyber-corner-tl" />
                  <div className="cyber-corner-tr" />
                  <div className="cyber-corner-bl" />
                  <div className="cyber-corner-br" />
                  <h1 className="text-2xl font-cyber font-bold">
                    <span className="neon-text-cyan">FOAM</span>
                    <span className="neon-text-pink">ICO</span>
                  </h1>
                  <div className="text-[8px] font-mono text-hud-cyan/60 absolute -bottom-3 left-4">
                    SLEEP_TECH_v2.0
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
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
                      <motion.button 
                        className="relative px-4 py-2 hud-text flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-hud-cyan/60">{item.icon}</span>
                        <span className="relative">
                          {item.name}
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-hud-cyan to-hud-pink"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        </span>
                        <svg className="w-3 h-3 text-hud-cyan/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="text-[8px] text-hud-green/60 absolute top-0 right-0">
                          {item.status}
                        </span>
                      </motion.button>
                      
                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="glass-panel border border-hud-cyan/30 overflow-hidden">
                              <div className="bg-gradient-to-r from-hud-cyan/10 to-hud-pink/10 px-3 py-2 border-b border-hud-cyan/20">
                                <span className="text-[10px] font-mono text-hud-cyan/80">SELECT_PRODUCT</span>
                              </div>
                              {item.dropdownItems.map((dropdownItem, index) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block relative group/item"
                                >
                                  <motion.div 
                                    className="px-4 py-3 flex items-center justify-between hover:bg-hud-cyan/10 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="text-hud-green text-xs">▶</span>
                                      <span className="font-mono text-sm text-hud-cyan-light">
                                        {dropdownItem.name}
                                      </span>
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
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
                      <motion.div 
                        className="relative px-4 py-2 hud-text flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-hud-cyan/60">{item.icon}</span>
                        <span className="relative">
                          {item.name}
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-hud-cyan to-hud-pink"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        </span>
                        <span className="text-[8px] text-hud-green/60 absolute top-0 right-0">
                          {item.status}
                        </span>
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}
              
              <Link href="/find-store">
                <motion.button 
                  className="hud-button hud-button-pink ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">◈</span>
                    LOCATE STORE
                    <span className="text-xs opacity-60">[F3]</span>
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              className="lg:hidden p-2 text-hud-cyan hover:text-hud-cyan-glow transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="lg:hidden border-t border-hud-cyan/20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdownItems ? (
                        <>
                          <div className="px-3 py-2 text-sm font-mono text-hud-cyan flex items-center gap-2">
                            <span className="text-hud-cyan/60">{item.icon}</span>
                            {item.name}
                          </div>
                          <div className="pl-8 space-y-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-sm font-mono text-hud-cyan/80 hover:text-hud-cyan hover:bg-hud-cyan/10"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                ▸ {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm font-mono text-hud-cyan hover:text-hud-cyan-glow hover:bg-hud-cyan/10 flex items-center gap-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-hud-cyan/60">{item.icon}</span>
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-2">
                    <Link href="/find-store" onClick={() => setMobileMenuOpen(false)}>
                      <button className="hud-button w-full">
                        LOCATE STORE
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>

        {/* Bottom scan line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hud-cyan/50 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </nav>
    </>
  )
}