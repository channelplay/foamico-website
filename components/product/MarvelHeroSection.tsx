'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  { icon: '✓', text: 'Advanced Cooling' },
  { icon: '✓', text: 'CNC Cut Technology' },
  { icon: '✓', text: 'Anti-allergy' },
  { icon: '✓', text: 'Superior Airflow' },
  { icon: '✓', text: 'Breathable' },
  { icon: '✓', text: 'Motion Control' }
]

export default function MarvelHeroSection() {
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
                src="/Marvel.png"
                alt="Marvel Mattress"
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
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Marvel</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A mattress that bends, stretches and supports like the hero of a nightly soap. Marvel features innovative Insignia Velio Foam with CNC Cut technology for enhanced airflow.
              </p>
            </div>

            {/* Single Variant Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Premium Technology
              </h3>
              
              <div className="bg-gradient-to-r from-[#8BC34A] to-[#9CCC65] text-white px-6 py-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">Marvel</p>
                    <p className="text-sm opacity-90">10 inches • Medium Support</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹39,999</p>
                    <p className="text-sm line-through opacity-75">₹49,999</p>
                  </div>
                </div>
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