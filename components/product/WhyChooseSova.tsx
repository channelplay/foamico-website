'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Perfect balance of comfort and support',
    subtitle: 'Medium Support Scale'
  },
  {
    number: '02',
    title: 'Decade-long protection',
    subtitle: '10 Years Warranty'
  },
  {
    number: '03',
    title: 'Crafted with Next-Gen UMS Technology Foam',
    subtitle: 'Advanced Innovation'
  }
]

export default function WhyChooseSova() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-light text-gray-900 text-center mb-3">
            Why Choose <span className="font-semibold">Sova</span>
          </h2>
          <p className="text-center text-gray-500 text-lg">
            Three reasons that make Sova perfect just for you
          </p>
        </motion.div>

        {/* Reasons - Sleek Minimal Design */}
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex items-start gap-8 max-w-3xl mx-auto">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl font-thin text-gray-200 group-hover:text-[#8BC34A] transition-colors duration-500">
                    {reason.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {reason.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}