'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'medium',
  onClick
}: CardProps) {
  const baseStyles = 'bg-base-cream rounded-lg shadow-md overflow-hidden'
  
  const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-lg' : ''
  
  const paddingStyles = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }
  
  const cardContent = (
    <div className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`} onClick={onClick}>
      {children}
    </div>
  )
  
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    )
  }
  
  return cardContent
}