import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import FabricQualitySection from '@/components/home/FabricQualitySection'
import ProductShowcase from '@/components/home/ProductShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Spacer between hero and content sections */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-transparent to-soft-cream/30"></div>
      
      <FeaturesSection />
      
      <FabricQualitySection />
      
      <ProductShowcase />

      <TestimonialsSection />
      <Footer />
    </>
  )
}
