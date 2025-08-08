'use client'

import { motion } from 'framer-motion'

export default function ExperienceFirstCTA() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#F5F7F0] to-[#E8F5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <div>
            <div className="mb-6">
              <p className="text-[#8BC34A] font-semibold uppercase tracking-wider text-sm mb-3">
                — EXPERIENCE FIRST
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Feel the Comfort </span>
                <span className="text-[#8BC34A]">Before You Decide</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Visit our exclusive showrooms to experience premium comfort firsthand. Our sleep experts will guide you to find the perfect mattress tailored to your needs.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8BC34A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Expert consultation from certified sleep specialists
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8BC34A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Touch and feel every layer of comfort
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8BC34A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Exclusive in-store offers and benefits
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Store Locator Card */}
          <div className="lg:pl-12">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Location Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F5F7F0] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Find Your Nearest Store
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm">
                Available in 50+ cities across India
              </p>

              <a
                href="/find-store"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#8BC34A] text-white rounded-full font-semibold hover:bg-[#7CB342] transition-colors w-full sm:w-auto text-sm"
              >
                Locate Store
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-1 text-sm">Or call us at</p>
                <a href="tel:+919876543210" className="text-2xl font-bold text-[#8BC34A] hover:text-[#7CB342] transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}