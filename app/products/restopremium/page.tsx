import ProductTopImage from '@/components/product/ProductTopImage'
import ProductComparisonSection from '@/components/product/ProductComparisonSection'

export default function RestoPremiumPage() {
  return (
    <main>
      <ProductTopImage product="resto" variant="premium" />
      <ProductComparisonSection product="resto" />
    </main>
  )
}
