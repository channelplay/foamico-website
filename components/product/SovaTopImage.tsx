import Image from 'next/image'

export default function SovaTopImage() {
  return (
    <section className="bg-hermes-cream">
      <div className="w-full">
        <Image
          src="/sova-hero.png"
          alt="Sova Classic Mattress - Experience perfect balance of firmness and comfort"
          width={1018}
          height={1024}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
