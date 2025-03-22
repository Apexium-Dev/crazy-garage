'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const transformations = [
  {
    title: 'Interior Door Panel',
    description: 'Professional interior restoration and deep cleaning',
    beforeImage: '/images/interior-door-before.jpg',
    afterImage: '/images/interior-door-after.jpg'
  },
  {
    title: 'Interior Side Panel',
    description: 'Complete interior detailing and surface restoration',
    beforeImage: '/images/interior-side-before.jpg',
    afterImage: '/images/interior-side-after.jpg'
  },
  {
    title: 'Surface Treatment',
    description: 'Professional surface cleaning and protection',
    beforeImage: '/images/surface-before.jpg',
    afterImage: '/images/surface-after.jpg'
  }
]

export default function Gallery() {
  return (
    <section className="section bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Transformations</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Witness the remarkable results of our professional detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 rounded-lg overflow-hidden"
            >
              <div className="relative h-64 group cursor-pointer">
                <Image
                  src={item.beforeImage}
                  alt={`Before ${item.title}`}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={item.afterImage}
                  alt={`After ${item.title}`}
                  fill
                  className="object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-primary">
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  )
} 