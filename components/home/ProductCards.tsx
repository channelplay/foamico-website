'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductCards() {
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
    <section className="font-fira pt-12 md:pt-16 lg:pt-20 bg-[#EAE5CB]">
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-[5px]">
          <div className="w-8 md:w-12 h-[1px] mr-3 md:mr-4 bg-[#AD702A]"></div>
          <p className="font-bold font-fira text-xs md:text-sm lg:text-[15px] text-[#AD702A] whitespace-nowrap tracking-normal">Our Collection</p>
          <div className="w-8 md:w-12 h-[1px] ml-3 md:ml-4 bg-[#AD702A]"></div>
        </div>
        
        <h2 className="font-bold font-fira text-2xl md:text-3xl lg:text-[40px] text-[#39250E] mb-3 md:mb-[14px]">
          Engineered for Perfect Sleep
        </h2>
        
        <p className="mx-auto font-fira text-sm md:text-[15px] text-[#39250E] max-w-full lg:max-w-[787.81px] px-4 md:px-8 lg:px-0">
          Each mattress is meticulously designed using premium materials and innovative foam technology, ensuring exceptional comfort and support for years to come.
        </p>
      </motion.div>

      {/* Mobile/Tablet: Horizontal Scroll with Navigation */}
      <div className="lg:hidden relative mt-[40px] pb-[40px]">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#39250E]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#39250E]" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          onScroll={checkScrollButtons}
        >
          <div className="flex gap-4 md:gap-6 px-12 md:px-16 w-max">
          {/* Row 1 - Sova Classic */}
          <motion.a
            href="/products/sovaclassic"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-classic-card.png"
                alt="Sova Classic"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Sova Premium */}
          <motion.a
            href="/products/sovapremium"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-premium-card.png"
                alt="Sova Premium"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Sova Luxury */}
          <motion.a
            href="/products/sovaluxury"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-luxury-card.png"
                alt="Sova Luxury"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Row 2 - Ultima Classic */}
          <motion.a
            href="/products/ultimaclassic"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-classic-card.png"
                alt="Ultima Classic"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
          
          {/* Ultima Premium */}
          <motion.a
            href="/products/ultimapremium"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-premium-card.png"
                alt="Ultima Premium"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
          
          {/* Ultima Luxury */}
          <motion.a
            href="/products/ultimaluxury"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            className="rounded-lg overflow-hidden cursor-pointer flex-shrink-0 w-[280px] h-[370px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-luxury-card.png"
                alt="Ultima Luxury"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
          </div>
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:flex justify-center px-4 mt-[80px] pb-[80px]">
        <div className="grid grid-cols-3 gap-6 max-w-[1400px]">
          {/* Row 1 - Sova Classic */}
          <motion.a
            href="/products/sovaclassic"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-classic-card.png"
                alt="Sova Classic"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Sova Premium */}
          <motion.a
            href="/products/sovapremium"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-premium-card.png"
                alt="Sova Premium"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Sova Luxury */}
          <motion.a
            href="/products/sovaluxury"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/sova-luxury-card.png"
                alt="Sova Luxury"
                fill
                className="object-cover"
                sizes="358px"
                priority
              />
            </div>
          </motion.a>
          
          {/* Row 2 - Ultima Classic */}
          <motion.a
            href="/products/ultimaclassic"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-classic-card.png"
                alt="Ultima Classic"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
          
          {/* Ultima Premium */}
          <motion.a
            href="/products/ultimapremium"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-premium-card.png"
                alt="Ultima Premium"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
          
          {/* Ultima Luxury */}
          <motion.a
            href="/products/ultimaluxury"
            className="rounded-lg overflow-hidden cursor-pointer w-[358px] h-[474px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/ultima-luxury-card.png"
                alt="Ultima Luxury"
                fill
                className="object-cover"
                sizes="358px"
              />
            </div>
          </motion.a>
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
