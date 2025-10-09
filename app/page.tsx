'use client'

import HeroSection from '@/components/home/HeroSection'
import JourneySection from '@/components/home/JourneySection'
import ProductCards from '@/components/home/ProductCards'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-cream">
      <HeroSection />
      <JourneySection />
      <ProductCards />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
