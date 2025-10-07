
'use client'

import Container from '@/components/ui/Container'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-base-cream flex items-center justify-center px-0 relative">
      <Image
        src="/hero-section-new.png"
        alt="Sleep, Engineered - Foamico Mattress with 65+ years of innovation"
        width={1469}
        height={420}
        className="w-full h-auto max-w-full"
        priority
      />
      <div className="absolute" style={{ top: 'calc(59.37% + 15px)', left: '20.63%', transform: 'scale(0.85)', transformOrigin: 'left top' }}>
        <motion.button
          className="bg-[#4C6462] text-white border-none font-semibold px-12 py-4 transition-all hover:bg-[#3d504e] rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ fontSize: '18px' }}
        >
          Download Catalogue &gt;
        </motion.button>
      </div>
    </section>
  )
}