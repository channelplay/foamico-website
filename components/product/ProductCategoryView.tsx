'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import LayerVisualization from './LayerVisualization'
import AppleStyleVariantSelector from './AppleStyleVariantSelector'
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
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  // Initialize selectedVariant based on URL parameter
  const getInitialVariant = () => {
    const variantParam = searchParams.get('variant')
    if (variantParam) {
      // Find variant that ends with the variant parameter (e.g., 'classic' matches 'sova-classic')
      const foundVariant = product.variants.find(v => 
        v.id.toLowerCase().endsWith(`-${variantParam.toLowerCase()}`) ||
        v.id.toLowerCase() === variantParam.toLowerCase()
      )
      if (foundVariant) return foundVariant
    }
    return product.variants[0]
  }
  
  const [selectedVariant, setSelectedVariant] = useState(getInitialVariant())

  // Update selectedVariant when URL changes
  useEffect(() => {
    const variant = getInitialVariant()
    setSelectedVariant(variant)
  }, [searchParams, product.variants])

  // Update URL when variant changes
  const updateVariantInUrl = (variant: typeof selectedVariant) => {
    const variantSlug = variant.id.split('-').pop() || variant.id
    const params = new URLSearchParams(searchParams.toString())
    params.set('variant', variantSlug)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

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
          </div>

          <p className="text-lg text-foamico-gray-700 mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <AppleStyleVariantSelector 
              variants={product.variants.map(v => ({
                id: v.id,
                name: v.name,
                size: v.size || 'Standard',
                thickness: v.thickness || '8 inches',
                inStock: true
              }))}
              onSelect={(variant) => {
                const productVariant = product.variants.find(v => v.id === variant.id)
                if (productVariant) {
                  setSelectedVariant(productVariant)
                  updateVariantInUrl(productVariant)
                }
              }}
            />
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
                onClick={() => {
                  setSelectedVariant(variant)
                  updateVariantInUrl(variant)
                }}
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