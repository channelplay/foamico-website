'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface SovaTopImageProps {
  variant?: 'classic' | 'premium' | 'luxury'
}

export default function SovaTopImage({ variant = 'classic' }: SovaTopImageProps) {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState('sova')
  const [selectedProduct, setSelectedProduct] = useState(variant)

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
    if (model === 'ultima') {
      router.push('/products/ultimaclassic')
    }
  }

  const handleProductChange = (product: string) => {
    setSelectedProduct(product as 'classic' | 'premium' | 'luxury')
    router.push(`/products/sova${product}`)
  }

  return (
    <>
    <section className="bg-base-cream py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile/Tablet: Stack vertically */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Hero Image */}
          <div className="w-full max-w-md">
            <Image
              src="/sova-hero-new.png"
              alt="Sova Classic Mattress - 10 Years Warranty"
              width={462}
              height={483}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="w-full space-y-6 font-fira">
            {/* Title */}
            <div className="text-center">
              <h1 className="font-bold text-[#39250E] text-3xl md:text-4xl mb-3">
                Sova <span className="text-[#AD702A]">{selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}</span>
              </h1>
              <p className="text-[#39250E]/70 leading-relaxed text-sm md:text-base px-4">
                Experience the perfect balance of firmness and comfort with our innovative Latex foam technology, designed for enhanced orthopedic support and exceptional sleep quality.
              </p>
            </div>

            {/* Model Type Selector */}
            <div className="px-4">
              <h3 className="font-semibold text-[#39250E] mb-3 uppercase tracking-wider text-sm">
                Model Type:
              </h3>
              <div className="flex gap-2 justify-center">
                <motion.button
                  onClick={() => handleModelChange('sova')}
                  className={`transition-all border font-semibold flex-1 max-w-[172px] h-[39px] text-sm
                    ${selectedModel === 'sova'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#39250E] border-hermes-gold/40 hover:border-[#AD702A] hover:bg-hermes-cream'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: '5px' }}
                >
                  Sova
                </motion.button>
                <motion.button
                  onClick={() => handleModelChange('ultima')}
                  className={`transition-all border font-semibold flex-1 max-w-[172px] h-[39px] text-sm
                    ${selectedModel === 'ultima'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: '5px' }}
                >
                  Ultima
                </motion.button>
              </div>
            </div>

            {/* Product Type Selector */}
            <div className="px-4">
              <h3 className="font-semibold text-[#39250E] mb-3 uppercase tracking-wider text-sm">
                Product Type:
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <motion.button
                  onClick={() => handleProductChange('classic')}
                  className={`transition-all border font-semibold w-full sm:flex-1 h-[39px] text-sm
                    ${selectedProduct === 'classic'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: '5px' }}
                >
                  Sova Classic
                </motion.button>
                <motion.button
                  onClick={() => handleProductChange('premium')}
                  className={`transition-all border font-semibold w-full sm:flex-1 h-[39px] text-sm
                    ${selectedProduct === 'premium'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: '5px' }}
                >
                  Sova Premium
                </motion.button>
                <motion.button
                  onClick={() => handleProductChange('luxury')}
                  className={`transition-all border font-semibold w-full sm:flex-1 h-[39px] text-sm
                    ${selectedProduct === 'luxury'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: '5px' }}
                >
                  Sova Luxury
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[1280px] h-[464px] relative">
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
            <div className="absolute left-[640px] top-0 w-[548.17px] h-[482.75px] flex items-center">
              <div className="w-full space-y-8 font-fira">
            {/* Title */}
            <div>
              <h1 className="font-bold text-[#39250E]" style={{ fontSize: '40.26px', marginBottom: '14px' }}>
                Sova <span className="text-[#AD702A]">{selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}</span>
              </h1>
              <p className="text-[#39250E]/70 leading-relaxed" style={{ fontSize: '15px' }}>
                Experience the perfect balance of firmness and comfort with our innovative Latex foam technology, designed for enhanced orthopedic support and exceptional sleep quality.
              </p>
            </div>

            {/* Model Type Selector */}
            <div>
              <h3 className="font-semibold text-[#39250E] mb-4 uppercase tracking-wider" style={{ fontSize: '15px' }}>
                Model Type:
              </h3>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleModelChange('sova')}
                  className={`transition-all border font-semibold w-[172.03px] h-[39px]
                    ${selectedModel === 'sova'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#39250E] border-hermes-gold/40 hover:border-[#AD702A] hover:bg-hermes-cream'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', borderRadius: '5px' }}
                >
                  Sova
                </motion.button>
                <motion.button
                  onClick={() => handleModelChange('ultima')}
                  className={`transition-all border font-semibold w-[172.03px] h-[39px]
                    ${selectedModel === 'ultima'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', borderRadius: '5px' }}
                >
                  Ultima
                </motion.button>
              </div>
            </div>

            {/* Product Type Selector */}
            <div>
              <h3 className="font-semibold text-[#39250E] mb-4 uppercase tracking-wider" style={{ fontSize: '15px' }}>
                Product Type:
              </h3>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => handleProductChange('classic')}
                  className={`transition-all border font-semibold w-[172.03px] h-[39px]
                    ${selectedProduct === 'classic'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', borderRadius: '5px' }}
                >
                  Sova Classic
                </motion.button>
                <motion.button
                  onClick={() => handleProductChange('premium')}
                  className={`transition-all border font-semibold w-[172.03px] h-[39px]
                    ${selectedProduct === 'premium'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', borderRadius: '5px' }}
                >
                  Sova Premium
                </motion.button>
                <motion.button
                  onClick={() => handleProductChange('luxury')}
                  className={`transition-all border font-semibold w-[172.03px] h-[39px]
                    ${selectedProduct === 'luxury'
                      ? 'bg-[#4C6462] text-white border-[#4C6462]'
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', borderRadius: '5px' }}
                >
                  Sova Luxury
                </motion.button>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile/Tablet: Image Frame and Layers Dropdown */}
    <section className="bg-base-cream lg:hidden px-4 py-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* Image Frame - Same size as top section */}
        <div className="w-full">
          <Image
            src="/sova-layers-new.png"
            alt="Inside the Layers of Comfort - Sova Classic mattress layers"
            width={462}
            height={483}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Layers Description Dropdown Box */}
        <div className="bg-white rounded-lg shadow-md">
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              <h3 className="font-bold text-[#39250E] text-lg">Mattress Layers</h3>
              <svg className="w-5 h-5 text-[#AD702A] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="border-l-4 border-[#AD702A] pl-3">
                <h4 className="font-semibold text-[#39250E]">Top Fabric</h4>
                <p className="text-sm text-[#39250E]/70">Luxeknit Fabric for premium comfort</p>
              </div>
              <div className="border-l-4 border-[#AD702A] pl-3">
                <h4 className="font-semibold text-[#39250E]">Comfort Layer</h4>
                <p className="text-sm text-[#39250E]/70">Aeroflex Foam Quilt for optimal support</p>
              </div>
              <div className="border-l-4 border-[#AD702A] pl-3">
                <h4 className="font-semibold text-[#39250E]">Body Support Layer</h4>
                <p className="text-sm text-[#39250E]/70">Pulse Core Foam for body contouring</p>
              </div>
              <div className="border-l-4 border-[#AD702A] pl-3">
                <h4 className="font-semibold text-[#39250E]">Main Support</h4>
                <p className="text-sm text-[#39250E]/70">Bondtech Support Foam for durability</p>
              </div>
              <div className="border-l-4 border-[#AD702A] pl-3">
                <h4 className="font-semibold text-[#39250E]">Bottom Layer</h4>
                <p className="text-sm text-[#39250E]/70">Support Foam Quilt for foundation</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>

    {/* Desktop: Original Layers Image */}
    <section className="bg-base-cream hidden lg:block">
      <div className="flex items-center justify-center">
        <Image
          src="/sova-layers-new.png"
          alt="Inside the Layers of Comfort - Sova Classic mattress layers"
          width={1469}
          height={740}
          className="object-contain"
        />
      </div>
    </section>
    </>
  )
}
