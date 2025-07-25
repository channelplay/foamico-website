import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProductCategoryView from '@/components/product/ProductCategoryView'
import { getProductByCategory } from '@/data/products'

interface ProductCategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: ProductCategoryPageProps): Promise<Metadata> {
  const product = getProductByCategory(params.category)
  
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

export default function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const product = getProductByCategory(params.category)

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