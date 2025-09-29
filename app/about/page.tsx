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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About Foamico
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Pioneers in sleep engineering, crafting premium mattresses through 
              innovative foam technology and scientific research.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Our Story */}
            <section className="bg-white/10 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize sleep through scientific innovation, 
                Foamico has been at the forefront of mattress engineering for over 65+ years. 
                Our journey began with a simple belief: that everyone deserves perfectly 
                engineered sleep.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Today, we continue to push the boundaries of comfort and support through 
                advanced foam technology, rigorous testing, and a deep understanding of 
                sleep science.
              </p>
            </section>

            {/* Our Mission */}
            <section className="bg-white/10 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To engineer the perfect sleep experience through innovative materials, 
                scientific methodology, and uncompromising quality. Every mattress we create 
                represents our commitment to transforming how the world sleeps.
              </p>
            </section>

            {/* Our Values */}
            <section className="bg-white/10 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                  <p className="text-white/90">
                    Continuously advancing sleep technology through research and development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
                  <p className="text-white/90">
                    Uncompromising standards in materials, craftsmanship, and durability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scientific Approach</h3>
                  <p className="text-white/90">
                    Evidence-based design backed by sleep research and testing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
                  <p className="text-white/90">
                    Responsible sourcing and eco-friendly manufacturing processes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Customer Focus</h3>
                  <p className="text-white/90">
                    Dedicated to delivering exceptional sleep experiences for every customer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                  <p className="text-white/90">
                    Striving for perfection in every aspect of our business.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white/10 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-white/90 text-lg mb-8">
                Ready to experience sleep, engineered? Contact us to learn more about 
                our premium mattress collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/products" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Products
                </a>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}