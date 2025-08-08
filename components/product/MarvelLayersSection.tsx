'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'

export default function MarvelLayersSection() {
  const product = getProductByCategory('marvel')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  if (!product) return null

  const variant = product.variants[0] // Marvel has only one variant

  const toggleSection = (layerIndex: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [layerIndex]: !prev[layerIndex]
    }))
  }

  return (
    <section className="pt-16 pb-20 bg-white -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Marvel Technology Layers
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            6 layers of advanced comfort engineering
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[500px]">
              <Image
                src="/Marvel.png"
                alt="Marvel Mattress"
                fill
                className="object-cover"
              />
              {/* Technology Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-900">CNC Cut Technology</p>
                <p className="text-xs text-gray-600">Enhanced airflow & cooling</p>
              </div>
            </div>
          </div>

          {/* Expandable Layers Side */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Layer Breakdown
              </h3>
            </div>
            
            {variant.layers.map((layer, layerIndex) => (
              <motion.div
                key={layerIndex}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(`layer-${layerIndex}`)}
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
                    animate={{ rotate: expandedSections[`layer-${layerIndex}`] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                
                <AnimatePresence>
                  {expandedSections[`layer-${layerIndex}`] && (
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

            {/* Key Features */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">Key Technologies</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#8BC34A] mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Insignia Velio Foam</p>
                    <p className="text-sm text-gray-600">CNC Cut for maximum airflow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#8BC34A] mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Zero G Latex</p>
                    <p className="text-sm text-gray-600">Natural support and durability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#8BC34A] mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Pulse Core Technology</p>
                    <p className="text-sm text-gray-600">Adaptive body contouring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}