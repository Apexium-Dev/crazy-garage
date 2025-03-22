'use client'

import { motion } from 'framer-motion'
import { FaCar, FaLightbulb, FaRegLightbulb, FaCarSide, FaTools, FaShieldAlt } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { useState } from 'react'
import Image from 'next/image'

interface Service {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: FaCar,
    title: 'Car Polish',
    description: 'Transform your vehicle with our professional exterior polishing and paint correction service.',
    features: [
      'Advanced paint correction',
      'Complete swirl removal',
      'Long-lasting deep shine',
      'Ceramic coating protection',
      'Paint sealant application'
    ],
    image: '/images/services/car-polish.jpg'
  },
  {
    icon: FaLightbulb,
    title: 'Headlights Polish',
    description: 'Enhance visibility and aesthetics with our specialized headlight polishing service.',
    features: [
      'UV-resistant coating',
      'Oxidation removal',
      'Crystal clear finish',
      'Improved visibility',
      'Long-lasting protection'
    ],
    image: '/images/services/headlight-polish.jpg'
  },
  {
    icon: FaRegLightbulb,
    title: 'Headlights Restoration',
    description: 'Give your headlights new life with our comprehensive restoration service.',
    features: [
      'Deep surface restoration',
      'Protective sealant',
      'Like-new results',
      'UV protection coating',
      'Enhanced brightness'
    ],
    image: '/images/services/headlight-restore.jpg'
  },
  {
    icon: FaCarSide,
    title: 'Angel Eyes Mount',
    description: 'Upgrade your vehicle\'s appearance with our premium angel eyes installation.',
    features: [
      'Expert installation',
      'Premium LED systems',
      'Custom styling options',
      'OEM-like finish',
      'Modern lighting upgrade'
    ],
    image: '/images/services/angel-eyes.jpg'
  },
  {
    icon: FaTools,
    title: 'Interior Detailing',
    description: 'Experience the ultimate in interior car care with our comprehensive detailing service.',
    features: [
      'Premium leather care',
      'Deep fabric cleaning',
      'Complete sanitization',
      'Odor elimination',
      'UV protection treatment'
    ],
    image: '/images/services/interior-detail.jpg'
  },
  {
    icon: FaShieldAlt,
    title: 'Paint Protection Film',
    description: 'Protect your vehicle\'s paint from scratches, chips, and environmental damage with premium PPF.',
    features: [
      'Self-healing technology',
      'UV protection',
      'High-impact resistance',
      'Preserves paint finish',
      'Professional installation'
    ],
    image: '/images/services/ppf.jpg'
  }
];

export default function Services() {
  return (
    <section className="section relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-[var(--secondary)]" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience premium car detailing services that will transform your vehicle's appearance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                  <service.icon className="text-[var(--primary)] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--primary)] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 