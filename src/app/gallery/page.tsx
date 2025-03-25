'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GalleryItem from './GalleryItem';

interface LocalizedText {
  en: string;
  mk: string;
  sq: string;
}

interface GalleryItem {
  timestamp: number;
  title: LocalizedText;
  description: LocalizedText;
  beforeImage: string | null;
  afterImage: string | null;
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGalleryData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/crazy-garage/data/gallery.json');
        if (!response.ok) {
          throw new Error('Failed to load gallery data');
        }
        
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid gallery data format');
        }

        setGalleryItems(data);
        setError(null);
      } catch (error) {
        console.error('Error loading gallery:', error);
        // Don't show error if it's just empty data
        if (error instanceof Error && error.message === 'Failed to load gallery data') {
          setGalleryItems([]);
        } else {
          setError('Failed to load gallery items. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }

    // Load data immediately
    loadGalleryData();

    // Set up polling to check for new images every 30 seconds
    const interval = setInterval(loadGalleryData, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
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
            Our Transformations
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

        {/* Error State */}
        {error && (
          <div className="text-center py-6 mb-8">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--primary)]"></div>
            <p className="text-[var(--text-muted)] mt-4">Loading gallery...</p>
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && galleryItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.timestamp}
                title={item.title}
                description={item.description}
                beforeImage={item.beforeImage || ''}
                afterImage={item.afterImage || ''}
                delay={index}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && galleryItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-muted)]">
              No gallery items available yet. Images will appear here automatically when added.
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 