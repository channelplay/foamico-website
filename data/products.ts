export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  variants: Variant[]
  features: string[]
  technology: string[]
  warranty: number
  supportLevel: 'soft' | 'medium' | 'firm' | 'plush'
}

export interface Variant {
  id: string
  name: string
  price?: number
  originalPrice?: number
  size?: string
  thickness?: string
  firmness?: string
  layers: Layer[]
}

export interface Layer {
  name: string
  description: string
  material: string
  thickness?: string
}

export const products: Product[] = [
  {
    id: 'sova',
    name: 'Sova',
    category: 'Heavy Feel',
    tagline: 'Classic comfort with superior support',
    description: 'Experience the perfect balance of firmness and comfort with Sova mattresses, featuring Bondtech Support Foam for enhanced orthopedic support.',
    variants: [
      {
        id: 'sova-classic',
        name: 'Classic',
        price: 24999,
        originalPrice: 34999,
        size: 'Queen (60" x 78")',
        thickness: '6 inches',
        firmness: 'Firm',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, stretchable fabric ensuring breathability and durability', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Cushioned comfort layer offering enhanced softness', material: 'Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Conforms to body contours, reducing pressure points', material: 'Memory Foam' },
          { name: 'Bondtech Support Foam', description: 'High-density foam for superior firmness and orthopedic support', material: 'Support Foam' },
          { name: 'Support Foam Quilt', description: 'Additional cushioning for enhanced comfort', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'sova-premium',
        name: 'Premium',
        price: 29999,
        originalPrice: 39999,
        size: 'Queen (60" x 78")',
        thickness: '8 inches',
        firmness: 'Medium-Firm',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Premium soft, stretchable fabric', material: 'Luxeknit' },
          { name: 'Memorest Foam Quilt', description: 'Enhanced memory foam comfort layer', material: 'Memory Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Advanced pressure point relief', material: 'Memory Foam' },
          { name: 'Bondtech Support Foam', description: 'Superior orthopedic support', material: 'Support Foam' },
          { name: 'Support Foam Quilt', description: 'Luxury cushioning layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'sova-luxury',
        name: 'Luxury',
        price: 34999,
        originalPrice: 44999,
        size: 'Queen (60" x 78")',
        thickness: '10 inches',
        firmness: 'Medium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Ultra-premium fabric with enhanced durability', material: 'Luxeknit' },
          { name: 'Memorest Foam Quilt', description: 'Luxury memory foam quilting', material: 'Memory Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Premium contouring support', material: 'Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex for breathability and support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Ultimate luxury comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Smart Layers', 'Relieves Backpain', 'Anti-allergy', 'Comfortable', 'Breathable', 'Motion Control'],
    technology: ['OrthoSense®', 'Next-Gen UMS Technology Foam'],
    warranty: 10,
    supportLevel: 'firm'
  },
  {
    id: 'ultima',
    name: 'Ultima',
    category: 'Light Feel',
    tagline: 'Curvy, gentle and feminine. The kind of comfort that walks in slow motion.',
    description: 'Ultima mattresses blend cloud-like comfort with Zero G Latex Foam, perfect for those who prefer a lighter, more adaptive sleeping surface.',
    variants: [
      {
        id: 'ultima-classic',
        name: 'Classic',
        price: 22999,
        originalPrice: 32999,
        size: 'Queen (60" x 78")',
        thickness: '6 inches',
        firmness: 'Soft',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Breathable and luxurious surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Gentle contouring support', material: 'Foam Quilt' },
          { name: 'Cloud Sense Foam', description: 'Plush adaptive layer for cloud-like comfort', material: 'Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Firm supportive core with natural latex', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Cozy sleeping experience', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'ultima-premium',
        name: 'Premium',
        price: 27999,
        originalPrice: 37999,
        size: 'Queen (60" x 78")',
        thickness: '8 inches',
        firmness: 'Medium-Soft',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Premium breathable surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Enhanced softness layer', material: 'Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Body contouring technology', material: 'Memory Foam' },
          { name: 'Cloud Sense Foam', description: 'Adaptive comfort layer', material: 'Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex support core', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Premium comfort finish', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'ultima-luxury',
        name: 'Luxury',
        price: 32999,
        originalPrice: 42999,
        size: 'Queen (60" x 78")',
        thickness: '10 inches',
        firmness: 'Plush',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Ultra-luxury surface treatment', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Luxury quilted comfort', material: 'Foam Quilt' },
          { name: 'Memorest Foam', description: 'Premium memory technology', material: 'Memory Foam' },
          { name: 'Cloud Sense Foam', description: 'Cloud-like adaptive layer', material: 'Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Premium natural latex core', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Ultimate luxury finish', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Smart Layers', 'Relieves Backpain', 'Anti-allergy', 'Comfortable', 'Breathable', 'Motion Control'],
    technology: ['OrthoSense®', 'Next-Gen UMS Technology Foam', 'Pine Cone Latex'],
    warranty: 25,
    supportLevel: 'plush'
  },
  {
    id: 'natura',
    name: 'Natura',
    category: 'Natural & Earthy',
    tagline: 'Earthy, breathable and foam free. For those who like their sleep clean and quiet.',
    description: 'Natura brings you closer to nature with Natural Pincore Latex that adapts to your body contours while maintaining cool, breathable comfort.',
    variants: [
      {
        id: 'natura-1',
        name: 'Natura 1.0',
        price: 35999,
        originalPrice: 45999,
        size: 'Queen (60" x 78")',
        thickness: '8 inches',
        firmness: 'Medium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Natural breathable surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Gentle support layer', material: 'Foam Quilt' },
          { name: 'Natural Pincore Latex', description: 'Naturally cool and responsive', material: 'Natural Latex' },
          { name: 'Zero G Latex Foam', description: 'Supportive latex core', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Natural comfort finish', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'natura-2',
        name: 'Natura 2.0',
        price: 42999,
        originalPrice: 52999,
        size: 'Queen (60" x 78")',
        thickness: '10 inches',
        firmness: 'Medium-Firm',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Enhanced natural surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Advanced comfort quilting', material: 'Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Pressure relief technology', material: 'Memory Foam' },
          { name: 'Natural Pincore Latex', description: 'Premium natural latex layer', material: 'Natural Latex' },
          { name: 'Zero G Latex Foam', description: 'Enhanced latex support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Luxury natural finish', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['100% Natural Latex', 'Eco-friendly', 'Anti-allergy', 'Temperature Regulation', 'Breathable', 'Motion Control'],
    technology: ['OrthoSense®', 'Natural Pincore Technology', 'Zero G Latex'],
    warranty: 25,
    supportLevel: 'medium'
  },
  {
    id: 'marvel',
    name: 'Marvel',
    category: 'Indian Rivers Inspired',
    tagline: 'A mattress that bends, stretches and supports like the hero of a nightly soap.',
    description: 'Marvel mattresses feature innovative Insignia Velio Foam with CNC Cut technology for enhanced airflow and precise pressure relief.',
    variants: [
      {
        id: 'marvel',
        name: 'Marvel',
        price: 39999,
        originalPrice: 49999,
        size: 'Queen (60" x 78")',
        thickness: '10 inches',
        firmness: 'Medium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Premium breathable surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilt', description: 'Adaptive comfort layer', material: 'Foam Quilt' },
          { name: 'Pulse Core Foam', description: 'Body contouring support', material: 'Memory Foam' },
          { name: 'Insignia Velio Foam', description: 'CNC Cut foam for enhanced airflow and cooling', material: 'Advanced Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex support core', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilt', description: 'Luxury comfort finish', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Advanced Cooling', 'CNC Cut Technology', 'Anti-allergy', 'Superior Airflow', 'Breathable', 'Motion Control'],
    technology: ['OrthoSense®', 'Insignia Velio Foam', 'CNC Cut Technology'],
    warranty: 25,
    supportLevel: 'medium'
  }
]

export function getProductByCategory(category: string): Product | undefined {
  return products.find(p => p.id === category.toLowerCase())
}

export function getProductVariant(category: string, variantId: string): Variant | undefined {
  const product = getProductByCategory(category)
  return product?.variants.find(v => v.id === variantId)
}