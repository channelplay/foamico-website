'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'
import Container from '@/components/ui/Container'

export default function NaturaVariantsSection() {
  const product = getProductByCategory('natura')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  if (!product) return null

  const toggleSection = (variantId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [variantId]: !prev[variantId]
    }))
  }

  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('comparison-section')
    if (comparisonSection) {
      comparisonSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const variants = [
    {
      id: 'natura1',
      name: 'Natura 1.0',
      image: '/Natura 1.png',
      imagePosition: 'left',
      variant: product.variants[0]
    },
    {
      id: 'natura2',
      name: 'Natura 2.0',
      image: '/Natura 2.png',
      imagePosition: 'right',
      variant: product.variants[1]
    }
  ]

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Eco Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-green/5 via-transparent to-hud-cyan/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Natural data patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="ecoGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="none" stroke="#00FF88" strokeWidth="0.1" />
              <circle cx="4" cy="4" r="0.3" fill="#00FF88" opacity="0.4" />
              <path d="M2,2 L6,6 M6,2 L2,6" stroke="#00FF88" strokeWidth="0.1" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecoGrid)" />
        </svg>
      </div>
      
      <Container className="relative z-10">
        {/* Main Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block glass-panel border border-hud-green px-6 py-2 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,255,136,0.3)',
                '0 0 40px rgba(0,255,136,0.5)',
                '0 0 20px rgba(0,255,136,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-green uppercase tracking-widest">
              ECO_VARIANT_MATRIX
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold">
            <span className="neon-text-green">CHOOSE YOUR</span>
            <br />
            <span className="neon-text-cyan text-5xl lg:text-6xl">NATURA CONFIG</span>
          </h2>
        </motion.div>
        
        {variants.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="mb-32 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            {/* Content Grid */}
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${
              item.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
            }`}>
              
              {/* Image Side */}
              <div className={`relative ${item.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative hologram-card h-[500px]">
                  {/* Corner decorations */}
                  <div className="cyber-corner-tl" />
                  <div className="cyber-corner-tr" />
                  <div className="cyber-corner-bl" />
                  <div className="cyber-corner-br" />
                  
                  {/* Eco Scan Effect */}
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-hud-green to-transparent z-10"
                    animate={{
                      top: ['-4px', '100%'],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay: index * 0.5
                    }}
                  />
                  
                  <Image
                    src={item.image}
                    alt={`${item.name} Mattress`}
                    fill
                    className="object-cover rounded-lg"
                    style={{
                      filter: 'brightness(0.9) saturate(1.1) hue-rotate(5deg)',
                    }}
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="pulse-dot bg-hud-green" />
                  </div>
                  
                  {/* Variant Label */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="glass-panel border border-hud-green/50 px-3 py-2">
                      <span className="text-xs font-mono text-hud-green">ECO_{item.id.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Layers Side */}
              <div className={`space-y-4 ${item.imagePosition === 'right' ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <motion.div 
                      className="inline-block glass-panel border border-hud-green/30 px-3 py-1 mb-2"
                      animate={{ borderColor: ['rgba(0,255,136,0.3)', 'rgba(0,212,255,0.3)', 'rgba(0,255,136,0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-[10px] font-mono text-hud-green uppercase tracking-widest">
                        NATURA_ECO_CLASS
                      </span>
                    </motion.div>
                    <h3 className="text-2xl font-cyber text-hud-green">
                      {item.name.toUpperCase()}
                    </h3>
                  </div>
                  <motion.button 
                    onClick={scrollToComparison}
                    className="hud-button hud-button-green px-4 py-2 text-xs"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <span>◈</span>
                      COMPARE
                      <span className="opacity-60">[C]</span>
                    </span>
                  </motion.button>
                </div>
                
                {item.variant.layers.map((layer, layerIndex) => (
                  <motion.div
                    key={layerIndex}
                    className="hologram-card mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: layerIndex * 0.1 }}
                  >
                    <motion.button
                      onClick={() => toggleSection(`${item.id}-${layerIndex}`)}
                      className="w-full px-6 py-4 flex items-center justify-between glass-panel hover:bg-hud-green/5 transition-colors border border-hud-green/20 hover:border-hud-green/40"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-10 h-10 glass-panel border border-hud-green/50 rounded-full flex items-center justify-center text-hud-green font-mono font-bold"
                          animate={{ 
                            boxShadow: expandedSections[`${item.id}-${layerIndex}`] 
                              ? ['0 0 10px rgba(0,255,136,0.5)', '0 0 20px rgba(0,255,136,0.8)', '0 0 10px rgba(0,255,136,0.5)']
                              : '0 0 5px rgba(0,255,136,0.3)'
                          }}
                          transition={{ duration: 1, repeat: expandedSections[`${item.id}-${layerIndex}`] ? Infinity : 0 }}
                        >
                          {String(layerIndex + 1).padStart(2, '0')}
                        </motion.div>
                        <div className="text-left">
                          <h4 className="font-mono text-hud-cyan text-sm uppercase tracking-wider">{layer.name}</h4>
                          <div className="text-[10px] font-mono text-hud-green/60 mt-1">
                            LAYER_{String(layerIndex + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center gap-2"
                        animate={{ rotate: expandedSections[`${item.id}-${layerIndex}`] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xs font-mono text-hud-cyan/60">
                          {expandedSections[`${item.id}-${layerIndex}`] ? 'COLLAPSE' : 'EXPAND'}
                        </span>
                        <span className="text-hud-cyan text-sm">▼</span>
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {expandedSections[`${item.id}-${layerIndex}`] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 pt-4 bg-gradient-to-r from-hud-green/5 to-hud-cyan/5 border-t border-hud-green/20">
                            <div className="mb-3">
                              <span className="text-[10px] font-mono text-hud-green/60 uppercase tracking-widest">ECO LAYER SPECIFICATION</span>
                            </div>
                            <p className="text-sm font-mono text-hud-cyan/80 leading-relaxed mb-3">{layer.description}</p>
                            {layer.thickness && (
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-hud-orange/60 uppercase">THICKNESS:</span>
                                <span className="text-xs font-mono text-hud-orange">{layer.thickness}</span>
                              </div>
                            )}
                            
                            {/* Eco Progress Bar Animation */}
                            <motion.div 
                              className="mt-3 h-1 bg-cyber-dark rounded-full overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <motion.div 
                                className="h-full bg-gradient-to-r from-hud-green to-hud-cyan"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, delay: 0.3 }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  )
}