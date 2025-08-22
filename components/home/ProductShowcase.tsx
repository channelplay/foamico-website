'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'
import { products } from '@/data/products'

const productImages = {
  'sova': '/Sova 1.png',
  'ultima': '/Ultima 1.png',
  'natura': '/Natura 1.png',
  'marvel': '/Marvel.png'
} as const

const productLayers = {
  'sova': [
    'Super Plush Luxeknit Fabric',
    'Aeroflex Foam Quilt',
    'Pulse Core Foam',
    'Bondtech Support Foam',
    'Support Foam Quilt'
  ],
  'ultima': [
    'Super Plush Luxeknit Fabric',
    'Memorest Foam Quilt',
    'Pulse Core Foam',
    'Bontech Support Foam',
    'Support Foam Quilt'
  ],
  'natura': [
    'Super Plush Luxeknit Fabric',
    'Aeroflex Foam Quilt',
    'Natural Pincore Latex',
    'Zero G Latex Foam',
    'Soft Foam With Quilt'
  ],
  'marvel': [
    'Super Plush Luxe Knit Fabric',
    'Aeroflex Foam Quilt',
    'Pulse Core Foam',
    'Insignia Velio Foam',
    'Zero G Latex Foam',
    'Soft Foam with Quilt'
  ]
}

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-cyber-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-pink/5 via-transparent to-hud-cyan/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block glass-panel border border-hud-cyan px-6 py-2 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,212,255,0.3)',
                '0 0 40px rgba(0,212,255,0.5)',
                '0 0 20px rgba(0,212,255,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-cyan uppercase tracking-widest">
              SELECT YOUR MATTRESS
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-cyan">CHOOSE YOUR</span>
            <br />
            <span className="neon-text-pink text-5xl lg:text-6xl">SLEEP CLASS</span>
          </h2>
          
          <p className="text-lg font-mono text-hud-cyan/70 max-w-2xl mx-auto">
            Four legendary mattresses. Each with unique abilities. 
            <span className="text-hud-green"> Pick your fighter.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const layers = productLayers[product.id as keyof typeof productLayers]
            const isHovered = hoveredProduct === product.id
            const isSelected = selectedProduct === product.id
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link href={`/products/${product.id}`}>
                  <motion.div 
                    className="relative hologram-card min-h-[550px] cursor-pointer group flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Corner decorations */}
                    <div className="cyber-corner-tl" />
                    <div className="cyber-corner-tr" />
                    <div className="cyber-corner-bl" />
                    <div className="cyber-corner-br" />

                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className={`pulse-dot ${isHovered ? 'bg-hud-green' : 'bg-hud-cyan'}`} />
                    </div>

                    {/* Product Image with hologram effect */}
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent z-10" />
                      <Image
                        src={productImages[product.id as keyof typeof productImages]}
                        alt={`${product.name} mattress`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        style={{
                          filter: isHovered ? 'brightness(1.2) saturate(1.5)' : 'brightness(0.8)',
                        }}
                      />
                      
                      {/* Scan effect on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div
                              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-hud-cyan to-transparent"
                              animate={{
                                top: ['-4px', '100%'],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3 flex-grow flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-cyber text-hud-cyan">
                          {product.name.toUpperCase()}
                        </h3>
                      </div>

                      <div className="min-h-[60px]">
                        <p className="text-sm font-mono text-hud-cyan/60 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Mattress Layers */}
                      <div className="space-y-1 pt-2 min-h-[140px]">
                        <div className="text-[10px] font-mono text-hud-cyan/60 mb-2 uppercase tracking-wider">
                          Layers of Comfort
                        </div>
                        {layers.map((layer, layerIndex) => (
                          <motion.div 
                            key={layer}
                            className="flex items-center gap-2 py-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                            transition={{ delay: layerIndex * 0.05 }}
                          >
                            <span className="text-hud-green text-[8px]">▸</span>
                            <span className="text-[10px] font-mono text-hud-cyan/80 leading-tight">
                              {layer}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="pt-4 mt-auto border-t border-hud-cyan/20">
                        <motion.button
                          className="w-full hud-button py-3 text-xs"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span>▶</span>
                            SELECT
                            <span className="opacity-60">[{index + 1}]</span>
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            background: 'radial-gradient(circle at center, rgba(0,212,255,0.1) 0%, transparent 70%)',
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}