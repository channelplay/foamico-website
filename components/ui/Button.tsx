'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  href?: string
  className?: string
  target?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  className = '',
  target,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-foamico-lime text-white hover:bg-foamico-lime-dark focus:ring-foamico-lime',
    secondary: 'bg-foamico-black text-white hover:bg-gray-800 focus:ring-foamico-black',
    outline: 'border-2 border-foamico-lime text-foamico-lime hover:bg-foamico-lime hover:text-white focus:ring-foamico-lime'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const buttonContent = href ? (
    <Link href={href} className={classes} target={target}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  )
  
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {buttonContent}
    </motion.div>
  )
}