import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'small' | 'medium'
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'medium',
  className = ''
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full'
  
  const variants = {
    primary: 'bg-foamico-lime-light text-foamico-lime-dark',
    secondary: 'bg-foamico-gray-100 text-foamico-gray-700',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800'
  }
  
  const sizes = {
    small: 'px-2.5 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm'
  }
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}