import Link from 'next/link'
import React from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion'

export const SiteFooter: React.FC = () => {
  return (
    <footer className="mt-auto bg-white border-t border-gray-100">
      <div className="container py-14">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.1}>
          {/* Brand */}
          <StaggerItem>
            <Link href="/" className="text-2xl tracking-tight">
              <span className="font-bold text-[#4783b5]">JC</span>{' '}
              <span className="font-light text-gray-800">Home Care</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Changing the face of home care.
              <br />
              Compassionate, personalized home health care services.
            </p>
          </StaggerItem>

          {/* Pages */}
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Pages
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-[#4783b5] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-[#4783b5] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-[#4783b5] transition-colors"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-gray-600 hover:text-[#4783b5] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-[#4783b5] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </StaggerItem>

          {/* Get in touch */}
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Get In Touch
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-gray-600">
              <a href="tel:6165002190" className="hover:text-[#4783b5] transition-colors">
                616-500-2190
              </a>
              <a
                href="mailto:christina@jchomecare.net"
                className="hover:text-[#4783b5] transition-colors"
              >
                christina@jchomecare.net
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090885794398"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4783b5] transition-colors"
              >
                Facebook
              </a>
              <p className="text-gray-400 text-xs mt-1">Mon &ndash; Fri, 9 AM &ndash; 5 PM</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} JC Home Care. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
