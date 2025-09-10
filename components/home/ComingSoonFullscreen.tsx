'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ComingSoonFullscreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-soft-cream to-warm-beige flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-block bg-white rounded-lg p-4 shadow-lg">
            <Image
              src="/foamico-logo-black.png"
              alt="Foamico Logo"
              width={200}
              height={80}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <div className="bg-foamico-lime rounded-full px-8 py-3">
            <span className="text-white font-bold text-lg uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6"
        >
          Revolutionary Sleep
          <br />
          <span className="text-primary">Experience</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-light-gray leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          We&apos;re crafting the perfect fusion of traditional craftsmanship and innovative 
          foam technology to transform your sleep into a luxurious experience.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            "Premium Materials",
            "Expert Craftsmanship", 
            "Innovative Design"
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="bg-foamico-lime rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {feature}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-4 max-w-md mx-auto">
            <span className="text-sm font-medium text-light-gray">Launch Progress</span>
            <span className="text-sm font-bold text-primary">85%</span>
          </div>
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, delay: 1.4 }}
              className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-light-gray mb-8">
            Be the first to experience the future of sleep
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              Notify Me When Available
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20 pt-8 border-t border-primary/20"
        >
          <p className="text-sm text-light-gray">
            © {new Date().getFullYear()} Foamico. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
