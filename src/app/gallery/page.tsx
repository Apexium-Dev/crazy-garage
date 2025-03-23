'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black/95">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gallery Coming Soon
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We&apos;re working on curating our best transformations. Check back soon to see our complete portfolio of professional detailing work.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 