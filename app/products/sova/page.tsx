import SovaHeroSection from '@/components/product/SovaHeroSection'
import SovaVariantsSection from '@/components/product/SovaVariantsSection'
import SovaComparisonSection from '@/components/product/SovaComparisonSection'
import ExperienceFirstCTA from '@/components/product/ExperienceFirstCTA'
import Container from '@/components/ui/Container'
import { getProductByCategory } from '@/data/products'

export default function SovaPage() {
  const product = getProductByCategory('sova')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main>
      {/* Hero Section - Clean design matching the image */}
      <SovaHeroSection />
      
      {/* Variants Section - All three variants with expandable layers */}
      <SovaVariantsSection />
      
      {/* Comparison Section - Compare all three variants */}
      <SovaComparisonSection />
      
      {/* Experience First CTA */}
      <ExperienceFirstCTA />
    </main>
  )
}