'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Professional Car Detailing"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform your car's look with our professional detailing services
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl">
              Experience premium car detailing and headlight restoration services that
              will transform your vehicle's appearance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors">
                GET YOUR CAR POLISHED
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors">
                VIEW OUR WORK
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="absolute bottom-8 right-8 z-20">
        <a
          href="https://wa.me/38976276666"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5C] transition-colors"
        >
          <Image
            src="/images/whatsapp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </a>
      </div>
    </section>
  )
} 