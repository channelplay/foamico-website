'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const variants = [
  { id: 'natura1', name: 'Natura 1.0', selected: true },
  { id: 'natura2', name: 'Natura 2.0', selected: false }
]

const features = [
  { icon: '◈', text: '100% Natural Latex', color: 'hud-green' },
  { icon: '◉', text: 'Eco-friendly', color: 'hud-green' },
  { icon: '◆', text: 'Anti-allergy', color: 'hud-cyan' },
  { icon: '▣', text: 'Temperature Regulation', color: 'hud-orange' },
  { icon: '◎', text: 'Breathable', color: 'hud-cyan' },
  { icon: '◈', text: 'Motion Control', color: 'hud-green' }
]

export default function NaturaHeroSection() {
  const [selectedVariant, setSelectedVariant] = useState('natura1')

  // Map variants to their respective images
  const variantImages = {
    'natura1': '/Natura 1.png',
    'natura2': '/Natura 2.png'
  }

  return (
    <section className="min-h-screen bg-cyber-black relative overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-green/5 via-transparent to-hud-cyan/5"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative hologram-card h-[600px]">
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />
              
              {/* Warranty Badge */}
              <div className="absolute top-6 left-6 z-20">
                <motion.div 
                  className="glass-panel border border-hud-green px-4 py-2"
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
                    25 YEAR PROTOCOL
                  </span>
                </motion.div>
              </div>
              
              {/* Scan Effect */}
              <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-hud-green to-transparent z-10"
                animate={{
                  top: ['-4px', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
              
              {/* Product Image - Full frame */}
              <Image
                src={variantImages[selectedVariant as keyof typeof variantImages]}
                alt={`Natura ${selectedVariant === 'natura1' ? '1.0' : '2.0'} Mattress`}
                fill
                className="object-cover rounded-lg"
                priority
                style={{
                  filter: 'brightness(0.9) saturate(1.2)',
                }}
              />
              
              {/* Status Indicator */}
              <div className="absolute top-6 right-6 z-20">
                <div className="pulse-dot bg-hud-green" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title and Description */}
            <div>
              <motion.div 
                className="inline-block glass-panel border border-hud-green px-4 py-2 mb-6"
                animate={{
                  borderColor: ['rgba(0,255,136,0.5)', 'rgba(0,212,255,0.5)', 'rgba(0,255,136,0.5)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-mono text-hud-green uppercase tracking-widest">
                  SLEEP CLASS: NATURA
                </span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-cyber font-bold mb-6">
                <span className="neon-text-green">NATURA</span>
              </h1>
              <p className="text-lg font-mono text-hud-cyan/70 leading-relaxed">
                Earthy, breathable and foam free. For those who like their sleep clean and quiet with 
                <span className="text-hud-green"> NATURAL PINCORE LATEX</span>.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="hologram-card">
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />
              
              <div className="bg-gradient-to-r from-hud-green/10 to-hud-cyan/10 px-4 py-2 mb-4 border-b border-hud-green/20">
                <span className="text-xs font-mono text-hud-green uppercase tracking-widest">
                  SELECT VARIANT
                </span>
              </div>
              
              <div className="flex gap-3">
                {variants.map((variant, index) => (
                  <motion.button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative px-4 py-3 hud-border text-sm transition-all flex-1
                      ${selectedVariant === variant.id
                        ? 'border-hud-green bg-hud-green/10'
                        : 'border-hud-cyan/30 bg-cyber-dark/50 hover:border-hud-cyan'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className={`font-mono font-medium ${
                      selectedVariant === variant.id ? 'text-hud-green' : 'text-hud-cyan'
                    }`}>
                      {variant.name}
                    </span>
                    {selectedVariant === variant.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 z-10"
                      >
                        <div className="pulse-dot bg-hud-green" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-3 border-l-2 border-hud-green/50"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-${feature.color} text-lg`}>{feature.icon}</span>
                    <span className="text-sm font-mono text-hud-cyan">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - Centered */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="glass-panel px-4 py-2 border border-hud-green">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-hud-green">SCROLL</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-hud-green">▼</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}