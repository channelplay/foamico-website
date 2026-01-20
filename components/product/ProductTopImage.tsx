'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// Layer type definition
interface LayerInfo {
  name: string
  description: string
}

// Product configurations
const productConfig = {
  resto: {
    name: 'Resto',
    description: 'Experience restful sleep with our innovative foam technology, designed for optimal comfort and rejuvenating rest.',
    variantDescriptions: {
      classic: `Everyday comfort with dependable orthopedic support. Resto Classic is built to feel cushioned on top, yet stable underneath—so you wake up fresher, with better posture support night after night.

Thickness: 6"
Comfort Scale: Firm
Best for: Daily use, back & combination sleepers, reliable support seekers`,
      premium: `A step-up in comfort with a more responsive feel. Resto Premium adds an extra comfort layer for better pressure relief and smoother body-contouring—without losing the stable support you need for long, uninterrupted sleep.

Thickness: 6.5"
Comfort Scale: Medium Firm
Best for: Back/side sleepers, comfort-upgrade buyers, longer sleepers`,
      luxury: `Indulgent comfort with deeper pressure relief. Resto Luxury is designed to hug your body gently while keeping your spine aligned—ideal if you want a softer, more "luxury hotel" sleep feel every night.

Thickness: 7"
Comfort Scale: Medium
Best for: Side sleepers, comfort-first shoppers, pressure-point relief`,
    },
    variants: ['classic', 'premium', 'luxury'],
    heroImages: {
      classic: '/Resto.png',
      premium: '/Resto.png',
      luxury: '/Resto.png',
    },
    layersImages: {
      classic: '/Resto Classic.png',
      premium: '/Resto Premium.png',
      luxury: '/Resto Luxury.png',
    },
    mobileLayersImages: {
      classic: '/Resto Classic Mobile.png',
      premium: '/Resto Premium Mobile.png',
      luxury: '/Resto Luxury Mobile.png',
    },
  },
  luma: {
    name: 'Luma',
    description: 'Discover light, breathable comfort with our Luma series, engineered for cool and refreshing sleep.',
    variantDescriptions: {
      classic: `Comfort that adapts to your everyday rhythm. Luma Classic provides gentle cushioning and dependable support—making it an ideal choice for relaxed, uninterrupted sleep.

Thickness: 6"
Comfort Scale: Medium
Best for: Combination sleepers, daily comfort seekers`,
      premium: `Deeper comfort with enhanced body contouring. Luma Premium is crafted to cradle your body while maintaining stability—perfect for sleepers who value pressure relief and comfort equally.

Thickness: 8"
Comfort Scale: Medium
Best for: Side sleepers, long sleep durations`,
      luxury: `Plush comfort with a premium, hotel-like feel. Luma Luxury delivers superior softness and smooth body alignment for sleepers who want indulgent comfort without sagging.

Thickness: 10"
Comfort Scale: Medium Soft
Best for: Comfort-first sleepers, pressure-sensitive users`,
    },
    variants: ['classic', 'premium', 'luxury'],
    heroImages: {
      classic: '/Luma.png',
      premium: '/Luma.png',
      luxury: '/Luma.png',
    },
    layersImages: {
      classic: '/Luma Classic.png',
      premium: '/Luma Premium.png',
      luxury: '/Luma Luxury.png',
    },
    mobileLayersImages: {
      classic: '/Luma Classic Mobile.png',
      premium: '/Luma Premium Mobile.png',
      luxury: '/Luma Luxury Mobile.png',
    },
  },
  natura: {
    name: 'Natura',
    description: 'Embrace natural comfort with eco-friendly materials and sustainable design for a healthier sleep environment.',
    variantDescriptions: {
      natura1: `Naturally responsive comfort with deep cushioning. Natura 1.0 combines latex support with plush comfort layers to deliver a breathable, pressure-relieving sleep feel.

Thickness: 6"
Firmness: Medium
Best for: Comfort seekers, combo sleepers, people who like a buoyant latex feel`,
      natura2: `Targeted latex support for better alignment. Natura 2.0 is built with zoned latex to deliver more structured, full-body support while staying breathable and responsive.

Thickness: 6"
Firmness: Medium Soft
Best for: Posture support + comfort balance, sleepers who want "support with bounce"`,
    },
    variants: ['natura1', 'natura2'],
    variantLabels: {
      natura1: 'Natura 1.0',
      natura2: 'Natura 2.0',
    },
    heroImages: {
      natura1: '/Natura.png',
      natura2: '/Natura.png',
    },
    layersImages: {
      natura1: '/Natura 1.0.png',
      natura2: '/Natura 2.0.png',
    },
    mobileLayersImages: {
      natura1: '/Natura 1.0 Mobile.png',
      natura2: '/Natura 2.0 Mobile.png',
    },
  },
  riva: {
    name: 'Riva',
    description: 'Flow into perfect sleep with our Riva series, featuring advanced support technology for uninterrupted rest.',
    variantDescriptions: {
      riva1000: `Elevated comfort with a balanced, premium feel. Riva 1000 is designed to feel plush on top while keeping your body supported and stable.

Thickness: 8"
Firmness: Medium
Best for: Daily luxury comfort, back + combo sleepers`,
      riva2000: `Plusher comfort with enhanced pressure relief. Riva 2000 adds a more comfort-forward build for a softer, smoother sleep feel.

Thickness: 9"
Firmness: Medium Soft
Best for: Side sleepers, pressure relief seekers`,
      riva3000: `Most indulgent Riva comfort with deep cushioning. Riva 3000 is crafted for a premium, plush sleep experience—ideal if you want maximum comfort and a softer feel.

Thickness: 10"
Firmness: Medium Soft
Best for: Luxury comfort lovers, side sleepers`,
    },
    variants: ['riva1000', 'riva2000', 'riva3000'],
    variantLabels: {
      riva1000: 'Riva1000',
      riva2000: 'Riva2000',
      riva3000: 'Riva3000',
    },
    heroImages: {
      riva1000: '/Riva.png',
      riva2000: '/Riva.png',
      riva3000: '/Riva.png',
    },
    layersImages: {
      riva1000: '/Riva1000.png',
      riva2000: '/Riva2000.png',
      riva3000: '/Riva3000.png',
    },
    mobileLayersImages: {
      riva1000: '/Riva1000 Mobile.png',
      riva2000: '/Riva2000 Mobile.png',
      riva3000: '/Riva3000 Mobile.png',
    },
  },
}

