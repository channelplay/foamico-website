'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HUDOverlay() {
  const [time, setTime] = useState(new Date())
  const [fps] = useState(60)
  const [systemStatus] = useState('ONLINE')
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => setTime(new Date()), 1000)
    
    // Set window size after component mounts
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => {
        clearInterval(timer)
        window.removeEventListener('resize', handleResize)
      }
    }
    
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Scan Lines Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <div className="absolute inset-0 bg-scan-lines opacity-[0.03]" />
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-hud-cyan/50 to-transparent"
          animate={{
            top: ['-2px', '100vh'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-[99] bg-cyber-grid opacity-[0.02]" />

      {/* Corner HUD Elements */}
      <div className="fixed inset-0 pointer-events-none z-[101]">
        {/* Top Left - System Status */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-panel px-4 py-2 border-l-2 border-hud-cyan">
            <div className="flex items-center gap-3">
              <div className="pulse-dot" />
              <span className="text-xs font-mono text-hud-cyan/80">SYSTEM {systemStatus}</span>
            </div>
            <div className="text-[10px] font-mono text-hud-cyan/60 mt-1">
              FPS: {fps} | PING: 12ms
            </div>
          </div>
        </motion.div>

        {/* Top Right - Time Display */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-panel px-4 py-2 text-right border-r-2 border-hud-pink">
            <div className="text-xs font-mono text-hud-pink/80">
              {time.toLocaleTimeString('en-US', { hour12: false })}
            </div>
            <div className="text-[10px] font-mono text-hud-pink/60">
              {time.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              }).toUpperCase()}
            </div>
          </div>
        </motion.div>

        {/* Bottom Left - Navigation Helper */}
        <motion.div
          className="absolute bottom-4 left-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2">
            <div className="glass-panel px-3 py-1">
              <span className="text-[10px] font-mono text-hud-cyan/60">NAV</span>
            </div>
            <div className="glass-panel px-3 py-1">
              <span className="text-[10px] font-mono text-hud-green/60">READY</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right - Version */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-panel px-3 py-1">
            <span className="text-[10px] font-mono text-hud-cyan/60">v2.0.1</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles - Client-side only */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none z-[98]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-hud-cyan/30 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: windowSize.height + 10,
              }}
              animate={{
                y: -10,
                x: Math.random() * windowSize.width,
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Matrix Rain Effect (subtle) - Client-side only */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none z-[97] overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-hud-green/10 font-mono text-xs"
              style={{ left: `${i * 10}%` }}
              initial={{ y: -20 }}
              animate={{ y: windowSize.height + 20 }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear',
              }}
            >
              {Math.random().toString(36).substring(2, 8)}
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}