import ProductTopImage from '@/components/product/ProductTopImage'
import ProductComparisonSection from '@/components/product/ProductComparisonSection'

export default function RestoClassicPage() {
  return (
    <main>
      <ProductTopImage product="resto" variant="classic" />
      <ProductComparisonSection product="resto" />
    </main>
  )
}
