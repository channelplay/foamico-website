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
      
      <FeaturesSection />
      
      <FabricQualitySection />
      
      <ProductShowcase />

      <TestimonialsSection />
      <Footer />
    </>
  )
}
