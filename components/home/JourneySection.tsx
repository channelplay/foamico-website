'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function JourneySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        container.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const currentScroll = scrollContainerRef.current.scrollLeft
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="bg-base-cream py-12 md:py-16 lg:py-0">
      {/* Mobile/Tablet Content */}
      <div className="lg:hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-4 mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-[5px]">
            <div className="w-8 md:w-12 h-[1px] mr-3 md:mr-4 bg-[#AD702A]"></div>
            <p className="font-bold font-fira text-xs md:text-sm lg:text-[15px] text-[#AD702A] whitespace-nowrap" style={{ letterSpacing: '0' }}>Since 1960's</p>
            <div className="w-8 md:w-12 h-[1px] ml-3 md:ml-4 bg-[#AD702A]"></div>
          </div>
          
          <h2 className="font-bold font-fira text-2xl md:text-3xl lg:text-[40px] text-[#39250E] mb-3 md:mb-[14px] text-center">
            The Foamico Journey
          </h2>
          
          <p className="mx-auto font-fira text-sm md:text-[15px] text-[#39250E] max-w-full lg:max-w-[787.81px] px-4 md:px-8 lg:px-0 text-center">
            Generations of expertise and innovation have shaped Foamico into what it is today — a brand driven by the science of sleep. Each phase of the journey has been marked by dedication to quality, innovation in materials, and a relentless pursuit of comfort.
          </p>
        </div>

        {/* Horizontal Scrolling Image Container with Navigation */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-[#39250E]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-[#39250E]" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            onScroll={checkScrollButtons}
          >
            <div className="px-4 md:px-8">
              <Image
                src="/Story Scroll.png"
                alt="Foamico Journey Timeline - From 1960s to Present"
                width={2000}
                height={400}
                className="h-[300px] md:h-[350px] w-auto"
                style={{ maxWidth: 'none' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block w-full">
        <Image
          src="/Homepage second section.png"
          alt="The Foamico Journey - 65+ years of sleep innovation"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
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
