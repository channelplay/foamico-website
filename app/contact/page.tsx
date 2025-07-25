import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Us | Foamico',
  description: 'Get in touch with Foamico. We\'re here to help you find your perfect mattress.',
}

export default function ContactPage() {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Have questions about our products? Need help choosing the right mattress? 
            We&apos;re here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <h2 className="text-2xl font-bold text-foamico-black mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent">
                  <option>Product Inquiry</option>
                  <option>Store Location</option>
                  <option>Warranty Information</option>
                  <option>General Question</option>
                  <option>Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foamico-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-foamico-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-foamico-lime focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold text-foamico-black mb-4">
                Customer Support
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">📞</span>
                  <div>
                    <p className="font-medium text-foamico-black">Call Us</p>
                    <p className="text-foamico-gray-600">1800-123-FOAM (3626)</p>
                    <p className="text-sm text-foamico-gray-500">Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">✉️</span>
                  <div>
                    <p className="font-medium text-foamico-black">Email</p>
                    <p className="text-foamico-gray-600">support@foamico-mattress.com</p>
                    <p className="text-sm text-foamico-gray-500">24-48 hour response time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-foamico-lime text-xl">💬</span>
                  <div>
                    <p className="font-medium text-foamico-black">WhatsApp</p>
                    <p className="text-foamico-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-foamico-gray-500">Quick responses</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-foamico-black mb-4">
                Corporate Office
              </h3>
              <div className="space-y-3">
                <p className="text-foamico-gray-700">
                  Foamico Industries Pvt. Ltd.<br />
                  Plot No. 123, Sector 45<br />
                  Gurugram, Haryana 122003<br />
                  India
                </p>
                <div className="pt-3">
                  <p className="text-sm text-foamico-gray-600">
                    <span className="font-medium">Business Hours:</span><br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-foamico-lime text-white">
              <h3 className="text-xl font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4 opacity-90">
                Our sleep experts are available to help you find the perfect mattress 
                for your needs.
              </p>
              <Button href="/find-store" variant="secondary" size="small" className="w-full">
                Visit Our Store
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}