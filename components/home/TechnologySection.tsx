'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '@/components/ui/Container'

const technologies = [
  {
    id: 'eurotop',
    name: 'European Craftsmanship',
    shortName: 'EUROTOP',
    description: 'Premium European stitching technique for superior edge support and long-lasting durability.',
    features: ['Enhanced Edge Support', 'Premium Materials', 'Superior Durability', 'Luxury Comfort'],
    icon: '⬡',
    benefits: {
      'Durability': 'Extended mattress lifespan',
      'Support': 'Reinforced edge construction',
      'Comfort': 'Smooth, integrated design'
    }
  },
  {
    id: 'iqs',
    name: 'Intelligent Quilting System',
    shortName: 'IQS™',
    description: 'Advanced quilting technology that adapts to your body contours for personalized comfort.',
    features: ['Body Contouring', 'Pressure Distribution', 'Temperature Balance', 'Motion Isolation'],
    icon: '◈',
    benefits: {
      'Adaptability': 'Responds to body shape',
      'Temperature': 'Maintains optimal sleep climate',
      'Isolation': 'Minimizes partner disturbance'
    }
  },
  {
    id: 'orthosense',
    name: 'OrthoSense Technology',
    shortName: 'ORTHOSENSE™',
    description: 'Orthopedically designed support system for optimal spinal alignment and pressure relief.',
    features: ['Spinal Alignment', 'Pressure Point Relief', 'Orthopedic Support', 'Back Care'],
    icon: '◉',
    benefits: {
      'Alignment': 'Maintains natural spine curve',
      'Relief': 'Reduces pressure points',
      'Recovery': 'Promotes restful sleep'
    }
  },
  {
    id: 'dual-feel',
    name: 'Dual Comfort System',
    shortName: 'DUAL FEEL',
    description: 'Customizable comfort with different firmness options to suit individual preferences.',
    features: ['Personalized Comfort', 'Versatile Support', 'Partner Preference', 'Zone Technology'],
    icon: '◆',
    benefits: {
      'Customization': 'Choose your ideal firmness',
      'Versatility': 'Adapts to sleeping positions',
      'Satisfaction': 'Personalized sleep experience'
    }
  }
]

export default function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-overline mb-4">Innovation</p>
          <h2 className="heading-primary mb-4">
            Advanced Sleep Technology
          </h2>
          <div className="divider-line divider-center" />
          <p className="text-body text-light-gray max-w-2xl mx-auto mt-6">
            Every Foamico mattress features cutting-edge technology designed 
            to enhance your sleep quality and comfort.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const isSelected = selectedTech === tech.id
            
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTech(isSelected ? null : tech.id)}
                className="cursor-pointer"
              >
                <motion.div 
                  className="card-elegant h-full p-6 hover:shadow-hover transition-all"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Technology Icon */}
                  <div className="mb-6">
                    <motion.div 
                      className="w-16 h-16 mx-auto rounded-full bg-warm-beige flex items-center justify-center text-3xl text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {tech.icon}
                    </motion.div>
                  </div>
                  
                  {/* Technology Name */}
                  <h3 className="heading-secondary text-xl text-center mb-3">
                    {tech.shortName}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-light-gray text-center mb-6">
                    {tech.description}
                  </p>


                  {/* Benefits (shown when selected) */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 pt-4 space-y-2"
                    >
                      <p className="text-xs font-semibold text-dark mb-3">Key Benefits:</p>
                      {Object.entries(tech.benefits).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-light-gray">{key}:</span>
                          <span className="text-dark text-right ml-2">{value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}