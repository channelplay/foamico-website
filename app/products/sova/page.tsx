import SovaHeroSection from '@/components/product/SovaHeroSection'
import SovaVariantsSection from '@/components/product/SovaVariantsSection'
import SovaComparisonSection from '@/components/product/SovaComparisonSection'
import { getProductByCategory } from '@/data/products'

export default function SovaPage() {
  const product = getProductByCategory('sova')
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-black">Product not found</h1>
      </div>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <SovaHeroSection />
      
      {/* Variants Section */}
      <SovaVariantsSection />
      
      {/* Comparison Section */}
      <SovaComparisonSection />
    </main>
  )
}