import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import { delhiStores } from '@/data/delhiStores'

export const metadata: Metadata = {
  title: 'Mattress in Delhi | Foam Mattress Stores & Showrooms | Foamico',
  description: 'Looking for foam mattress in Delhi? Visit Foamico mattress stores in Delhi for orthopedic, memory foam, latex & hybrid mattresses. 10 mattress showrooms in Delhi NCR with expert guidance.',
  keywords: 'mattress in delhi, foam mattress in delhi, mattress stores in delhi, mattress shop in delhi, mattress showroom in delhi, foamico mattress in delhi, orthopedic foam mattress, memory foam mattress, latex mattress, hybrid mattress, back pain mattress delhi',
  openGraph: {
    title: 'Mattress in Delhi | Foam Mattress Stores & Showrooms | Foamico',
    description: 'Looking for foam mattress in Delhi? Visit Foamico mattress stores in Delhi for orthopedic, memory foam, latex & hybrid mattresses. 10 mattress showrooms across Delhi NCR.',
    type: 'website',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://foamico.com/#organization',
      name: 'Foamico Mattress Delhi',
      description: 'Premium foam mattress manufacturer with authorized mattress stores across Delhi NCR',
      url: 'https://foamico.com/mattress-in-delhi',
      telephone: '+917496982886',
      areaServed: {
        '@type': 'City',
        name: 'Delhi',
      },
      priceRange: '$$',
    },
    {
      '@type': 'ItemList',
      itemListElement: delhiStores.map((store, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Store',
          name: store.name,
          address: {
            '@type': 'PostalAddress',
            streetAddress: store.address,
            addressLocality: 'Delhi',
            addressCountry: 'IN',
          },
          telephone: `+91${store.phone}`,
        },
      })),
    },
  ],
}

// Product ranges data with SEO-optimized descriptions
const productRanges = [
  {
    name: 'Resto',
    description: 'Orthopedic foam mattress for back pain relief and posture support',
    href: '/products/restoclassic',
    keywords: 'ortho mattress, back pain mattress',
  },
  {
    name: 'Sova',
    description: 'HR foam mattress with balanced medium firm comfort',
    href: '/products/sovaclassic',
    keywords: 'HR foam mattress, medium firm mattress',
  },
  {
    name: 'Luma',
    description: 'Memory foam mattress with pressure relief technology',
    href: '/products/lumaclassic',
    keywords: 'memory foam mattress, pressure relief mattress',
  },
  {
    name: 'Ultima',
    description: 'Pocket spring hybrid mattress for motion isolation',
    href: '/products/ultimaclassic',
    keywords: 'pocket spring mattress, hybrid mattress',
  },
  {
    name: 'Natura',
    description: '100% natural latex mattress for eco-conscious sleepers',
    href: '/products/natura1',
    keywords: 'latex mattress, natural mattress',
  },
  {
    name: 'Riva',
    description: 'Durable PU foam mattress at affordable prices',
    href: '/products/riva1000',
    keywords: 'PU foam mattress, durable mattress',
  },
]

// Mattress types data
const mattressTypes = [
  {
    type: 'Orthopedic Foam Mattress',
    description: 'Engineered for spinal alignment and back pain relief. Our Foamico orthopedic mattress range provides firm support that keeps your spine neutral throughout the night.',
    benefits: ['Back pain relief', 'Posture correction', 'Firm support', 'Durable construction'],
    recommended: 'Resto Series',
    href: '/products/restoclassic',
  },
  {
    type: 'Memory Foam Mattress',
    description: 'Contouring comfort that adapts to your body shape. Memory foam mattresses provide excellent pressure relief and are ideal for side sleepers.',
    benefits: ['Pressure point relief', 'Body contouring', 'Motion isolation', 'Soft cushioning'],
    recommended: 'Luma Series',
    href: '/products/lumaclassic',
  },
  {
    type: 'Latex Mattress',
    description: 'Natural, breathable, and highly durable. Our Foamico latex mattress collection offers responsive support with excellent temperature regulation.',
    benefits: ['Natural materials', 'Cooling comfort', 'Long-lasting', 'Hypoallergenic'],
    recommended: 'Natura Series',
    href: '/products/natura1',
  },
  {
    type: 'Hybrid Mattress',
    description: 'The best of both worlds - pocket springs combined with foam layers. Our Foamico hybrid mattress delivers bounce, support, and comfort in one package.',
    benefits: ['Pocket spring support', 'Foam comfort', 'Motion isolation', 'Edge support'],
    recommended: 'Ultima Series',
    href: '/products/ultimaclassic',
  },
]

