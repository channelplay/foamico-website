'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'

export default function UltimaVariantsSection() {
  const product = getProductByCategory('ultima')
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
      name: 'Ultima Classic',
      image: '/Ultima 1.png',
      imagePosition: 'left',
      variant: product.variants[0]
    },
    {
      id: 'premium',
      name: 'Ultima Premium',
      image: '/Ultima 2.png',
      imagePosition: 'right',
      variant: product.variants[1]
    },
    {
      id: 'luxury',
      name: 'Ultima Luxury',
      image: '/Ultima 3.png',
      imagePosition: 'left',
      variant: product.variants[2]
    }
  ]

  return (
    <section className="pt-16 pb-20 bg-white -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Choose Your Comfort Variant
          </h2>
        </div>
        
        {variants.map((item, index) => (
          <div key={item.id} className="mb-32 last:mb-0">

            {/* Content Grid */}
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${
              item.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
            }`}>
              
              {/* Image Side */}
              <div className={`relative ${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[500px]">
                  <Image
                    src={item.image}
                    alt={`${item.name} Mattress`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Expandable Layers Side */}
              <div className={`space-y-4 ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <button 
                    onClick={scrollToComparison}
                    className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Compare
                  </button>
                </div>
                
                {item.variant.layers.map((layer, layerIndex) => (
                  <motion.div
                    key={layerIndex}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#E8F5C8] rounded-full flex items-center justify-center text-[#5A6B3B] font-semibold">
                          {layerIndex + 1}
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900">{layer.name}</h4>
                        </div>
                      </div>
                      <motion.svg
                        className="w-5 h-5 text-gray-400"
                        animate={{ rotate: expandedSections[`${item.id}-${layerIndex}`] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    
                    <AnimatePresence>
                      {expandedSections[`${item.id}-${layerIndex}`] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 pt-2 bg-gray-50">
                            <p className="text-gray-600">{layer.description}</p>
                            {layer.thickness && (
                              <p className="text-sm text-gray-500 mt-2">
                                Thickness: {layer.thickness}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}