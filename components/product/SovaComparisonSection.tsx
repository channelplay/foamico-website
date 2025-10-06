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
    <section id="comparison-section" className="py-16 md:py-24 bg-hermes-cream font-fira">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-hermes-gold"></div>
            <p className="text-xs text-hermes-gold uppercase tracking-[0.3em]">Compare Features</p>
            <div className="w-12 h-px bg-hermes-gold"></div>
          </div>
          
          <h2 className="font-bold text-hermes-ink mb-4" style={{ fontSize: '40.26px' }}>
            Sova Mattress Comparison
          </h2>
          
          <p className="text-hermes-ink/70 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '15px' }}>
            Compare the specifications across Sova Classic, Premium, and Luxury variants 
            to find the ideal mattress for your sleeping needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-hermes-highlight overflow-hidden shadow-luxury-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-[#AD702A]">
                <tr>
                  <th className="px-6 py-5 text-left font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: '15px' }}>
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: '15px' }}>
                    Classic
                  </th>
                  <th className="px-6 py-5 text-center font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: '15px' }}>
                    Premium
                  </th>
                  <th className="px-6 py-5 text-center font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: '15px' }}>
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
                    <td className="px-6 py-5 font-semibold text-hermes-ink border-r-2 border-hermes-gold/20" style={{ fontSize: '15px' }}>
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-hermes-ink/80 text-center" style={{ fontSize: '15px' }}>
                      {row.classic}
                    </td>
                    <td className="px-6 py-5 text-hermes-ink/80 text-center" style={{ fontSize: '15px' }}>
                      {row.premium}
                    </td>
                    <td className="px-6 py-5 text-hermes-ink/80 text-center" style={{ fontSize: '15px' }}>
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
