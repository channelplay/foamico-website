'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Floating image positions and animations
  const floatingImages = [
    { 
      id: 1, 
      className: "absolute top-10 left-[10%] w-48 h-32 md:w-64 md:h-48",
      delay: 0,
      rotate: -15,
      scale: 0.8
    },
    { 
      id: 2, 
      className: "absolute top-20 right-[15%] w-40 h-28 md:w-56 md:h-40",
      delay: 0.2,
      rotate: 10,
      scale: 0.7
    },
    { 
      id: 3, 
      className: "absolute bottom-32 left-[20%] w-36 h-24 md:w-48 md:h-36",
      delay: 0.4,
      rotate: -8,
      scale: 0.6
    },
    { 
      id: 4, 
      className: "absolute top-40 left-[5%] w-32 h-20 md:w-40 md:h-28",
      delay: 0.6,
      rotate: 12,
      scale: 0.5
    },
    { 
      id: 5, 
      className: "absolute bottom-20 right-[10%] w-44 h-32 md:w-60 md:h-44",
      delay: 0.8,
      rotate: -5,
      scale: 0.75
    },
    { 
      id: 6, 
      className: "absolute top-[30%] right-[25%] w-36 h-28 md:w-52 md:h-38",
      delay: 1,
      rotate: 15,
      scale: 0.65
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-soft-cream to-warm-beige">
      {/* 3D Floating Images Background */}
      <div className="absolute inset-0 perspective-1000">
        {floatingImages.map((img) => (
          <motion.div
            key={img.id}
            className={`${img.className} transform-3d`}
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotateY: -180,
              z: -100
            }}
            animate={{ 
              opacity: isLoaded ? 0.15 : 0,
              scale: img.scale,
              rotateY: img.rotate,
              rotateX: img.rotate / 2,
              z: 0,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: img.delay },
              scale: { duration: 1, delay: img.delay },
              rotate: { duration: 1, delay: img.delay },
              y: {
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: img.delay
              }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/Foamico Sample 1.png"
                alt="Foamico Mattress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </motion.div>
        ))}
        
        {/* Grid lines for depth effect */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#816842" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <Container className="relative z-10">
        <div className="min-h-[80vh] flex items-center justify-center py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="heading-display mb-6 px-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              <span className="text-dark">Sleep</span>
              <span className="text-primary"> Reimagined.</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-body text-light-gray mb-8 max-w-2xl mx-auto text-base md:text-lg px-4"
            >
              Experience the perfect fusion of traditional craftsmanship and 
              innovative foam technology, designed to transform your sleep 
              into a luxurious experience, <span className="text-primary font-medium">infinitely</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link href="/products">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Collection
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </Container>
      
      {/* Central featured image */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-44 sm:w-80 sm:h-56 md:w-[500px] md:h-[350px] z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isLoaded ? 0.10 : 0, 
          scale: isLoaded ? 1 : 0.8,
          rotateY: [0, 10, 0, -10, 0]
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 1.5 },
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1200px'
        }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/Foamico Sample 1.png"
            alt="Foamico Premium Mattress"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 80vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}