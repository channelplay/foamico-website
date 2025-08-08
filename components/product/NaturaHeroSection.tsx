'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variants = [
  { id: 'natura1', name: 'Natura 1.0', selected: true },
  { id: 'natura2', name: 'Natura 2.0', selected: false }
]

const features = [
  { icon: '✓', text: '100% Natural Latex' },
  { icon: '✓', text: 'Eco-friendly' },
  { icon: '✓', text: 'Anti-allergy' },
  { icon: '✓', text: 'Temperature Regulation' },
  { icon: '✓', text: 'Breathable' },
  { icon: '✓', text: 'Motion Control' }
]

export default function NaturaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('natura1')

  // Map variants to their respective images
  const variantImages = {
    'natura1': '/Natura 1.png',
    'natura2': '/Natura 2.png'
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative bg-[#D4C4B0] rounded-3xl overflow-hidden h-[600px]">
              {/* Warranty Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-[#E8F5C8] text-[#5A6B3B] px-4 py-2 rounded-full text-sm font-medium">
                  25 Year Warranty
                </span>
              </div>
              
              {/* Product Image - Full frame */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Natura ${selectedVariant === 'natura1' ? '1.0' : '2.0'} Mattress`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Title and Description */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Natura</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Earthy, breathable and foam free. For those who like their sleep clean and quiet. Natura brings you closer to nature with Natural Pincore Latex.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Choose your comfort variant
              </h3>
              
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative px-4 py-2.5 rounded-xl border-2 text-sm transition-all flex-1
                      ${selectedVariant === variant.id
                        ? 'border-[#8BC34A] bg-white'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`font-medium ${
                      selectedVariant === variant.id ? 'text-[#8BC34A]' : 'text-gray-700'
                    }`}>
                      {variant.name}
                    </span>
                    {selectedVariant === variant.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-[#8BC34A] rounded-full flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#8BC34A] text-xl">✓</span>
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Centered */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}