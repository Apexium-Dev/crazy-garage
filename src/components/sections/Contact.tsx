'use client'

import { FaWhatsapp, FaPhone, FaClock, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-start)] via-[var(--background-mid)] to-[var(--background-end)]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[var(--primary)]/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--primary)_0%,_transparent_60%)] opacity-[0.03]" />

      <div className="container relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-bold gradient-text mb-4"
          >
            Visit Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            Find us in Debar for premium car detailing services
          </motion.p>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card group hover:bg-[var(--secondary)] transition-all duration-300"
            >
              <div className="flex items-center gap-6 p-2">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-all duration-300">
                  <FaClock className="text-[var(--primary)] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    Working Hours
                  </h3>
                  <p className="text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-300">
                    Monday - Saturday<br />
                    09:00 - 18:00
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card group hover:bg-[var(--secondary)] transition-all duration-300"
            >
              <div className="flex items-center gap-6 p-2">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-all duration-300">
                  <FaMapMarkerAlt className="text-[var(--primary)] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    Location
                  </h3>
                  <p className="text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-300">
                    Crazy Garage<br />
                    8 Septemvri, Debar<br />
                    North Macedonia
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card group hover:bg-[var(--secondary)] transition-all duration-300"
            >
              <div className="flex items-center gap-6 p-2">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-all duration-300">
                  <FaPhone className="text-[var(--primary)] text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    Contact
                  </h3>
                  <p className="text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-300 mb-4">
                    +389 76 276 666
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/38976276666"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://instagram.com/crazygarageviterbo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                      <FaInstagram className="text-xl" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-2xl overflow-hidden card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.4876527868166!2d20.523037377149723!3d41.52095727924946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135111bf674dc7b7%3A0x494d6ce192f60c68!2sCrazy%20garage%20EN!5e0!3m2!1sen!2smk!4v1711321768071!5m2!1sen!2smk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 