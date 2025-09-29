'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function FabricQualitySection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-soft-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/fabric-quality-section.png"
              alt="Foamico Fabric Quality - Premium Materials and Hypoallergenic Properties"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}