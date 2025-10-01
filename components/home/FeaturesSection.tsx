'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  return (
    <section className="relative">
      {/* Heading */}
      <div className="py-8 md:py-12 lg:py-16 text-center px-4" style={{ backgroundColor: '#F4F2EC' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark"
        >
          Luxury Meets Science
        </motion.h2>
      </div>

      {/* Full-width Background Image */}
      <div className="relative h-[380px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 md:hidden"
        >
          <Image
            src="/luxury-science-mobile.png"
            alt="Foamico Mattress Engineering Features - Scientific Testing and Innovation"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 hidden md:block"
        >
          <Image
            src="/features-section.png"
            alt="Foamico Mattress Engineering Features - Scientific Testing and Innovation"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}