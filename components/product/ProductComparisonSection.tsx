'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

// Comparison data for each product
const comparisonConfigs = {
  resto: {
    name: 'Resto',
    columns: ['Classic', 'Premium', 'Luxury'],
    data: [
      { feature: 'Top Fabric', classic: 'Super Plush Luxeknit Fabric', premium: 'Super Plush Luxeknit Fabric', luxury: 'Super Plush Luxeknit Fabric' },
      { feature: 'Comfort Layer', classic: 'Aeroflex Foam Quilting', premium: 'Aeroflex Foam Quilting', luxury: 'Aeroflex Foam Quilting' },
      { feature: 'Body Support Layer', classic: 'Pro Nexa Foam', premium: 'Cosmic Byte Foam', luxury: 'Memorest Foam + Cosmic Byte Foam' },
      { feature: 'Main Support', classic: 'Enduro HR Foam', premium: 'Enduro HR Foam', luxury: 'Enduro HR Foam' },
      { feature: 'Bottom Layer', classic: 'Soft Foam with Quilting', premium: 'Soft Foam with Quilting', luxury: 'Soft Foam with Quilting' },
      { feature: 'Warranty', classic: '10 Years Warranty +\n5 Years Full Replacement*', premium: '10 Years Warranty +\n5 Years Full Replacement*', luxury: '10 Years Warranty +\n5 Years Full Replacement*' },
    ],
  },
  luma: {
    name: 'Luma',
    columns: ['Classic', 'Premium', 'Luxury'],
    data: [
      { feature: 'Top Fabric', classic: 'Super Plush Luxeknit Fabric', premium: 'Super Plush Luxeknit Fabric', luxury: 'Super Plush Luxeknit Fabric' },
      { feature: 'Comfort Layer', classic: 'Aeroflex Foam Quilting', premium: 'Aeroflex Foam Quilting', luxury: 'Aeroflex Foam Quilting' },
      { feature: 'Body Support Layer', classic: 'Pro Nexa Foam', premium: 'Pro Nexa Foam', luxury: 'Memorest Foam + Pro Nexa Foam' },
      { feature: 'Main Support', classic: 'Hybrid Pocket Spring', premium: 'Hybrid Pocket Spring', luxury: 'Hybrid Pocket Spring' },
      { feature: 'Bottom Layer', classic: 'Vector Base Felt + Soft Foam with Quilting', premium: 'Vector Base Felt + Soft Foam with Quilting', luxury: 'Vector Base Felt + Soft Foam with Quilting' },
      { feature: 'Warranty', classic: '7 Years Warranty +\n5 Years Full Replacement*', premium: '7 Years Warranty +\n5 Years Full Replacement*', luxury: '7 Years Warranty +\n5 Years Full Replacement*' },
    ],
  },
  natura: {
    name: 'Natura',
    columns: ['Natura 1.0', 'Natura 2.0'],
    data: [
      { feature: 'Top Fabric', col1: 'Super Plush Luxeknit Fabric', col2: 'Super Plush Luxeknit Fabric' },
      { feature: 'Comfort Layer', col1: 'Aeroflex Foam Quilting', col2: 'Aeroflex Foam Quilting' },
      { feature: 'Body Support Layer', col1: 'Pincore Latex Foam + Cloud Sense Foam', col2: '7 Zone Latex Foam' },
      { feature: 'Main Support', col1: 'Zero G Latex Foam', col2: '-' },
      { feature: 'Bottom Layer', col1: 'Soft Foam with Quilting', col2: 'Soft Foam with Quilting' },
      { feature: 'Warranty', col1: '25 Years Warranty +\n5 Years Full Replacement*', col2: '25 Years Warranty +\n5 Years Full Replacement*' },
    ],
  },
  riva: {
    name: 'Riva',
    columns: ['RIVA 1000', 'RIVA 2000', 'RIVA 3000'],
    data: [
      { feature: 'Top Fabric', col1: 'UltraLuxe Adaptive Knit Fabric', col2: 'UltraLuxe Adaptive Knit Fabric', col3: 'UltraLuxe Adaptive Knit Fabric' },
      { feature: 'Comfort Layer', col1: 'NubeSoave™', col2: 'SetaComfort™', col3: 'SetaComfort™' },
      { feature: 'Body Support Layer', col1: 'Struttura Forte™', col2: 'NubeSoave™ + Struttura Forte™', col3: 'LussoMorbido™ + NubeSoave™ + Struttura Forte™' },
      { feature: 'Main Support', col1: 'FondoCore Italia™', col2: 'FondoCore Italia™', col3: 'FondoCore Italia™' },
      { feature: 'Bottom Layer', col1: 'Soft Foam with Quilting', col2: 'Soft Foam with Quilting', col3: 'Soft Foam with Quilting' },
      { feature: 'Warranty', col1: '30 Years Warranty +\n5 Years Full Replacement*', col2: '30 Years Warranty +\n5 Years Full Replacement*', col3: '30 Years Warranty +\n5 Years Full Replacement*' },
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
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { classic: string }).classic}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { premium: string }).premium}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { luxury: string }).luxury}
                        </td>
                      </>
                    )}
                    {config.columns.length === 2 && 'col1' in row && (
                      <>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { col1: string }).col1}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { col2: string }).col2}
                        </td>
                      </>
                    )}
                    {config.columns.length === 3 && 'col1' in row && (
                      <>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { col1: string }).col1}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
                          {(row as { col2: string }).col2}
                        </td>
                        <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 text-center text-xs md:text-sm lg:text-[15px] text-[#39250E]/80 whitespace-pre-line">
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

        {/* CTA Banner */}
        <motion.div
          className="mt-12 md:mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-[#AD702A]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#39250E] mb-4">
            Not Sure Which One to Pick?
          </h2>
          <p className="text-base md:text-lg text-[#39250E]/70 mb-8 max-w-2xl mx-auto">
            Use our comparison tool to find the perfect mattress for your needs, or visit our store to try them in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/products/compare"
              className="inline-flex items-center justify-center gap-3 bg-[#4C6462] text-white border-none font-semibold px-8 py-3 lg:px-12 lg:py-4 transition-all hover:bg-[#3d504e] rounded-xl text-sm lg:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Compare Products
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-[#4C6462] border-2 border-[#4C6462] font-semibold px-8 py-3 lg:px-12 lg:py-4 transition-all hover:bg-[#4C6462] hover:text-white rounded-xl text-sm lg:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit a Store
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
