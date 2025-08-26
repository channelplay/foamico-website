'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function ExperienceFirstCTA() {
  const [radarPulse, setRadarPulse] = useState(0)
  const [nearestStore, setNearestStore] = useState({ distance: 2.3, city: 'Mumbai' })
  const [coordinates, setCoordinates] = useState({ lat: 19.0760, lng: 72.8777 })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarPulse(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,255,136,0.1) 0%, transparent 60%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Mission Brief */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <motion.div 
                className="inline-block glass-panel border border-hud-green px-4 py-2 mb-4"
                animate={{
                  borderColor: ['rgba(0,255,136,0.5)', 'rgba(0,212,255,0.5)', 'rgba(0,255,136,0.5)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-mono text-hud-green uppercase tracking-widest">
                  CHECKPOINT LOCATION
                </span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
                <span className="neon-text-cyan">FAST TRAVEL TO</span>
                <br />
                <span className="neon-text-green text-5xl lg:text-6xl">CHECKPOINT</span>
              </h2>
            </div>

            <p className="text-lg font-mono text-hud-cyan/70 mb-8 leading-relaxed">
              Physical locations available for 
              <span className="text-hud-green"> HANDS-ON TESTING</span>. 
              Unlock bonus XP and exclusive rewards at our checkpoints.
            </p>

            {/* Mission Objectives */}
            <div className="space-y-3 mb-8">
              {[
                { icon: '◉', text: 'EXPERT CONSULTATION AVAILABLE' },
                { icon: '◈', text: 'HANDS-ON MATTRESS TESTING' },
                { icon: '◆', text: 'EXCLUSIVE IN-STORE OFFERS' },
                { icon: '▣', text: 'INSTANT PURCHASE BENEFITS' },
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-3 border-l-2 border-hud-green"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-hud-green text-lg">{objective.icon}</span>
                      <p className="text-sm font-mono text-hud-cyan/80">{objective.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Side - Radar Map Interface */}
          <motion.div
            className="lg:pl-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative hologram-card p-6">
              {/* Corner decorations */}
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-tr" />
              <div className="cyber-corner-bl" />
              <div className="cyber-corner-br" />

              {/* Radar Display */}
              <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cyber-dark">
                  {/* Grid lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Radar circles */}
                    {[1, 2, 3].map((ring) => (
                      <motion.circle
                        key={ring}
                        cx="50%"
                        cy="50%"
                        r={`${ring * 25}%`}
                        fill="none"
                        stroke="rgba(0,255,136,0.2)"
                        strokeWidth="1"
                        animate={{
                          opacity: ring === radarPulse + 1 ? [0.2, 1, 0.2] : 0.2,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                    
                    {/* Center point */}
                    <circle cx="50%" cy="50%" r="4" fill="#00FF88" className="animate-pulse" />
                  </svg>
                  
                  {/* Scanning line */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,255,136,0.3) 30deg, transparent 60deg)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Location markers */}
                  {[
                    { x: '30%', y: '40%', active: true },
                    { x: '70%', y: '30%', active: false },
                    { x: '50%', y: '70%', active: false },
                    { x: '20%', y: '60%', active: false },
                  ].map((marker, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{ left: marker.x, top: marker.y }}
                      animate={{
                        scale: marker.active ? [1, 1.5, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <div className={`w-3 h-3 ${marker.active ? 'bg-hud-green' : 'bg-hud-cyan/50'} rounded-full`}>
                        {marker.active && (
                          <div className="absolute inset-0 bg-hud-green rounded-full animate-ping" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* HUD Overlay Info */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-2">
                  <p className="text-[10px] font-mono text-hud-green">NEAREST CHECKPOINT</p>
                  <p className="text-sm font-mono text-hud-cyan">{nearestStore.distance} KM</p>
                </div>
                
                <div className="absolute top-4 right-4 glass-panel px-3 py-2">
                  <p className="text-[10px] font-mono text-hud-orange">LOCATION</p>
                  <p className="text-sm font-mono text-hud-cyan">{nearestStore.city}</p>
                </div>
                
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-2">
                  <p className="text-[10px] font-mono text-hud-cyan/60">
                    LAT: {coordinates.lat.toFixed(4)}
                  </p>
                  <p className="text-[10px] font-mono text-hud-cyan/60">
                    LNG: {coordinates.lng.toFixed(4)}
                  </p>
                </div>
              </div>

              {/* Store Info */}
              <div className="space-y-4">
                <div className="glass-panel p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-hud-cyan/60">CHECKPOINTS AVAILABLE</span>
                    <span className="text-sm font-mono text-hud-green">50+</span>
                  </div>
                  <div className="h-1 bg-cyber-dark rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-hud-green to-hud-cyan" />
                  </div>
                </div>

                <div className="glass-panel p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-hud-pink/60">HOTLINE</span>
                    <a href="tel:+919876543210" className="text-sm font-mono text-hud-pink hover:text-hud-pink-glow transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}