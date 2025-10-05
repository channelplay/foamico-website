'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'
import Container from '@/components/ui/Container'

export default function SovaVariantsSection() {
  const product = getProductByCategory('sova')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  if (!product) return null

  const toggleSection = (variantId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [variantId]: !prev[variantId]
    }))
  }

  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('comparison-section')
    if (comparisonSection) {
      comparisonSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const variants = [
    {
      id: 'classic',
      name: 'Sova Classic',
      tagline: 'Essential Comfort',
      image: '/sova-classic.png',
      imagePosition: 'left',
      variant: product.variants[0]
    },
    {
      id: 'premium',
      name: 'Sova Premium', 
      tagline: 'Enhanced Support',
      image: '/sova-premium.png',
      imagePosition: 'right',
      variant: product.variants[1]
    },
    {
      id: 'luxury',
      name: 'Sova Luxury',
      tagline: 'Ultimate Indulgence',
      image: '/sova-luxury.png',
      imagePosition: 'left',
      variant: product.variants[2]
    }
  ]

  return (
    <section id="variants-section" className="py-16 md:py-24 bg-hermes-highlight">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-hermes-gold"></div>
            <p className="text-xs font-serif text-hermes-gold uppercase tracking-[0.3em]">Explore Options</p>
            <div className="w-12 h-px bg-hermes-gold"></div>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hermes-ink mb-4">
            Choose Your Perfect Comfort
          </h2>
          
          <p className="text-base md:text-lg text-hermes-ink/70 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Each Sova variant is meticulously crafted with distinct layer combinations 
            to provide the ideal sleeping experience for your unique needs.
          </p>
        </motion.div>

        {/* Variants Grid */}
        <div className="space-y-20 md:space-y-28">
          {variants.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 tablet:gap-12 lg:gap-16 items-center ${
                item.imagePosition === 'right' ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                {/* Decorative Frame */}
                <div className="relative mx-4 lg:mx-0">
                  <div className="absolute -inset-3 border border-hermes-gold/30 hidden lg:block"></div>
                  
                  <div className="relative h-[320px] tablet:h-[420px] lg:h-[520px] border-4 border-hermes-ink/80 overflow-hidden bg-hermes-cream shadow-luxury-lg">
                    {/* Vintage Warranty Seal Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="relative bg-hermes-orange text-white px-5 py-3 shadow-xl">
                        <div className="absolute -inset-1 border border-hermes-gold/40"></div>
                        <div className="relative">
                          <div className="text-[10px] font-serif tracking-widest uppercase text-hermes-highlight/90">
                            Warranty
                          </div>
                          <div className="text-sm font-bold tracking-wide mt-0.5">
                            {item.id === 'luxury' ? '25 YEARS' : '10 YEARS'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Image */}
                    <Image
                      src={item.image}
                      alt={`${item.name} mattress`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex flex-col px-4 lg:px-0 ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                {/* Header */}
                <div className="mb-8">
                  <div className="w-12 h-0.5 bg-hermes-orange mb-4"></div>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-hermes-ink mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="font-serif italic text-hermes-cognac text-lg mb-6">
                    {item.tagline}
                  </p>
                  
                  <button 
                    onClick={scrollToComparison}
                    className="px-6 py-3 border-2 border-hermes-orange bg-transparent text-hermes-orange hover:bg-hermes-orange hover:text-white transition-all text-sm font-serif uppercase tracking-widest"
                  >
                    Compare Variants
                  </button>
                </div>

                {/* Layer Information */}
                <div className="space-y-3">
                  <h4 className="text-xs font-serif font-semibold text-hermes-ink uppercase tracking-[0.2em] border-b border-hermes-gold/30 pb-3 mb-6">
                    Layer Composition
                  </h4>
                  
                  {item.variant.layers?.map((layer, layerIndex) => (
                    <div key={layerIndex}>
                      <motion.button
                        onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                        className="w-full px-5 md:px-6 py-4 flex items-center justify-between bg-hermes-cream border-2 border-hermes-gold/30 hover:border-hermes-orange transition-all"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 md:w-10 md:h-10 bg-hermes-orange text-white flex items-center justify-center font-display font-bold text-sm md:text-base border border-hermes-gold">
                            {String(layerIndex + 1).padStart(2, '0')}
                          </div>
                          <div className="text-left">
                            <h4 className="font-display font-semibold text-hermes-ink">{layer.name}</h4>
                            {layer.thickness && (
                              <span className="text-xs font-serif text-hermes-ink/60 italic">
                                {layer.thickness} thickness
                              </span>
                            )}
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{ rotate: expandedSections[`${item.id}-${layerIndex}`] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-4 h-4 text-hermes-cognac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {expandedSections[`${item.id}-${layerIndex}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-5 bg-hermes-highlight border-l-4 border-hermes-orange ml-6 border-2 border-t-0 border-hermes-gold/20">
                              <p className="text-sm font-serif text-hermes-ink/80 leading-relaxed italic">
                                {layer.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}
