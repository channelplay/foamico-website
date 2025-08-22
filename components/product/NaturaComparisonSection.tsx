'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'

export default function NaturaComparisonSection() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)
  const comparisonData = [
    {
      feature: 'Top Fabric',
      natura1: { text: 'Luxeknit Fabric', color: 'text-hud-cyan', status: 'STANDARD' },
      natura2: { text: 'Luxeknit Fabric', color: 'text-hud-cyan', status: 'STANDARD' }
    },
    {
      feature: 'Comfort Layer',
      natura1: { text: 'Aeroflex Foam Quilt', color: 'text-hud-cyan', status: 'ACTIVE' },
      natura2: { text: 'Aeroflex Foam Quilt', color: 'text-hud-cyan', status: 'ACTIVE' }
    },
    {
      feature: 'Adaptive Layer',
      natura1: { text: 'Natural Pincore Latex', color: 'text-hud-green', status: 'ECO' },
      natura2: { text: 'Pulse Core + Pincore Latex', color: 'text-hud-orange', status: 'ENHANCED' }
    },
    {
      feature: 'Main Support',
      natura1: { text: 'Zero G Latex Foam', color: 'text-hud-green', status: 'OPTIMAL' },
      natura2: { text: 'Zero G Latex Foam', color: 'text-hud-green', status: 'OPTIMAL' }
    },
    {
      feature: 'Bottom Layer',
      natura1: { text: 'Soft Foam with Quilt', color: 'text-hud-cyan', status: 'STANDARD' },
      natura2: { text: 'Soft Foam with Quilt', color: 'text-hud-cyan', status: 'STANDARD' }
    },
    {
      feature: 'Thickness',
      natura1: { text: '8 inches', color: 'text-hud-cyan', status: 'COMPACT' },
      natura2: { text: '10 inches', color: 'text-hud-orange', status: 'EXTENDED' }
    },
    {
      feature: 'Feel',
      natura1: { text: 'Medium', color: 'text-hud-green', status: 'BALANCED' },
      natura2: { text: 'Medium-Firm', color: 'text-hud-orange', status: 'FIRM' }
    },
    {
      feature: 'Best For',
      natura1: { text: 'Natural comfort seekers', color: 'text-hud-green', status: 'ECO' },
      natura2: { text: 'Premium natural experience', color: 'text-hud-green', status: 'PREMIUM' }
    }
  ]

  const variants = ['natura1', 'natura2']
  const variantLabels = { natura1: 'NATURA 1.0', natura2: 'NATURA 2.0' }

  return (
    <section id="comparison-section" className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Eco Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-green/5 via-transparent to-hud-cyan/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Natural data patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="naturaGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="#00FF88" strokeWidth="0.2" />
              <circle cx="5" cy="5" r="0.5" fill="#00FF88" opacity="0.4" />
              <path d="M2,2 L8,8 M8,2 L2,8" stroke="#00FF88" strokeWidth="0.1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#naturaGrid)" />
        </svg>
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
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
              ECO_COMPARISON_MATRIX
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-green">COMPARE</span>
            <br />
            <span className="neon-text-cyan text-5xl lg:text-6xl">NATURA VARIANTS</span>
          </h2>
          
          <p className="text-lg font-mono text-hud-cyan/70">
            <span className="text-hud-green">ANALYZE ECO SPECIFICATIONS</span> for your natural sleep sanctuary
          </p>
        </motion.div>

        {/* Eco AR Data Matrix */}
        <motion.div 
          className="hologram-card overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Corner decorations */}
          <div className="cyber-corner-tl" />
          <div className="cyber-corner-tr" />
          <div className="cyber-corner-bl" />
          <div className="cyber-corner-br" />
          
          {/* Matrix Header */}
          <div className="bg-gradient-to-r from-hud-green/10 to-hud-cyan/10 px-6 py-4 border-b border-hud-green/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-hud-green uppercase tracking-widest">
                NATURA_ECO_MATRIX_v1.8
              </span>
              <div className="flex items-center gap-2">
                <div className="pulse-dot bg-hud-green" style={{ animationDuration: '1.5s' }} />
                <span className="text-xs font-mono text-hud-green">ECO_MODE</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {/* Table Header */}
            <motion.div 
              className="grid grid-cols-3 glass-panel bg-cyber-dark/30 border-b border-hud-green/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-4 border-r border-hud-green/20">
                <span className="text-sm font-mono font-bold text-hud-green uppercase tracking-wider">FEATURE</span>
              </div>
              {variants.map((variant, index) => (
                <motion.div 
                  key={variant}
                  className="p-4 text-center border-r border-hud-green/20 last:border-r-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-mono font-bold text-hud-cyan uppercase">
                      {variantLabels[variant as keyof typeof variantLabels]}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-1 h-1 rounded-full bg-hud-green"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Table Body */}
            <div className="divide-y divide-hud-green/10">
              {comparisonData.map((row, rowIndex) => (
                <motion.div 
                  key={row.feature}
                  className="grid grid-cols-3 hover:bg-hud-green/5 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.1 }}
                >
                  {/* Feature Column */}
                  <div className="p-4 border-r border-hud-green/20 flex items-center">
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="w-2 h-2 bg-hud-green rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, delay: rowIndex * 0.2, repeat: Infinity }}
                      />
                      <span className="font-mono text-sm text-hud-cyan uppercase tracking-wider">
                        {row.feature}
                      </span>
                    </div>
                  </div>
                  
                  {/* Variant Columns */}
                  {variants.map((variant, colIndex) => {
                    const cellData = row[variant as keyof typeof row] as { text: string; color: string; status: string }
                    const cellId = `${rowIndex}-${colIndex}`
                    
                    return (
                      <motion.div 
                        key={`${variant}-${rowIndex}`}
                        className="p-4 text-center border-r border-hud-green/20 last:border-r-0 relative"
                        onMouseEnter={() => setHoveredCell(cellId)}
                        onMouseLeave={() => setHoveredCell(null)}
                        whileHover={{ backgroundColor: 'rgba(0,255,136,0.05)' }}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span className={`text-sm font-mono ${cellData.color} font-medium`}>
                            {cellData.text}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono text-hud-green/60 px-2 py-1 glass-panel border border-hud-green/30 uppercase">
                              {cellData.status}
                            </span>
                          </div>
                        </div>
                        
                        {/* Hover effect */}
                        <AnimatePresence>
                          {hoveredCell === cellId && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none border-2 border-hud-green/50 rounded"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Eco scan line effect */}
          <motion.div
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-hud-green to-transparent z-20"
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.div>

        {/* HUD Action Panel */}
        <motion.div 
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/find-store"
            className="hud-button hud-button-green px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-hud-green">◈</span>
              <span>ECO STORE</span>
              <span className="text-xs opacity-60">[E]</span>
            </span>
          </motion.a>
          
          <motion.a
            href="#"
            className="hud-button px-8 py-4 border-hud-cyan/50 hover:border-hud-cyan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-hud-cyan">◯</span>
              <span>ECO SPECS</span>
              <span className="text-xs opacity-60">[S]</span>
            </span>
          </motion.a>
        </motion.div>
        
        {/* Eco Data Footer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 glass-panel px-4 py-2 border border-hud-green/20">
            <div className="flex items-center gap-2">
              <div className="pulse-dot bg-hud-green" style={{ width: '4px', height: '4px' }} />
              <span className="text-xs font-mono text-hud-green/60">ECO_STATUS: ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-hud-green/30" />
            <span className="text-xs font-mono text-hud-cyan/60">LAST_UPDATE: {new Date().toLocaleDateString()}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}