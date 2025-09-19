import Image from 'next/image'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { products } from '@/data/products'
import { getPlaceholderImage } from '@/lib/placeholder-images'

const productImages = {
  'sova': 'product-grid-sova-600x400',
  'ultima': 'product-grid-ultima-600x400',
  'natura': 'product-grid-natura-600x400',
  'marvel': 'product-grid-marvel-600x400'
} as const

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {products.map((product) => (
        <Card key={product.id} padding="none" className="overflow-hidden">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Product Image */}
            <div className="relative h-64 lg:h-full min-h-[300px]">
              <Image
                src={getPlaceholderImage(productImages[product.id as keyof typeof productImages])}
                alt={`${product.name} mattress`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {product.warranty === 25 && (
                <div className="absolute top-4 left-4">
                  <Badge variant="success" size="medium">
                    25 Year Warranty
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6 lg:p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foamico-black mb-1">
                      {product.name}
                    </h3>
                    <p className="text-foamico-gray-500">{product.category}</p>
                  </div>
                  <Badge variant="secondary" size="small">
                    {product.supportLevel}
                  </Badge>
                </div>

                <p className="text-foamico-gray-600 mb-6">
                  {product.description}
                </p>


                {/* Variants */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foamico-black mb-3">
                    Available Variants:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <span
                        key={variant.id}
                        className="px-3 py-1 bg-foamico-gray-100 text-foamico-gray-700 rounded-full text-sm"
                      >
                        {variant.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  href={`/products/${product.id}`}
                  variant="primary"
                  size="small"
                  className="flex-1"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}