// Size recommendations
const sizeGuide = [
  {
    size: 'Single Bed Mattress',
    dimensions: '72" x 36" / 75" x 36"',
    idealFor: 'Children, teens, single adults, guest rooms',
    href: '/products',
  },
  {
    size: 'Queen Size Mattress',
    dimensions: '78" x 60" / 75" x 60"',
    idealFor: 'Couples, master bedrooms, spacious rooms',
    href: '/products',
  },
  {
    size: 'King Size Mattress',
    dimensions: '78" x 72" / 84" x 72"',
    idealFor: 'Couples wanting extra space, large master bedrooms',
    href: '/products',
  },
]

// Problem-based recommendations
const problemSolutions = [
  {
    problem: 'Back Pain Relief',
    solution: 'Our back pain mattress range features orthopedic foam with targeted lumbar support. The Resto series is specifically designed for those suffering from chronic back pain.',
    product: 'Resto Orthopedic Series',
    href: '/products/restoclassic',
  },
  {
    problem: 'Posture Support',
    solution: 'Posture support mattresses maintain natural spinal curvature. Our firm mattress options prevent sagging and keep your body properly aligned.',
    product: 'Resto & Sova Series',
    href: '/products/restoclassic',
  },
  {
    problem: 'Pressure Relief',
    solution: 'Pressure relief mattresses distribute body weight evenly, reducing stress on shoulders and hips. Memory foam excels at contouring to your body.',
    product: 'Luma Memory Foam Series',
    href: '/products/lumaclassic',
  },
  {
    problem: 'Hot Sleepers',
    solution: 'Our cooling mattress options feature breathable latex and open-cell foam technology that promotes airflow and dissipates body heat.',
    product: 'Natura Latex Series',
    href: '/products/natura1',
  },
  {
    problem: 'Couples',
    solution: 'The best mattress for couples features motion isolation so you won&apos;t feel your partner move. Pocket spring and memory foam excel at this.',
    product: 'Ultima Hybrid Series',
    href: '/products/ultimaclassic',
  },
]

