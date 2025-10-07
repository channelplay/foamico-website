'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface UltimaTopImageProps {
  variant?: 'classic' | 'premium' | 'luxury'
}

export default function UltimaTopImage({ variant = 'classic' }: UltimaTopImageProps) {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState('ultima')
  const [selectedProduct, setSelectedProduct] = useState(variant)

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
    if (model === 'sova') {
      router.push('/products/sovaclassic')
    }
  }

  const handleProductChange = (product: string) => {
    setSelectedProduct(product as 'classic' | 'premium' | 'luxury')
    router.push(`/products/ultima${product}`)
  }

  return (
    <>
    <section className="bg-base-cream py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="w-[1280px] h-[464px] relative">
          
          {/* Left Side - Vintage Illustration */}
          <div className="absolute left-[89px] top-0 w-[462px] h-[482.75px]">
            <Image
              src="/ultima-hero-new.png"
              alt="Ultima Mattress - 25 Years Warranty"
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
                Ultima <span className="text-[#AD702A]">{selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}</span>
              </h1>
              <p className="text-[#39250E]/70 leading-relaxed" style={{ fontSize: '15px' }}>
                Ultimate luxury and support with our premium foam technology, designed for the most discerning sleepers seeking exceptional comfort.
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
                      : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
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
                      : 'bg-white text-[#39250E] border-hermes-gold/40 hover:border-[#AD702A] hover:bg-hermes-cream'
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
                  Ultima Classic
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
                  Ultima Premium
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
                  Ultima Luxury
                </motion.button>
              </div>
            </div>
            </div>
          </div>
      </div>
    </section>
    <section className="bg-base-cream flex items-center justify-center px-0">
      <Image
        src="/ultima-layers-new.png"
        alt="Inside the Layers of Comfort - Ultima mattress layers"
        width={1469}
        height={740}
        className="object-contain"
      />
    </section>
    </>
  )
}
