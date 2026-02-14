'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Phone, MapPin, Clock, Navigation } from 'lucide-react'
import { stores } from '@/data/stores'

export default function StoreLocator() {
  const store = stores[0]

  return (
    <section className="min-h-screen py-16 md:py-24 font-fira" style={{ backgroundColor: '#e9e4cd' }}>
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#AD702A] font-semibold">
              Visit Us
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl text-[#39250E]/80 max-w-2xl mx-auto px-4">
            Visit us to experience
          </h2>
        </motion.div>

        {/* Store Info + Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Store Details */}
          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#AD702A]/10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#39250E] mb-6">
              {store.name}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#AD702A] mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-[#39250E]/80">
                  {store.address}, {store.city}, {store.state} - {store.pincode}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#AD702A] flex-shrink-0" />
                <a
                  href={`tel:${store.phone}`}
                  className="text-sm md:text-base text-[#39250E]/80 hover:text-[#AD702A] transition-colors"
                >
                  {store.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#AD702A] flex-shrink-0" />
                <span className="text-sm md:text-base text-[#39250E]/80">{store.timings}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {store.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs md:text-sm px-4 py-1.5 bg-[#AD702A]/10 text-[#39250E]/70 rounded-full border border-[#AD702A]/20"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://maps.google.com/?q=${store.coordinates.lat},${store.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#4C6462] text-white border-none font-semibold px-8 py-3 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-base flex-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </motion.a>
              <motion.a
                href={`tel:${store.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-[#4C6462] text-white border-none font-semibold px-8 py-3 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-base flex-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Store</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] border border-[#AD702A]/10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}&z=15&output=embed`}
              allowFullScreen
            />
          </motion.div>
        </div>

      </Container>
    </section>
  )
}
