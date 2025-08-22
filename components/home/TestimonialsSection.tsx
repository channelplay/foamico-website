'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'

const testimonials = [
  {
    id: 1,
    name: "PRIYA_SHARMA",
    displayName: "Priya Sharma",
    product: "Sova Classic",
    rating: 5,
    comment: "Best mattress I've ever owned! My back pain is completely gone.",
    location: "Mumbai, Maharashtra",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    level: 45,
    achievement: "PAIN DESTROYER",
    xpGained: 2500,
    completionDate: "2024.01.15",
    badges: ["🏆", "⭐", "💯"]
  },
  {
    id: 2,
    name: "RAJESH_K",
    displayName: "Rajesh Kumar",
    product: "Ultima Premium",
    rating: 5,
    comment: "The smart features are amazing. I wake up feeling refreshed every day.",
    location: "Bangalore, Karnataka",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    level: 52,
    achievement: "TECH MASTER",
    xpGained: 3000,
    completionDate: "2024.01.20",
    badges: ["🎯", "🚀", "⚡"]
  },
  {
    id: 3,
    name: "ANITA_P",
    displayName: "Anita Patel",
    product: "Natura Organic",
    rating: 5,
    comment: "Worth every penny. The quality and comfort are unmatched.",
    location: "Delhi NCR",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    level: 38,
    achievement: "COMFORT SEEKER",
    xpGained: 2200,
    completionDate: "2024.01.18",
    badges: ["🌟", "💎", "✨"]
  },
  {
    id: 4,
    name: "VIKRAM_S",
    displayName: "Vikram Singh",
    product: "Marvel Deluxe",
    rating: 5,
    comment: "Perfect balance of firmness and comfort. Best sleep I've had in years!",
    location: "Pune, Maharashtra",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    level: 60,
    achievement: "SLEEP CHAMPION",
    xpGained: 3500,
    completionDate: "2024.01.22",
    badges: ["👑", "🏅", "🌙"]
  },
  {
    id: 5,
    name: "MEERA_R",
    displayName: "Meera Reddy",
    product: "Sova Classic",
    rating: 5,
    comment: "The natural latex is amazing. No more allergies and peaceful sleep every night.",
    location: "Hyderabad, Telangana",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    level: 42,
    achievement: "ALLERGY BUSTER",
    xpGained: 2400,
    completionDate: "2024.01.25",
    badges: ["🛡️", "🌿", "💚"]
  },
  {
    id: 6,
    name: "ARJUN_M",
    displayName: "Arjun Malhotra",
    product: "Ultima Premium",
    rating: 5,
    comment: "25-year warranty gave me confidence. The quality is truly exceptional.",
    location: "Gurugram, Haryana",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    level: 55,
    achievement: "TRUST BUILDER",
    xpGained: 2800,
    completionDate: "2024.01.28",
    badges: ["🔒", "💪", "🎖️"]
  },
  {
    id: 7,
    name: "KAVITA_J",
    displayName: "Kavita Joshi",
    product: "Natura Organic",
    rating: 5,
    comment: "Love the eco-friendly materials. Sleeping guilt-free and comfortably!",
    location: "Chennai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    level: 48,
    achievement: "ECO WARRIOR",
    xpGained: 2600,
    completionDate: "2024.01.30",
    badges: ["🌍", "♻️", "🌱"]
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 2000)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(0,255,136,0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,0,255,0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0,212,255,0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-32 right-8 z-50"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="glass-panel border-2 border-hud-green px-6 py-4 shadow-neon-green">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">🏆</span>
                </motion.div>
                <div>
                  <p className="text-xs font-mono text-hud-green">NEW ACHIEVEMENT</p>
                  <p className="text-sm font-cyber text-hud-cyan">PLAYER JOINED THE SQUAD</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block glass-panel border border-hud-pink px-6 py-2 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,0,255,0.3)',
                '0 0 40px rgba(255,0,255,0.5)',
                '0 0 20px rgba(255,0,255,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-pink uppercase tracking-widest">
              ACHIEVEMENT FEED
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-cyan">PLAYER</span>
            <br />
            <span className="neon-text-pink text-5xl lg:text-6xl">VICTORIES</span>
          </h2>
          
          <p className="text-lg font-mono text-hud-cyan/70 max-w-3xl mx-auto">
            Real players. Real achievements. 
            <span className="text-hud-green"> Join the leaderboard.</span>
          </p>
        </motion.div>

        {/* Scrolling Achievement Cards */}
        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -100 * testimonials.length + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative hologram-card h-full">
                  {/* Corner decorations */}
                  <div className="cyber-corner-tl" />
                  <div className="cyber-corner-tr" />
                  <div className="cyber-corner-bl" />
                  <div className="cyber-corner-br" />

                  {/* Achievement Badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <motion.div 
                      className="glass-panel px-3 py-1 border border-hud-green/50"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-[10px] font-mono text-hud-green">{testimonial.achievement}</span>
                    </motion.div>
                  </div>

                  {/* Player Profile */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-hud-cyan">
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.displayName}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-hud-orange text-cyber-black text-[10px] font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {testimonial.level}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-cyber text-sm text-hud-cyan">{testimonial.name}</p>
                        <div className="flex gap-1">
                          {testimonial.badges.map((badge, i) => (
                            <span key={i} className="text-xs">{badge}</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[10px] font-mono text-hud-cyan/60">{testimonial.location}</p>
                      <p className="text-[10px] font-mono text-hud-pink/60">LVL {testimonial.level} PLAYER</p>
                    </div>
                  </div>

                  {/* Achievement Message */}
                  <div className="glass-panel bg-cyber-dark/50 p-3 mb-4">
                    <p className="text-sm font-mono text-hud-cyan/90 italic">
                      "{testimonial.comment}"
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="glass-panel p-3 mb-4">
                    <p className="text-[10px] font-mono text-hud-orange/60">PRODUCT PURCHASED</p>
                    <p className="text-sm font-mono text-hud-orange">{testimonial.product}</p>
                  </div>

                  {/* Rating as Power Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-[10px] font-mono mb-1">
                      <span className="text-hud-pink/60">SATISFACTION</span>
                      <span className="text-hud-pink/60">{testimonial.rating * 20}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-hud-pink to-hud-purple"
                        initial={{ width: 0 }}
                        animate={{ width: `${testimonial.rating * 20}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Completion Date */}
                  <div className="pt-3 border-t border-hud-cyan/20">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-hud-cyan/50">COMPLETED</span>
                      <span className="text-[10px] font-mono text-hud-cyan/50">{testimonial.completionDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cyber-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cyber-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* Leaderboard Stats */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex gap-6">
            <div className="glass-panel px-4 py-2">
              <span className="text-xs font-mono text-hud-green">TOTAL PLAYERS: 50,000+</span>
            </div>
            <div className="glass-panel px-4 py-2">
              <span className="text-xs font-mono text-hud-pink">AVG SATISFACTION: 98%</span>
            </div>
            <div className="glass-panel px-4 py-2">
              <span className="text-xs font-mono text-hud-orange">ACHIEVEMENTS UNLOCKED: 145K</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}