'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface UltimaTopImageProps {
  variant?: 'classic' | 'premium' | 'luxury'
}

const variantDescriptions = {
  classic: `Reliable comfort built to last. Ultima Classic is engineered for consistent support and durability—making it a dependable choice for long-term everyday use.

Thickness: 6"
Comfort Scale: Firm
Best for: Back sleepers, firm mattress users`,
  premium: `Enhanced support with added comfort layers. Ultima Premium balances firmness with improved cushioning—ideal for sleepers who want support without stiffness.

Thickness: 6.5"
Comfort Scale: Medium Firm
Best for: Back & combination sleepers`,
  luxury: `Performance-driven comfort with a refined feel. Ultima Luxury offers premium cushioning over a strong support base—designed for sleepers who demand durability with comfort.

Thickness: 7"
Comfort Scale: Medium
Best for: Long-term users, comfort + support seekers`,
}

const layerDetails = {
  classic: [
    { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
    { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
    { name: 'Cloud Sense Foam', description: 'Supportive latex foam ensuring spinal alignment, weight balance, and pressure-free comfort.' },
    { name: 'Zero G Latex Foam', description: 'High-resilience foam providing durable comfort, elasticity, and stable pressure-responsive support.' },
    { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
  ],
  premium: [
    { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
    { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
    { name: 'Cosmic Byte Foam', description: 'Offering balanced comfort, responsive support, and long-lasting performance for everyday restful sleep.' },
    { name: 'Cloud Sense Foam', description: 'Plush and adaptive layer delivering cloud-like comfort and pressure relief.' },
    { name: 'Zero G Latex Foam', description: 'Firm and supportive core layer delivering long-lasting orthopedic support and durability.' },
    { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
  ],
  luxury: [
    { name: 'Luxnit Premium Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
    { name: 'Aeroflex Quilting', description: 'Breathable quilted layer providing enhanced softness, airflow and smooth surface comfort.' },
    { name: 'Memorest Foam', description: 'Body-contouring memory foam reducing pressure points and enhancing personalized comfort.' },
    { name: 'Cosmic Byte Foam', description: 'Offering balanced comfort, responsive support, and long-lasting performance for everyday restful sleep.' },
    { name: 'Cloud Sense Foam', description: 'Plush and adaptive layer delivering cloud-like comfort and pressure relief.' },
    { name: 'Zero G Latex Foam', description: 'Firm and supportive core layer delivering long-lasting orthopedic support and durability.' },
    { name: 'Soft Foam Quilting', description: 'Cushioned foam quilting adding softness, pressure relief, and inviting surface comfort.' },
  ],
}

export default function UltimaTopImage({ variant = 'classic' }: UltimaTopImageProps) {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState('ultima')
  const [selectedProduct, setSelectedProduct] = useState(variant)

  // Determine the hero image based on variant
  const getHeroImage = () => {
    return '/Ultima.png'
  }

  const renderDescription = () => {
    const desc = variantDescriptions[variant]
    const lines = desc.split('\n')
    return lines.map((line, index) => {
      const labelMatch = line.match(/^(Thickness:|Comfort Scale:|Firmness:|Best for:)(.*)$/)
      if (labelMatch) {
        return (
          <span key={index}>
            <strong>{labelMatch[1]}</strong>{labelMatch[2]}
            {index < lines.length - 1 && '\n'}
          </span>
        )
      }
      return (
        <span key={index}>
          {line}
          {index < lines.length - 1 && '\n'}
        </span>
      )
    })
  }

  // Determine the layers image based on variant for desktop
  const getLayersImage = () => {
    if (variant === 'luxury') return '/Ultima Luxury.png'
    if (variant === 'premium') return '/Ultima Premium.png'
    return '/Ultima Classic.png' // classic variant
  }

  // Determine the layers image for mobile
  const getMobileLayersImage = () => {
    if (variant === 'luxury') return '/Ultima Luxury Mobile.png'
    if (variant === 'premium') return '/Ultima Premium Mobile.png'
    return '/Ultima Classic Mobile.png' // classic variant
  }

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
    <section className="bg-base-cream py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile and Tablet Portrait: Stack vertically */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Hero Image */}
          <div className="w-full max-w-md">
            <Image
              src={getHeroImage()}
              alt={`Ultima ${variant.charAt(0).toUpperCase() + variant.slice(1)} Mattress - 25 Years Warranty`}
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
                Ultima <span className="text-[#AD702A]">{selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}</span>
              </h1>
              <p className="text-[#39250E]/70 leading-relaxed text-sm md:text-base px-4 whitespace-pre-line">
                {renderDescription()}
              </p>
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
                  Ultima Classic
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
                  Ultima Premium
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
                  Ultima Luxury
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop and Tablet Landscape: Original layout */}
        <div className="hidden lg:flex items-center justify-center px-4">
          <div className="w-full max-w-[1280px] flex items-center gap-8 lg:gap-16">
            {/* Left Side - Vintage Illustration */}
            <div className="flex-shrink-0">
              <Image
                src={getHeroImage()}
                alt={`Ultima ${variant.charAt(0).toUpperCase() + variant.slice(1)} Mattress - 25 Years Warranty - Quality inspection with magnifying glass`}
                width={462}
                height={483}
                className="w-[350px] md:w-[400px] lg:w-[462px] h-auto object-cover"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-[548px]">
              <div className="w-full space-y-8 font-fira">
                {/* Title */}
                <div>
                  <h1 className="font-bold text-[#39250E]" style={{ fontSize: '40.26px', marginBottom: '14px' }}>
                    Ultima <span className="text-[#AD702A]">{selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}</span>
                  </h1>
                  <p className="text-[#39250E]/70 leading-relaxed whitespace-pre-line" style={{ fontSize: '15px' }}>
                    {renderDescription()}
                  </p>
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
        </div>
      </div>
    </section>
    {/* Mobile: Layers Section with Heading and Dropdown */}
    <section className="bg-base-cream md:hidden py-8">
      <div className="container mx-auto px-4">
        {/* Section Header - Mobile Only */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-[5px]">
            <div className="w-8 h-[1px] mr-3 bg-[#AD702A]"></div>
            <p className="font-bold font-fira text-xs text-[#AD702A] whitespace-nowrap uppercase tracking-[0.15em]">Inside the Layers</p>
            <div className="w-8 h-[1px] ml-3 bg-[#AD702A]"></div>
          </div>
          
          <h2 className="font-bold font-fira text-2xl text-[#39250E] mt-1 mb-3">
            Mattress Layers
          </h2>
          
          <p className="mx-auto leading-relaxed font-fira text-sm text-[#39250E]/70 px-4 max-w-md">
            Experience ultimate luxury with our premium materials and advanced comfort technology.
          </p>
        </div>

        {/* Layers Image - Same size as top section */}
        <div className="max-w-md mx-auto mb-6">
          <Image
            src={getMobileLayersImage()}
            alt={`Inside the Layers of Comfort - Ultima ${variant.charAt(0).toUpperCase() + variant.slice(1)} mattress layers`}
            width={462}
            height={483}
            className="w-full h-auto object-cover landscape:scale-90"
          />
        </div>
        
        {/* Layers Description - Individual Dropdowns */}
        <div className="bg-white rounded-lg shadow-md p-4 space-y-3 max-w-md mx-auto">
          <h3 className="font-bold text-[#39250E] text-lg mb-4 text-center">Layer Details</h3>

          {layerDetails[variant].map((layer, index) => (
            <details
              key={index}
              className={`group ${index < layerDetails[variant].length - 1 ? 'border-b border-gray-200 pb-3' : 'pb-3'}`}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4C6462] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-[#39250E] text-sm">{layer.name}</h4>
                </div>
                <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-3 ml-11 text-sm text-[#39250E]/70">
                {layer.description}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
    {/* Tablet/Desktop: Original Layers Image */}
    <section className="bg-base-cream hidden md:block">
      <div className="flex items-center justify-center">
        <Image
          src={getLayersImage()}
          alt={`Inside the Layers of Comfort - Ultima ${variant.charAt(0).toUpperCase() + variant.slice(1)} mattress layers`}
          width={1469}
          height={740}
          className="object-contain"
        />
      </div>
    </section>
    </>
  )
}
