import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProductCategoryView from '@/components/product/ProductCategoryView'
import SovaHeroSection from '@/components/product/SovaHeroSection'
import SovaVariantsSection from '@/components/product/SovaVariantsSection'
import SovaComparisonSection from '@/components/product/SovaComparisonSection'
import UltimaHeroSection from '@/components/product/UltimaHeroSection'
import UltimaVariantsSection from '@/components/product/UltimaVariantsSection'
import UltimaComparisonSection from '@/components/product/UltimaComparisonSection'
import { getProductByCategory } from '@/data/products'

interface ProductCategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: ProductCategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const product = getProductByCategory(category)
  
  if (!product) {
    return {
      title: 'Product Not Found | Foamico',
    }
  }

  return {
    title: `${product.name} Mattress Collection | Foamico`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return [
    { category: 'sova' },
    { category: 'ultima' },
    { category: 'natura' },
    { category: 'marvel' },
  ]
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { category } = await params
  const normalizedCategory = category.toLowerCase()
  const product = getProductByCategory(normalizedCategory)

  if (!product) {
    notFound()
  }

  if (normalizedCategory === 'sova') {
    return (
      <main className="bg-white">
        <SovaHeroSection />
        <SovaVariantsSection />
        <SovaComparisonSection />
      </main>
    )
  }

  if (normalizedCategory === 'ultima') {
    return (
      <main className="bg-white">
        <UltimaHeroSection />
        <UltimaVariantsSection />
        <UltimaComparisonSection />
      </main>
    )
  }

  return (
    <div className="py-8 lg:py-12">
      <Container>
        <ProductCategoryView product={product} />
      </Container>
    </div>
  )
}