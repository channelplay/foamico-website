import Hero from '@/components/home/Hero'
import FeaturesBar from '@/components/home/FeaturesBar'
import ProductShowcase from '@/components/home/ProductShowcase'
import TechnologySection from '@/components/home/TechnologySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import StoreLocatorCTA from '@/components/home/StoreLocatorCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <ProductShowcase />
      <TechnologySection />
      <TestimonialsSection />
      <StoreLocatorCTA />
    </>
  )
}
