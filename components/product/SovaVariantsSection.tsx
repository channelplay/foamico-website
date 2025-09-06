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
      image: '/sova-1.png',
      imagePosition: 'left',
      variant: product.variants[0]
    },
    {
      id: 'premium',
      name: 'Sova Premium', 
      tagline: 'Enhanced Support',
      image: '/sova-2.png',
      imagePosition: 'right',
      variant: product.variants[1]
    },
    {
      id: 'luxury',
      name: 'Sova Luxury',
      tagline: 'Ultimate Indulgence',
      image: '/sova-3.png',
      imagePosition: 'left',
      variant: product.variants[2]
    }
  ]

  return (
    <section id="variants-section" className="py-12 md:py-20 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-overline mb-4">Explore Options</p>
          <h2 className="heading-primary mb-4">
            Choose Your Perfect Comfort
          </h2>
          <div className="divider-line divider-center" />
          <p className="text-body text-light-gray max-w-2xl mx-auto mt-6">
            Each Sova variant is meticulously crafted with distinct layer combinations 
            to provide the ideal sleeping experience for your unique needs.
          </p>
        </motion.div>

        {/* Variants Grid */}
        <div className="space-y-16 md:space-y-24">
          {variants.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                item.imagePosition === 'right' ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mx-4 lg:mx-0">
                  {/* Warranty Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-primary text-soft-cream px-3 py-1 text-xs font-semibold rounded">
                    {item.id === 'luxury' ? '25' : '10'} YEAR WARRANTY
                  </div>
                  
                  {/* Product Image */}
                  <Image
                    src={item.image}
                    alt={`${item.name} mattress`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  
                </div>
              </div>

              {/* Content Side */}
              <div className={`min-h-[400px] md:h-[500px] flex flex-col px-4 lg:px-0 ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="heading-secondary text-2xl">
                      {item.name}
                    </h3>
                  </div>
                  <button 
                    onClick={scrollToComparison}
                    className="btn-secondary text-sm"
                  >
                    Compare Variants
                  </button>
                </div>

                {/* Layer Information */}
                <div className="space-y-3 flex-1">
                  <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
                    Layer Composition
                  </h4>
                  
                  {item.variant.layers?.map((layer, layerIndex) => (
                    <div key={layerIndex}>
                      <motion.button
                        onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-soft-cream hover:bg-warm-beige/50 transition-colors rounded"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm md:text-base">
                            {String(layerIndex + 1).padStart(2, '0')}
                          </div>
                          <div className="text-left">
                            <h4 className="font-medium text-dark">{layer.name}</h4>
                            {layer.thickness && (
                              <span className="text-xs text-light-gray">
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
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                            <div className="px-6 pb-4 pt-4 bg-warm-beige/20 border-l-4 border-primary ml-6">
                              <p className="text-sm text-dark leading-relaxed">
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