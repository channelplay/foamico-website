import NaturaHeroSection from '@/components/product/NaturaHeroSection'
import NaturaVariantsSection from '@/components/product/NaturaVariantsSection'
import NaturaComparisonSection from '@/components/product/NaturaComparisonSection'
import ExperienceFirstCTA from '@/components/product/ExperienceFirstCTA'

export default function NaturaPage() {
  return (
    <main>
      {/* Hero Section */}
      <NaturaHeroSection />
      
      {/* Variants Section */}
      <NaturaVariantsSection />
      
      {/* Comparison Section */}
      <NaturaComparisonSection />
      
      {/* Experience First CTA */}
      <ExperienceFirstCTA />
    </main>
  )
}