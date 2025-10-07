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
        {/* Section Header */}
        <motion.div 
          className="text-center px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-1">
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginRight: '16px' }}></div>
            <p className="text-hermes-gold uppercase tracking-[0.3em] font-bold font-fira" style={{ fontSize: '15px' }}>Compare Features</p>
            <div className="bg-hermes-gold" style={{ width: '48px', height: '1px', marginLeft: '16px' }}></div>
          </div>
          
          <h2 className="font-bold" style={{ fontSize: '40px', color: '#39250E', marginTop: '4px', marginBottom: '14px' }}>
            Sova Mattress Comparison
          </h2>
          
          <p className="mx-auto leading-relaxed font-fira" style={{ fontSize: '15px', color: '#39250E', opacity: 0.7, width: '787.81px', maxWidth: '100%' }}>
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
                    <td className="px-6 py-5 font-semibold border-r-2 border-hermes-gold/20" style={{ fontSize: '15px', color: '#39250E' }}>
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-center" style={{ fontSize: '15px', color: '#39250E', opacity: 0.8 }}>
                      {row.classic}
                    </td>
                    <td className="px-6 py-5 text-center" style={{ fontSize: '15px', color: '#39250E', opacity: 0.8 }}>
                      {row.premium}
                    </td>
                    <td className="px-6 py-5 text-center" style={{ fontSize: '15px', color: '#39250E', opacity: 0.8 }}>
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
