import ProductTopImage from '@/components/product/ProductTopImage'
import ProductComparisonSection from '@/components/product/ProductComparisonSection'

export default function LumaPremiumPage() {
  return (
    <main>
      <ProductTopImage product="luma" variant="premium" />
      <ProductComparisonSection product="luma" />
    </main>
  )
}
