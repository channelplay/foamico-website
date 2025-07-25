import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy | Foamico',
  description: 'Foamico privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foamico-black mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foamico-gray-700">
            <p className="text-lg mb-6">
              Last updated: January 2024
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, request information, or contact us for support.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and respond 
              to your comments and questions.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-foamico-black mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@foamico-mattress.com<br />
              Phone: 1800-123-FOAM (3626)
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}