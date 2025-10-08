'use client'

import Image from 'next/image'

export default function JourneySection() {
  return (
    <section className="bg-base-cream py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center px-4 mb-8 md:mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#AD702A] h-[1px] w-12 md:w-16"></div>
          <span className="mx-4 text-[#AD702A] text-sm md:text-base font-semibold tracking-wider">Since 1960's</span>
          <div className="bg-[#AD702A] h-[1px] w-12 md:w-16"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#39250E] text-center mb-6">
          The Foamico<br />Journey
        </h2>
        
        <p className="text-center text-[#39250E]/70 text-sm md:text-base max-w-3xl leading-relaxed">
          Generations of expertise and innovation have shaped Foamico into what it is today — a brand driven by the science of sleep. Each phase of the journey has been marked by dedication to quality, innovation in materials, and a relentless pursuit of comfort.
        </p>
      </div>

      {/* Horizontal Scrolling Strip Container */}
      <div className="relative w-full overflow-hidden">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 px-4 md:px-8 min-w-max">
            {/* Timeline cards will be added here */}
            <div className="text-center text-[#AD702A] py-8">
              Timeline cards will appear here...
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
