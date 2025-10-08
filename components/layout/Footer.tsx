'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Footer() {
  const footerLinks = {
    products: [
      { name: 'Sova Classic', href: '/products/sovaclassic' },
      { name: 'Sova Premium', href: '/products/sovapremium' },
      { name: 'Sova Luxury', href: '/products/sovaluxury' },
      { name: 'Ultima Classic', href: '/products/ultimaclassic' },
      { name: 'Ultima Premium', href: '/products/ultimapremium' },
      { name: 'Ultima Luxury', href: '/products/ultimaluxury' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-[#342917] text-[#f5f0e8] border-t border-[#342917]/20">
      <Container>
        <div className="py-8 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="mb-6">
                <div className="bg-white rounded-lg p-3 inline-block">
                  <Image
                    src="/foamico-logo-black.png"
                    alt="Foamico Logo"
                    width={180}
                    height={60}
                    className="h-10 md:h-14 w-auto"
                  />
                </div>
              </div>
              
              <p className="text-sm text-[#d4c4a8] mb-6 leading-relaxed max-w-lg">
                Experience the perfect fusion of traditional craftsmanship and 
                innovative foam technology, designed to transform your sleep 
                into a luxurious experience.
              </p>
              
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-[#f5f0e8] mb-4 uppercase tracking-wider">
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[#f5f0e8] mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-[#d4c4a8]/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-sm font-semibold text-[#f5f0e8] mb-2 uppercase tracking-wider">
                  Get In Touch
                </h3>
                <p className="text-sm text-[#d4c4a8]">
                  Connect with our sleep experts for personalized assistance
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <button className="px-6 py-3 bg-[#f5f0e8] text-[#816842] font-medium hover:bg-[#e6dcc8] transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#d4c4a8]/20">
            <div className="text-center">
              <div className="text-xs text-[#d4c4a8]">
                © {new Date().getFullYear()} Foamico. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}