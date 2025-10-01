'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  return (
    <section className="relative">
      {/* Heading */}
      <div className="py-12 md:py-16 text-center" style={{ backgroundColor: '#F4F2EC' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-dark"
        >
          Luxury Meets Science
        </motion.h2>
      </div>

      {/* Full-width Background Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
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