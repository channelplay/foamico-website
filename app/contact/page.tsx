'use client'

import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'

const office = {
  name: 'Foamico Head Office',
  address: '9/3 A, Club Drive Road, Ghitorni',
  city: 'New Delhi',
  state: 'Delhi',
  pincode: '110030',
  phone: '+91 7496982886',
  timings: 'Mon-Sat: 9:00 AM - 6:00 PM',
  coordinates: { lat: 28.4906, lng: 77.1458 },
}

export default function ContactPage() {
  const phoneNumber = '917496982886'

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
              Get In Touch
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#39250E] mb-4 md:mb-6 px-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#39250E]/80 max-w-2xl mx-auto px-4">
            We&apos;d love to hear from you
          </p>
        </motion.div>

        {/* Office Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Office Details */}
          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#AD702A]/10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#39250E] mb-6">
              {office.name}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#AD702A] mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-[#39250E]/80">
                  {office.address}, {office.city}, {office.state} - {office.pincode}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#AD702A] flex-shrink-0" />
                <a
                  href={`tel:${office.phone}`}
                  className="text-sm md:text-base text-[#39250E]/80 hover:text-[#AD702A] transition-colors"
                >
                  {office.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#AD702A] flex-shrink-0" />
                <span className="text-sm md:text-base text-[#39250E]/80">{office.timings}</span>
              </div>
            </div>

            {/* Let's Talk Section */}
            <div className="border-t border-[#AD702A]/20 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-base md:text-lg font-semibold text-[#39250E]">Let&apos;s Talk</p>
                  <p className="text-sm text-[#39250E]/60">Your perfect sleep is just one call away</p>
                </div>
                <div className="flex flex-row gap-3">
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#4C6462] text-white font-medium px-5 py-2.5 transition-all hover:bg-[#3d504e] rounded-xl text-sm whitespace-nowrap"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#4C6462] text-white font-medium px-5 py-2.5 transition-all hover:bg-[#3d504e] rounded-xl text-sm whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
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
              src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=15&output=embed`}
              allowFullScreen
            />
          </motion.div>
        </div>

      </Container>
    </section>
  )
}