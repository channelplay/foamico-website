'use client'

import Image from 'next/image'

export default function ThirdSection() {
  return (
    <section className="bg-base-cream w-full lg:hidden">
      {/* Mobile/Tablet Image Only */}
      <Image
        src="/Third Section.png"
        alt="Foamico Features and Benefits"
        width={1080}
        height={1920}
        className="w-full h-auto"
        priority
      />
    </section>
  )
}