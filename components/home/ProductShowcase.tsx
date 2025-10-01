'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'
import { products } from '@/data/products'

const productImages = {
  'sova': '/sova-premium.png',
  'ultima': '/ultima-classic.png',
  'natura': '/natura-1.png',
  'marvel': '/Marvel.png'
} as const

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section id="product-showcase" className="py-12 md:py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-overline mb-4">Our Collection</p>
            <h2 className="heading-primary mb-4 text-3xl md:text-5xl px-4">
              Engineered for Perfect Sleep
            </h2>
            <div className="divider-line divider-center" />
            <p className="text-body text-light-gray max-w-2xl mx-auto mt-6 px-4">
              Each mattress is meticulously designed using premium materials and innovative foam technology, 
              ensuring exceptional comfort and support for years to come.
            </p>
          </motion.div>
        </div>

        {/* Products Grid - Centered for 2 products */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl px-4 md:px-0">
            {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={`/products/${product.id}`}>
                <div className="card-elegant group cursor-pointer h-full flex flex-col active:scale-[0.98] transition-transform">
                  {/* Product Image */}
                  <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden bg-soft-cream flex-shrink-0">
                    <Image
                      src={productImages[product.id as keyof typeof productImages]}
                      alt={`${product.name} mattress`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    
                    {/* Warranty Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-soft-cream text-black px-2.5 py-1 md:px-3 md:py-1 text-xs font-semibold rounded">
                      UPTO 25 YEARS WARRANTY
                    </div>
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button className="btn-primary bg-white text-dark hover:bg-primary hover:text-white">
                        View Details
                      </button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <h3 className="heading-secondary text-lg md:text-xl mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-light-gray">
                      {product.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}