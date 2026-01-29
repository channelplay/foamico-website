export interface Store {
  id: string
  name: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
  timings: string
  coordinates: {
    lat: number
    lng: number
  }
  features: string[]
}

export const stores: Store[] = [
  {
    id: 'jhajjar',
    name: 'Foamico Sleep Studio - Jhajjar',
    address: 'Old Bus Stand Road, Furniture Market, Shop 433, nearby LG Showroom',
    city: 'Jhajjar',
    state: 'Haryana',
    pincode: '124103',
    phone: '+91 7496982886',
    timings: 'Mon-Sun: 10:00 AM - 8:00 PM',
    coordinates: { lat: 28.6064, lng: 76.6556 },
    features: ['Sleep Consultation', 'Home Delivery', 'All Mattress Ranges']
  },
]

export function getStoresByCity(city: string): Store[] {
  return stores.filter(store => store.city.toLowerCase() === city.toLowerCase())
}

export function getStoreById(id: string): Store | undefined {
  return stores.find(store => store.id === id)
}