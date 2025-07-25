// Placeholder image generator using SVG
export function generatePlaceholder(width: number, height: number, text: string): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width / 10, 48)}" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
        ${text.split('\n').map((line, i) => 
          `<tspan x="50%" dy="${i === 0 ? 0 : '1.2em'}">${line}</tspan>`
        ).join('')}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Define all placeholder images with their specifications
export const placeholderImages = {
  // Homepage
  'hero-banner-couple-sleeping-1920x800': {
    width: 1920,
    height: 800,
    text: 'Hero Banner\nCouple Sleeping\n1920x800'
  },
  'product-grid-sova-600x400': {
    width: 600,
    height: 400,
    text: 'Sova Product\n600x400'
  },
  'product-grid-ultima-600x400': {
    width: 600,
    height: 400,
    text: 'Ultima Product\n600x400'
  },
  'product-grid-natura-600x400': {
    width: 600,
    height: 400,
    text: 'Natura Product\n600x400'
  },
  'product-grid-marvel-600x400': {
    width: 600,
    height: 400,
    text: 'Marvel Product\n600x400'
  },
  'technology-orthosense-icon-200x200': {
    width: 200,
    height: 200,
    text: 'OrthoSense\n200x200'
  },
  'technology-iqs-icon-200x200': {
    width: 200,
    height: 200,
    text: 'IQS\n200x200'
  },
  'warranty-badge-25years-300x300': {
    width: 300,
    height: 300,
    text: '25 Years\nWarranty\n300x300'
  },
  
  // Product Images
  'sova-classic-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Sova Classic\n1200x800'
  },
  'sova-premium-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Sova Premium\n1200x800'
  },
  'sova-luxury-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Sova Luxury\n1200x800'
  },
  'ultima-classic-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Ultima Classic\n1200x800'
  },
  'ultima-premium-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Ultima Premium\n1200x800'
  },
  'ultima-luxury-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Ultima Luxury\n1200x800'
  },
  'natura-1-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Natura 1.0\n1200x800'
  },
  'natura-2-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Natura 2.0\n1200x800'
  },
  'marvel-hero-1200x800': {
    width: 1200,
    height: 800,
    text: 'Marvel\n1200x800'
  },
  'layer-diagram-generic-800x600': {
    width: 800,
    height: 600,
    text: 'Layer Diagram\n800x600'
  },
  
  // About Page
  'about-factory-interior-1200x600': {
    width: 1200,
    height: 600,
    text: 'Factory Interior\n1200x600'
  },
  'about-team-photo-1200x600': {
    width: 1200,
    height: 600,
    text: 'Team Photo\n1200x600'
  },
  'about-sustainability-icon-400x400': {
    width: 400,
    height: 400,
    text: 'Sustainability\n400x400'
  },
  
  // Blog
  'blog-sleep-science-thumbnail-600x400': {
    width: 600,
    height: 400,
    text: 'Sleep Science\n600x400'
  },
  'blog-mattress-care-thumbnail-600x400': {
    width: 600,
    height: 400,
    text: 'Mattress Care\n600x400'
  },
  'blog-hero-generic-1920x600': {
    width: 1920,
    height: 600,
    text: 'Blog Hero\n1920x600'
  }
} as const;

export function getPlaceholderImage(name: keyof typeof placeholderImages): string {
  const image = placeholderImages[name];
  return generatePlaceholder(image.width, image.height, image.text);
}