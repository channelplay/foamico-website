'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const features = [
  { icon: '◈', text: 'Advanced Cooling', color: 'hud-cyan' },
  { icon: '◉', text: 'CNC Cut Technology', color: 'hud-orange' },
  { icon: '◆', text: 'Anti-allergy', color: 'hud-pink' },
  { icon: '▣', text: 'Superior Airflow', color: 'hud-cyan' },
  { icon: '◎', text: 'Breathable', color: 'hud-cyan' },
  { icon: '◈', text: 'Motion Control', color: 'hud-orange' }
]

export default function MarvelHeroSection() {
  return (
    <section className="min-h-screen bg-cyber-black relative overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-hud-orange/5 via-transparent to-hud-cyan/5"
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
                  className="glass-panel border border-hud-orange px-4 py-2"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255,165,0,0.3)',
                      '0 0 40px rgba(255,165,0,0.5)',
                      '0 0 20px rgba(255,165,0,0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs font-mono text-hud-orange uppercase tracking-widest">
                    25 YEAR PROTOCOL
                  </span>
                </motion.div>
              </div>
              
              {/* Scan Effect */}
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
              
              {/* Product Image - Full frame */}
              <Image
                src="/Marvel.png"
                alt="Marvel Mattress"
                fill
                className="object-cover rounded-lg"
                priority
                style={{
                  filter: 'brightness(0.9) saturate(1.2)',
                }}
              />
              
              {/* Status Indicator */}
              <div className="absolute top-6 right-6 z-20">
                <div className="pulse-dot bg-hud-orange" />
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
                className="inline-block glass-panel border border-hud-orange px-4 py-2 mb-6"
                animate={{
                  borderColor: ['rgba(255,165,0,0.5)', 'rgba(0,212,255,0.5)', 'rgba(255,165,0,0.5)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-mono text-hud-orange uppercase tracking-widest">
                  SLEEP CLASS: MARVEL
                </span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-cyber font-bold mb-6">
                <span className="text-hud-orange" style={{ textShadow: '0 0 20px rgba(255,165,0,0.8), 0 0 40px rgba(255,165,0,0.4)' }}>MARVEL</span>
              </h1>
              <p className="text-lg font-mono text-hud-cyan/70 leading-relaxed">
                A mattress that bends, stretches and supports like the hero of a nightly adventure. Features innovative 
                <span className="text-hud-orange"> INSIGNIA VELIO FOAM </span>
                with CNC Cut technology for enhanced airflow.
              </p>
            </div>

            {/* Tech Specifications */}
            <div className="hologram-card">
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />
              
              <div className="bg-gradient-to-r from-hud-orange/10 to-hud-cyan/10 px-4 py-2 mb-4 border-b border-hud-orange/20">
                <span className="text-xs font-mono text-hud-orange uppercase tracking-widest">
                  HERO CLASS SPECS
                </span>
              </div>
              
              <motion.div 
                className="glass-panel bg-gradient-to-r from-hud-orange/10 to-hud-cyan/10 px-6 py-4 border border-hud-orange/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-cyber text-lg text-hud-orange">MARVEL</p>
                    <div className="flex gap-4 text-xs font-mono text-hud-cyan/70 mt-1">
                      <span>HEIGHT: 10&quot;</span>
                      <span>SUPPORT: MEDIUM</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-hud-orange/60">STATUS:</span>
                      <span className="text-sm font-mono text-hud-orange">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-3 border-l-2 border-hud-orange/50"
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
          <div className="glass-panel px-4 py-2 border border-hud-orange">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-hud-orange">SCROLL</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-hud-orange">▼</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}