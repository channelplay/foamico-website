import { Metadata } from 'next'
import StoreLocator from '@/components/store/StoreLocator'

export const metadata: Metadata = {
  title: 'Find a Store | Foamico',
  description: 'Locate your nearest Foamico store. Experience our mattresses in person with expert consultation.',
}

export default function FindStorePage() {
  return <StoreLocator />
}