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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
            Let&apos;s Talk
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 px-4">
            Your perfect sleep is just one call away
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-600 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">WhatsApp Now</span>
            </motion.a>

            <motion.a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#816842] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg">Talk Now</span>
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}