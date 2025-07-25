'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import LayerVisualization from './LayerVisualization'
import { Product } from '@/data/products'
import { getPlaceholderImage } from '@/lib/placeholder-images'

interface ProductCategoryViewProps {
  product: Product
}

const productHeroImages = {
  'sova': {
    'classic': 'sova-classic-hero-1200x800',
    'premium': 'sova-premium-hero-1200x800',
    'luxury': 'sova-luxury-hero-1200x800'
  },
  'ultima': {
    'classic': 'ultima-classic-hero-1200x800',
    'premium': 'ultima-premium-hero-1200x800',
    'luxury': 'ultima-luxury-hero-1200x800'
  },
  'natura': {
    'natura-1': 'natura-1-hero-1200x800',
    'natura-2': 'natura-2-hero-1200x800'
  },
  'marvel': {
    'marvel': 'marvel-hero-1200x800'
  }
} as const

export default function ProductCategoryView({ product }: ProductCategoryViewProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  const getVariantImage = () => {
    const images = productHeroImages[product.id as keyof typeof productHeroImages]
    const variantKey = selectedVariant.id.split('-').pop() || selectedVariant.id
    return images[variantKey as keyof typeof images] || 'product-grid-sova-600x400'
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-foamico-gray-500 hover:text-foamico-lime">
              Home
            </Link>
          </li>
          <li className="text-foamico-gray-400">/</li>
          <li>
            <Link href="/products" className="text-foamico-gray-500 hover:text-foamico-lime">
              Products
            </Link>
          </li>
          <li className="text-foamico-gray-400">/</li>
          <li className="text-foamico-black font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product Header */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={getPlaceholderImage(getVariantImage() as keyof typeof import('@/lib/placeholder-images').placeholderImages)}
            alt={`${product.name} ${selectedVariant.name} mattress`}
            fill
            className="object-cover"
          />
          {product.warranty === 25 && (
            <div className="absolute top-6 left-6">
              <Badge variant="success" size="medium">
                25 Year Warranty
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-foamico-gray-600">{product.tagline}</p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{product.category}</Badge>
            <Badge variant="primary">Support: {product.supportLevel}</Badge>
          </div>

          <p className="text-lg text-foamico-gray-700 mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foamico-black mb-4">
              Choose Your Variant
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedVariant.id === variant.id
                      ? 'border-foamico-lime bg-foamico-lime-light'
                      : 'border-foamico-gray-200 hover:border-foamico-lime-light'
                  }`}
                >
                  <span className="font-medium text-foamico-black">
                    {variant.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="text-foamico-lime text-xl">✓</span>
                <span className="text-foamico-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/find-store" size="large" className="flex-1">
              Find a Store
            </Button>
            <Button 
              href={`/products/compare?products=${product.id}`} 
              variant="outline" 
              size="large"
              className="flex-1"
            >
              Compare Models
            </Button>
          </div>
        </div>
      </div>

      {/* Layer Visualization */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-foamico-black mb-8 text-center">
          What&apos;s Inside {selectedVariant.name}
        </h2>
        <LayerVisualization layers={selectedVariant.layers} />
      </div>

      {/* Technology Section */}
      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {product.technology.map((tech) => (
          <Card key={tech} className="text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-lg font-semibold text-foamico-black mb-2">
              {tech}
            </h3>
            <p className="text-foamico-gray-600 text-sm">
              Advanced technology for better sleep
            </p>
          </Card>
        ))}
      </div>

      {/* Other Variants */}
      {product.variants.length > 1 && (
        <div className="bg-foamico-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foamico-black mb-6 text-center">
            Explore All {product.name} Variants
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {product.variants.map((variant) => (
              <Card
                key={variant.id}
                className={`cursor-pointer transition-all ${
                  selectedVariant.id === variant.id
                    ? 'ring-2 ring-foamico-lime'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
                <h4 className="text-xl font-semibold text-foamico-black mb-2">
                  {variant.name}
                </h4>
                <p className="text-foamico-gray-600 mb-4">
                  {variant.layers.length} comfort layers
                </p>
                <Button
                  variant={selectedVariant.id === variant.id ? 'primary' : 'outline'}
                  size="small"
                  className="w-full"
                >
                  {selectedVariant.id === variant.id ? 'Selected' : 'Select This'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  )
}