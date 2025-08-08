'use client'

export default function UltimaComparisonSection() {
  const comparisonData = [
    {
      feature: 'Top Fabric',
      classic: { text: 'Luxeknit Fabric', color: 'text-gray-700' },
      premium: { text: 'Luxeknit Fabric', color: 'text-gray-700' },
      luxury: { text: 'Luxeknit Fabric', color: 'text-gray-700' }
    },
    {
      feature: 'Comfort Layer',
      classic: { text: 'Aeroflex Foam Quilt', color: 'text-blue-600' },
      premium: { text: 'Aeroflex Foam Quilt', color: 'text-blue-600' },
      luxury: { text: 'Aeroflex Foam Quilt', color: 'text-blue-600' }
    },
    {
      feature: 'Adaptive Layer',
      classic: { text: 'Cloud Sense Foam', color: 'text-gray-700' },
      premium: { text: 'Pulse Core Foam + Cloud Sense', color: 'text-amber-600' },
      luxury: { text: 'Memorest + Cloud Sense', color: 'text-purple-600' }
    },
    {
      feature: 'Main Support',
      classic: { text: 'Zero G Latex Foam', color: 'text-purple-600' },
      premium: { text: 'Zero G Latex Foam', color: 'text-purple-600' },
      luxury: { text: 'Zero G Latex Foam', color: 'text-purple-600' }
    },
    {
      feature: 'Bottom Layer',
      classic: { text: 'Soft Foam with Quilt', color: 'text-gray-700' },
      premium: { text: 'Soft Foam with Quilt', color: 'text-gray-700' },
      luxury: { text: 'Soft Foam with Quilt', color: 'text-gray-700' }
    },
    {
      feature: 'Feel',
      classic: { text: 'Soft', color: 'text-pink-600' },
      premium: { text: 'Medium-Soft', color: 'text-purple-600' },
      luxury: { text: 'Plush', color: 'text-indigo-600' }
    },
    {
      feature: 'Best For',
      classic: { text: 'Cloud-like comfort seekers', color: 'text-gray-600' },
      premium: { text: 'Balanced softness with support', color: 'text-gray-600' },
      luxury: { text: 'Ultimate plush experience', color: 'text-gray-600' }
    }
  ]

  return (
    <section id="comparison-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Ultima Variants
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect cloud of comfort
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-6 font-semibold text-gray-700">Feature</th>
                  <th className="p-6 text-center font-semibold text-gray-700">Classic</th>
                  <th className="p-6 text-center font-semibold text-gray-700">Premium</th>
                  <th className="p-6 text-center font-semibold text-gray-700">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-gray-700">{row.feature}</td>
                    <td className={`p-6 text-center ${row.classic.color}`}>
                      {row.classic.text}
                    </td>
                    <td className={`p-6 text-center ${row.premium.color}`}>
                      {row.premium.text}
                    </td>
                    <td className={`p-6 text-center ${row.luxury.color}`}>
                      {row.luxury.text}
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