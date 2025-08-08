import UltimaHeroSection from '@/components/product/UltimaHeroSection'
import UltimaVariantsSection from '@/components/product/UltimaVariantsSection'
import UltimaComparisonSection from '@/components/product/UltimaComparisonSection'
import ExperienceFirstCTA from '@/components/product/ExperienceFirstCTA'

export default function UltimaPage() {
  return (
    <main>
      {/* Hero Section */}
      <UltimaHeroSection />
      
      {/* Variants Section */}
      <UltimaVariantsSection />
      
      {/* Comparison Section */}
      <UltimaComparisonSection />
      
      {/* Experience First CTA */}
      <ExperienceFirstCTA />
    </main>
  )
}