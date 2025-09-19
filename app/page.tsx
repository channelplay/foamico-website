import HeroSection from '@/components/home/HeroSection'
import ProductGrid from '@/components/product/ProductGrid'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-6">
              Our Mattress Collection
            </h2>
            <p className="text-xl text-foamico-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of comfort and support with our 
              premium mattress range designed for every sleep preference.
            </p>
          </div>
          <ProductGrid />
        </Container>
      </section>

      <TestimonialsSection />
      <Footer />
    </>
  )
}
