'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { GB, MK, AL } from 'country-flag-icons/react/3x2'

const menuItems = [
  { label: 'SERVICES', href: '#services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' }
]

const languages = [
  { code: 'MK', flag: MK, label: 'Македонски' },
  { code: 'AL', flag: AL, label: 'Shqip' },
  { code: 'EN', flag: GB, label: 'English' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentFlag = languages.find(lang => lang.code === currentLang)?.flag || GB

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.lang-switcher')) {
        setIsLangMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--nav-bg)] backdrop-blur-sm py-2 shadow-lg' 
            : 'bg-gradient-to-b from-black/70 to-transparent py-4'
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative w-14 h-14 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo.jpg"
                alt="Crazy Garage"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link group"
              >
                {item.label}
                <span className="nav-link-underline"></span>
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative lang-switcher">
              <button 
                className="flex items-center space-x-2 text-[var(--nav-text)] hover:text-[var(--nav-hover)] transition-colors px-2 py-1 rounded-md"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLangMenuOpen(!isLangMenuOpen)
                }}
              >
                <CurrentFlag flag={currentFlag} />
                <span className="text-sm font-medium">{currentLang}</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-[var(--secondary)] rounded-md shadow-xl py-2 min-w-[160px] border border-white/10 backdrop-blur-sm"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-[var(--nav-text)] hover:bg-white/5 hover:text-[var(--nav-hover)] transition-colors text-sm"
                        onClick={() => {
                          setCurrentLang(lang.code)
                          setIsLangMenuOpen(false)
                        }}
                      >
                        <CurrentFlag flag={lang.flag} />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--nav-text)] text-xl p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--secondary)] md:hidden pt-20"
          >
            <div className="container py-8">
              <div className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[var(--nav-text)] text-xl hover:text-[var(--nav-hover)] transition-colors tracking-widest font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile Language Options */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center space-x-3 text-[var(--nav-text)] hover:text-[var(--nav-hover)] transition-colors"
                      onClick={() => {
                        setCurrentLang(lang.code)
                        setIsOpen(false)
                      }}
                    >
                      <CurrentFlag flag={lang.flag} />
                      <span className="text-lg">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Helper component for flag icons
const CurrentFlag = ({ flag: Flag }: { flag: React.ComponentType<{ className: string }> }) => (
  <Flag className="w-5 h-5 rounded shadow-sm" />
) 