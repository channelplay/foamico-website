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
    <>
      {/* Mobile/Tablet: Show heading and content */}
      <section className="bg-base-cream pt-12 md:pt-16 pb-0 lg:hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-4 mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-[5px]">
            <div className="w-8 md:w-12 h-[1px] mr-3 md:mr-4 bg-[#AD702A]"></div>
            <p className="font-bold font-fira text-xs md:text-sm text-[#AD702A] whitespace-nowrap">Since 1960's</p>
            <div className="w-8 md:w-12 h-[1px] ml-3 md:ml-4 bg-[#AD702A]"></div>
          </div>
          
          <h2 className="font-bold font-fira text-2xl md:text-3xl text-[#39250E] mb-3 md:mb-[14px] text-center">
            The Foamico Journey
          </h2>
          
          <p className="mx-auto font-fira text-sm md:text-[15px] text-[#39250E] max-w-full lg:max-w-[787.81px] px-4 md:px-8 text-center">
            Generations of expertise and innovation have shaped Foamico into what it is today — a brand driven by the science of sleep. Each phase of the journey has been marked by dedication to quality, innovation in materials, and a relentless pursuit of comfort.
          </p>
        </div>

        {/* Horizontal Scrolling Story Stripe - Mobile and Tablet */}
        <div className="block lg:hidden relative w-full mb-8">
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
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            onScroll={checkScrollButtons}
          >
            <div className="px-4 md:px-8">
              <Image
                src="/Story Scroll.png"
                alt="Foamico Journey Timeline - From 1960s to Present"
                width={2000}
                height={600}
                className="h-[280px] md:h-[350px] w-auto"
                style={{ maxWidth: 'none' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile: Third Section Image - Edge to Edge */}
        <div className="block sm:hidden w-full">
          <Image
            src="/Third Section.png"
            alt="The Foamico Journey Timeline"
            width={1080}
            height={1920}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* iPad/Tablet: Third Section iPad Image */}
        <div className="hidden sm:block w-full">
          <Image
            src="/Third Section Ipad.png"
            alt="The Foamico Journey Timeline"
            width={1536}
            height={2048}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Desktop Image */}
      <section className="hidden lg:block bg-base-cream py-0">
        <div className="w-full">
          <Image
            src="/homepage-second-section.png"
            alt="The Foamico Journey - 65+ years of sleep innovation"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
