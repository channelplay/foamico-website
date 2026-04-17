# Foamico Mattress Website

A modern, responsive website for Foamico luxury mattresses built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Product Showcase**: Interactive product pages with layer visualization
- **Comparison Tool**: Compare up to 3 mattresses side-by-side
- **Store Locator**: Find nearest Foamico stores with interactive map
- **Blog System**: Static blog pages for SEO-optimized content
- **Animations**: Smooth transitions with Framer Motion
- **Analytics**: Google Analytics 4 integration (ID: G-3PWGFY1DF6)

## Project Structure

```
foamico-website/
├── app/                    # Next.js 14 app directory
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── resources/         # Blog and resources
│   ├── about/             # About us page
│   ├── find-store/        # Store locator
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Header, Footer, Navigation
│   ├── home/             # Homepage components
│   ├── product/          # Product-related components
│   └── store/            # Store locator components
├── data/                  # Static data files
│   ├── products.ts       # Product information
│   ├── stores.ts         # Store locations
│   └── blogs.ts          # Blog posts
├── lib/                   # Utility functions
└── public/               # Static assets
    └── images/           # Placeholder images
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Customization

### Replacing Images

All images are in `/public/images/` with descriptive names like:
- `hero-banner-couple-sleeping-1920x800.jpg`
- `product-grid-sova-600x400.jpg`

Simply replace these files with your actual images keeping the same filenames.

### Colors

The color palette is defined in `tailwind.config.ts`:
- Primary: Lime Green (#A4C639)
- Secondary: Charcoal Black (#1A1A1A)
- Additional colors for UI elements

### Content

- Product data: Edit `/data/products.ts`
- Store locations: Edit `/data/stores.ts`
- Blog posts: Edit `/data/blogs.ts`

## Key Features

### Product Pages
- Dynamic routing for product categories
- Interactive layer visualization
- Variant selection
- Support level indicators

### Comparison Tool
- Compare up to 3 products
- Side-by-side feature comparison
- Detailed specifications

### Store Locator
- Filter by city
- Store details with contact info
- Google Maps integration links

### Blog System
- Static blog pages
- SEO-optimized content
- Category organization

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animations
- **Google Analytics 4**: Analytics tracking

## Deployment

The project is optimized for deployment on Vercel:

```bash
vercel
```

Or use any Node.js hosting platform that supports Next.js.

## SEO Optimization

- Meta tags for all pages
- Open Graph tags
- Structured data ready
- Sitemap generation
- Clean URLs

## Performance

- Image optimization with Next.js Image
- Lazy loading
- Code splitting
- Static generation where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Foamico. All rights reserved.