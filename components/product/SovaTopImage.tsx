'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SovaTopImage() {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState('sova')
  const [selectedProduct, setSelectedProduct] = useState('classic')

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
    if (model === 'ultima') {
      router.push('/products/ultima')
    }
  }

  return (
    <section className="bg-hermes-cream py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Side - Vintage Illustration */}
          <div className="relative">
            <Image
              src="/sova-hero.png"
              alt="Sova Classic Mattress - Vintage illustration showing quality inspection"
              width={1018}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 pt-0 lg:pt-8 font-fira">
            {/* Title */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hermes-ink mb-3">
                Sova <span className="text-hermes-orange italic">Classic</span>
              </h1>
              <p className="text-base md:text-lg text-hermes-ink/70 leading-relaxed font-serif mt-4">
                Experience the perfect balance of firmness and comfort with our innovative Latex foam technology, designed for enhanced orthopedic support and exceptional sleep quality.
              </p>
            </div>

            {/* Model Type Selector */}
            <div>
              <h3 className="text-sm font-semibold text-hermes-ink mb-4 uppercase tracking-wider">
                Model Type:
              </h3>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleModelChange('sova')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedModel === 'sova'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-hermes-ink border-hermes-gold/40 hover:border-hermes-orange hover:bg-hermes-cream'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sova
                </motion.button>
                <motion.button
                  onClick={() => handleModelChange('ultima')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedModel === 'ultima'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-hermes-ink border-hermes-gold/40 hover:border-hermes-orange hover:bg-hermes-cream'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ultima
                </motion.button>
              </div>
            </div>

            {/* Product Type Selector */}
            <div>
              <h3 className="text-sm font-semibold text-hermes-ink mb-4 uppercase tracking-wider">
                Product Type:
              </h3>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => setSelectedProduct('classic')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedProduct === 'classic'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-hermes-orange border-hermes-orange hover:bg-hermes-orange hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sova Classic
                </motion.button>
                <motion.button
                  onClick={() => setSelectedProduct('premium')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedProduct === 'premium'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-hermes-orange border-hermes-orange hover:bg-hermes-orange hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sova Premium
                </motion.button>
                <motion.button
                  onClick={() => setSelectedProduct('luxury')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedProduct === 'luxury'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-hermes-orange border-hermes-orange hover:bg-hermes-orange hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sova Luxury
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
