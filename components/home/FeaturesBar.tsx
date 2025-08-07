'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: '/Shipping.png',
    title: 'FREE SHIPPING',
    description: '& COD AVAILABLE',
    isImage: true
  },
  {
    icon: '/Quality.png',
    title: 'QUALITY',
    description: 'PRODUCT PROMISES',
    isImage: true
  },
  {
    icon: '/Comfort.png',
    title: 'HIGH QUALITY',
    description: 'COMFORT',
    isImage: true
  },
  {
    icon: '/Breathable.png',
    title: 'BREATHABLE',
    description: 'AIR FRESH',
    isImage: true
  },
  {
    icon: 'warranty',
    title: 'UPTO 25 YEARS',
    description: 'WARRANTY',
    isImage: false,
    isCustom: true
  }
]

export default function FeaturesBar() {
  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex flex-col items-center space-y-2">
                {feature.isCustom ? (
                  <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <path d="M24 2L6 8v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V8L24 2z" fill="#8BC34A" stroke="#689F38" strokeWidth="1"/>
                      <path d="M18 24l4 4 8-8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : feature.isImage ? (
                  <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <feature.icon className="w-12 h-12 text-foamico-lime group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                )}
                <div>
                  <h3 className="text-foamico-charcoal font-bold text-xs md:text-sm uppercase tracking-wide">{feature.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}