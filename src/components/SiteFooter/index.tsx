import Link from 'next/link'
import React from 'react'
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedLine } from '@/components/Motion'
import Image from 'next/image'

export const SiteFooter: React.FC = () => {
  return (
    <footer className="mt-auto bg-white">
      {/* Pre-footer CTA strip */}

      <AnimatedLine className="h-[1px] w-full bg-gray-100" />

      {/* Main footer */}
      <div className="container py-14">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-10" staggerDelay={0.08}>
          {/* Brand */}
          <StaggerItem className="md:col-span-2">
            <Link href="/" className="text-2xl tracking-tight group inline-block">
              <Image src="/logo.png" alt="JC Home Care" width={150} height={150} />
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
              Changing the face of home care. Compassionate, personalized home health care services
              in Grand Rapids, Michigan.
            </p>
          </StaggerItem>

          {/* Pages */}
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/blogs', label: 'Blog' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#73a9d9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </StaggerItem>

          {/* Get in touch */}
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="tel:6165002190" className="hover:text-[#73a9d9] transition-colors">
                616-500-2190
              </a>
              <a
                href="mailto:christina@jchomecare.net"
                className="hover:text-[#73a9d9] transition-colors"
              >
                christina@jchomecare.net
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090885794398"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#73a9d9] transition-colors"
              >
                Facebook
              </a>
              <p className="text-gray-400 text-xs mt-1">Mon &ndash; Fri, 9 AM &ndash; 5 PM</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp delay={0.3}>
          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} JC Home Care. All rights reserved.
            </p>
            <p className="text-xs text-gray-300">Grand Rapids, Michigan</p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  )
}
