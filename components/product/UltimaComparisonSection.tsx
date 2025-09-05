'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'

export default function UltimaComparisonSection() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

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
      feature: 'Feel',
      classic: 'Soft',
      premium: 'Medium-Soft',
      luxury: 'Plush'
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

  const variantLabels = {
    classic: 'CLASSIC',
    premium: 'PREMIUM',
    luxury: 'LUXURY'
  }

  return (
    <section id="comparison-section" className="py-20 bg-soft-cream">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-overline mb-4">Compare Features</p>
          
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Ultima Mattress Comparison
          </h2>
          <div className="divider-line divider-center" />
          
          <p className="text-body text-light-gray max-w-2xl mx-auto mt-6">
            Compare the specifications across Ultima Classic, Premium, and Luxury variants 
            to find the ideal cloud-like comfort for your sleeping needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="card-elegant overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table Container */}
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-soft-cream">
              <div className="p-4 border-r border-gray-200">
                <span className="text-sm font-semibold uppercase tracking-wider text-black">
                  Feature
                </span>
              </div>
              {['classic', 'premium', 'luxury'].map((variant) => (
                <motion.div
                  key={variant}
                  className="p-4 text-center border-r border-gray-200 last:border-r-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-black">
                      {variantLabels[variant as keyof typeof variantLabels]}
                    </span>
                    {variant === 'luxury' && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded mt-1">
                        Premium
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Table Body */}
            <div>
              {comparisonData.map((row, rowIndex) => (
                <motion.div
                  key={row.feature}
                  className={`grid grid-cols-4 ${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-warm-beige/20'
                  } hover:bg-warm-beige/30 transition-colors`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.05 }}
                >
                  {/* Feature Column */}
                  <div className="p-4 border-r border-gray-200 flex items-center">
                    <span className="font-medium text-dark text-sm">
                      {row.feature}
                    </span>
                  </div>

                  {/* Variant Columns */}
                  {['classic', 'premium', 'luxury'].map((variant) => {
                    const cellId = `${variant}-${rowIndex}`
                    const cellValue = row[variant as keyof typeof row] as string
                    const isHighlighted = variant === 'luxury' && (
                      row.feature === 'Adaptive Layer' || 
                      row.feature === 'Feel'
                    )

                    return (
                      <motion.div
                        key={cellId}
                        className={`p-4 text-center border-r border-gray-200 last:border-r-0 relative ${
                          isHighlighted ? 'bg-primary/5' : ''
                        }`}
                        onMouseEnter={() => setHoveredCell(cellId)}
                        onMouseLeave={() => setHoveredCell(null)}
                        whileHover={{ backgroundColor: 'rgba(129, 104, 66, 0.05)' }}
                      >
                        <div className="text-sm text-dark">
                          {cellValue}
                          {isHighlighted && (
                            <span className="ml-2 text-xs text-primary">★</span>
                          )}
                        </div>

                        {/* Hover Effect */}
                        {hoveredCell === cellId && (
                          <motion.div
                            className="absolute inset-0 pointer-events-none border-2 border-primary/30 rounded"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  )
}