# Overview

The Foamico Mattress Website is a modern, responsive website for luxury mattresses built with Next.js 14, TypeScript, and Tailwind CSS. The project showcases premium mattress collections with interactive product pages, layer visualization, comparison tools, and a store locator. The website focuses on delivering a luxury brand experience while being technically robust and performance-optimized.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development
- **Styling**: Tailwind CSS with custom luxury color palette and typography
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Typography**: Custom font stack with Inter and Playfair Display for luxury feel
- **Component Structure**: Modular component architecture with reusable UI components in `/components/ui/`

## Page Structure
- **App Router**: Utilizes Next.js 14 app directory structure for file-based routing
- **Static Pages**: Product pages, about, contact, resources/blog with static generation
- **Dynamic Routes**: Product categories (`[category]`) and blog posts (`[slug]`)
- **Layout System**: Centralized header/footer with consistent navigation

## Data Management
- **Static Data**: Product information, store locations, and blog content stored in TypeScript files
- **Product System**: Structured product data with variants, layers, and specifications
- **Content Management**: Blog posts and resources managed through static TypeScript files

## Design System
- **Color Palette**: Luxury-focused colors including ivory, champagne, gold, and warm earth tones
- **Component Library**: Reusable UI components (Button, Card, Badge, Container) with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animation System**: Coordinated motion design using Framer Motion

## Performance Optimizations
- **Image Optimization**: Next.js Image component with WebP/AVIF formats
- **Bundle Optimization**: Experimental package imports optimization for Framer Motion
- **Lazy Loading**: Component-level lazy loading with viewport-based animations

## Development Environment
- **TypeScript**: Full type safety across the application
- **ESLint**: Code quality and consistency enforcement
- **Development Server**: Configured for Replit environment with custom headers and origins

# External Dependencies

## Core Framework Dependencies
- **Next.js 15.4.4**: React framework for production applications
- **React 19.1.0**: Frontend library for user interfaces
- **TypeScript**: Static type checking and enhanced developer experience

## UI and Animation Libraries
- **Framer Motion 12.23.9**: Animation library for smooth transitions and interactions
- **Lucide React 0.536.0**: Icon library for consistent iconography
- **Tailwind CSS 3.4.17**: Utility-first CSS framework for styling

## Analytics and Tracking
- **Google Analytics 4**: Website analytics with measurement ID G-3PWGFY1DF6
- **Custom tracking**: Event tracking for user interactions and conversions

## Development Tools
- **Autoprefixer**: CSS vendor prefixing for cross-browser compatibility
- **PostCSS**: CSS processing and transformation
- **ESLint**: Code linting with Next.js specific rules

## Placeholder System
- **Custom image placeholders**: SVG-based placeholder generation for development
- **Static assets**: Organized placeholder images for products, blog posts, and UI elements

## Hosting Configuration
- **Replit Environment**: Configured for Replit hosting with custom headers and development settings
- **Production Ready**: Optimized build configuration for deployment