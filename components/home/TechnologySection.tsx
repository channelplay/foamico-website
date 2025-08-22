'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'

const technologies = [
  {
    id: 'eurotop',
    name: 'EUROTOP STITCHING',
    shortName: 'EUROTOP',
    description: 'Premium European craftsmanship for superior edge support and durability.',
    features: ['Pressure Relief', 'Edge Support', 'Enhanced Durability', 'Premium Comfort'],
    icon: '⬡',
    color: 'cyan',
    power: 92,
    unlocked: true,
    requiredLevel: 5,
    xpReward: 500,
    stats: {
      durability: '+45%',
      comfort: '+30%',
      support: '+50%'
    }
  },
  {
    id: 'iqs',
    name: 'IQS™ INTELLIGENCE',
    shortName: 'IQS™',
    description: 'Smart technology that adapts to your body for optimized sleep performance.',
    features: ['Sleep Optimization', 'Body Adaptation', 'Temperature Regulation', 'Motion Isolation'],
    icon: '◈',
    color: 'pink',
    power: 88,
    unlocked: true,
    requiredLevel: 8,
    xpReward: 750,
    stats: {
      intelligence: '+60%',
      adaptation: '+40%',
      efficiency: '+35%'
    }
  },
  {
    id: 'orthosense',
    name: 'ORTHOSENSE™ TECH',
    shortName: 'ORTHOSENSE™',
    description: 'Specially designed for optimal spinal alignment and pain relief.',
    features: ['Spinal Alignment', 'Muscle Comfort', 'Arthritis Relief', 'Back Support'],
    icon: '◉',
    color: 'green',
    power: 95,
    unlocked: true,
    requiredLevel: 10,
    xpReward: 1000,
    stats: {
      healing: '+50%',
      alignment: '+55%',
      recovery: '+40%'
    }
  },
  {
    id: 'dual-feel',
    name: 'DUAL FEEL MODE',
    shortName: 'DUAL FEEL',
    description: 'Customizable comfort with different firmness levels on each side.',
    features: ['Personalized Comfort', 'Partner Preference', 'Versatile Support', 'Custom Zones'],
    icon: '◆',
    color: 'orange',
    power: 85,
    unlocked: true,
    requiredLevel: 12,
    xpReward: 1250,
    stats: {
      customization: '+70%',
      versatility: '+45%',
      satisfaction: '+60%'
    }
  }
]

export default function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-hud-cyan border-hud-cyan/50 bg-hud-cyan/10',
      pink: 'text-hud-pink border-hud-pink/50 bg-hud-pink/10',
      green: 'text-hud-green border-hud-green/50 bg-hud-green/10',
      orange: 'text-hud-orange border-hud-orange/50 bg-hud-orange/10'
    }
    return colors[color as keyof typeof colors] || colors.cyan
  }

  const getGlowColor = (color: string) => {
    const glows = {
      cyan: 'shadow-neon-cyan',
      pink: 'shadow-neon-pink',
      green: 'shadow-neon-green',
      orange: '0 0 20px rgba(255,165,0,0.5), 0 0 40px rgba(255,165,0,0.3)'
    }
    return glows[color as keyof typeof glows] || glows.cyan
  }

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,0,255,0.1) 0%, transparent 50%)',
          }}
        />
      </div>

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
            className="inline-block glass-panel border border-hud-cyan px-6 py-2 mb-6"
            animate={{
              borderColor: ['rgba(0,212,255,0.5)', 'rgba(255,0,255,0.5)', 'rgba(0,212,255,0.5)'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-xs font-mono text-hud-cyan uppercase tracking-widest">
              TECH TREE UNLOCKED
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-cyan">UPGRADE YOUR</span>
            <br />
            <span className="neon-text-pink text-5xl lg:text-6xl">SLEEP TECH</span>
          </h2>
          
          <p className="text-lg font-mono text-hud-cyan/70 max-w-3xl mx-auto">
            Every FOAMICO mattress comes with 
            <span className="text-hud-green"> HIGH-PERFORMANCE MODULES </span>
            and <span className="text-hud-pink">LEGENDARY ABILITIES</span>
          </p>
        </motion.div>

        {/* Tech Grid - Skill Tree Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Lines (Circuit Pattern) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: 'scale(1.1)' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,212,255,0.2)" />
                <stop offset="50%" stopColor="rgba(255,0,255,0.2)" />
                <stop offset="100%" stopColor="rgba(0,255,136,0.2)" />
              </linearGradient>
            </defs>
            {/* Draw connecting lines between tech cards */}
            <motion.path
              d="M 25% 50% L 75% 50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>

          {technologies.map((tech, index) => {
            const isHovered = hoveredTech === tech.id
            const isSelected = selectedTech === tech.id
            
            return (
              <motion.div
                key={tech.id}
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(isSelected ? null : tech.id)}
              >
                <motion.div 
                  className={`relative hologram-card h-full cursor-pointer ${getColorClasses(tech.color)}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    boxShadow: isHovered ? getGlowColor(tech.color) : undefined
                  }}
                >
                  {/* Corner decorations */}
                  <div className={`cyber-corner-tl border-hud-${tech.color}`} />
                  <div className={`cyber-corner-tr border-hud-${tech.color}`} />
                  <div className={`cyber-corner-bl border-hud-${tech.color}`} />
                  <div className={`cyber-corner-br border-hud-${tech.color}`} />

                  {/* Unlock Status */}
                  <div className="absolute -top-3 -right-3 z-20">
                    {tech.unlocked ? (
                      <motion.div 
                        className="glass-panel px-2 py-1 border border-hud-green/50"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <span className="text-[10px] font-mono text-hud-green">UNLOCKED</span>
                      </motion.div>
                    ) : (
                      <div className="glass-panel px-2 py-1 border border-hud-orange/50">
                        <span className="text-[10px] font-mono text-hud-orange">LVL {tech.requiredLevel}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech Icon */}
                  <div className="mb-4">
                    <motion.div 
                      className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center text-3xl ${getColorClasses(tech.color)}`}
                      animate={isHovered ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                    >
                      {tech.icon}
                    </motion.div>
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className={`text-lg font-cyber mb-3 text-hud-${tech.color}`}>
                    {tech.shortName}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs font-mono text-hud-cyan/60 mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Power Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] font-mono mb-1">
                      <span className={`text-hud-${tech.color}/60`}>POWER</span>
                      <span className={`text-hud-${tech.color}/60`}>{tech.power}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r from-hud-${tech.color} to-hud-${tech.color}-light`}
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? `${tech.power}%` : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <AnimatePresence>
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 mb-4"
                      >
                        {Object.entries(tech.stats).map(([stat, value]) => (
                          <div key={stat} className="flex justify-between text-[10px] font-mono">
                            <span className="text-hud-cyan/50 uppercase">{stat}</span>
                            <span className="text-hud-green">{value}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {tech.features.map((feature, idx) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0.6, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className={`text-hud-${tech.color} text-xs`}>▸</span>
                        <span className="text-[11px] text-hud-cyan/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>


                  {/* Hover Effect Overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-hud-cyan/5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-panel inline-block px-6 py-3">
            <p className="text-xs font-mono text-hud-cyan/70">
              ALL TECHNOLOGIES INCLUDED • 
              <span className="text-hud-green"> NO ADDITIONAL COST</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}