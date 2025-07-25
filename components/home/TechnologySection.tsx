import Image from 'next/image'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { getPlaceholderImage } from '@/lib/placeholder-images'

const technologies = [
  {
    id: 'orthosense',
    name: 'OrthoSense® Technology',
    description: 'Specially designed for Indian body types, providing optimal spinal alignment and relief from arthritis-related pain.',
    icon: 'technology-orthosense-icon-200x200',
    features: ['Spinal Alignment', 'Muscle Recovery', 'Arthritis Relief']
  },
  {
    id: 'iqs',
    name: 'IQS™ - Intelligent Quality Sleep',
    description: 'Proprietary technology that adapts to pressure points and sleep movements for optimized sleep performance.',
    icon: 'technology-iqs-icon-200x200',
    features: ['Pressure Adaptation', 'Movement Response', 'Sleep Optimization']
  },
  {
    id: 'natural-latex',
    name: '100% Natural Latex',
    description: 'Plant-based, organic latex that offers superior breathability, pressure relief, and natural resilience.',
    icon: 'technology-orthosense-icon-200x200',
    features: ['Eco-friendly', 'Breathable', 'Hypoallergenic']
  }
]

export default function TechnologySection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foamico-black mb-4">
            Advanced Sleep Technology
          </h2>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Combining European craftsmanship with technology designed specifically for Indian needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <Card key={tech.id} className="text-center" hover>
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src={getPlaceholderImage(tech.icon as keyof typeof import('@/lib/placeholder-images').placeholderImages)}
                  alt={`${tech.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foamico-black mb-3">
                {tech.name}
              </h3>
              
              <p className="text-foamico-gray-600 mb-6">
                {tech.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {tech.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-sm px-3 py-1 bg-foamico-lime-light text-foamico-lime-dark rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-foamico-lime rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={getPlaceholderImage('warranty-badge-25years-300x300')}
                  alt="25 Year Warranty"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">25 Year Warranty</h4>
              <p className="opacity-90">Industry-leading warranty on select products</p>
            </div>
            
            <div>
              <div className="text-5xl mb-4">🇩🇪</div>
              <h4 className="text-2xl font-bold mb-2">German Engineering</h4>
              <p className="opacity-90">Eurotop stitching & Orthoseam support technology</p>
            </div>
            
            <div>
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-2xl font-bold mb-2">Eco-Friendly</h4>
              <p className="opacity-90">100% natural latex from sustainable sources</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}