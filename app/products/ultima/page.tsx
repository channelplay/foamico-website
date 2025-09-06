import UltimaHeroSection from '@/components/product/UltimaHeroSection'
import UltimaVariantsSection from '@/components/product/UltimaVariantsSection'
import UltimaComparisonSection from '@/components/product/UltimaComparisonSection'
import { getProductByCategory } from '@/data/products'

export default function UltimaPage() {
  const product = getProductByCategory('ultima')
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main>
      {/* Hero Section - Clean design matching the image */}
      <UltimaHeroSection />
      
      {/* Variants Section - All three variants with expandable layers */}
      <UltimaVariantsSection />
      
      {/* Comparison Section - Compare all three variants */}
      <UltimaComparisonSection />
    </main>
  )
}