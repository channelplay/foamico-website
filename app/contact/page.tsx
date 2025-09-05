'use client'

import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const phoneNumber = '9654312878'
  
  return (
    <section className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: '#816842' }}>
      <Container>
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Let's Talk
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12">
            Your perfect sleep is just one call away
          </p>
          
          <motion.a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#816842] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className="text-lg">{phoneNumber}</span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}