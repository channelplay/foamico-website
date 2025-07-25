import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms of Service | Foamico',
  description: 'Foamico terms of service. Read our terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foamico-black mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-foamico-gray-700">
            <p className="text-lg mb-6">
              Last updated: January 2024
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">2. Product Information</h2>
            <p className="mb-4">
              We strive to provide accurate product descriptions and pricing. However, we do not 
              warrant that product descriptions or other content is accurate, complete, reliable, 
              current, or error-free.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">3. Warranty</h2>
            <p className="mb-4">
              Our mattresses come with warranty periods as specified on the product pages. 
              Warranty terms and conditions apply. Please refer to the warranty card provided 
              with your purchase for complete details.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">4. Returns and Refunds</h2>
            <p className="mb-4">
              We offer a 100-night trial period for all our mattresses. If you&apos;re not satisfied, 
              you can return the mattress within this period for a full refund, subject to our 
              return policy conditions.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of Foamico and is protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">6. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:<br />
              Email: legal@foamico-mattress.com<br />
              Phone: 1800-123-FOAM (3626)
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}