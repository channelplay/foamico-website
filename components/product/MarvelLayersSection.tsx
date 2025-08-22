'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductByCategory } from '@/data/products'
import Container from '@/components/ui/Container'

export default function MarvelLayersSection() {
  const product = getProductByCategory('marvel')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  if (!product) return null

  const variant = product.variants[0] // Marvel has only one variant

  const toggleSection = (layerIndex: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [layerIndex]: !prev[layerIndex]
    }))
  }

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-orange/5 via-transparent to-hud-cyan/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Circuit patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L10,10 L0,10" fill="none" stroke="#FF6600" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1" fill="#FF6600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
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
            className="inline-block glass-panel border border-hud-orange px-6 py-2 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,102,0,0.3)',
                '0 0 40px rgba(255,102,0,0.5)',
                '0 0 20px rgba(255,102,0,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-orange uppercase tracking-widest">
              TECH BLUEPRINT INTERFACE
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold">
            <span className="text-hud-orange" style={{ textShadow: '0 0 20px rgba(255,102,0,0.8)' }}>MARVEL</span>
            <br />
            <span className="neon-text-cyan text-5xl lg:text-6xl">TECH LAYERS</span>
          </h2>
          
          <motion.p 
            className="text-lg font-mono text-hud-cyan/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-hud-orange font-bold">6 LAYERS</span> of advanced comfort engineering with
            <span className="text-hud-orange"> CNC CUT TECHNOLOGY</span>
          </motion.p>
        </motion.div>
        
        {/* Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative hologram-card h-[500px]">
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />
              
              {/* Multi-directional Scan Effects */}
              <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-hud-orange to-transparent z-10"
                animate={{
                  top: ['-4px', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
              <motion.div
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-hud-cyan to-transparent z-10"
                animate={{
                  left: ['-4px', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.5
                }}
              />
              
              <Image
                src="/Marvel.png"
                alt="Marvel Mattress"
                fill
                className="object-cover rounded-lg"
                style={{
                  filter: 'brightness(0.9) saturate(1.3) hue-rotate(15deg)',
                }}
              />
              
              {/* Tech Status Indicators */}
              <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                <div className="pulse-dot bg-hud-orange" />
                <div className="pulse-dot bg-hud-cyan" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Technology Badge */}
              <motion.div 
                className="absolute bottom-6 left-6 z-20 glass-panel border border-hud-orange/50 px-4 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-hud-orange text-xs">◆</span>
                  <p className="text-sm font-mono font-bold text-hud-orange">CNC CUT TECH</p>
                </div>
                <p className="text-xs font-mono text-hud-cyan/80">Enhanced airflow & cooling</p>
                <div className="mt-2 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-1 h-1 bg-hud-orange rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Expandable Layers Side */}
          <div className="space-y-4">
            <div className="mb-6">
              <motion.div 
                className="inline-block glass-panel border border-hud-orange/30 px-3 py-1 mb-2"
                animate={{ borderColor: ['rgba(255,102,0,0.3)', 'rgba(0,212,255,0.3)', 'rgba(255,102,0,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[10px] font-mono text-hud-orange uppercase tracking-widest">
                  ENGINEERING_BLUEPRINT
                </span>
              </motion.div>
              <h3 className="text-2xl font-cyber text-hud-orange">
                LAYER BREAKDOWN
              </h3>
              <div className="text-xs font-mono text-hud-cyan/60 mt-1">
                [{variant.layers.length} COMPONENTS DETECTED]
              </div>
            </div>
            
            {variant.layers.map((layer, layerIndex) => (
              <motion.div
                key={layerIndex}
                className="hologram-card mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: layerIndex * 0.1 }}
              >
                <motion.button
                  onClick={() => toggleSection(`layer-${layerIndex}`)}
                  className="w-full px-6 py-4 flex items-center justify-between glass-panel hover:bg-hud-orange/5 transition-colors border border-hud-orange/20 hover:border-hud-orange/40"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 glass-panel border border-hud-orange/50 rounded-lg flex items-center justify-center text-hud-orange font-mono font-bold relative overflow-hidden"
                      animate={{ 
                        boxShadow: expandedSections[`layer-${layerIndex}`] 
                          ? ['0 0 10px rgba(255,102,0,0.5)', '0 0 20px rgba(255,102,0,0.8)', '0 0 10px rgba(255,102,0,0.5)']
                          : '0 0 5px rgba(255,102,0,0.3)'
                      }}
                      transition={{ duration: 1, repeat: expandedSections[`layer-${layerIndex}`] ? Infinity : 0 }}
                    >
                      {/* Circuit pattern in background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-hud-orange/10 to-transparent" />
                      <span className="relative z-10">{String(layerIndex + 1).padStart(2, '0')}</span>
                    </motion.div>
                    <div className="text-left">
                      <h4 className="font-mono text-hud-cyan text-sm uppercase tracking-wider">{layer.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] font-mono text-hud-orange/60 uppercase">COMPONENT_{String(layerIndex + 1).padStart(2, '0')}</span>
                        <div className="w-2 h-1 bg-hud-orange/60 rounded-full" />
                        <span className="text-[9px] font-mono text-hud-green/60">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center gap-3"
                    animate={{ rotate: expandedSections[`layer-${layerIndex}`] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono text-hud-cyan/60">
                        {expandedSections[`layer-${layerIndex}`] ? 'COLLAPSE' : 'ANALYZE'}
                      </span>
                      <div className="text-[9px] font-mono text-hud-orange/50">
                        {expandedSections[`layer-${layerIndex}`] ? '[ESC]' : '[ENTER]'}
                      </div>
                    </div>
                    <span className="text-hud-cyan text-sm">▼</span>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSections[`layer-${layerIndex}`] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-4 bg-gradient-to-r from-hud-orange/5 to-hud-cyan/5 border-t border-hud-orange/20">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="text-[10px] font-mono text-hud-orange/60 uppercase tracking-widest">COMPONENT ANALYSIS</span>
                          <motion.div 
                            className="flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {[...Array(3)].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="w-1 h-1 bg-hud-orange rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                              />
                            ))}
                          </motion.div>
                        </div>
                        <p className="text-sm font-mono text-hud-cyan/80 leading-relaxed mb-4">{layer.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {layer.thickness && (
                            <div className="glass-panel p-2">
                              <span className="text-[9px] font-mono text-hud-orange/60 uppercase block">THICKNESS</span>
                              <span className="text-xs font-mono text-hud-orange">{layer.thickness}</span>
                            </div>
                          )}
                          <div className="glass-panel p-2">
                            <span className="text-[9px] font-mono text-hud-orange/60 uppercase block">STATUS</span>
                            <span className="text-xs font-mono text-hud-green">OPERATIONAL</span>
                          </div>
                        </div>
                        
                        {/* Tech readout animation */}
                        <motion.div 
                          className="mt-3 h-1 bg-cyber-dark rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-hud-orange via-hud-cyan to-hud-orange"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Key Technologies */}
            <motion.div 
              className="mt-8 hologram-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />
              
              <div className="bg-gradient-to-r from-hud-orange/10 to-hud-cyan/10 px-4 py-2 mb-4 border-b border-hud-orange/20">
                <span className="text-xs font-mono text-hud-orange uppercase tracking-widest">
                  KEY_TECHNOLOGIES
                </span>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Insignia Velio Foam', desc: 'CNC Cut for maximum airflow', icon: '◈' },
                  { name: 'Zero G Latex', desc: 'Natural support and durability', icon: '◉' },
                  { name: 'Pulse Core Technology', desc: 'Adaptive body contouring', icon: '◆' }
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    className="flex items-start gap-4 glass-panel p-3 border border-hud-orange/20 hover:border-hud-orange/40 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.span 
                      className="text-hud-orange text-lg mt-0.5"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      {tech.icon}
                    </motion.span>
                    <div className="flex-1">
                      <p className="font-mono font-bold text-hud-cyan text-sm">{tech.name}</p>
                      <p className="text-xs font-mono text-hud-cyan/70 mt-1">{tech.desc}</p>
                      
                      {/* Mini progress bar */}
                      <motion.div 
                        className="mt-2 h-0.5 bg-cyber-dark rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <motion.div 
                          className="h-full bg-gradient-to-r from-hud-orange to-hud-cyan"
                          initial={{ width: 0 }}
                          animate={{ width: `${90 + index * 3}%` }}
                          transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}