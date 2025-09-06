'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const variants = [
  { id: 'classic', name: 'Classic', description: 'Essential comfort' },
  { id: 'premium', name: 'Premium', description: 'Enhanced support' },
  { id: 'luxury', name: 'Luxury', description: 'Ultimate indulgence' }
]

const features = [
  { text: 'Orthopedic Support', icon: '✓' },
  { text: 'Temperature Regulation', icon: '✓' },
  { text: 'Motion Isolation', icon: '✓' },
  { text: '25 Year Warranty', icon: '✓' },
  { text: 'Hypoallergenic', icon: '✓' },
  { text: 'Breathable Design', icon: '✓' }
]

export default function SovaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('classic')

  // Map variants to their respective images
  const variantImages = {
    'classic': '/Sova 1.png',
    'premium': '/Sova 2.png',
    'luxury': '/Sova 3.png'
  }

  return (
    <section className="min-h-screen bg-white py-10 md:py-16">
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[80vh]">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[400px] md:h-[560px] rounded-lg overflow-hidden shadow-xl border border-gray-200">
              {/* Warranty Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 text-primary px-3 py-1.5 text-xs font-semibold tracking-wide rounded shadow-sm">
                {selectedVariant === 'luxury' ? '25' : '10'} YEAR WARRANTY
              </div>
              
              {/* Product Image */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Sova ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Mattress`}
                fill
                className="object-cover"
                priority
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6 md:space-y-8 order-1 lg:order-2 px-4 lg:px-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Title and Description */}
            <div>
              <p className="uppercase tracking-wider text-xs text-light-gray mb-2">Our Collection</p>
              
              <h1 className="mb-3 md:mb-4 font-bold" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
                <span className="text-dark">Sova</span>
                <span className="text-primary"> Mattress</span>
              </h1>
              
              <p className="text-base md:text-lg font-medium text-dark mb-3">Classic • Premium • Luxury</p>
              
              <p className="text-sm md:text-base text-light-gray leading-relaxed max-w-prose">
                Experience the perfect balance of firmness and comfort with our innovative foam technology, designed for enhanced orthopedic support and exceptional sleep quality. Choose from Classic comfort, Premium support, or Luxury indulgence.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-lg">
              <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
                Select Your Comfort
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {variants.map((variant) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative px-3 md:px-4 py-2.5 md:py-3 border rounded-md transition-all text-left
                      ${selectedVariant === variant.id
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-primary/40'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-center">
                      <span className={`font-medium block ${
                        selectedVariant === variant.id ? 'text-primary' : 'text-dark'
                      }`}>
                        {variant.name}
                      </span>
                      <span className="text-xs text-light-gray mt-1">
                        {variant.description}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-dark">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  )
}
