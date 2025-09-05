import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import TechnologySection from '@/components/home/TechnologySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <TechnologySection />
      <TestimonialsSection />
    </main>
  )
}
