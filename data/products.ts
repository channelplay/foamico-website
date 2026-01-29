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
}

export interface Variant {
  id: string
  name: string
  price?: number
  originalPrice?: number
  size?: string
  thickness?: string
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
    id: 'resto',
    name: 'Resto',
    category: 'HR Foam Mattress',
    tagline: 'Reliable support with Enduro HR Foam for everyday comfort.',
    description: 'Resto mattresses deliver dependable support with Enduro HR Foam, designed for consistent comfort night after night.',
    variants: [
      {
        id: 'resto-classic',
        name: 'Classic',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Pro Nexa Foam', description: 'Body support layer', material: 'Support Foam' },
          { name: 'Enduro HR Foam', description: 'High resilience main support', material: 'HR Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'resto-premium',
        name: 'Premium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Cosmic Byte Foam', description: 'Advanced body support', material: 'Support Foam' },
          { name: 'Enduro HR Foam', description: 'High resilience main support', material: 'HR Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'resto-luxury',
        name: 'Luxury',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Memorest Foam + Cosmic Byte Foam', description: 'Dual body support layers', material: 'Memory + Support Foam' },
          { name: 'Enduro HR Foam', description: 'High resilience main support', material: 'HR Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Enduro HR Foam', 'Aeroflex Quilting', 'Durable Support', 'Comfortable', 'Breathable'],
    technology: ['Enduro HR Foam', 'Pro Nexa Foam'],
    warranty: 10,
  },
  {
    id: 'sova',
    name: 'Sova',
    category: 'Orthopedic Mattress',
    tagline: 'Classic comfort with superior orthopedic support.',
    description: 'Experience the perfect balance of firmness and comfort with Sova mattresses, featuring Posture Bond Foam for enhanced orthopedic support.',
    variants: [
      {
        id: 'sova-classic',
        name: 'Classic',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Plush Core Latex Foam', description: 'Latex body support layer', material: 'Latex Foam' },
          { name: 'Posture Bond Foam', description: 'Orthopedic main support', material: 'Support Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'sova-premium',
        name: 'Premium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Cosmic Byte Foam + Plush Core Latex Foam', description: 'Dual body support layers', material: 'Foam + Latex' },
          { name: 'Posture Bond Foam', description: 'Orthopedic main support', material: 'Support Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'sova-luxury',
        name: 'Luxury',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Memorest Foam + Cosmic Byte Foam + Plush Core Latex Foam', description: 'Triple body support layers', material: 'Memory + Foam + Latex' },
          { name: 'Posture Bond Foam', description: 'Orthopedic main support', material: 'Support Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Posture Bond Foam', 'Plush Core Latex', 'Relieves Backpain', 'Comfortable', 'Breathable', 'Motion Control'],
    technology: ['Posture Bond Foam', 'Plush Core Latex Foam'],
    warranty: 15,
  },
  {
    id: 'luma',
    name: 'Luma',
    category: 'Hybrid Spring Mattress',
    tagline: 'Hybrid pocket spring support with premium foam comfort.',
    description: 'Luma mattresses combine Hybrid Pocket Spring technology with premium foam layers for responsive support and bounce.',
    variants: [
      {
        id: 'luma-classic',
        name: 'Classic',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Pro Nexa Foam', description: 'Body support layer', material: 'Support Foam' },
          { name: 'Hybrid Pocket Spring', description: 'Independent spring support', material: 'Pocket Spring' },
          { name: 'Vector Base Felt + Soft Foam with Quilting', description: 'Reinforced bottom layer', material: 'Felt + Foam' }
        ]
      },
      {
        id: 'luma-premium',
        name: 'Premium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Pro Nexa Foam', description: 'Body support layer', material: 'Support Foam' },
          { name: 'Hybrid Pocket Spring', description: 'Independent spring support', material: 'Pocket Spring' },
          { name: 'Vector Base Felt + Soft Foam with Quilting', description: 'Reinforced bottom layer', material: 'Felt + Foam' }
        ]
      },
      {
        id: 'luma-luxury',
        name: 'Luxury',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Memorest Foam + Pro Nexa Foam', description: 'Dual body support layers', material: 'Memory + Support Foam' },
          { name: 'Hybrid Pocket Spring', description: 'Independent spring support', material: 'Pocket Spring' },
          { name: 'Vector Base Felt + Soft Foam with Quilting', description: 'Reinforced bottom layer', material: 'Felt + Foam' }
        ]
      }
    ],
    features: ['Hybrid Pocket Spring', 'Pro Nexa Foam', 'Responsive Bounce', 'Comfortable', 'Breathable', 'Motion Isolation'],
    technology: ['Hybrid Pocket Spring', 'Pro Nexa Foam'],
    warranty: 7,
  },
  {
    id: 'ultima',
    name: 'Ultima',
    category: 'Latex Comfort Mattress',
    tagline: 'Luxuriously soft with adaptive comfort for cloud-like sleep.',
    description: 'Ultima mattresses blend cloud-like comfort with Zero G Latex Foam, perfect for those who prefer a lighter, more adaptive sleeping surface.',
    variants: [
      {
        id: 'ultima-classic',
        name: 'Classic',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Breathable and luxurious surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Cloud Sense Foam', description: 'Plush adaptive body support', material: 'Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex main support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'ultima-premium',
        name: 'Premium',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Breathable and luxurious surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Cosmic Byte Foam + Cloud Sense Foam', description: 'Dual body support layers', material: 'Foam + Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex main support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'ultima-luxury',
        name: 'Luxury',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Breathable and luxurious surface', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Memorest Foam + Cosmic Byte Foam + Cloud Sense Foam', description: 'Triple body support layers', material: 'Memory + Foam + Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex main support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Zero G Latex', 'Cloud Sense Foam', 'Anti-allergy', 'Comfortable', 'Breathable', 'Motion Control'],
    technology: ['Zero G Latex Foam', 'Cloud Sense Foam'],
    warranty: 25,
  },
  {
    id: 'natura',
    name: 'Natura',
    category: 'Natural Latex Mattress',
    tagline: 'Premium natural latex for pure, healthy sleep.',
    description: 'Natura mattresses use natural latex foams for eco-friendly, breathable, and durable sleep support.',
    variants: [
      {
        id: 'natura-1',
        name: '1.0',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: 'Pincore Latex Foam + Cloud Sense Foam', description: 'Natural latex body support', material: 'Latex + Memory Foam' },
          { name: 'Zero G Latex Foam', description: 'Natural latex main support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'natura-2',
        name: '2.0',
        layers: [
          { name: 'Super Plush Luxeknit Fabric', description: 'Soft, breathable top fabric', material: 'Luxeknit' },
          { name: 'Aeroflex Foam Quilting', description: 'Cushioned comfort layer', material: 'Foam Quilt' },
          { name: '7 Zone Latex Foam', description: 'Zoned latex body support', material: 'Natural Latex' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Natural Latex', 'Pincore Latex', '7 Zone Support', 'Eco-friendly', 'Breathable', 'Durable'],
    technology: ['Pincore Latex Foam', '7 Zone Latex Foam', 'Zero G Latex Foam'],
    warranty: 25,
  },
  {
    id: 'riva',
    name: 'Riva',
    category: 'Italian Luxury Mattress',
    tagline: 'Italian-crafted luxury with premium materials for ultimate comfort.',
    description: 'Riva mattresses bring Italian craftsmanship with UltraLuxe Adaptive Knit Fabric and proprietary foam technologies.',
    variants: [
      {
        id: 'riva-1000',
        name: '1000',
        layers: [
          { name: 'UltraLuxe Adaptive Knit Fabric', description: 'Premium Italian top fabric', material: 'Adaptive Knit' },
          { name: 'NubeSoave™', description: 'Cloud-soft comfort layer', material: 'Premium Foam' },
          { name: 'Struttura Forte™', description: 'Structural body support', material: 'Support Foam' },
          { name: 'FondoCore Italia™', description: 'Italian-engineered main support', material: 'Core Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'riva-2000',
        name: '2000',
        layers: [
          { name: 'UltraLuxe Adaptive Knit Fabric', description: 'Premium Italian top fabric', material: 'Adaptive Knit' },
          { name: 'SetaComfort™', description: 'Silk-like comfort layer', material: 'Premium Foam' },
          { name: 'NubeSoave™ + Struttura Forte™', description: 'Dual body support layers', material: 'Premium + Support Foam' },
          { name: 'FondoCore Italia™', description: 'Italian-engineered main support', material: 'Core Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      },
      {
        id: 'riva-3000',
        name: '3000',
        layers: [
          { name: 'UltraLuxe Adaptive Knit Fabric', description: 'Premium Italian top fabric', material: 'Adaptive Knit' },
          { name: 'SetaComfort™', description: 'Silk-like comfort layer', material: 'Premium Foam' },
          { name: 'LussoMorbido™ + NubeSoave™ + Struttura Forte™', description: 'Triple body support layers', material: 'Premium Foam' },
          { name: 'FondoCore Italia™', description: 'Italian-engineered main support', material: 'Core Foam' },
          { name: 'Soft Foam with Quilting', description: 'Bottom comfort layer', material: 'Foam Quilt' }
        ]
      }
    ],
    features: ['Italian Craftsmanship', 'UltraLuxe Fabric', 'NubeSoave™', 'SetaComfort™', 'FondoCore Italia™', 'Premium Materials'],
    technology: ['NubeSoave™', 'SetaComfort™', 'Struttura Forte™', 'FondoCore Italia™'],
    warranty: 30,
  }
]

export function getProductByCategory(category: string): Product | undefined {
  return products.find(p => p.id === category.toLowerCase())
}

export function getProductVariant(category: string, variantId: string): Variant | undefined {
  const product = getProductByCategory(category)
  return product?.variants.find(v => v.id === variantId)
}