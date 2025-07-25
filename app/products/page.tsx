import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ProductGrid from '@/components/product/ProductGrid'

export const metadata: Metadata = {
  title: 'Products | Foamico - Luxury Mattresses',
  description: 'Explore our premium collection of luxury mattresses. From firm support to plush comfort, find your perfect sleep solution.',
}

export default function ProductsPage() {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-4">
            Our Mattress Collection
          </h1>
          <p className="text-lg text-foamico-gray-600 max-w-3xl mx-auto">
            Four distinct ranges designed with a perfect blend of natural materials, 
            European craftsmanship, and technology tailored for Indian body types.
          </p>
        </div>

        {/* Features Banner */}
        <div className="bg-foamico-lime-light rounded-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl mb-2 block">🛡️</span>
              <h3 className="font-semibold text-foamico-black">25 Year Warranty</h3>
              <p className="text-sm text-foamico-gray-600 mt-1">On select products</p>
            </div>
            <div>
              <span className="text-3xl mb-2 block">🌿</span>
              <h3 className="font-semibold text-foamico-black">100% Natural Latex</h3>
              <p className="text-sm text-foamico-gray-600 mt-1">Eco-friendly materials</p>
            </div>
            <div>
              <span className="text-3xl mb-2 block">🔬</span>
              <h3 className="font-semibold text-foamico-black">OrthoSense® Tech</h3>
              <p className="text-sm text-foamico-gray-600 mt-1">For Indian body types</p>
            </div>
            <div>
              <span className="text-3xl mb-2 block">🇩🇪</span>
              <h3 className="font-semibold text-foamico-black">German Engineering</h3>
              <p className="text-sm text-foamico-gray-600 mt-1">Eurotop stitching</p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />

        {/* Help Section */}
        <div className="mt-16 bg-foamico-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foamico-black mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-foamico-gray-600 mb-6 max-w-2xl mx-auto">
            Our sleep experts are here to help you find the perfect mattress for your needs. 
            Visit a store or use our comparison tool to make the right choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products/compare" variant="primary">
              Compare Products
            </Button>
            <Button href="/find-store" variant="outline">
              Visit a Store
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

import Button from '@/components/ui/Button'