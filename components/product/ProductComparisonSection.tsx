'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

// Comparison data for each product
const comparisonConfigs = {
  resto: {
    name: 'Resto',
    columns: ['Classic', 'Premium', 'Luxury'],
    data: [
      { feature: 'Top Fabric', classic: 'Luxeknit Fabric', premium: 'Luxeknit Fabric', luxury: 'Luxeknit Fabric' },
      { feature: 'Comfort Layer', classic: 'Aeroflex Foam Quilt', premium: 'Memorest Foam Quilt', luxury: 'Memorest Foam Quilt' },
      { feature: 'Body Support Layer', classic: 'Pulse Core Foam', premium: 'Pulse Core Foam', luxury: 'Pulse Core Foam' },
      { feature: 'Main Support', classic: 'Bondtech Support Foam', premium: 'Bondtech Support Foam', luxury: 'Zero G Latex Foam' },
      { feature: 'Bottom Layer', classic: 'Support Foam Quilt', premium: 'Support Foam Quilt', luxury: 'Soft Foam with Quilt' },
      { feature: 'Best For', classic: 'Basic orthopedic comfort', premium: 'Memory foam comfort with support', luxury: 'Premium feel with latex durability' },
      { feature: 'Warranty', classic: '10 Years', premium: '10 Years', luxury: '25 Years' },
    ],
  },
  luma: {
    name: 'Luma',
    columns: ['Classic', 'Premium', 'Luxury'],
    data: [
      { feature: 'Top Fabric', classic: 'Luxeknit Fabric', premium: 'Luxeknit Fabric', luxury: 'Luxeknit Fabric' },
      { feature: 'Comfort Layer', classic: 'Aeroflex Foam Quilt', premium: 'Memorest Foam Quilt', luxury: 'Memorest Foam Quilt' },
      { feature: 'Body Support Layer', classic: 'Pulse Core Foam', premium: 'Pulse Core Foam', luxury: 'Pulse Core Foam' },
      { feature: 'Main Support', classic: 'Bondtech Support Foam', premium: 'Bondtech Support Foam', luxury: 'Zero G Latex Foam' },
      { feature: 'Bottom Layer', classic: 'Support Foam Quilt', premium: 'Support Foam Quilt', luxury: 'Soft Foam with Quilt' },
      { feature: 'Best For', classic: 'Basic orthopedic comfort', premium: 'Memory foam comfort with support', luxury: 'Premium feel with latex durability' },
      { feature: 'Warranty', classic: '10 Years', premium: '10 Years', luxury: '25 Years' },
    ],
  },
  natura: {
    name: 'Natura',
    columns: ['Natura 1.0', 'Natura 2.0'],
    data: [
      { feature: 'Top Fabric', col1: 'Natural Cotton Fabric', col2: 'Organic Cotton Fabric' },
      { feature: 'Comfort Layer', col1: 'Natural Latex Quilt', col2: 'Premium Natural Latex' },
      { feature: 'Body Support Layer', col1: 'Eco Foam Core', col2: 'Advanced Eco Foam' },
      { feature: 'Main Support', col1: 'Natural Support Foam', col2: 'Organic Support Foam' },
      { feature: 'Bottom Layer', col1: 'Eco Base Layer', col2: 'Premium Eco Base' },
      { feature: 'Best For', col1: 'Eco-conscious comfort', col2: 'Premium natural sleep' },
      { feature: 'Warranty', col1: '10 Years', col2: '15 Years' },
    ],
  },
  riva: {
    name: 'Riva',
    columns: ['Riva1000', 'Riva2000', 'Riva3000'],
    data: [
      { feature: 'Top Fabric', col1: 'Luxeknit Fabric', col2: 'Premium Luxeknit', col3: 'Ultra Luxeknit' },
      { feature: 'Comfort Layer', col1: 'Aeroflex Foam', col2: 'Memorest Foam', col3: 'Advanced Memorest' },
      { feature: 'Body Support Layer', col1: 'Core Foam', col2: 'Pulse Core Foam', col3: 'Advanced Pulse Core' },
      { feature: 'Main Support', col1: 'Support Foam', col2: 'Bondtech Foam', col3: 'Zero G Latex Foam' },
      { feature: 'Bottom Layer', col1: 'Base Foam', col2: 'Support Quilt', col3: 'Premium Quilt' },
      { feature: 'Best For', col1: 'Essential comfort', col2: 'Enhanced support', col3: 'Ultimate luxury' },
      { feature: 'Warranty', col1: '7 Years', col2: '10 Years', col3: '25 Years' },
    ],
  },
}

type ProductType = keyof typeof comparisonConfigs

interface ProductComparisonSectionProps {
  product: ProductType
}

export default function ProductComparisonSection({ product }: ProductComparisonSectionProps) {
  const config = comparisonConfigs[product]

  return (
    <section id="comparison-section" className="py-16 md:py-24 font-fira" style={{ backgroundColor: '#F5F3E9' }}>
      <Container>
        {/* Section Header */}
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
            {config.name} Mattress Comparison
          </h2>

          <p className="mx-auto leading-relaxed font-fira text-sm md:text-[15px] text-[#39250E]/70 max-w-full lg:max-w-[787.81px] px-4 md:px-8 lg:px-0">
            Compare the specifications across {config.name} variants to find the ideal mattress for your sleeping needs.
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#AD702A]">
                <tr>
                  <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-left font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                    Feature
                  </th>
                  {config.columns.map((col) => (
                    <th key={col} className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-[15px]">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-hermes-gold/20">
                {config.data.map((row, rowIndex) => (
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
                    {config.columns.length === 3 && 'classic' in row && (
                      <>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { classic: string }).classic}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { premium: string }).premium}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { luxury: string }).luxury}
                        </td>
                      </>
                    )}
                    {config.columns.length === 2 && 'col1' in row && (
                      <>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { col1: string }).col1}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { col2: string }).col2}
                        </td>
                      </>
                    )}
                    {config.columns.length === 3 && 'col1' in row && (
                      <>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { col1: string }).col1}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { col2: string }).col2}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80">
                          {(row as { col3: string }).col3}
                        </td>
                      </>
                    )}
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
