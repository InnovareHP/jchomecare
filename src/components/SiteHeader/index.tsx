'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const SiteHeader: React.FC = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm shadow-gray-100/50'
          : 'bg-white/95 backdrop-blur-sm',
      )}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[#73a9d9] to-[#5a93c4] text-white text-center py-1.5 text-sm">
        Call us today:{' '}
        <a href="tel:6165002190" className="font-semibold underline underline-offset-2">
          616-500-2190
        </a>
      </div>

      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl tracking-tight group">
          <Image src="/logo.png" alt="JC Home Care" width={80} height={80} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                pathname === href ? 'text-[#73a9d9]' : 'text-gray-500 hover:text-gray-900',
              )}
            >
              {pathname === href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[#73a9d9]/8"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA button desktop */}
        <a
          href="tel:6165002190"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-5 py-2 text-sm font-medium transition-all hover:bg-[#5a93c4] hover:shadow-md hover:shadow-[#73a9d9]/20"
        >
          Get in Touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container flex flex-col py-4 gap-1">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'py-3 px-4 rounded-xl text-base font-medium transition-all block',
                      pathname === href
                        ? 'text-[#73a9d9] bg-[#73a9d9]/5'
                        : 'text-gray-600 hover:bg-gray-50',
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.06 }}
                className="mt-2 pt-3 border-t border-gray-100"
              >
                <a
                  href="tel:6165002190"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#73a9d9] text-white px-6 py-3 text-sm font-medium transition-all hover:bg-[#5a93c4]"
                >
                  Call 616-500-2190
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
