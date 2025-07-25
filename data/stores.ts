export interface Store {
  id: string
  name: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
  email: string
  timings: string
  coordinates: {
    lat: number
    lng: number
  }
  features: string[]
}

export const stores: Store[] = [
  {
    id: 'delhi-cp',
    name: 'Foamico Connaught Place',
    address: 'N-12, Connaught Place, Inner Circle',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '+91 11 4123 4567',
    email: 'cp@foamico.com',
    timings: 'Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 7:00 PM',
    coordinates: { lat: 28.6315, lng: 77.2167 },
    features: ['Trial Rooms', 'Sleep Consultation', 'Home Delivery', 'Easy EMI']
  },
  {
    id: 'delhi-saket',
    name: 'Foamico Select City Walk',
    address: 'A-3, Select City Walk Mall, Saket',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110017',
    phone: '+91 11 4123 4568',
    email: 'saket@foamico.com',
    timings: 'Mon-Sun: 10:00 AM - 10:00 PM',
    coordinates: { lat: 28.5287, lng: 77.2195 },
    features: ['Trial Rooms', 'Sleep Consultation', 'Instant Delivery', 'Parking']
  },
  {
    id: 'mumbai-bandra',
    name: 'Foamico Bandra',
    address: '221, Linking Road, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    phone: '+91 22 4123 4567',
    email: 'bandra@foamico.com',
    timings: 'Mon-Sat: 10:30 AM - 8:30 PM, Sun: 11:00 AM - 8:00 PM',
    coordinates: { lat: 19.0596, lng: 72.8295 },
    features: ['Trial Rooms', 'Sleep Consultation', 'Home Delivery', 'Valet Parking']
  },
  {
    id: 'mumbai-powai',
    name: 'Foamico Powai',
    address: 'Hiranandani Gardens, Main Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400076',
    phone: '+91 22 4123 4568',
    email: 'powai@foamico.com',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    coordinates: { lat: 19.1176, lng: 72.9060 },
    features: ['Large Display', 'Kids Section', 'Cafe', 'Home Delivery']
  },
  {
    id: 'bangalore-indiranagar',
    name: 'Foamico Indiranagar',
    address: '100 Feet Road, Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560038',
    phone: '+91 80 4123 4567',
    email: 'indiranagar@foamico.com',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    coordinates: { lat: 12.9716, lng: 77.6412 },
    features: ['Trial Rooms', 'Sleep Lab', 'Expert Consultation', 'Coffee Bar']
  },
  {
    id: 'bangalore-whitefield',
    name: 'Foamico Forum Mall',
    address: 'Forum Neighbourhood Mall, Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560066',
    phone: '+91 80 4123 4568',
    email: 'whitefield@foamico.com',
    timings: 'Mon-Sun: 10:00 AM - 10:00 PM',
    coordinates: { lat: 12.9698, lng: 77.7500 },
    features: ['Large Display', 'Kids Play Area', 'Parking', 'Weekend Offers']
  },
  {
    id: 'chennai-tnagar',
    name: 'Foamico T. Nagar',
    address: 'Pondy Bazaar, T. Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600017',
    phone: '+91 44 4123 4567',
    email: 'tnagar@foamico.com',
    timings: 'Mon-Sat: 10:00 AM - 8:30 PM, Sun: 11:00 AM - 8:00 PM',
    coordinates: { lat: 13.0418, lng: 80.2341 },
    features: ['Trial Rooms', 'Tamil Support', 'Home Delivery', 'Exchange Offers']
  },
  {
    id: 'pune-koregaon',
    name: 'Foamico Koregaon Park',
    address: 'North Main Road, Koregaon Park',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    phone: '+91 20 4123 4567',
    email: 'koregaon@foamico.com',
    timings: 'Mon-Sun: 10:30 AM - 8:30 PM',
    coordinates: { lat: 18.5362, lng: 73.8936 },
    features: ['Boutique Store', 'Personal Shopping', 'Cafe', 'Art Gallery']
  }
]

export function getStoresByCity(city: string): Store[] {
  return stores.filter(store => store.city.toLowerCase() === city.toLowerCase())
}

export function getStoreById(id: string): Store | undefined {
  return stores.find(store => store.id === id)
}