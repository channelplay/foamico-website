import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProductCategoryView from '@/components/product/ProductCategoryView'
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
  const product = getProductByCategory(category)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-8 lg:py-12">
      <Container>
        <ProductCategoryView product={product} />
      </Container>
    </div>
  )
}