import Image from 'next/image'

export default function SovaLayersSection() {
  return (
    <section className="bg-hermes-cream py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <Image
          src="/sova-layers.png"
          alt="Inside the Layers of Comfort - Sova Classic mattress layers breakdown"
          width={1024}
          height={576}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
