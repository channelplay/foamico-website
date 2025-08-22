'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [systemUptime, setSystemUptime] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setSystemUptime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    return `${days}d ${hours}h ${mins}m`
  }

  const footerLinks = {
    products: [
      { name: 'SOVA.exe', href: '/products/sova' },
      { name: 'ULTIMA.exe', href: '/products/ultima' },
      { name: 'MARVEL.exe', href: '/products/marvel' },
      { name: 'NATURA.exe', href: '/products/natura' },
    ],
    resources: [
      { name: 'blog.txt', href: '/blog' },
      { name: 'sleep_guide.pdf', href: '/sleep-guide' },
      { name: 'mattress_care.md', href: '/mattress-care' },
    ],
    system: [
      { name: 'locate_store.sh', href: '/find-store' },
      { name: 'contact.bat', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-cyber-darker border-t border-hud-cyan/30 relative overflow-hidden">
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-hud-green/20 font-mono text-xs"
            style={{ left: `${i * 5}%` }}
            initial={{ y: -20 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            {Math.random().toString(36).substring(2, 8).toUpperCase()}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Terminal Header */}
        <div className="border-b border-hud-cyan/20 bg-cyber-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-hud-green">◉ SYSTEM ONLINE</span>
                <span className="text-[10px] font-mono text-hud-cyan/60">PID: 2077</span>
                <span className="text-[10px] font-mono text-hud-orange/60">UPTIME: {formatUptime(systemUptime)}</span>
              </div>
              <div className="text-[10px] font-mono text-hud-cyan/60">
                {currentTime.toLocaleString('en-US', { 
                  hour12: false,
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Terminal Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <motion.div 
                  className="inline-block"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0,212,255,0.8)',
                      '0 0 40px rgba(255,0,255,0.8)',
                      '0 0 20px rgba(0,212,255,0.8)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <h2 className="text-3xl font-cyber font-bold">
                    <span className="text-hud-cyan">FOAM</span>
                    <span className="text-hud-pink">ICO</span>
                  </h2>
                </motion.div>
                <div className="text-xs font-mono text-hud-cyan/60 mt-1">
                  v2.0.1 | BUILD 2024.STABLE
                </div>
              </div>
              
              <div className="font-mono text-sm text-hud-cyan/70 mb-6">
                <p className="mb-2">$ cat mission.txt</p>
                <p className="text-hud-green/60 pl-4">
                  &gt; Upgrading sleep quality for humanity<br />
                  &gt; One mattress at a time.<br />
                  &gt; Mission Status: <span className="text-hud-green">ACTIVE</span>
                </p>
              </div>
              
              {/* Social Links as Network Connections */}
              <div className="flex gap-4">
                {[
                  { name: 'TWITTER', icon: 'X', color: 'cyan' },
                  { name: 'PINTEREST', icon: 'P', color: 'pink' },
                  { name: 'INSTAGRAM', icon: 'I', color: 'purple' },
                  { name: 'LINKEDIN', icon: 'L', color: 'blue' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`glass-panel w-10 h-10 flex items-center justify-center border border-hud-${social.color}/50 text-hud-${social.color} hover:shadow-neon-${social.color} transition-all`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-mono font-bold text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Products Directory */}
            <div>
              <h3 className="text-sm font-mono text-hud-pink mb-4">
                <span className="text-hud-cyan/60">$</span> ls products/
              </h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs font-mono text-hud-cyan/70 hover:text-hud-cyan hover:text-glow transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="text-hud-green/60 group-hover:text-hud-green">▸</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Directory */}
            <div>
              <h3 className="text-sm font-mono text-hud-pink mb-4">
                <span className="text-hud-cyan/60">$</span> ls resources/
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs font-mono text-hud-cyan/70 hover:text-hud-cyan hover:text-glow transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="text-hud-orange/60 group-hover:text-hud-orange">▸</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Directory */}
            <div>
              <h3 className="text-sm font-mono text-hud-pink mb-4">
                <span className="text-hud-cyan/60">$</span> ls system/
              </h3>
              <ul className="space-y-2">
                {footerLinks.system.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs font-mono text-hud-cyan/70 hover:text-hud-cyan hover:text-glow transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="text-hud-purple/60 group-hover:text-hud-purple">▸</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ASCII Art Divider */}
          <div className="my-8 text-hud-cyan/20 font-mono text-xs overflow-hidden">
            <motion.div
              animate={{ x: [0, -100] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="whitespace-nowrap"
            >
              ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
            </motion.div>
          </div>

          {/* Bottom Terminal Line */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs font-mono text-hud-cyan/60">
                <span className="text-hud-green/60">$</span> echo $COPYRIGHT
              </p>
              <p className="text-xs font-mono text-hud-cyan/50">
                © 2024 FOAMICO SYSTEMS. ALL RIGHTS RESERVED.
              </p>
            </div>
            
            <div className="flex gap-6">
              <Link 
                href="/privacy"
                className="text-xs font-mono text-hud-cyan/60 hover:text-hud-cyan transition-colors"
              >
                [PRIVACY.POLICY]
              </Link>
              <Link 
                href="/terms"
                className="text-xs font-mono text-hud-cyan/60 hover:text-hud-cyan transition-colors"
              >
                [TERMS.OF.SERVICE]
              </Link>
            </div>
          </div>

          {/* Terminal Cursor */}
          <div className="mt-4">
            <p className="text-xs font-mono text-hud-green/60">
              <span className="text-hud-cyan/60">foamico@sleep-system</span>
              <span className="text-hud-pink/60">:</span>
              <span className="text-hud-cyan/60">~</span>
              <span className="text-hud-green/60">$</span>
              <motion.span
                className="inline-block w-2 h-4 bg-hud-green ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}