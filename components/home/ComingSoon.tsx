'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function ComingSoon() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-soft-cream to-warm-beige">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6"
          >
            Revolutionary Sleep
            <span className="text-primary"> Technology</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-light-gray leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            We&apos;re crafting the perfect fusion of traditional craftsmanship and innovative 
            foam technology. Our premium mattress collection will transform your sleep 
            into a luxurious experience like never before.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: "Premium Materials",
                description: "Carefully selected foam technologies for ultimate comfort"
              },
              {
                title: "Expert Craftsmanship",
                description: "Decades of experience in creating perfect sleep solutions"
              },
              {
                title: "Innovative Design",
                description: "Modern engineering meets traditional mattress making"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg border border-white/20"
              >
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-6"
          >
            <p className="text-base text-light-gray">
              Be the first to experience the future of sleep
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Notify Me When Available
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-primary/20"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-light-gray">Development Progress</span>
              <span className="text-sm font-semibold text-primary">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.9 }}
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
