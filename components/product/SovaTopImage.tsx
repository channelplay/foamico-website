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
    <section className="bg-base-cream py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="w-[1280px] h-[544.39px] relative">
          
          {/* Left Side - Vintage Illustration */}
          <div className="absolute left-[89px] top-0 w-[462px] h-[482.75px]">
            <Image
              src="/sova-hero-new.png"
              alt="Sova Classic Mattress - 10 Years Warranty - Quality inspection with magnifying glass"
              width={980}
              height={980}
              className="w-[462px] h-[482.75px] object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="absolute left-[640px] top-0 w-[548.17px] space-y-8 font-fira">
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#39250E] mb-3">
                Sova <span className="text-[#AD702A]">Classic</span>
              </h1>
              <p className="text-base md:text-lg text-[#39250E]/70 leading-relaxed mt-4">
                Experience the perfect balance of firmness and comfort with our innovative Latex foam technology, designed for enhanced orthopedic support and exceptional sleep quality.
              </p>
            </div>

            {/* Model Type Selector */}
            <div>
              <h3 className="text-sm font-semibold text-[#39250E] mb-4 uppercase tracking-wider">
                Model Type:
              </h3>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleModelChange('sova')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedModel === 'sova'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-[#39250E] border-hermes-gold/40 hover:border-[#AD702A] hover:bg-hermes-cream'
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
                      : 'bg-white text-[#39250E] border-hermes-gold/40 hover:border-[#AD702A] hover:bg-hermes-cream'
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
              <h3 className="text-sm font-semibold text-[#39250E] mb-4 uppercase tracking-wider">
                Product Type:
              </h3>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => setSelectedProduct('classic')}
                  className={`px-6 py-3 min-w-[140px] transition-all border-2 font-semibold
                    ${selectedProduct === 'classic'
                      ? 'bg-[#4A5F5C] text-white border-[#4A5F5C]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
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
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
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
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
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
    </section>
  )
}
