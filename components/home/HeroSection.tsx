'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-section.png"
          alt="Sleep Engineered - Foamico Innovation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <Container className="relative z-10">
        <div className="min-h-[80vh] flex items-center justify-center py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4 mt-8"
            >
              <Link href="/products">
                <motion.button
                  className="bg-foamico-lime hover:bg-foamico-lime/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Collection
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-white/90 hover:bg-white text-foamico-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4"
            >
              {[
                {
                  title: "65+ Years Innovation",
                  description: "Decades of mattress engineering expertise"
                },
                {
                  title: "Breathable Technology",
                  description: "Advanced foam that promotes airflow"
                },
                {
                  title: "Comfort Balance",
                  description: "Perfect harmony of support and softness"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                >
                  <h3 className="text-lg font-bold text-foamico-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foamico-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}