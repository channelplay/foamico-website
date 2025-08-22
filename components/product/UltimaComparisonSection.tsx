'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'

export default function UltimaComparisonSection() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)
  const comparisonData = [
    {
      feature: 'Top Fabric',
      classic: { text: 'Luxeknit Fabric', color: 'text-hud-cyan', status: 'STANDARD' },
      premium: { text: 'Luxeknit Fabric', color: 'text-hud-cyan', status: 'STANDARD' },
      luxury: { text: 'Luxeknit Fabric', color: 'text-hud-cyan', status: 'STANDARD' }
    },
    {
      feature: 'Comfort Layer',
      classic: { text: 'Aeroflex Foam Quilt', color: 'text-hud-cyan', status: 'ACTIVE' },
      premium: { text: 'Aeroflex Foam Quilt', color: 'text-hud-cyan', status: 'ACTIVE' },
      luxury: { text: 'Aeroflex Foam Quilt', color: 'text-hud-cyan', status: 'ACTIVE' }
    },
    {
      feature: 'Adaptive Layer',
      classic: { text: 'Cloud Sense Foam', color: 'text-hud-pink', status: 'COMFORT' },
      premium: { text: 'Pulse Core Foam + Cloud Sense', color: 'text-hud-orange', status: 'ENHANCED' },
      luxury: { text: 'Memorest + Cloud Sense', color: 'text-hud-pink', status: 'LUXURY' }
    },
    {
      feature: 'Main Support',
      classic: { text: 'Zero G Latex Foam', color: 'text-hud-pink', status: 'OPTIMAL' },
      premium: { text: 'Zero G Latex Foam', color: 'text-hud-pink', status: 'OPTIMAL' },
      luxury: { text: 'Zero G Latex Foam', color: 'text-hud-pink', status: 'OPTIMAL' }
    },
    {
      feature: 'Bottom Layer',
      classic: { text: 'Soft Foam with Quilt', color: 'text-hud-cyan', status: 'STANDARD' },
      premium: { text: 'Soft Foam with Quilt', color: 'text-hud-cyan', status: 'STANDARD' },
      luxury: { text: 'Soft Foam with Quilt', color: 'text-hud-cyan', status: 'STANDARD' }
    },
    {
      feature: 'Feel',
      classic: { text: 'Soft', color: 'text-hud-pink', status: 'PLUSH' },
      premium: { text: 'Medium-Soft', color: 'text-hud-pink', status: 'BALANCED' },
      luxury: { text: 'Plush', color: 'text-hud-pink', status: 'ULTRA' }
    },
    {
      feature: 'Best For',
      classic: { text: 'Cloud-like comfort seekers', color: 'text-hud-cyan', status: 'COMFORT' },
      premium: { text: 'Balanced softness with support', color: 'text-hud-green', status: 'BALANCED' },
      luxury: { text: 'Ultimate plush experience', color: 'text-hud-pink', status: 'PREMIUM' }
    }
  ]

  const variants = ['classic', 'premium', 'luxury']
  const variantLabels = { classic: 'CLASSIC', premium: 'PREMIUM', luxury: 'LUXURY' }

  return (
    <section id="comparison-section" className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-pink/5 via-transparent to-hud-cyan/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Luxury data patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="luxuryGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="none" stroke="#FF00FF" strokeWidth="0.2" />
              <circle cx="4" cy="4" r="0.5" fill="#FF00FF" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#luxuryGrid)" />
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
            className="inline-block glass-panel border border-hud-pink px-6 py-2 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,0,255,0.3)',
                '0 0 40px rgba(255,0,255,0.5)',
                '0 0 20px rgba(255,0,255,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-pink uppercase tracking-widest">
              LUXURY_COMPARISON_MATRIX
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-pink">COMPARE</span>
            <br />
            <span className="neon-text-cyan text-5xl lg:text-6xl">ULTIMA VARIANTS</span>
          </h2>
          
          <p className="text-lg font-mono text-hud-cyan/70">
            <span className="text-hud-pink">ANALYZE LUXURY SPECIFICATIONS</span> for your perfect cloud of comfort
          </p>
        </motion.div>

        {/* Pink AR Data Matrix */}
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
          <div className="bg-gradient-to-r from-hud-pink/10 to-hud-cyan/10 px-6 py-4 border-b border-hud-pink/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-hud-pink uppercase tracking-widest">
                ULTIMA_LUXURY_MATRIX_v3.0
              </span>
              <div className="flex items-center gap-2">
                <div className="pulse-dot bg-hud-pink" style={{ animationDuration: '1.2s' }} />
                <span className="text-xs font-mono text-hud-pink">LUXURY_MODE</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {/* Table Header */}
            <motion.div 
              className="grid grid-cols-4 glass-panel bg-cyber-dark/30 border-b border-hud-pink/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-4 border-r border-hud-pink/20">
                <span className="text-sm font-mono font-bold text-hud-pink uppercase tracking-wider">FEATURE</span>
              </div>
              {variants.map((variant, index) => (
                <motion.div 
                  key={variant}
                  className="p-4 text-center border-r border-hud-pink/20 last:border-r-0"
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
                          className={`w-1 h-1 rounded-full ${ 
                            variant === 'luxury' ? 'bg-hud-pink' : 
                            variant === 'premium' ? 'bg-hud-orange' : 'bg-hud-cyan'
                          }`}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Table Body */}
            <div className="divide-y divide-hud-pink/10">
              {comparisonData.map((row, rowIndex) => (
                <motion.div 
                  key={row.feature}
                  className="grid grid-cols-4 hover:bg-hud-pink/5 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.1 }}
                >
                  {/* Feature Column */}
                  <div className="p-4 border-r border-hud-pink/20 flex items-center">
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="w-2 h-2 bg-hud-pink rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, delay: rowIndex * 0.3, repeat: Infinity }}
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
                        className="p-4 text-center border-r border-hud-pink/20 last:border-r-0 relative"
                        onMouseEnter={() => setHoveredCell(cellId)}
                        onMouseLeave={() => setHoveredCell(null)}
                        whileHover={{ backgroundColor: 'rgba(255,0,255,0.05)' }}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span className={`text-sm font-mono ${cellData.color} font-medium`}>
                            {cellData.text}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono text-hud-pink/60 px-2 py-1 glass-panel border border-hud-pink/30 uppercase">
                              {cellData.status}
                            </span>
                          </div>
                        </div>
                        
                        {/* Hover effect with pink theme */}
                        <AnimatePresence>
                          {hoveredCell === cellId && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none border-2 border-hud-pink/50 rounded"
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
          
          {/* Pink scan line effect */}
          <motion.div
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-hud-pink to-transparent z-20"
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
            className="hud-button hud-button-pink px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-hud-pink">◆</span>
              <span>LOCATE LUXURY</span>
              <span className="text-xs opacity-60">[L]</span>
            </span>
          </motion.a>
          
          <motion.a
            href="#"
            className="hud-button px-8 py-4 border-hud-cyan/50 hover:border-hud-cyan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <span className="text-hud-cyan">◇</span>
              <span>LUXURY SPECS</span>
              <span className="text-xs opacity-60">[S]</span>
            </span>
          </motion.a>
        </motion.div>
        
        {/* Luxury Data Footer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 glass-panel px-4 py-2 border border-hud-pink/20">
            <div className="flex items-center gap-2">
              <div className="pulse-dot bg-hud-pink" style={{ width: '4px', height: '4px' }} />
              <span className="text-xs font-mono text-hud-pink/60">LUXURY_STATUS: ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-hud-pink/30" />
            <span className="text-xs font-mono text-hud-cyan/60">MATRIX_UPDATE: {new Date().toLocaleDateString()}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}