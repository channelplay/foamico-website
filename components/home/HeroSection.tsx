
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
      <div className="absolute" style={{ top: '59.37%', left: '20.63%' }}>
        <motion.button
          className="bg-[#4C6462] text-white border border-[#4C6462] font-semibold w-[172.03px] h-[39px] transition-all hover:bg-[#3d504e]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ fontSize: '15px', borderRadius: '5px' }}
        >
          Download Catalogue
        </motion.button>
      </div>
    </section>
  )
}