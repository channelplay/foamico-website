'use client'

const technologies = [
  {
    id: 'eurotop',
    name: 'Eurotop Stitching',
    description: 'Premium European craftsmanship for superior edge support and durability.',
    features: ['Pressure Relief', 'Edge Support', 'Enhanced Durability', 'Premium Comfort']
  },
  {
    id: 'iqs',
    name: 'IQS™ – Intelligent Quality Sleep',
    description: 'Smart technology that adapts to your body for optimized sleep performance.',
    features: ['Sleep Optimization', 'Body Adaptation', 'Temperature Regulation', 'Motion Isolation']
  },
  {
    id: 'orthosense',
    name: 'Orthosense™ Technology',
    description: 'Specially designed for optimal spinal alignment and pain relief.',
    features: ['Spinal Alignment', 'Muscle Comfort', 'Arthritis Relief', 'Back Support']
  },
  {
    id: 'dual-feel',
    name: 'Dual Feel Options',
    description: 'Customizable comfort with different firmness levels on each side.',
    features: ['Personalized Comfort', 'Partner Preference', 'Versatile Support', 'Custom Zones']
  }
]

export default function TechnologySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E1EC9A] text-[#77870D] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Technology
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Sleep, Desi Approved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every FOAMICO mattress is powered by high-performance materials and desi-smart tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#E1EC9A] rounded-lg flex items-center justify-center text-[#77870D] font-bold text-lg">
                  {tech.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[#77870D] mb-3">
                {tech.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {tech.description}
              </p>
              
              <ul className="space-y-2">
                {tech.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}