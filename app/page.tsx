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
          <div className="flex items-center justify-center" style={{ marginBottom: '4.5px' }}>
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginRight: '16px' }}></div>
            <p className="text-hermes-gold tracking-[0.3em] font-bold font-fira" style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'none' }}>Our Collection</p>
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginLeft: '16px' }}></div>
          </div>
          
          <h2 className="font-bold" style={{ fontSize: '40px', color: '#39250E', marginBottom: '14px' }}>
            Engineered for Perfect Sleep
          </h2>
          
          <p className="mx-auto leading-relaxed font-fira" style={{ fontSize: '15px', color: '#39250E', opacity: 0.7, width: '787.81px', maxWidth: '100%' }}>
            Each mattress is meticulously designed using premium materials and innovative foam technology, ensuring exceptional comfort and support for years to come.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex justify-center px-4" style={{ marginTop: '80px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px]">
            {/* Row 1 - Sova Classic */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sova-classic-hp.png"
                  alt="Sova Classic"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
            
            {/* Sova Premium */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sova-premium-hp.png"
                  alt="Sova Premium"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
            
            {/* Sova Luxury */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sova-luxury-hp.png"
                  alt="Sova Luxury"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
            
            {/* Row 2 - Ultima Classic */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/ultima-classic-hp.png"
                  alt="Ultima Classic"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
            
            {/* Ultima Premium */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/ultima-premium-hp.png"
                  alt="Ultima Premium"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
            
            {/* Ultima Luxury */}
            <motion.div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ width: '448px', height: '592px', maxWidth: '100%', backgroundColor: '#FFFFFF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/ultima-luxury-hp.png"
                  alt="Ultima Luxury"
                  fill
                  className="object-cover"
                  sizes="448px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ProductShowcase />

      <TestimonialsSection />
      <Footer />
    </div>
  )
}
