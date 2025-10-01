'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import LayerVisualization from './LayerVisualization'
import { Product } from '@/data/products'

interface ProductCategoryViewProps {
  product: Product
}

const productHeroImages = {
  sova: {
    'sova-classic': '/sova-classic.png',
    'sova-premium': '/sova-premium.png',
    'sova-luxury': '/sova-luxury.png'
  },
  ultima: {
    'ultima-classic': '/ultima-classic.png',
    'ultima-premium': '/ultima-premium.png',
    'ultima-luxury': '/ultima-luxury.png'
  },
  natura: {
    'natura-1': '/natura-1.png',
    'natura-2': '/natura-2.png'
  },
  marvel: {
    marvel: '/Marvel.png'
  }
} as const

export default function ProductCategoryView({ product }: ProductCategoryViewProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const resolveVariant = useCallback((variantParam: string | null) => {
    if (variantParam) {
      const normalized = variantParam.toLowerCase()
      const foundVariant = product.variants.find(v => {
        const variantId = v.id.toLowerCase()
        return variantId.endsWith(`-${normalized}`) || variantId === normalized
      })
      if (foundVariant) {
        return foundVariant
      }
    }
    return product.variants[0]
  }, [product.variants])
  
  const [selectedVariant, setSelectedVariant] = useState(() => {
    const variantParam = searchParams.get('variant')
    return resolveVariant(variantParam)
  })

  // Update selectedVariant when URL changes
  useEffect(() => {
    const variantParam = searchParams.get('variant')
    const resolvedVariant = resolveVariant(variantParam)
    setSelectedVariant(prev => (prev.id === resolvedVariant.id ? prev : resolvedVariant))
  }, [resolveVariant, searchParams])

  // Update URL when variant changes
  const updateVariantInUrl = (variant: typeof selectedVariant) => {
    const variantSlug = variant.id.split('-').pop() || variant.id
    const params = new URLSearchParams(searchParams.toString())
    params.set('variant', variantSlug)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const getVariantImage = () => {
    const images = productHeroImages[product.id as keyof typeof productHeroImages]
    const variantKey = selectedVariant.id as keyof typeof images
    return images?.[variantKey] ?? '/sova-premium.png'
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
      <div className="grid gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-start mb-16">
        {/* Product Image */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            key={selectedVariant.id}
            src={getVariantImage()}
            alt={`${product.name} ${selectedVariant.name} mattress`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={selectedVariant.id === product.variants[0].id}
          />
          {product.warranty === 25 && (
            <div className="absolute top-6 left-6">
              <Badge variant="success" size="medium">
                Upto 25 Years Warranty
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl lg:text-[3.25rem] font-bold text-foamico-black mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-foamico-gray-600 max-w-xl">{product.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary" size="medium">
              {product.category}
            </Badge>
          </div>

          <p className="text-base text-foamico-gray-700 leading-relaxed max-w-2xl">
            {product.description}
          </p>

          <div className="bg-white rounded-2xl border border-foamico-gray-100 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-foamico-gray-500 uppercase tracking-[0.18em]">
                  Choose Your Variant
                </h3>
                <p className="text-sm text-foamico-gray-600">
                  Select to view layers and specifications
                </p>
              </div>
              <Button href={`/products/compare?products=${product.id}`} variant="outline" size="small">
                Compare Variants
              </Button>
            </div>

            <div className="grid gap-3">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant.id === variant.id
                return (
                  <button
                    key={variant.id}
                    onClick={() => {
                      setSelectedVariant(variant)
                      updateVariantInUrl(variant)
                    }}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                      isSelected
                        ? 'border-foamico-lime bg-foamico-lime-light shadow-sm'
                        : 'border-foamico-gray-100 hover:border-foamico-lime-light'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold text-foamico-black">{variant.name}</span>
                      <span className="text-xs text-foamico-gray-500">
                        {variant.size} • {variant.thickness}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {isSelected && (
                        <span className="text-xs font-semibold text-foamico-lime">Selected</span>
                      )}
                      <span className="text-sm text-foamico-gray-500">View Details →</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 rounded-xl border border-foamico-gray-100 bg-white px-4 py-3 text-sm text-foamico-gray-600">
                <span className="text-foamico-lime text-lg">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/find-store" size="large" className="flex-1">
              Find a Store
            </Button>
            <Button href={`/products/compare?products=${product.id}`} variant="outline" size="large" className="flex-1">
              Talk to an Expert
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