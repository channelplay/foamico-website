'use client'

export default function SmartSleepSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E1EC9A] text-[#77870D] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Innovation
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Sleep Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of sleep with our innovative smart mattress technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sleep Tracking</h3>
            <p className="text-gray-600">
              Monitor your sleep patterns and get personalized insights for better rest
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Adjustment</h3>
            <p className="text-gray-600">
              Automatically adjusts firmness and support based on your sleeping position
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Climate Control</h3>
            <p className="text-gray-600">
              Maintains optimal temperature throughout the night for comfortable sleep
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}