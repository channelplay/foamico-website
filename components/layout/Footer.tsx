'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Footer() {
  const footerLinks = {
    products: [
      // Resto
      { name: 'Resto Classic', href: '/products/restoclassic' },
      { name: 'Resto Premium', href: '/products/restopremium' },
      { name: 'Resto Luxury', href: '/products/restoluxury' },
      // Sova
      { name: 'Sova Classic', href: '/products/sovaclassic' },
      { name: 'Sova Premium', href: '/products/sovapremium' },
      { name: 'Sova Luxury', href: '/products/sovaluxury' },
      // Luma
      { name: 'Luma Classic', href: '/products/lumaclassic' },
      { name: 'Luma Premium', href: '/products/lumapremium' },
      { name: 'Luma Luxury', href: '/products/lumaluxury' },
      // Ultima
      { name: 'Ultima Classic', href: '/products/ultimaclassic' },
      { name: 'Ultima Premium', href: '/products/ultimapremium' },
      { name: 'Ultima Luxury', href: '/products/ultimaluxury' },
      // Natura
      { name: 'Natura 1.0', href: '/products/natura1' },
      { name: 'Natura 2.0', href: '/products/natura2' },
      // Riva
      { name: 'Riva 1000', href: '/products/riva1000' },
      { name: 'Riva 2000', href: '/products/riva2000' },
      { name: 'Riva 3000', href: '/products/riva3000' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    quickLinks: [
      { name: 'Store Locator', href: '/find-store' },
      { name: 'Compare Mattresses', href: '/products/compare' },
    ],
  }

  return (
    <footer className="bg-[#342917] text-[#f5f0e8] border-t border-[#342917]/20">
      <Container>
        <div className="py-8 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-3">
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
            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold text-[#f5f0e8] mb-4 uppercase tracking-wider">
                Products
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Resto</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Resto')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Sova</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Sova')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Luma</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Luma')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Ultima</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Ultima')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Natura</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Natura')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#f5f0e8]/60 mb-2 uppercase tracking-wider">Riva</h4>
                  <ul className="space-y-2">
                    {footerLinks.products.filter(l => l.name.startsWith('Riva')).map((link) => (
                      <li key={link.name}><Link href={link.href} className="text-sm text-[#d4c4a8] hover:text-[#f5f0e8] transition-colors duration-200">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
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

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-[#f5f0e8] mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
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