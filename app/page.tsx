'use client'

import HeroSection from '@/components/home/HeroSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-cream">
      <HeroSection />
      
      <section className="bg-base-cream flex items-center justify-center px-0">
        <Image
          src="/homepage-second-section.png"
          alt="The Foamico Journey - Luxury Meets Science"
          width={1468}
          height={2582}
          className="w-[1468px] h-auto max-w-full"
        />
      </section>
      
      {/* New Heading Section */}
      <section className="bg-base-cream font-fira" style={{ paddingTop: '80px' }}>
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-1">
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginRight: '16px' }}></div>
            <p className="text-hermes-gold uppercase tracking-[0.3em] font-bold font-fira" style={{ fontSize: '15px' }}>Section Label</p>
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginLeft: '16px' }}></div>
          </div>
          
          <h2 className="font-bold" style={{ fontSize: '40px', color: '#39250E', marginTop: '4px', marginBottom: '14px' }}>
            Heading Text Here
          </h2>
          
          <p className="mx-auto leading-relaxed font-fira" style={{ fontSize: '15px', color: '#39250E', opacity: 0.7, width: '787.81px', maxWidth: '100%' }}>
            Description text will go here
          </p>
        </motion.div>
      </section>
      
      <ProductShowcase />

      <TestimonialsSection />
      <Footer />
    </div>
  )
}
