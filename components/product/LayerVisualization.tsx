'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Layer } from '@/data/products'

interface LayerVisualizationProps {
  layers: Layer[]
}

export default function LayerVisualization({ layers }: LayerVisualizationProps) {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null)

  const layerColors = [
    'bg-yellow-100 border-yellow-300',
    'bg-cyan-100 border-cyan-300', 
    'bg-purple-100 border-purple-300',
    'bg-green-100 border-green-300',
    'bg-gray-100 border-gray-300',
    'bg-pink-100 border-pink-300'
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Visual Representation */}
      <div className="relative">
        <div className="sticky top-24">
          <div className="relative h-[400px] lg:h-[500px] bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src="/features-section.png"
              alt="Mattress layer diagram"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
          
          {/* Stacked Layers Visualization */}
          <div className="mt-6 space-y-2">
            {layers.map((layer, index) => (
              <div
                key={index}
                className={`relative h-12 rounded-lg border-2 transition-all cursor-pointer ${
                  layerColors[index % layerColors.length]
                } ${expandedLayer === index ? 'scale-105 shadow-lg' : 'hover:scale-102'}`}
                onClick={() => setExpandedLayer(expandedLayer === index ? null : index)}
              >
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
                  {layer.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layer Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foamico-black mb-4">
          Layer-by-Layer Comfort Technology
        </h3>
        
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`border rounded-lg transition-all cursor-pointer ${
              expandedLayer === index
                ? 'border-foamico-lime bg-foamico-lime-light shadow-md'
                : 'border-gray-200 hover:border-foamico-lime-light'
            }`}
            onClick={() => setExpandedLayer(expandedLayer === index ? null : index)}
          >
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foamico-black flex items-center gap-2">
                    <span className={`w-4 h-4 rounded ${
                      layerColors[index % layerColors.length].split(' ')[0]
                    }`} />
                    {layer.name}
                  </h4>
                  <p className="text-sm text-foamico-gray-600 mt-1">
                    {layer.material}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-foamico-gray-400 transition-transform ${
                    expandedLayer === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedLayer === index && (
                <div className="mt-3 pt-3 border-t border-foamico-lime-dark/20">
                  <p className="text-foamico-gray-700">
                    {layer.description}
                  </p>
                  {layer.thickness && (
                    <p className="text-sm text-foamico-gray-500 mt-2">
                      Thickness: {layer.thickness}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Info Box */}
        <div className="mt-6 p-4 bg-foamico-lime-light rounded-lg">
          <p className="text-sm text-foamico-gray-700">
            <span className="font-semibold">💡 Pro Tip:</span> Click on any layer to learn more about how it contributes to your perfect sleep experience.
          </p>
        </div>
      </div>
    </div>
  )
}