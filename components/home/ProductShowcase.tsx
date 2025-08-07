'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { products } from '@/data/products'

const productImages = {
  'sova': '/Sova 1.png',
  'ultima': '/Ultima 1.png',
  'natura': '/Natura 1.png',
  'marvel': '/Marvel.png'
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
          <div className="inline-block bg-[#E1EC9A] text-[#77870D] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Products
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foamico-black mb-4">
            Choose Your Comfort Character
          </h2>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Four collections. Four personalities. One good night's sleep.
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
              <Link href={`/products/${product.id}`} className="block">
                <Card hover className="group cursor-pointer h-[420px] flex flex-col" padding="none">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={productImages[product.id as keyof typeof productImages]}
                      alt={`${product.name} mattress`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="p-6 pb-4 flex-grow">
                      <h3 className="text-xl font-semibold text-foamico-black mb-3">
                        {product.name}
                      </h3>
                      <p className="text-foamico-gray-600 text-sm min-h-[4.5rem] line-clamp-3">
                        {product.tagline}
                      </p>
                    </div>
                    
                    {/* Divider line */}
                    <div className="mx-6 border-t border-gray-200"></div>
                    
                    {/* CTA Section */}
                    <div className="p-6 pt-4">
                      <div className="relative h-10">
                        {/* Default state - just text */}
                        <div className="text-[#8BC34A] font-semibold flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300 h-full">
                          <span>Explore Range</span>
                          <span>→</span>
                        </div>
                        
                        {/* Hover state - full button */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <button className="w-full h-full bg-[#8BC34A] text-white rounded-lg font-semibold hover:bg-[#7CB342] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                            <span>Explore Range</span>
                            <motion.span
                              className="inline-block"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </button>
                        </motion.div>
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