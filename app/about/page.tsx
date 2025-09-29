import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'About Us | Foamico - Sleep Engineering Excellence',
  description: 'Discover the story behind Foamico\'s innovative sleep engineering. Learn about our commitment to scientific research and premium mattress craftsmanship.',
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#816842' }} className="min-h-screen">
      <div className="py-8 lg:py-12">
        <Container>
          {/* Top Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              65+ Years of Generation Innovation
            </h1>
          </div>

          {/* Image Sections */}
          <div className="space-y-8">
            {/* First Image - Company Roots Timeline */}
            <div className="w-full">
              <img 
                src="/foamico-timeline.png" 
                alt="Foamico Company Timeline - From Roots 1960 to House of Brands 2025"
                className="w-full h-auto"
              />
            </div>

            {/* Second Image - Why Choose Us */}
            <div className="w-full">
              <img 
                src="/why-choose-us.png" 
                alt="Why Should You Choose Us - 65+ Years of Legacy, European Comfort, Italian Craft"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}