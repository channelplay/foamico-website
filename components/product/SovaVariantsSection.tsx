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
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-3">Explore Options</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Choose Your Perfect Comfort
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto my-6" />
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 tablet:gap-10 lg:gap-12 items-center ${
                item.imagePosition === 'right' ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[300px] tablet:h-[420px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl mx-4 lg:mx-0">
                  {/* Warranty Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white text-gray-700 px-4 py-2 text-xs font-semibold tracking-wide rounded-sm shadow-md border border-gray-200">
                    {item.id === 'luxury' ? 'UP TO 25 YEAR WARRANTY' : '10 YEAR WARRANTY'}
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

              {/* Content Side */}
              <div className={`flex flex-col px-4 lg:px-0 ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                  <button 
                    onClick={scrollToComparison}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    COMPARE VARIANTS
                  </button>
                </div>

                {/* Layer Information */}
                <div className="space-y-3">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    Layer Composition
                  </h4>
                  
                  {item.variant.layers?.map((layer, layerIndex) => (
                    <div key={layerIndex}>
                      <motion.button
                        onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold text-sm md:text-base">
                            {String(layerIndex + 1).padStart(2, '0')}
                          </div>
                          <div className="text-left">
                            <h4 className="font-medium text-gray-900">{layer.name}</h4>
                            {layer.thickness && (
                              <span className="text-xs text-gray-500">
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
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <div className="px-6 pb-4 pt-4 bg-gray-100 border-l-4 border-gray-800 ml-6">
                              <p className="text-sm text-gray-700 leading-relaxed">
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