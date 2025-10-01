'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FabricQualitySection() {
  return (
    <section className="relative hidden md:block h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src="/fabric-quality-section.png"
          alt="Foamico Fabric Quality - Premium Materials and Hypoallergenic Properties"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
    </section>
  )
}