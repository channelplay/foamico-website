
'use client'

import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-base-cream flex items-center justify-center px-0">
      <Image
        src="/hero-section-new.png"
        alt="Sleep, Engineered - Foamico Mattress with 65+ years of innovation"
        width={1469}
        height={420}
        className="w-full h-auto max-w-full"
        priority
      />
    </section>
  )
}