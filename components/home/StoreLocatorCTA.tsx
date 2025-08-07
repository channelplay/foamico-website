'use client'

import Link from 'next/link'

export default function StoreLocatorCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-[#E1EC9A] text-[#77870D] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
          Store Locator
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Experience Foamico In Person
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Visit one of our showrooms to try our mattresses and speak with our sleep experts
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/stores" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Find a Store Near You
          </Link>
          <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}