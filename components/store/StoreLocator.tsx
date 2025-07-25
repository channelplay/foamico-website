'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { stores } from '@/data/stores'

export default function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [selectedStore, setSelectedStore] = useState<string | null>(null)

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(stores.map(store => store.city))]
    return ['all', ...uniqueCities.sort()]
  }, [])

  const filteredStores = useMemo(() => {
    if (selectedCity === 'all') return stores
    return stores.filter(store => store.city === selectedCity)
  }, [selectedCity])

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId === selectedStore ? null : storeId)
  }

  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-4">
            Find Your Nearest Store
          </h1>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Visit our stores to experience Foamico mattresses in person. 
            Our sleep experts are ready to help you find your perfect match.
          </p>
        </div>

        {/* City Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCity === city
                    ? 'bg-foamico-lime text-white'
                    : 'bg-foamico-gray-100 text-foamico-gray-700 hover:bg-foamico-gray-200'
                }`}
              >
                {city === 'all' ? 'All Cities' : city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Store List */}
          <div className="space-y-4 max-h-[800px] overflow-y-auto">
            {filteredStores.map((store) => (
              <Card
                key={store.id}
                className={`cursor-pointer transition-all ${
                  selectedStore === store.id
                    ? 'ring-2 ring-foamico-lime shadow-lg'
                    : 'hover:shadow-md'
                }`}
                onClick={() => handleStoreSelect(store.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foamico-black">
                    {store.name}
                  </h3>
                  {selectedStore === store.id && (
                    <Badge variant="primary" size="small">
                      Selected
                    </Badge>
                  )}
                </div>
                
                <p className="text-foamico-gray-600 mb-2">
                  {store.address}, {store.city} - {store.pincode}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-foamico-lime">📞</span>
                    <a 
                      href={`tel:${store.phone}`}
                      className="text-foamico-gray-700 hover:text-foamico-lime"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {store.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-foamico-lime">⏰</span>
                    <span className="text-foamico-gray-700">{store.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-foamico-lime">✉️</span>
                    <a 
                      href={`mailto:${store.email}`}
                      className="text-foamico-gray-700 hover:text-foamico-lime"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {store.email}
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {store.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 bg-foamico-gray-100 text-foamico-gray-600 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <Button
                    href={`https://maps.google.com/?q=${store.coordinates.lat},${store.coordinates.lng}`}
                    target="_blank"
                    size="small"
                    variant="outline"
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Get Directions
                  </Button>
                  <Button
                    href={`tel:${store.phone}`}
                    size="small"
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Call Store
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-24">
            <Card className="h-[400px] lg:h-[800px] flex items-center justify-center bg-foamico-gray-50">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-foamico-black mb-2">
                  Interactive Map
                </h3>
                <p className="text-foamico-gray-600 max-w-sm">
                  {selectedStore 
                    ? `Showing location for ${stores.find(s => s.id === selectedStore)?.name}`
                    : 'Select a store to view its location on the map'
                  }
                </p>
                {selectedStore && (
                  <Button
                    href={`https://maps.google.com/?q=${stores.find(s => s.id === selectedStore)?.coordinates.lat},${stores.find(s => s.id === selectedStore)?.coordinates.lng}`}
                    target="_blank"
                    size="small"
                    className="mt-4"
                  >
                    Open in Google Maps
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="text-xl font-semibold text-foamico-black mb-2">
              {stores.length}+ Stores
            </h3>
            <p className="text-foamico-gray-600">
              Across major cities in India with more coming soon
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">🛏️</div>
            <h3 className="text-xl font-semibold text-foamico-black mb-2">
              Try Before You Buy
            </h3>
            <p className="text-foamico-gray-600">
              Experience all our mattress variants in comfortable trial rooms
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-semibold text-foamico-black mb-2">
              Expert Consultation
            </h3>
            <p className="text-foamico-gray-600">
              Get personalized recommendations from our sleep experts
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-foamico-lime-light rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foamico-black mb-4">
            Can&apos;t Visit a Store?
          </h2>
          <p className="text-lg text-foamico-gray-700 mb-6 max-w-2xl mx-auto">
            No worries! We offer free home delivery and installation across India. 
            Shop online with confidence backed by our 100-night trial period.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products" size="large">
              Shop Online
            </Button>
            <Button href="/products/compare" variant="outline" size="large">
              Compare Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}