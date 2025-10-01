import Image from 'next/image'
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
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
              65+ Years of Generation Innovation
            </h1>
          </div>

          {/* Image Sections */}
          <div className="space-y-8">
            {/* First Image - Company Roots Timeline */}
            <div className="w-full">
              <Image 
                src="/foamico-timeline-new.png" 
                alt="Foamico Company Timeline - From Roots 1960 to House of Brands 2025"
                width={1313}
                height={928}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Second Image - Why Choose Us */}
            <div className="w-full">
              <Image 
                src="/why-choose-us.png" 
                alt="Why Should You Choose Us - 65+ Years of Legacy, European Comfort, Italian Craft"
                width={4094}
                height={1012}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}