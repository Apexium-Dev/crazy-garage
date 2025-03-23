'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/crazy-garage/images/hero.webp"
          alt="Professional Car Detailing"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[var(--background-rgb)]/30 backdrop-blur-[2px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="gradient-text leading-tight"
            >
              Transform your car&apos;s look with our professional detailing services
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl"
            >
              Experience premium car detailing and headlight restoration services that
              will transform your vehicle&apos;s appearance
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                GET YOUR CAR POLISHED
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('gallery')}
              >
                VIEW OUR WORK
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 right-8 z-20"
      >
        <a
          href="https://wa.me/38976276666"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5C] transition-all duration-300 hover:scale-110"
        >
          <Image
            src="/crazy-garage/images/whatsapp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-1 h-3 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
} 