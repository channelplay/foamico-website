'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Mobile Hero Background Image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/foamico-hero-mobile.png"
          alt="Sleep Engineered - Foamico Innovation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Hero Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/foamico-hero-new.png"
          alt="Sleep Engineered - Foamico Innovation"
          fill
          className="object-cover object-left"
          priority
          sizes="100vw"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <Container className="relative z-10">
        <div className="min-h-[50vh] md:min-h-[80vh] flex items-center justify-center py-8 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Empty content area - just maintaining the structure */}
          </div>
        </div>
      </Container>
    </section>
  )
}