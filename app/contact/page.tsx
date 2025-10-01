'use client'

import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
            Let&apos;s Talk
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 px-4">
            Your perfect sleep is just one call away
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-4 bg-white text-[#816842] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 font-semibold min-h-[56px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-lg">WhatsApp Now</span>
            </motion.a>

            <motion.a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-4 bg-white text-[#816842] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 font-semibold min-h-[56px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-lg">Talk Now</span>
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}