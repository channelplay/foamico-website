import ProductTopImage from '@/components/product/ProductTopImage'
import ProductComparisonSection from '@/components/product/ProductComparisonSection'

export default function RestoLuxuryPage() {
  return (
    <main>
      <ProductTopImage product="resto" variant="luxury" />
      <ProductComparisonSection product="resto" />
    </main>
  )
}
