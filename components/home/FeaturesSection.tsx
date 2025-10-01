'use client'

import Image from 'next/image'
import { memo } from 'react'

function FeaturesSectionComponent() {
  return (
    <section className="relative">
      {/* Heading */}
      <div className="py-8 md:py-12 lg:py-16 text-center px-4" style={{ backgroundColor: '#F4F2EC' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
          Luxury Meets Science
        </h2>
      </div>

      {/* Full-width Background Image */}
      <div className="relative h-[600px] sm:h-[650px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Mobile Image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/luxury-science-mobile.png"
            alt="Foamico Mattress Engineering Features - Scientific Testing and Innovation"
            fill
            className="object-contain object-top"
            sizes="(min-width: 768px) 0vw, 100vw"
          />
        </div>

        {/* Desktop Image */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/features-section.png"
            alt="Foamico Mattress Engineering Features - Scientific Testing and Innovation"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 0vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default memo(FeaturesSectionComponent)