'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GalleryItem from './GalleryItem'

const galleryItems = [
  {
    id: 1,
    title: 'Left Side Door',
    beforeImage: '/gallery/left-side-door-before.JPG',
    afterImage: '/gallery/left-side-door-after.JPG',
    description: 'Complete door panel restoration and detailing'
  },
  {
    id: 2,
    title: 'Interior Right Side',
    beforeImage: '/gallery/inside-from-right-before-2.JPG',
    afterImage: '/gallery/from-right-side-after.JPG',
    description: 'Full interior restoration and cleaning'
  },
  {
    id: 3,
    title: 'Complete Transformation',
    beforeImage: '/gallery/before.jpeg',
    afterImage: '/gallery/after.jpeg',
    description: 'Full vehicle detailing and restoration'
  }
]

export default function Gallery() {
  return (
    <section className="section relative overflow-hidden" id="gallery">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-start)] via-[var(--background-mid)] to-[var(--background-end)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-[0.03]" />
      
      <div className="container relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-bold gradient-text mb-4"
          >
            Featured Transformations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            Witness the remarkable results of our professional detailing services
          </motion.p>
          <div className="section-divider" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              title={item.title}
              description={item.description}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              delay={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="btn btn-primary"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 