// Layer details for each product variant
const layerDetails: Record<string, Record<string, LayerInfo[]>> = {
  resto: {
    classic: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Enduro HR Foam', description: 'High-resilience foam providing durable comfort, elasticity, and stable pressure-responsive support.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    premium: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Cosmic Byte Foam', description: 'Offering balanced comfort, responsive support, and long-lasting performance for everyday restful sleep.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Enduro HR Foam', description: 'High-resilience foam providing durable comfort, elasticity, and stable pressure-responsive support.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    luxury: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Memorest Foam', description: 'Body-contouring memory foam reducing pressure points and enhancing personalized comfort.' },
      { name: 'Cosmic Byte Foam', description: 'Offering balanced comfort, responsive support, and long-lasting performance for everyday restful sleep.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Enduro HR Foam', description: 'High-resilience foam providing durable comfort, elasticity, and stable pressure-responsive support.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
  },
  luma: {
    classic: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Hybrid Pocket Spring', description: 'Individually pocketed springs offering targeted support, motion isolation, and breathable comfort.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    premium: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Hybrid Pocket Spring', description: 'Individually pocketed springs offering targeted support, motion isolation, and breathable comfort.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    luxury: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Memorest Foam', description: 'Body-contouring memory foam reducing pressure points and enhancing personalized comfort.' },
      { name: 'Pro Nexa Foam', description: 'Delivering lightweight stability, durability, and consistent orthopaedic base support.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Hybrid Pocket Spring', description: 'Individually pocketed springs offering targeted support, motion isolation, and breathable comfort.' },
      { name: 'Vector Base Felt', description: 'High-density felt providing structural stability, load distribution, and long-lasting mattress durability.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
  },
  natura: {
    natura1: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: 'Pincore Latex Foam', description: 'Ventilated latex with pinholes ensuring airflow, responsiveness, and pressure-relieving comfort.' },
      { name: 'Cloud Sense Foam', description: 'Plush and adaptive layer delivering cloud-like comfort and pressure relief.' },
      { name: 'Zero G Latex Foam', description: 'Firm and supportive core layer delivering long-lasting orthopedic support and durability.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    natura2: [
      { name: 'Super Plush Luxeknit Fabric', description: 'Premium stretch-knit fabric offering breathability, durability, and a luxurious soft touch.' },
      { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer offering enhanced softness and gentle contouring support.' },
      { name: '7 Zone Latex Foam', description: 'Seven-zone latex delivering targeted support and enhanced full-body spinal alignment.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
  },
  riva: {
    riva1000: [
      { name: 'UltraLuxe Adaptive Knit Fabric', description: 'High-performance fabric engineered for superior breathability and an indulgently soft, skin-friendly feel that enhances overall sleep comfort.' },
      { name: 'NubeSoave™', description: 'Advanced adaptive foam gently cradling the body, reducing pressure points, enhancing relaxation.' },
      { name: 'Struttura Forte™M', description: 'Firm support layer ensuring stability, spinal alignment, and long-term mattress durability.' },
      { name: 'FondoCore Italia™M', description: 'Robust base foam delivering foundational strength, motion control, and extended mattress life.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    riva2000: [
      { name: 'UltraLuxe Adaptive Knit Fabric', description: 'High-performance fabric engineered for superior breathability and an indulgently soft, skin-friendly feel that enhances overall sleep comfort.' },
      { name: 'SetaComforto™M', description: 'Refined transition foam balancing plush comfort with responsive support and pressure distribution.' },
      { name: 'NubeSoave™', description: 'Advanced adaptive foam gently cradling the body, reducing pressure points, enhancing relaxation.' },
      { name: 'Struttura Forte™M', description: 'Firm support layer ensuring stability, spinal alignment, and long-term mattress durability.' },
      { name: 'FondoCore Italia™', description: 'Robust base foam delivering foundational strength, motion control, and extended mattress life.' },
      { name: 'Soft Foam with Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
    riva3000: [
      { name: 'UltraLuxe Adaptive Knit Fabric', description: 'High-performance fabric engineered for superior breathability and an indulgently soft, skin-friendly feel that enhances overall sleep comfort.' },
      { name: 'SetaComforto™M', description: 'Refined transition foam balancing plush comfort with responsive support and pressure distribution.' },
      { name: 'LussoMorbido™', description: 'High-resilience comfort foam delivering deep luxury softness with lasting structural integrity.' },
      { name: 'NubeSoave™', description: 'Advanced adaptive foam gently cradling the body, reducing pressure points, enhancing relaxation.' },
      { name: 'Struttura Forte™M', description: 'Firm support layer ensuring stability, spinal alignment, and long-term mattress durability.' },
      { name: 'FondoCore Italia™', description: 'Robust base foam delivering foundational strength, motion control, and extended mattress life.' },
      { name: 'Soft Foam Quilting', description: 'Additional cushioning for enhanced comfort and a cozy sleeping experience.' },
    ],
  },
}

type ProductType = keyof typeof productConfig

interface ProductTopImageProps {
  product: ProductType
  variant: string
}

export default function ProductTopImage({ product, variant }: ProductTopImageProps) {
  const router = useRouter()
  const config = productConfig[product]
  const [selectedProduct, setSelectedProduct] = useState(variant)

  const getVariantLabel = (v: string) => {
    if ('variantLabels' in config && config.variantLabels) {
      return config.variantLabels[v as keyof typeof config.variantLabels] || v.charAt(0).toUpperCase() + v.slice(1)
    }
    return v.charAt(0).toUpperCase() + v.slice(1)
  }

  // For Natura and Riva, the variant label already includes the product name
  const hasFullVariantName = product === 'natura' || product === 'riva'

  const getHeroImage = () => {
    return config.heroImages[variant as keyof typeof config.heroImages] || '/placeholder-hero.png'
  }

  const getLayersImage = () => {
    return config.layersImages[variant as keyof typeof config.layersImages] || '/placeholder-layers.png'
  }

  const getMobileLayersImage = () => {
    return config.mobileLayersImages[variant as keyof typeof config.mobileLayersImages] || '/placeholder-layers-mobile.png'
  }

  const getLayers = (): LayerInfo[] => {
    const productLayers = layerDetails[product]
    if (productLayers && variant in productLayers) {
      return productLayers[variant] || []
    }
    return []
  }

  const getDescription = () => {
    if ('variantDescriptions' in config && config.variantDescriptions) {
      return config.variantDescriptions[variant as keyof typeof config.variantDescriptions] || config.description
    }
    return config.description
  }

  const renderDescription = () => {
    const desc = getDescription()
    // Split by line breaks and render with bold labels
    const lines = desc.split('\n')
    return lines.map((line, index) => {
      // Check if line has a label pattern like "Label:"
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

  const handleProductChange = (newVariant: string) => {
    setSelectedProduct(newVariant)
    // For natura and riva, the variant name is the full page name (e.g., natura1, riva1000)
    // For others (resto, luma), we need to combine product + variant (e.g., restoclassic)
    if (product === 'natura' || product === 'riva') {
      router.push(`/products/${newVariant}`)
    } else {
      router.push(`/products/${product}${newVariant}`)
    }
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
                alt={`${config.name} ${getVariantLabel(variant)} Mattress`}
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
                  {hasFullVariantName ? (
                    <span className="text-[#AD702A]">{getVariantLabel(selectedProduct)}</span>
                  ) : (
                    <>{config.name} <span className="text-[#AD702A]">{getVariantLabel(selectedProduct)}</span></>
                  )}
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
                  {config.variants.map((v) => (
                    <motion.button
                      key={v}
                      onClick={() => handleProductChange(v)}
                      className={`transition-all border font-semibold w-full sm:flex-1 h-[39px] text-sm
                        ${selectedProduct === v
                          ? 'bg-[#4C6462] text-white border-[#4C6462]'
                          : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                        }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ borderRadius: '5px' }}
                    >
                      {hasFullVariantName ? getVariantLabel(v) : `${config.name} ${getVariantLabel(v)}`}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop and Tablet Landscape: Original layout */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <div className="w-full max-w-[1280px] flex items-center gap-8 lg:gap-16">
              {/* Left Side - Hero Image */}
              <div className="flex-shrink-0">
                <Image
                  src={getHeroImage()}
                  alt={`${config.name} ${getVariantLabel(variant)} Mattress`}
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
                      {hasFullVariantName ? (
                        <span className="text-[#AD702A]">{getVariantLabel(selectedProduct)}</span>
                      ) : (
                        <>{config.name} <span className="text-[#AD702A]">{getVariantLabel(selectedProduct)}</span></>
                      )}
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
                      {config.variants.map((v) => (
                        <motion.button
                          key={v}
                          onClick={() => handleProductChange(v)}
                          className={`transition-all border font-semibold w-[172.03px] h-[39px]
                            ${selectedProduct === v
                              ? 'bg-[#4C6462] text-white border-[#4C6462]'
                              : 'bg-white text-[#AD702A] border-[#AD702A] hover:bg-[#AD702A] hover:text-white'
                            }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          style={{ fontSize: '15px', borderRadius: '5px' }}
                        >
                          {hasFullVariantName ? getVariantLabel(v) : `${config.name} ${getVariantLabel(v)}`}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Layers Section */}
      <section className="bg-base-cream md:hidden py-8">
        <div className="container mx-auto px-4">
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
              Discover the advanced technology and premium materials that make up your perfect sleep surface.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-6">
            <Image
              src={getMobileLayersImage()}
              alt={`Inside the Layers - ${config.name} ${getVariantLabel(variant)} mattress layers`}
              width={462}
              height={483}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Layer Details - Dropdowns */}
          <div className="bg-white rounded-lg shadow-md p-4 space-y-3 max-w-md mx-auto">
            <h3 className="font-bold text-[#39250E] text-lg mb-4 text-center">Layer Details</h3>

            {getLayers().map((layer, index) => (
              <details
                key={index}
                className={`group ${index < getLayers().length - 1 ? 'border-b border-gray-200 pb-3' : 'pb-3'}`}
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

      {/* Tablet/Desktop: Layers Image */}
      <section className="bg-base-cream hidden md:block">
        <div className="flex items-center justify-center">
          <Image
            src={getLayersImage()}
            alt={`Inside the Layers - ${config.name} ${getVariantLabel(variant)} mattress layers`}
            width={1469}
            height={740}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}
