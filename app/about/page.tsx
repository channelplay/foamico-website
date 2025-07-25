import { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getPlaceholderImage } from '@/lib/placeholder-images'

export const metadata: Metadata = {
  title: 'About Us | Foamico - Luxury Mattresses',
  description: 'Learn about Foamico\'s journey in creating the perfect blend of natural materials, European craftsmanship, and Indian innovation.',
}

export default function AboutPage() {
  const milestones = [
    { year: '2010', title: 'Foundation', description: 'Started with a vision to revolutionize sleep in India' },
    { year: '2015', title: 'German Partnership', description: 'Collaborated with European manufacturers for advanced technology' },
    { year: '2018', title: 'OrthoSense® Launch', description: 'Developed technology specifically for Indian body types' },
    { year: '2020', title: '100% Natural', description: 'Achieved complete natural latex production' },
    { year: '2024', title: 'Pan-India Presence', description: 'Expanded to major cities across India' },
  ]

  const values = [
    {
      icon: '🌿',
      title: 'Sustainability',
      description: 'Committed to eco-friendly materials and sustainable manufacturing practices'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Continuous research and development for better sleep solutions'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: '25-year warranty backing our confidence in product quality'
    },
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'Uncompromising standards in materials and craftsmanship'
    }
  ]

  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-6">
            Crafting Perfect Sleep Since 2010
          </h1>
          <p className="text-xl text-foamico-gray-600 max-w-3xl mx-auto">
            At Foamico, we believe that great sleep is the foundation of a great life. 
            Our journey began with a simple mission: to create mattresses that understand 
            and adapt to the unique needs of Indian sleepers.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foamico-black mb-6">Our Story</h2>
            <div className="space-y-4 text-foamico-gray-700">
              <p>
                Foamico was born from the realization that international mattress designs 
                weren&apos;t meeting the specific needs of Indian consumers. Our founders, 
                combining decades of experience in sleep science and manufacturing, 
                set out to create something different.
              </p>
              <p>
                We partnered with German engineers to bring cutting-edge technology like 
                Eurotop stitching and Orthoseam support to India. But we didn&apos;t stop there. 
                We developed OrthoSense®, a proprietary technology designed specifically 
                for Indian body types and climate conditions.
              </p>
              <p>
                Today, Foamico stands as a testament to what happens when you combine 
                natural materials, scientific innovation, and a deep understanding of 
                local needs. Every mattress we create is a promise of better sleep and 
                better mornings.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={getPlaceholderImage('about-factory-interior-1200x600')}
              alt="Foamico factory interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foamico-black text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-foamico-lime-light"></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center mb-8 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="inline-block">
                    <h3 className="text-2xl font-bold text-foamico-lime mb-2">
                      {milestone.year}
                    </h3>
                    <h4 className="text-lg font-semibold text-foamico-black mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-foamico-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foamico-lime rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foamico-black text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center" hover>
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foamico-black mb-3">
                  {value.title}
                </h3>
                <p className="text-foamico-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foamico-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
              A dedicated team of sleep experts, engineers, and craftspeople working 
              together to deliver the perfect sleep experience.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={getPlaceholderImage('about-team-photo-1200x600')}
              alt="Foamico team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sustainability */}
        <div className="bg-foamico-lime-light rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foamico-black mb-6">
                Committed to Sustainability
              </h2>
              <p className="text-foamico-gray-700 mb-6">
                We believe in creating products that are good for you and good for the planet. 
                Our commitment to sustainability drives every decision we make.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">✓</span>
                  <span className="text-foamico-gray-700">100% natural latex from sustainable sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">✓</span>
                  <span className="text-foamico-gray-700">Zero harmful chemicals or synthetic materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">✓</span>
                  <span className="text-foamico-gray-700">Recyclable packaging and minimal waste production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">✓</span>
                  <span className="text-foamico-gray-700">Carbon-neutral shipping initiatives</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src={getPlaceholderImage('about-sustainability-icon-400x400')}
                alt="Sustainability"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foamico-black mb-6">
            Experience the Foamico Difference
          </h2>
          <p className="text-lg text-foamico-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our stores to feel the quality and comfort of our mattresses firsthand. 
            Our sleep experts are ready to help you find your perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products" size="large">
              Explore Our Products
            </Button>
            <Button href="/find-store" variant="outline" size="large">
              Visit a Store
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}