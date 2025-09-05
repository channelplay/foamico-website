'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'
import Container from '@/components/ui/Container'

export default function UltimaVariantsSection() {
  const product = getProductByCategory('ultima')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [selectedVariant, setSelectedVariant] = useState<string>('classic')

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
      name: 'Ultima Classic',
      tagline: 'Cloud Comfort',
      image: '/Ultima 1.png',
      imagePosition: 'left',
      variant: product.variants[0]
    },
    {
      id: 'premium',
      name: 'Ultima Premium', 
      tagline: 'Balanced Luxury',
      image: '/Ultima 2.png',
      imagePosition: 'right',
      variant: product.variants[1]
    },
    {
      id: 'luxury',
      name: 'Ultima Luxury',
      tagline: 'Ultimate Plush',
      image: '/Ultima 3.png',
      imagePosition: 'left',
      variant: product.variants[2]
    }
  ]

  return (
    <section id="variants-section" className="py-20 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
            Each Ultima variant is meticulously crafted with distinct layer combinations 
            to provide the ideal cloud-like sleeping experience for your unique needs.
          </p>
        </motion.div>

        {/* Variants Grid */}
        <div className="space-y-24">
          {variants.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                item.imagePosition === 'right' ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  {/* Warranty Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-primary text-soft-cream px-3 py-1 text-xs font-semibold rounded">
                    25 YEAR WARRANTY
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
              <div className={`min-h-[500px] flex flex-col ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
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
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
                    Layer Composition
                  </h4>
                  
                  {item.variant.layers?.map((layer, layerIndex) => (
                    <div key={layerIndex} className="mb-2">
                      <motion.button
                        onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-soft-cream hover:bg-warm-beige/50 transition-colors rounded relative z-10"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
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
                              {layer.benefits && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {layer.benefits.map((benefit, idx) => (
                                    <span key={idx} className="text-xs bg-white px-3 py-1 rounded text-dark">
                                      {benefit}
                                    </span>
                                  ))}
                                </div>
                              )}
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