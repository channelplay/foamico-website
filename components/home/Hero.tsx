'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [missionAccepted, setMissionAccepted] = useState(false)
  const [showNewMission, setShowNewMission] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNewMission(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[800px] overflow-hidden bg-cyber-black">
      {/* Animated cyber grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-hud-cyan/10 via-transparent to-hud-pink/10" />
        
        {/* Animated scan lines */}
        <motion.div
          className="absolute inset-0 bg-hologram-lines opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '0px 10px'],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* NEW MISSION Banner */}
      <AnimatePresence>
        {showNewMission && !missionAccepted && (
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-hud-cyan/50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative glass-panel border-2 border-hud-cyan px-8 py-4">
                <div className="cyber-corner-tl" />
                <div className="cyber-corner-tr" />
                <div className="cyber-corner-bl" />
                <div className="cyber-corner-br" />
                <motion.h2 
                  className="text-3xl font-cyber font-bold text-center neon-text-cyan"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(0,212,255,0.8)",
                      "0 0 40px rgba(0,212,255,1)",
                      "0 0 20px rgba(0,212,255,0.8)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  NEW MISSION
                </motion.h2>
                <div className="text-xs font-mono text-hud-cyan/80 text-center mt-1">
                  UNLOCK BETTER SLEEP
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container className="relative z-20">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Mission Brief */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Mission Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl font-cyber font-bold mb-6">
                  <motion.span 
                    className="block neon-text-cyan"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    UPGRADE YOUR
                  </motion.span>
                  <motion.span 
                    className="block mt-2 neon-text-pink text-6xl lg:text-8xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    SLEEP MODE
                  </motion.span>
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <div className="pulse-dot" />
                  <p className="text-xl font-mono text-hud-cyan/80">
                    MISSION: <span className="text-hud-green">ACHIEVE DEEP SLEEP</span>
                  </p>
                </div>

                {/* Mission Description */}
                <div className="glass-panel p-6 mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-hud-orange text-xl">⚠</span>
                    <div>
                      <h3 className="font-mono text-sm text-hud-orange mb-2">MISSION BRIEFING</h3>
                      <p className="text-sm text-hud-cyan/70 leading-relaxed">
                        Your current sleep quality: <span className="text-hud-pink">COMPROMISED</span>. 
                        Upgrade to FOAMICO advanced sleep technology for maximum recovery stats. 
                        <span className="text-hud-green"> +50% ENERGY REGEN</span>, 
                        <span className="text-hud-cyan"> +30% FOCUS</span>.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-hud-cyan/20 pt-3">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-hud-cyan/60">DIFFICULTY: EASY</span>
                      <span className="text-hud-green/60">SUCCESS RATE: 99.9%</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <motion.button
                      className="hud-button px-8 py-4 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMissionAccepted(true)}
                    >
                      <span className="flex items-center gap-2">
                        <span>▶</span>
                        ACCEPT MISSION
                        <span className="text-xs opacity-60">[ENTER]</span>
                      </span>
                    </motion.button>
                  </Link>
                  <Link href="/find-store">
                    <motion.button
                      className="hud-button hud-button-pink px-8 py-4 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        <span>◈</span>
                        FIND CHECKPOINT
                        <span className="text-xs opacity-60">[TAB]</span>
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Banner with Iron Man AR Overlay */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                {/* Landing Banner Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/landing_banner_2.jpg"
                    alt="Foamico Premium Mattress"
                    fill
                    className="object-cover"
                    style={{
                      filter: 'brightness(0.8) contrast(1.1) saturate(1.2)',
                    }}
                  />
                  
                  {/* Tech Grid Overlay */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-10" />
                  
                  {/* Gradient Overlay for Better Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-black/40" />
                </div>

                {/* Iron Man Style AR Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Corner HUD Brackets */}
                  <div className="absolute top-6 left-6 w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hud-cyan to-transparent" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-hud-cyan to-transparent" />
                  </div>
                  <div className="absolute top-6 right-6 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-hud-cyan to-transparent" />
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-hud-cyan to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 w-16 h-16">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hud-cyan to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-hud-cyan to-transparent" />
                  </div>
                  <div className="absolute bottom-6 right-6 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-hud-cyan to-transparent" />
                    <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-hud-cyan to-transparent" />
                  </div>

                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-hud-pink via-hud-cyan to-transparent"
                    animate={{
                      top: ['-4px', '100%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Targeting Reticles */}
                  <motion.div
                    className="absolute top-1/3 left-1/4 w-12 h-12"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                  >
                    <div className="w-full h-full border-2 border-hud-cyan/60 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-hud-cyan rounded-full" />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-3 bg-hud-cyan" />
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-3 bg-hud-cyan" />
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-px bg-hud-cyan" />
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-px bg-hud-cyan" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-2/3 right-1/3 w-8 h-8"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                  >
                    <div className="w-full h-full border border-hud-pink/60 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-hud-pink rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating AR Benefit Panels */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top Left Panel - Free Shipping */}
                  <motion.div
                    className="absolute top-8 left-8 glass-panel px-4 py-3 max-w-[200px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-hud-green rounded-full pulse-dot" />
                      <span className="text-[10px] font-mono text-hud-green uppercase">LOGISTICS_PROTOCOL</span>
                    </div>
                    <div className="text-xs font-mono text-hud-cyan">ZERO_COST_DELIVERY</div>
                    <div className="text-[8px] font-mono text-hud-cyan/60 mt-1">STATUS: ACTIVE</div>
                  </motion.div>

                  {/* Top Right Panel - COD Available */}
                  <motion.div
                    className="absolute top-8 right-8 glass-panel px-4 py-3 max-w-[200px]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-hud-cyan rounded-full pulse-dot" />
                      <span className="text-[10px] font-mono text-hud-cyan uppercase">PAYMENT_MATRIX</span>
                    </div>
                    <div className="text-xs font-mono text-hud-cyan">CASH_ON_DELIVERY</div>
                    <div className="text-[8px] font-mono text-hud-cyan/60 mt-1">PROTOCOL: ENABLED</div>
                  </motion.div>

                  {/* Center Panel - Premium Comfort */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-panel px-4 py-3 max-w-[180px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-hud-pink rounded-full pulse-dot" />
                      <span className="text-[10px] font-mono text-hud-pink uppercase">COMFORT_MATRIX</span>
                    </div>
                    <div className="text-xs font-mono text-hud-pink">99% OPTIMAL</div>
                    <div className="w-full h-1 bg-cyber-dark rounded mt-1">
                      <motion.div
                        className="h-full bg-gradient-to-r from-hud-pink to-hud-purple rounded"
                        initial={{ width: 0 }}
                        animate={{ width: '99%' }}
                        transition={{ duration: 1, delay: 1.4 }}
                      />
                    </div>
                  </motion.div>

                  {/* Bottom Left Panel - Breathable */}
                  <motion.div
                    className="absolute bottom-20 left-8 glass-panel px-4 py-3 max-w-[200px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-hud-green rounded-full pulse-dot" />
                      <span className="text-[10px] font-mono text-hud-green uppercase">AIRFLOW_SYSTEM</span>
                    </div>
                    <div className="text-xs font-mono text-hud-green">BREATHABLE_ACTIVE</div>
                    <div className="text-[8px] font-mono text-hud-green/60 mt-1">EFFICIENCY: 99%</div>
                  </motion.div>

                  {/* Bottom Right Panel - Warranty */}
                  <motion.div
                    className="absolute bottom-20 right-8 glass-panel px-4 py-3 max-w-[200px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-hud-orange rounded-full pulse-dot" />
                      <span className="text-[10px] font-mono text-hud-orange uppercase">DURABILITY_INDEX</span>
                    </div>
                    <div className="text-xs font-mono text-hud-orange">25_YEAR_GUARANTEE</div>
                    <div className="text-[8px] font-mono text-hud-orange/60 mt-1">WARRANTY: ACTIVE</div>
                  </motion.div>
                </div>

                {/* Tech Data Stream */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 glass-panel px-3 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="pulse-dot bg-hud-cyan" />
                      <span className="text-[10px] font-mono text-hud-cyan">TECH_ANALYSIS_COMPLETE</span>
                    </div>
                    <div className="flex gap-4 text-[10px] font-mono">
                      <span className="text-hud-green">✓ VERIFIED</span>
                      <span className="text-hud-cyan">◉ OPTIMAL</span>
                      <span className="text-hud-pink">◆ PREMIUM</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom HUD Info Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 glass-panel border-t border-hud-cyan/30"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Container>
          <div className="py-3 flex justify-between items-center">
            <div className="flex gap-6 text-xs font-mono">
              <span className="text-hud-cyan/60">▼ SCROLL FOR MORE</span>
              <span className="text-hud-green/60">◉ AUTO-SAVE ENABLED</span>
            </div>
            <div className="flex gap-6 text-xs font-mono">
              <span className="text-hud-orange/60">⚡ FAST SHIPPING</span>
              <span className="text-hud-pink/60">🛡 WARRANTY ACTIVE</span>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}