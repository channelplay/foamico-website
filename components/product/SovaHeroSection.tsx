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

export default function SovaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('classic')

  const variantImages = {
    'classic': '/sova-classic.png',
    'premium': '/sova-premium.png',
    'luxury': '/sova-luxury.png'
  }

  return (
    <section className="bg-hermes-cream py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 tablet:gap-14 lg:gap-20 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-hermes-gold/30 rounded-sm hidden lg:block"></div>
            
            <div className="relative h-[400px] tablet:h-[450px] lg:h-[520px] border-4 border-hermes-ink/80 overflow-hidden bg-hermes-highlight shadow-luxury-lg">
              {/* Vintage Warranty Seal Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="relative bg-hermes-orange text-white px-5 py-3 shadow-xl">
                  <div className="absolute -inset-1 border border-hermes-gold/40"></div>
                  <div className="relative">
                    <div className="text-[10px] font-serif tracking-widest uppercase text-hermes-highlight/90">
                      Warranty
                    </div>
                    <div className="text-sm font-bold tracking-wide mt-0.5">
                      {selectedVariant === 'luxury' ? '25 YEARS' : '10 YEARS'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Image */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Sova ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Mattress`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Decorative Line */}
            <div className="w-16 h-0.5 bg-hermes-orange"></div>
            
            {/* Title */}
            <div>
              <h1 className="font-display text-4xl tablet:text-5xl lg:text-6xl font-bold text-hermes-ink mb-5 leading-tight">
                Sova Mattress
              </h1>
              
              <p className="text-base tablet:text-lg text-hermes-ink/70 leading-relaxed font-serif italic">
                Experience the perfect balance of firmness and comfort with our innovative foam technology, designed for enhanced orthopedic support and exceptional sleep quality.
              </p>
            </div>

            {/* Variant Selector */}
            <div>
              <h3 className="text-xs font-serif font-semibold text-hermes-ink mb-5 uppercase tracking-[0.2em] border-b border-hermes-gold/30 pb-3">
                Select Your Comfort
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {variants.map((variant) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-4 border-2 transition-all text-center relative overflow-hidden
                      ${selectedVariant === variant.id
                        ? 'border-hermes-ink bg-hermes-ink text-hermes-highlight shadow-lg'
                        : 'border-hermes-gold/40 bg-hermes-highlight text-hermes-ink hover:border-hermes-orange hover:bg-hermes-cream'
                      }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className={`font-display font-bold text-sm md:text-base ${
                      selectedVariant === variant.id ? 'text-hermes-highlight' : 'text-hermes-ink'
                    }`}>
                      {variant.name}
                    </div>
                    <div className={`text-xs mt-1.5 font-serif italic ${
                      selectedVariant === variant.id ? 'text-hermes-cream' : 'text-hermes-ink/60'
                    }`}>
                      {variant.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-8 h-px bg-hermes-gold/50"></div>
              <div className="text-xs font-serif text-hermes-gold uppercase tracking-widest">Est. 2024</div>
              <div className="flex-1 h-px bg-hermes-gold/50"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
