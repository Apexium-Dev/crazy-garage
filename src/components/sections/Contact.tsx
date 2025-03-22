'use client'

import { FaWhatsapp, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section bg-black/95" id="contact">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for premium car detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <FaClock className="text-[var(--primary)] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                <p className="text-gray-300">Contact us for current availability</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-[var(--primary)] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-300">Crazy Garage, Debar, North Macedonia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-[var(--primary)] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-300">+38976276666</p>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://wa.me/38976276666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+38976276666"
                    className="btn bg-gray-800 hover:bg-gray-700 text-white w-full"
                  >
                    <FaPhone className="mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23766.13976462!2d20.51752005!3d41.52341865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350c1b9c7b5f9d5%3A0x9c35c10b8f0d8e0!2sDebar%2C%20North%20Macedonia!5e0!3m2!1sen!2s!4v1647887654321!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Crazy Garage. All rights reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://instagram.com/crazygarageviterbo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/38976276666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
} 