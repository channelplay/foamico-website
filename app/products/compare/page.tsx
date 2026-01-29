import { Metadata } from 'next'
import ComparisonTool from '@/components/product/ComparisonTool'

export const metadata: Metadata = {
  title: 'Compare Mattresses | Foamico',
  description: 'Compare Foamico mattresses side-by-side to find the perfect match for your sleep needs.',
}

export default function ComparePage() {
  return <ComparisonTool />
}
