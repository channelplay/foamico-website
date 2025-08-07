'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Variant {
  id: string
  name: string
  size: string
  price: number
  originalPrice?: number
  thickness: string
  firmness: string
  inStock: boolean
}

interface AppleStyleVariantSelectorProps {
  variants: Variant[]
  onSelect: (variant: Variant) => void
}

export default function AppleStyleVariantSelector({ variants, onSelect }: AppleStyleVariantSelectorProps) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  const handleSelect = (variant: Variant) => {
    setSelectedVariant(variant)
    onSelect(variant)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose Your Variant</h3>
      
      <div className="grid gap-3">
        {variants.map((variant) => {
          const isSelected = selectedVariant.id === variant.id
          const discount = variant.originalPrice 
            ? Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100)
            : 0

          return (
            <motion.button
              key={variant.id}
              onClick={() => handleSelect(variant)}
              className={`
                relative p-4 rounded-xl border-2 text-left transition-all
                ${isSelected 
                  ? 'border-[#8BC34A] bg-[#8BC34A]/5' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
                }
              `}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {variant.name}
                    </h4>
                    {isSelected && (
                      <span className="px-2 py-1 bg-[#8BC34A] text-white text-xs font-semibold rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {variant.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {variant.thickness}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                      {variant.firmness}
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(variant.price)}
                    </span>
                  </div>
                  {variant.originalPrice && variant.originalPrice > variant.price && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(variant.originalPrice)}
                      </span>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                        {discount}% OFF
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  className="absolute -right-1 -top-1 w-6 h-6 bg-[#8BC34A] rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
      
      {/* Selected variant details */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Selected Configuration:</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">{selectedVariant.name}</p>
            <p className="text-sm text-gray-600">
              {selectedVariant.size} • {selectedVariant.thickness} • {selectedVariant.firmness}
            </p>
          </div>
          <p className="text-xl font-bold text-[#8BC34A]">
            {formatPrice(selectedVariant.price)}
          </p>
        </div>
      </div>
    </div>
  )
}