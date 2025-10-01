'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function UltimaComparisonSection() {
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
      premium: 'Aeroflex Foam Quilt',
      luxury: 'Aeroflex Foam Quilt'
    },
    {
      feature: 'Adaptive Layer',
      classic: 'Cloud Sense Foam',
      premium: 'Pulse Core + Cloud Sense',
      luxury: 'Memorest + Cloud Sense'
    },
    {
      feature: 'Main Support',
      classic: 'Zero G Latex Foam',
      premium: 'Zero G Latex Foam',
      luxury: 'Zero G Latex Foam'
    },
    {
      feature: 'Bottom Layer',
      classic: 'Soft Foam with Quilt',
      premium: 'Soft Foam with Quilt',
      luxury: 'Soft Foam with Quilt'
    },
    {
      feature: 'Best For',
      classic: 'Cloud-like comfort seekers',
      premium: 'Balanced softness with support',
      luxury: 'Ultimate plush experience'
    },
    {
      feature: 'Warranty',
      classic: '25 Years',
      premium: '25 Years',
      luxury: '25 Years'
    }
  ]

  return (
    <section id="comparison-section" className="py-12 md:py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-3">Compare Features</p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Ultima Mattress Comparison
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto my-6" />
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Compare the specifications across Ultima Classic, Premium, and Luxury variants 
            to find the ideal cloud-like comfort for your sleeping needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-white rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Classic
                  </th>
                  <th className="px-6 py-4 text-center text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Premium
                  </th>
                  <th className="px-6 py-4 text-center text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Luxury
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, rowIndex) => (
                  <motion.tr
                    key={row.feature}
                    className="hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.05 }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      {row.classic}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      {row.premium}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
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
