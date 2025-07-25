'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { products } from '@/data/products'
import { getPlaceholderImage } from '@/lib/placeholder-images'

const productImages = {
  'sova': 'product-grid-sova-600x400',
  'ultima': 'product-grid-ultima-600x400',
  'natura': 'product-grid-natura-600x400',
  'marvel': 'product-grid-marvel-600x400'
} as const

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-foamico-gray-50">
      <Container>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foamico-black mb-4">
            Our Premium Collection
          </h2>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Four distinct ranges designed to match your unique sleep preferences and body type
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <Card hover className="h-full group cursor-pointer" padding="none">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getPlaceholderImage(productImages[product.id as keyof typeof productImages])}
                    alt={`${product.name} mattress`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">{product.category}</Badge>
                  </div>
                  {product.warranty === 25 && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="success">25 Year Warranty</Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foamico-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-foamico-gray-600 mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-foamico-lime font-medium group-hover:underline">
                      Explore Range →
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-foamico-gray-500">Support:</span>
                      <Badge size="small" variant="secondary">
                        {product.supportLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-foamico-lime hover:text-foamico-lime-dark font-medium transition-colors"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}