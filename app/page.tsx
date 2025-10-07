'use client'

import HeroSection from '@/components/home/HeroSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ProductCards from '@/components/home/ProductCards'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-cream">
      <HeroSection />
      
      <section className="bg-base-cream flex items-center justify-center px-0">
        <Image
          src="/homepage-second-section.png"
          alt="The Foamico Journey - Luxury Meets Science"
          width={1468}
          height={2582}
          className="w-[1468px] h-auto max-w-full"
        />
      </section>
      
      <ProductCards />

      <TestimonialsSection />
      <Footer />
    </div>
  )
}
