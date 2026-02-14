'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { products, Product } from '@/data/products'

const productImages: Record<string, string> = {
  resto: '/Resto.png',
  sova: '/Sova.png',
  luma: '/Luma.png',
  ultima: '/Ultima.png',
  natura: '/Natura.png',
  riva: '/Riva.png',
}

export default function ComparisonTool() {
  const [selectedProducts, setSelectedProducts] = useState<(Product | null)[]>([null, null, null])

  const handleProductSelect = (index: number, productId: string) => {
    const newSelection = [...selectedProducts]
    newSelection[index] = products.find(p => p.id === productId) || null
    setSelectedProducts(newSelection)
  }

  const removeProduct = (index: number) => {
    const newSelection = [...selectedProducts]
    newSelection[index] = null
    setSelectedProducts(newSelection)
  }

  const comparisonFeatures = [
    'Category',
    'Warranty',
    'Number of Layers',
    'Top Layer',
    'Core Technology',
    'Best For',
    'Key Features'
  ]

  const getProductData = (product: Product | null, feature: string) => {
    if (!product) return '-'

    switch (feature) {
      case 'Category':
        return product.category
      case 'Warranty':
        return `${product.warranty} Years`
      case 'Number of Layers':
        return `${product.variants[0].layers.length} Layers`
      case 'Top Layer':
        return product.variants[0].layers[0].name
      case 'Core Technology':
        return product.technology.join(', ')
      case 'Best For':
        return product.tagline
      case 'Key Features':
        return (
          <ul className="text-sm space-y-1">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-[#AD702A] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )
      default:
        return '-'
    }
  }

  return (
    <section className="min-h-screen py-16 md:py-24 font-fira" style={{ backgroundColor: '#F5F3E9' }}>
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#AD702A] font-semibold">
              Compare
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#39250E] mb-4 md:mb-6 px-4">
            Compare Mattresses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#39250E]/80 max-w-2xl mx-auto px-4">
            Select up to 3 mattresses to compare features, specifications, and find your perfect match
          </p>
        </motion.div>

        {/* Product Selectors */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#AD702A]/10"
            >
              {selectedProducts[index] ? (
                <>
                  <button
                    onClick={() => removeProduct(index)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-full flex items-center justify-center transition-colors border border-red-200"
                  >
                    ×
                  </button>
                  <div className="text-center">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={productImages[selectedProducts[index]!.id] ?? '/Resto.png'}
                        alt={selectedProducts[index]!.name}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#39250E] mb-2">
                      {selectedProducts[index]!.name}
                    </h3>
                    <p className="text-sm text-[#39250E]/70">
                      {selectedProducts[index]!.tagline}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-[#AD702A]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-[#AD702A]/40">+</span>
                  </div>
                  <select
                    className="w-full px-4 py-3 border border-[#AD702A]/20 rounded-xl bg-white/80 text-[#39250E] focus:outline-none focus:ring-2 focus:ring-[#AD702A]/30 text-sm md:text-base"
                    onChange={(e) => handleProductSelect(index, e.target.value)}
                    value=""
                  >
                    <option value="">Select a mattress</option>
                    {products
                      .filter(p => !selectedProducts.some(sp => sp?.id === p.id))
                      .map(product => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        {selectedProducts.some(p => p !== null) && (
          <motion.div
            className="overflow-x-auto bg-white/60 backdrop-blur-sm rounded-2xl border border-[#AD702A]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#AD702A]/20">
                  <th className="text-left py-4 md:py-5 px-4 md:px-6 font-bold text-[#39250E] text-sm md:text-base">
                    Features
                  </th>
                  {selectedProducts.map((product, index) => (
                    <th key={index} className="text-center py-4 md:py-5 px-4 md:px-6 font-bold text-[#39250E] text-sm md:text-base">
                      {product?.name || '-'}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, featureIndex) => (
                  <tr
                    key={feature}
                    className={`border-b border-[#AD702A]/10 ${
                      featureIndex % 2 === 0 ? 'bg-[#AD702A]/[0.03]' : ''
                    } hover:bg-[#AD702A]/[0.06] transition-colors`}
                  >
                    <td className="py-4 md:py-5 px-4 md:px-6 font-semibold text-[#39250E] text-xs md:text-sm">
                      {feature}
                    </td>
                    {selectedProducts.map((product, index) => (
                      <td key={index} className="py-4 md:py-5 px-4 md:px-6 text-center text-[#39250E]/80 text-xs md:text-sm">
                        {getProductData(product, feature)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* CTA Banner */}
        <motion.div
          className="mt-12 md:mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-[#AD702A]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#39250E] mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-base md:text-lg text-[#39250E]/70 mb-8 max-w-2xl mx-auto">
            Visit our store to try these mattresses in person and get personalized recommendations from our sleep experts.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#4C6462] text-white border-none font-semibold px-8 py-3 lg:px-12 lg:py-4 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}
