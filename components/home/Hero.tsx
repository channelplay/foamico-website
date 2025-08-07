'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [currentQuality, setCurrentQuality] = useState('HD')
  const qualities = ['HD', 'FHD', '4K', '8K']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuality(prev => {
        const currentIndex = qualities.indexOf(prev)
        return qualities[(currentIndex + 1) % qualities.length]
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 min-h-[700px] overflow-hidden">
      {/* Subtle starry night effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Sleep Mode 
                <span className="text-yellow-400"> Nahi,</span>
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Deep Mode
                </motion.span>
              </motion.h1>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-2xl lg:text-3xl text-white/90 font-light">
                  Sapne bhi <span className="font-bold text-cyan-400">{currentQuality}</span> mein aate hain.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button href="/products" size="large" className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold">
                  Explore Mattresses
                </Button>
                <Button href="/find-store" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  Find a Store
                </Button>
              </motion.div>
            </div>

            {/* Visual Content - Human Sleep Comparison */}
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Split Screen Comparison */}
                <div className="flex flex-col gap-4">
                  {/* Sleep Mode - Tired Person */}
                  <motion.div 
                    className="relative bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">😫</div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Sleep Mode</p>
                        <p className="text-white font-semibold">Regular Mattress</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-gray-500 text-xs">Dream Quality:</span>
                          <span className="text-gray-400 font-mono">480p</span>
                        </div>
                      </div>
                    </div>
                    {/* Glitchy/Static effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Deep Mode - Refreshed Person */}
                  <motion.div 
                    className="relative bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur rounded-2xl p-6 border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="text-6xl"
                        animate={{ 
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        😌
                      </motion.div>
                      <div>
                        <p className="text-cyan-400 text-sm mb-1">Deep Mode ✓</p>
                        <p className="text-white font-semibold">FOAMICO Mattress</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-cyan-300 text-xs">Dream Quality:</span>
                          <motion.span 
                            className="text-cyan-400 font-mono font-bold"
                            animate={{ 
                              color: ['#00bcd4', '#00e5ff', '#00bcd4']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {currentQuality}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                    {/* Smooth gradient animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent rounded-2xl"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Floating dream bubbles */}
                <motion.div
                  className="absolute -top-8 right-0 bg-white/10 backdrop-blur rounded-full p-3"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-2xl">💭</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 left-0 bg-cyan-400/20 backdrop-blur rounded-full px-4 py-2"
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-cyan-400 text-sm font-semibold">Upgrade Your Sleep</span>
                </motion.div>

                {/* Quality comparison indicator */}
                <motion.div
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-cyan-400 text-black rounded-full p-2">
                    <span className="text-xs font-bold">10X</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}