import MarvelHeroSection from '@/components/product/MarvelHeroSection'
import MarvelLayersSection from '@/components/product/MarvelLayersSection'
import ExperienceFirstCTA from '@/components/product/ExperienceFirstCTA'

export default function MarvelPage() {
  return (
    <main>
      {/* Hero Section */}
      <MarvelHeroSection />
      
      {/* Layers Section - Marvel has only one variant */}
      <MarvelLayersSection />
      
      {/* Experience First CTA */}
      <ExperienceFirstCTA />
    </main>
  )
}