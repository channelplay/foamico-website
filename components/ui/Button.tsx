'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'hud' | 'hud-pink' | 'hud-green'
  size?: 'small' | 'medium' | 'large'
  href?: string
  className?: string
  target?: string
}

export default function Button({
  children,
  variant = 'hud',
  size = 'medium',
  href,
  className = '',
  target,
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-mono font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden'
  
  const variants = {
    primary: 'bg-foamico-lime text-white hover:bg-foamico-lime-dark focus:ring-foamico-lime rounded-full',
    secondary: 'bg-foamico-black text-white hover:bg-gray-800 focus:ring-foamico-black rounded-full',
    outline: 'border-2 border-foamico-lime text-foamico-lime hover:bg-foamico-lime hover:text-white focus:ring-foamico-lime rounded-full',
    hud: `border-2 border-hud-cyan bg-transparent text-hud-cyan hover:text-hud-cyan-glow hover:border-hud-cyan-glow hover:shadow-neon-cyan`,
    'hud-pink': `border-2 border-hud-pink bg-transparent text-hud-pink hover:text-hud-pink-glow hover:border-hud-pink-glow hover:shadow-neon-pink`,
    'hud-green': `border-2 border-hud-green bg-transparent text-hud-green hover:text-hud-green-glow hover:border-hud-green-glow hover:shadow-neon-green`
  }
  
  const sizes = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base'
  }
  
  const isHudVariant = variant.includes('hud')
  const clipPath = isHudVariant ? 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' : ''
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const ButtonContent = () => (
    <>
      {children}
      {isHudVariant && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 hover:opacity-10"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </>
  )
  
  const buttonElement = href ? (
    <Link href={href} target={target}>
      <motion.span 
        className={classes} 
        style={{ clipPath }}
        whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <ButtonContent />
      </motion.span>
    </Link>
  ) : (
    <motion.button 
      className={classes} 
      style={{ clipPath }}
      whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  )
  
  return buttonElement
}