export default function MattressInDelhiPage() {
  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Store Cards Section */}
      <section id="stores" className="scroll-mt-20 bg-base-cream py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-4">
              Mattress Stores in Delhi
            </h1>
            <p className="font-fira text-[#39250E]/70 max-w-2xl mx-auto">
              Visit any of our 10 authorized Foamico mattress shops in Delhi for the best mattress shopping experience. Each mattress showroom in Delhi offers expert guidance and exclusive deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {delhiStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                  {store.name}
                </h3>
                <p className="text-sm text-[#39250E]/60 mb-3">
                  Contact: {store.contactPerson}
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:91${store.phone}`}
                    className="flex items-center gap-2 text-[#4C6462] hover:text-[#3d5250] font-medium"
                    aria-label={`Call ${store.name}`}
                  >
                    <Phone className="w-4 h-4" />
                    +91 {store.phone}
                  </a>
                  <div className="flex items-start gap-2 text-[#39250E]/70 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{store.address}</span>
                  </div>
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[#4C6462] hover:underline"
                    aria-label={`View ${store.name} on Google Maps`}
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Foamico Section */}
      <section className="bg-[#e9e4cd] py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-8 text-center">
              Why Choose Foamico Mattress in Delhi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-lg p-6">
                <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                  65+ Years of Expertise
                </h3>
                <p className="text-[#39250E]/70">
                  Trusted by generations of Indian families since the 1960s for quality foam mattress solutions and orthopedic sleep products.
                </p>
              </div>
              <div className="bg-white/50 rounded-lg p-6">
                <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                  Advanced Foam Technology
                </h3>
                <p className="text-[#39250E]/70">
                  Proprietary HR foam and PU foam formulations developed specifically for Indian climate and sleeping preferences.
                </p>
              </div>
              <div className="bg-white/50 rounded-lg p-6">
                <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                  Complete Range Available
                </h3>
                <p className="text-[#39250E]/70">
                  From orthopedic foam mattress to memory foam, latex mattress to pocket spring hybrid - find every type at our Delhi stores.
                </p>
              </div>
              <div className="bg-white/50 rounded-lg p-6">
                <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                  Free Home Delivery in Delhi
                </h3>
                <p className="text-[#39250E]/70">
                  Complimentary delivery and installation across Delhi NCR on all mattress purchases from our authorized showrooms.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mattress Types Section */}
      <section className="bg-base-cream py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-4">
              Types of Foam Mattress in Delhi
            </h2>
            <p className="font-fira text-[#39250E]/70 max-w-2xl mx-auto">
              Explore our complete range of mattresses available at every Foamico mattress shop in Delhi. From ortho mattress to luxury mattress in Delhi, we have it all.
            </p>
          </div>

          <div className="space-y-8">
            {mattressTypes.map((item) => (
              <div
                key={item.type}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="md:flex-1">
                    <h3 className="font-fira font-bold text-xl md:text-2xl text-[#39250E] mb-3">
                      {item.type}
                    </h3>
                    <p className="text-[#39250E]/70 mb-4">
                      {item.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {item.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-[#39250E]/80">
                          <Check className="w-4 h-4 text-[#4C6462]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-48 mt-4 md:mt-0">
                    <p className="text-sm text-[#39250E]/60 mb-1">Recommended</p>
                    <Link
                      href={item.href}
                      className="inline-block font-semibold text-[#4C6462] hover:underline"
                    >
                      {item.recommended} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Ranges Section */}
      <section className="bg-[#e9e4cd] py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-4">
              Foamico Mattress Collections
            </h2>
            <p className="font-fira text-[#39250E]/70 max-w-2xl mx-auto">
              From budget-friendly durable mattress options to premium luxury mattress in Delhi, find the perfect Foamico foam mattress for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productRanges.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="font-fira font-semibold text-xl text-[#39250E] mb-2">
                  {product.name} Series
                </h3>
                <p className="text-[#39250E]/70 mb-4">{product.description}</p>
                <span className="text-[#4C6462] font-medium">
                  View Collection →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Size Guide Section */}
      <section className="bg-base-cream py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-4 text-center">
              Mattress Sizes Available in Delhi
            </h2>
            <p className="font-fira text-[#39250E]/70 text-center mb-10 max-w-2xl mx-auto">
              Whether you need a single bed mattress Delhi for your child or a king size mattress Delhi for your master bedroom, our mattress stores in Delhi have all sizes in stock.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sizeGuide.map((item) => (
                <div
                  key={item.size}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                    {item.size}
                  </h3>
                  <p className="text-[#4C6462] font-medium mb-2">{item.dimensions}</p>
                  <p className="text-sm text-[#39250E]/70">{item.idealFor}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-3">
                Best Mattress for Couples Delhi
              </h3>
              <p className="text-[#39250E]/70">
                Looking for the best mattress for couples? We recommend queen size mattress Delhi (60&quot; width) or king size mattress Delhi (72&quot; width) from our Ultima hybrid series. The pocket spring technology provides excellent motion isolation, so you won&apos;t disturb your partner when you move. Visit any Foamico mattress showroom in Delhi to try before you buy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem-Based Solutions Section */}
      <section className="bg-[#e9e4cd] py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-4 text-center">
              Find the Right Mattress for Your Needs
            </h2>
            <p className="font-fira text-[#39250E]/70 text-center mb-10 max-w-2xl mx-auto">
              Whether you need a firm mattress Delhi for back support or a medium firm mattress Delhi for balanced comfort, our experts at every mattress shop in Delhi will help you choose.
            </p>

            <div className="space-y-6">
              {problemSolutions.map((item) => (
                <div
                  key={item.problem}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="md:flex md:items-start md:justify-between md:gap-6">
                    <div className="md:flex-1">
                      <h3 className="font-fira font-semibold text-lg text-[#39250E] mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-[#39250E]/70 text-sm">
                        {item.solution}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-48 md:text-right">
                      <p className="text-xs text-[#39250E]/60 mb-1">Recommended</p>
                      <Link
                        href={item.href}
                        className="font-semibold text-[#4C6462] hover:underline"
                      >
                        {item.product} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SEO Content Section */}
      <section className="bg-base-cream py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-[#39250E] mb-6 text-center">
              Why Buy Mattress from Foamico Stores in Delhi?
            </h2>

            <div className="prose prose-lg max-w-none text-[#39250E]/80">
              <p className="mb-6">
                When searching for a quality <strong>mattress in Delhi</strong>, Foamico stands out as the trusted choice for thousands of families across Delhi NCR. Our <strong>mattress stores in Delhi</strong> offer an unmatched selection of <strong>foam mattress in Delhi</strong>, from budget-friendly options to premium luxury collections.
              </p>

              <h3 className="font-fira font-semibold text-xl text-[#39250E] mt-8 mb-4">
                Premium Foam Mattress in Delhi
              </h3>
              <p className="mb-6">
                Every <strong>Foamico mattress in Delhi</strong> is crafted using advanced foam technology developed over 65 years. Our <strong>orthopedic foam mattress</strong> collection is specifically designed for the Indian market, providing the right balance of support and comfort. Whether you need an <strong>ortho mattress</strong> for back pain or a plush <strong>memory foam mattress</strong> for pressure relief, our <strong>mattress showroom in Delhi</strong> has options for every preference and budget.
              </p>

              <h3 className="font-fira font-semibold text-xl text-[#39250E] mt-8 mb-4">
                Specialized Mattresses at Our Delhi Showrooms
              </h3>
              <p className="mb-6">
                Our <strong>mattress shop in Delhi</strong> locations carry specialized options including <strong>HR foam mattress</strong> for durability, <strong>PU foam mattress</strong> for affordability, natural <strong>latex mattress</strong> for eco-conscious buyers, and <strong>pocket spring mattress</strong> for those who prefer traditional bounce with modern comfort. The <strong>Foamico hybrid mattress</strong> combines the best of both technologies for the ultimate sleep experience.
              </p>

              <h3 className="font-fira font-semibold text-xl text-[#39250E] mt-8 mb-4">
                Solutions for Every Sleep Challenge
              </h3>
              <p className="mb-6">
                Suffering from back pain? Our <strong>back pain mattress Delhi</strong> collection features the Resto series with targeted lumbar support. Need a <strong>posture support mattress</strong>? Our <strong>firm mattress Delhi</strong> options maintain spinal alignment. For hot sleepers, our <strong>cooling mattress Delhi</strong> range with breathable latex keeps you comfortable all night. Every <strong>Foamico orthopedic mattress</strong> is engineered for Indian sleeping habits and climate conditions.
              </p>

              <h3 className="font-fira font-semibold text-xl text-[#39250E] mt-8 mb-4">
                All Sizes Available Across Delhi
              </h3>
              <p className="mb-4">
                From <strong>single bed mattress Delhi</strong> for kids&apos; rooms to <strong>queen size mattress Delhi</strong> and <strong>king size mattress Delhi</strong> for master bedrooms, every size is available at our <strong>mattress stores in Delhi</strong>. Looking for the <strong>best mattress for couples Delhi</strong>? Visit any Foamico showroom to experience our motion-isolating hybrid and memory foam options designed for undisturbed sleep.
              </p>

              <p className="mt-8 text-center font-medium">
                Visit any of our 10 <strong>mattress showroom in Delhi</strong> locations today and experience the Foamico difference. Our sleep experts will help you find the perfect <strong>durable mattress</strong> that fits your needs and budget.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#39250E] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-fira font-bold text-3xl md:text-4xl text-white mb-4">
              Visit a Foamico Mattress Store in Delhi Today
            </h2>
            <p className="text-[#d4c4a8] mb-8 text-lg">
              Experience the Foamico difference in person. Our sleep experts at every mattress showroom in Delhi are ready to help you find the perfect foam mattress for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:917496982886"
                className="inline-flex items-center justify-center gap-2 bg-[#4C6462] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#5a7573] transition-colors"
                aria-label="Call Foamico Delhi"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="#stores"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[#39250E] transition-colors"
              >
                <MapPin className="w-5 h-5" />
                View All Stores
              </a>
            </div>
          </div>
        </Container>
      </section>

    </>
  )
}
