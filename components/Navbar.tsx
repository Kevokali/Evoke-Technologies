'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/tools', label: 'Tools' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo with Longitudinal Waves */}
          <Link href="/" className="flex items-center space-x-2 relative group py-2 px-2 -ml-2 rounded-lg hover:bg-emerald-50/50 transition-all duration-300">
            {/* Longitudinal waves with sigmoidal curves */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden" style={{ width: '320px', height: '50px' }}>
              {/* Sigmoidal wave pattern - layer 1 */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 320 50" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="sigmoidGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Sigmoidal curves - true S-shaped waves using cubic Bezier */}
                <path d="M -40 25 C -30 15, -10 15, 0 25 C 10 35, 30 35, 40 25 C 50 15, 70 15, 80 25 C 90 35, 110 35, 120 25 C 130 15, 150 15, 160 25 C 170 35, 190 35, 200 25 C 210 15, 230 15, 240 25 C 250 35, 270 35, 280 25 C 290 15, 310 15, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad1)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" />
                <path d="M -40 25 C -30 35, -10 35, 0 25 C 10 15, 30 15, 40 25 C 50 35, 70 35, 80 25 C 90 15, 110 15, 120 25 C 130 35, 150 35, 160 25 C 170 15, 190 15, 200 25 C 210 35, 230 35, 240 25 C 250 15, 270 15, 280 25 C 290 35, 310 35, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad1)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" />
              </svg>
              {/* Sigmoidal wave pattern - layer 2 */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 320 50" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="sigmoidGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M -40 25 C -30 15, -10 15, 0 25 C 10 35, 30 35, 40 25 C 50 15, 70 15, 80 25 C 90 35, 110 35, 120 25 C 130 15, 150 15, 160 25 C 170 35, 190 35, 200 25 C 210 15, 230 15, 240 25 C 250 35, 270 35, 280 25 C 290 15, 310 15, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad2)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.25s' }} />
                <path d="M -40 25 C -30 35, -10 35, 0 25 C 10 15, 30 15, 40 25 C 50 35, 70 35, 80 25 C 90 15, 110 15, 120 25 C 130 35, 150 35, 160 25 C 170 15, 190 15, 200 25 C 210 35, 230 35, 240 25 C 250 15, 270 15, 280 25 C 290 35, 310 35, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad2)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.25s' }} />
              </svg>
              {/* Sigmoidal wave pattern - layer 3 */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 320 50" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="sigmoidGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M -40 25 C -30 15, -10 15, 0 25 C 10 35, 30 35, 40 25 C 50 15, 70 15, 80 25 C 90 35, 110 35, 120 25 C 130 15, 150 15, 160 25 C 170 35, 190 35, 200 25 C 210 15, 230 15, 240 25 C 250 35, 270 35, 280 25 C 290 15, 310 15, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad3)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.5s' }} />
                <path d="M -40 25 C -30 35, -10 35, 0 25 C 10 15, 30 15, 40 25 C 50 35, 70 35, 80 25 C 90 15, 110 15, 120 25 C 130 35, 150 35, 160 25 C 170 15, 190 15, 200 25 C 210 35, 230 35, 240 25 C 250 15, 270 15, 280 25 C 290 35, 310 35, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad3)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.5s' }} />
              </svg>
              {/* Sigmoidal wave pattern - layer 4 */}
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 320 50" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="sigmoidGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M -40 25 C -30 15, -10 15, 0 25 C 10 35, 30 35, 40 25 C 50 15, 70 15, 80 25 C 90 35, 110 35, 120 25 C 130 15, 150 15, 160 25 C 170 35, 190 35, 200 25 C 210 15, 230 15, 240 25 C 250 35, 270 35, 280 25 C 290 15, 310 15, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad4)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.75s' }} />
                <path d="M -40 25 C -30 35, -10 35, 0 25 C 10 15, 30 15, 40 25 C 50 35, 70 35, 80 25 C 90 15, 110 15, 120 25 C 130 35, 150 35, 160 25 C 170 15, 190 15, 200 25 C 210 35, 230 35, 240 25 C 250 15, 270 15, 280 25 C 290 35, 310 35, 320 25" 
                      fill="none" 
                      stroke="url(#sigmoidGrad4)" 
                      strokeWidth="1.5" 
                      className="animate-radiate-horizontal" 
                      style={{ animationDelay: '0.75s' }} />
              </svg>
            </div>
            
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-deep-blue to-emerald-600 bg-clip-text text-transparent relative z-10 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300" style={{ transform: 'translateY(-4px)' }}>
              e-Voke
            </span>
            <span className="text-sm md:text-base text-slate font-semibold relative z-10 group-hover:text-emerald-600 transition-colors duration-300" style={{ transform: 'translateY(-1.5px)' }}>
              Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate hover:text-deep-blue hover:bg-gray-50'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                </Link>
              )
            })}
            <Link
              href="/dashboard"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-accent to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-emerald-50 transition-colors duration-300 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600'
                      : 'text-slate hover:text-deep-blue hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/dashboard"
              className="block mx-4 mt-2 px-4 py-3 text-center text-white font-semibold bg-gradient-to-r from-accent to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
