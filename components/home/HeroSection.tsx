
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-base-cream flex items-center justify-center px-0 relative">
      {/* Mobile/Tablet Hero Image */}
      <Image
        src="/hero-mobile.png"
        alt="Sleep, Engineered - Foamico Mattress with 65+ years of innovation"
        width={800}
        height={1000}
        className="w-full h-auto max-w-full lg:hidden"
        priority
      />
      
      {/* Desktop Hero Image */}
      <Image
        src="/hero-section-new.png"
        alt="Sleep, Engineered - Foamico Mattress with 65+ years of innovation"
        width={1469}
        height={420}
        className="w-full h-auto max-w-full hidden lg:block"
        priority
      />
      
      {/* Buttons - centered below the text */}
      <div className="absolute bottom-[8%] left-[43%] -translate-x-1/2 lg:top-[64.37%] lg:left-[13.63%] lg:translate-x-0 lg:-translate-y-0 lg:bottom-auto flex flex-row gap-3 lg:gap-4 items-center justify-center">
        <motion.a
          href="/FOAMICO - PRICE LIST 2026 (1).pdf"
          download
          className="inline-block bg-[#4C6462] text-white border-none font-semibold px-8 py-3 lg:px-12 lg:py-4 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-lg lg:scale-85 lg:origin-left whitespace-nowrap text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Download Prices &gt;
        </motion.a>
        <motion.a
          href="/FOAMICO - CATALOG 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4C6462] text-white border-none font-semibold px-8 py-3 lg:px-12 lg:py-4 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-lg lg:scale-85 lg:origin-left whitespace-nowrap text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Download Brochure &gt;
        </motion.a>
      </div>
    </section>
  )
}