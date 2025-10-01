'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const variants = [
  { id: 'classic', name: 'Classic', description: 'Cloud comfort' },
  { id: 'premium', name: 'Premium', description: 'Balanced luxury' },
  { id: 'luxury', name: 'Luxury', description: 'Ultimate plush' }
]

export default function UltimaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('classic')

  const variantImages = {
    'classic': '/ultima-classic.png',
    'premium': '/ultima-premium.png',
    'luxury': '/ultima-luxury.png'
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {/* Warranty Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white text-gray-700 px-4 py-2 text-xs font-semibold tracking-wide rounded-sm shadow-md border border-gray-200">
                UP TO 25 YEAR WARRANTY
              </div>
              
              {/* Product Image */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Ultima ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Mattress`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Ultima Mattress
              </h1>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Luxuriously soft with adaptive comfort for cloud-like sleep. Experience ultimate comfort with our premium Zero G Latex Foam technology for the perfect plush experience.
              </p>
            </div>

            {/* Variant Selector */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Select Your Comfort
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-3 border rounded-md transition-all text-center
                      ${selectedVariant === variant.id
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 bg-white hover:border-gray-400'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold text-gray-900 text-sm md:text-base">
                      {variant.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {variant.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
