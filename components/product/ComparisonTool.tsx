'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { products, Product } from '@/data/products'

const productImages = {
  sova: '/sova-premium.png',
  ultima: '/ultima-premium.png',
  natura: '/natura-1.png',
  marvel: '/Marvel.png'
} as const

export default function ComparisonTool() {
  const searchParams = useSearchParams()
  const [selectedProducts, setSelectedProducts] = useState<(Product | null)[]>([null, null, null])
  
  useEffect(() => {
    const productsParam = searchParams.get('products')
    if (productsParam) {
      const productIds = productsParam.split(',')
      const newSelection = productIds.map(id => 
        products.find(p => p.id === id) || null
      )
      // Fill remaining slots with null
      while (newSelection.length < 3) {
        newSelection.push(null)
      }
      setSelectedProducts(newSelection.slice(0, 3))
    }
  }, [searchParams])

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
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-foamico-lime mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )
      default:
        return '-'
    }
  }

  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-4">
            Compare Mattresses
          </h1>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Select up to 3 mattresses to compare features, specifications, and find your perfect match
          </p>
        </div>

        {/* Product Selectors */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[0, 1, 2].map((index) => (
            <Card key={index} className="relative">
              {selectedProducts[index] ? (
                <>
                  <button
                    onClick={() => removeProduct(index)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                  <div className="text-center">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={productImages[selectedProducts[index]!.id as keyof typeof productImages] ?? '/sova-premium.png'}
                        alt={selectedProducts[index]!.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foamico-black mb-2">
                      {selectedProducts[index]!.name}
                    </h3>
                    <p className="text-sm text-foamico-gray-600">
                      {selectedProducts[index]!.tagline}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-foamico-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-foamico-gray-400">+</span>
                  </div>
                  <select
                    className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime"
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
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedProducts.some(p => p !== null) && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-foamico-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-foamico-black">
                    Features
                  </th>
                  {selectedProducts.map((product, index) => (
                    <th key={index} className="text-center py-4 px-4 font-semibold text-foamico-black">
                      {product?.name || '-'}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, featureIndex) => (
                  <tr
                    key={feature}
                    className={`border-b border-foamico-gray-100 ${
                      featureIndex % 2 === 0 ? 'bg-foamico-gray-50' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-medium text-foamico-black">
                      {feature}
                    </td>
                    {selectedProducts.map((product, index) => (
                      <td key={index} className="py-4 px-4 text-center text-foamico-gray-700">
                        {getProductData(product, feature)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-foamico-lime-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foamico-black mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-foamico-gray-700 mb-6 max-w-2xl mx-auto">
            Visit our store to try these mattresses in person and get personalized recommendations from our sleep experts.
          </p>
          <Button href="/find-store" size="large">
            Find Your Nearest Store
          </Button>
        </div>
      </Container>
    </div>
  )
}