import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const footerLinks = {
  products: [
    { name: 'Sova', href: '/products/sova' },
    { name: 'Ultima', href: '/products/ultima' },
    { name: 'Natura', href: '/products/natura' },
    { name: 'Marvel', href: '/products/marvel' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Find a Store', href: '/find-store' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/resources' },
    { name: 'Sleep Guide', href: '/resources/blog/better-sleep-guide' },
    { name: 'Mattress Care', href: '/resources/blog/mattress-care-tips' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-foamico-gray-100 mt-16">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/foamicologo.png"
                  alt="Foamico Logo"
                  width={150}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-4 text-foamico-gray-600 max-w-md">
                Experience the perfect blend of natural latex, European craftsmanship, and Indian innovation. 
                25-year warranty on all products.
              </p>
              <div className="mt-6">
                <p className="text-sm text-foamico-gray-500">
                  🛡️ OrthoSense® Technology | 🌿 Natural Latex | 🇩🇪 German Engineering
                </p>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-foamico-black font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foamico-gray-600 hover:text-foamico-lime transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-foamico-black font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foamico-gray-600 hover:text-foamico-lime transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-foamico-black font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foamico-gray-600 hover:text-foamico-lime transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-foamico-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foamico-gray-500 text-sm">
                © 2024 Foamico. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-foamico-gray-500 hover:text-foamico-lime text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-foamico-gray-500 hover:text-foamico-lime text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}