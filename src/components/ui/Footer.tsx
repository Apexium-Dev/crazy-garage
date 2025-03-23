'use client'

import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] border-t border-white/5">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Professional car detailing services in Debar, North Macedonia. 
              Specializing in paint correction, headlight restoration, and premium detailing solutions.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300">
                  Car Polish
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300">
                  Headlights Polish
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300">
                  Paint Protection Film
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Working Hours</h3>
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-2">
              <FaClock className="text-[var(--primary)]" />
              <div>
                <p>Monday - Saturday</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
              <FaMapMarkerAlt className="text-[var(--primary)]" />
              <div>
                <p>8 Septemvri</p>
                <p>Debar, North Macedonia</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+38976276666"
                className="flex items-center gap-3 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300"
              >
                <FaPhone className="text-[var(--primary)]" />
                +389 76 276 666
              </a>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/38976276666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5C] transition-all duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/crazygarageviterbo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-all duration-300"
                >
                  <FaInstagram className="text-lg" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Crazy Garage. All rights reserved.</p>
          <div className="flex items-center">
            <span>Developed by</span>
            <Link 
              href="https://www.instagram.com/apexiumdev/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 ml-1 text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors duration-300"
            >
              <span>Apexium</span>
              <FaInstagram className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 