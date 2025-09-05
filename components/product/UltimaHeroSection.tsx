'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Link from 'next/link'

const variants = [
  { id: 'classic', name: 'Classic', description: 'Cloud comfort' },
  { id: 'premium', name: 'Premium', description: 'Balanced luxury' },
  { id: 'luxury', name: 'Luxury', description: 'Ultimate plush' }
]

const features = [
  { text: 'Smart Layers', icon: '✓' },
  { text: 'Relieves Backpain', icon: '✓' },
  { text: 'Anti-allergy', icon: '✓' },
  { text: '25 Year Warranty', icon: '✓' },
  { text: 'Comfortable', icon: '✓' },
  { text: 'Breathable', icon: '✓' }
]

export default function UltimaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('classic')

  // Map variants to their respective images
  const variantImages = {
    'classic': '/Ultima 1.png',
    'premium': '/Ultima 2.png',
    'luxury': '/Ultima 3.png'
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-soft-cream to-warm-beige py-20">
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              {/* Warranty Badge */}
              <div className="absolute top-6 left-6 z-20 bg-primary text-soft-cream px-4 py-2 text-sm font-semibold rounded">
                25 YEAR WARRANTY
              </div>
              
              {/* Product Image */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Ultima ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Mattress`}
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
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Title and Description */}
            <div>
              <p className="text-overline mb-4">Our Collection</p>
              
              <h1 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <span className="text-dark">Ultima</span>
                <span className="text-primary"> Mattress</span>
              </h1>
              
              <p className="text-body text-light-gray leading-relaxed">
                Luxuriously soft with adaptive comfort for cloud-like sleep. 
                Experience ultimate comfort with our premium Zero G Latex Foam 
                technology for the perfect plush experience.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="card-elegant p-6">
              <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
                Select Your Comfort
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative px-4 py-3 border-2 rounded transition-all
                      ${selectedVariant === variant.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 bg-white hover:border-primary/50'
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
        
        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xs text-dark font-medium">View Details</span>
              <motion.svg 
                className="w-4 h-4 text-primary"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}