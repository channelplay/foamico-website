'use client'

export default function NaturaComparisonSection() {
  const comparisonData = [
    {
      feature: 'Top Fabric',
      natura1: { text: 'Luxeknit Fabric', color: 'text-gray-700' },
      natura2: { text: 'Luxeknit Fabric', color: 'text-gray-700' }
    },
    {
      feature: 'Comfort Layer',
      natura1: { text: 'Aeroflex Foam Quilt', color: 'text-blue-600' },
      natura2: { text: 'Aeroflex Foam Quilt', color: 'text-blue-600' }
    },
    {
      feature: 'Adaptive Layer',
      natura1: { text: 'Natural Pincore Latex', color: 'text-green-600' },
      natura2: { text: 'Pulse Core Foam + Natural Pincore Latex', color: 'text-green-600' }
    },
    {
      feature: 'Main Support',
      natura1: { text: 'Zero G Latex Foam', color: 'text-purple-600' },
      natura2: { text: 'Zero G Latex Foam', color: 'text-purple-600' }
    },
    {
      feature: 'Bottom Layer',
      natura1: { text: 'Soft Foam with Quilt', color: 'text-gray-700' },
      natura2: { text: 'Soft Foam with Quilt', color: 'text-gray-700' }
    },
    {
      feature: 'Thickness',
      natura1: { text: '8 inches', color: 'text-gray-700' },
      natura2: { text: '10 inches', color: 'text-gray-700' }
    },
    {
      feature: 'Feel',
      natura1: { text: 'Medium', color: 'text-orange-600' },
      natura2: { text: 'Medium-Firm', color: 'text-blue-600' }
    },
    {
      feature: 'Best For',
      natura1: { text: 'Natural comfort seekers', color: 'text-gray-600' },
      natura2: { text: 'Premium natural experience', color: 'text-gray-600' }
    }
  ]

  return (
    <section id="comparison-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Natura Variants
          </h2>
          <p className="text-xl text-gray-600">
            Choose your natural sleep sanctuary
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-6 font-semibold text-gray-700">Feature</th>
                  <th className="p-6 text-center font-semibold text-gray-700">Natura 1.0</th>
                  <th className="p-6 text-center font-semibold text-gray-700">Natura 2.0</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-gray-700">{row.feature}</td>
                    <td className={`p-6 text-center ${row.natura1.color}`}>
                      {row.natura1.text}
                    </td>
                    <td className={`p-6 text-center ${row.natura2.color}`}>
                      {row.natura2.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="/find-store"
            className="px-8 py-3 bg-[#8BC34A] text-white rounded-full font-semibold hover:bg-[#7CB342] transition-colors"
          >
            Find a Store
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}