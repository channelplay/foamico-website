'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getPlaceholderImage } from '@/lib/placeholder-images'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-foamico-lime-light to-white">
      <Container className="relative z-10">
        <div className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-foamico-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Sleep Naturally,
                <motion.span 
                  className="text-foamico-lime block mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Wake Refreshed
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg lg:text-xl text-foamico-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Experience the perfect blend of natural latex, European craftsmanship, 
                and Indian innovation. Designed for your perfect sleep.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button href="/products" size="large">
                  Explore Mattresses
                </Button>
                <Button href="/find-store" variant="outline" size="large">
                  Find a Store
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  '25 Year Warranty',
                  '100% Natural Latex',
                  'OrthoSense® Tech'
                ].map((text, index) => (
                  <motion.div 
                    key={text}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  >
                    <span className="text-foamico-lime text-2xl">✓</span>
                    <span className="text-foamico-gray-600">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Image
                src={getPlaceholderImage('hero-banner-couple-sleeping-1920x800')}
                alt="Couple sleeping comfortably on Foamico mattress"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foamico-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <circle cx="300" cy="100" r="150" stroke="currentColor" strokeWidth="2" className="text-foamico-lime" />
          <circle cx="350" cy="200" r="100" stroke="currentColor" strokeWidth="2" className="text-foamico-lime" />
        </svg>
      </div>
    </section>
  )
}