'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function SovaComparisonSection() {
  const comparisonData = [
    {
      feature: 'Top Fabric',
      classic: 'Luxeknit Fabric',
      premium: 'Luxeknit Fabric',
      luxury: 'Luxeknit Fabric'
    },
    {
      feature: 'Comfort Layer',
      classic: 'Aeroflex Foam Quilt',
      premium: 'Memorest Foam Quilt',
      luxury: 'Memorest Foam Quilt'
    },
    {
      feature: 'Body Support Layer',
      classic: 'Pulse Core Foam',
      premium: 'Pulse Core Foam',
      luxury: 'Pulse Core Foam'
    },
    {
      feature: 'Main Support',
      classic: 'Bondtech Support Foam',
      premium: 'Bondtech Support Foam',
      luxury: 'Zero G Latex Foam'
    },
    {
      feature: 'Bottom Layer',
      classic: 'Support Foam Quilt',
      premium: 'Support Foam Quilt',
      luxury: 'Soft Foam with Quilt'
    },
    {
      feature: 'Best For',
      classic: 'Basic orthopedic comfort',
      premium: 'Memory foam comfort with support',
      luxury: 'Premium feel with latex durability'
    },
    {
      feature: 'Warranty',
      classic: '10 Years',
      premium: '10 Years',
      luxury: '25 Years'
    }
  ]

  return (
    <section id="comparison-section" className="py-16 md:py-24 font-fira" style={{ backgroundColor: '#F5F3E9' }}>
      <Container>
        {/* Section Header - Responsive */}
        <motion.div 
          className="text-center px-4 mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-[5px]">
            <div className="w-8 md:w-12 h-[1px] mr-3 md:mr-4 bg-[#AD702A]"></div>
            <p className="font-bold font-fira text-xs md:text-sm lg:text-[15px] text-[#AD702A] whitespace-nowrap uppercase tracking-[0.15em] md:tracking-[0.3em]">Compare Features</p>
            <div className="w-8 md:w-12 h-[1px] ml-3 md:ml-4 bg-[#AD702A]"></div>
          </div>
          
          <h2 className="font-bold font-fira text-2xl md:text-3xl lg:text-[40px] text-[#39250E] mt-1 mb-3 md:mb-[14px]">
            Sova Mattress Comparison
          </h2>
          
          <p className="mx-auto leading-relaxed font-fira text-sm md:text-[15px] text-[#39250E]/70 max-w-full lg:max-w-[787.81px] px-4 md:px-8 lg:px-0">
            Compare the specifications across Sova Classic, Premium, and Luxury variants 
            to find the ideal mattress for your sleeping needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-white overflow-hidden shadow-luxury-lg rounded-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header - Responsive */}
              <thead className="bg-[#AD702A]">
                <tr>
                  <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-left font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                    Feature
                  </th>
                  <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                    Classic
                  </th>
                  <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                    Premium
                  </th>
                  <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                    Luxury
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y-2 divide-hermes-gold/20">
                {comparisonData.map((row, rowIndex) => (
                  <motion.tr
                    key={row.feature}
                    className="hover:bg-hermes-cream transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.05 }}
                  >
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 font-semibold border-r-2 border-hermes-gold/20 text-xs md:text-sm lg:text-[15px] text-[#39250E]">
                      {row.feature}
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                      {row.classic}
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                      {row.premium}
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                      {row.luxury}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </Container>
    </section>
  )
}
