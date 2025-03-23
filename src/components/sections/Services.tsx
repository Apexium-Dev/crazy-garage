'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCar, FaLightbulb, FaRegLightbulb, FaCarSide, FaTools, FaShieldAlt, FaCheck } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group card"
    >
      <div className="relative">
        {/* Icon */}
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-xl bg-[var(--primary)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/10 transition-all duration-300"
        >
          <Icon className="text-2xl text-[var(--primary)]" />
        </motion.div>

        {/* Content */}
        <motion.h3 
          animate={{ color: isHovered ? 'var(--primary)' : '#ffffff' }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-4"
        >
          {title}
        </motion.h3>
        <p className="text-[var(--text-muted)] mb-8 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay * 0.1 + idx * 0.1 }}
              className="flex items-center gap-4 text-[var(--text-muted)] group-hover:text-white/90 transition-colors duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-[var(--primary)]/5 flex items-center justify-center group-hover:bg-[var(--primary)]/10 transition-all duration-300">
                <FaCheck className="text-[var(--primary)] text-xs" />
              </div>
              <span className="text-base">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const services = [
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-black via-black/95 to-[var(--secondary)] relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent opacity-30" />

      <div className="container relative">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title gradient-text"
          >
            Our Services
          </motion.h2>
          <p className="section-description">
            Experience premium car detailing services that will transform your vehicle's appearance
          </p>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 