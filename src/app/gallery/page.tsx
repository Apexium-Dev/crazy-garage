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
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  beforeImage?: string;
  afterImage?: string;
  timestamp: number;
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

        // Get the list of files in the gallery directory
        const response = await fetch('/crazy-garage/gallery/');
        if (!response.ok) {
          throw new Error('Failed to load gallery');
        }
        
        const files = await response.text();
        const matches = [...files.matchAll(/(?:before|after)_(\d+)\.(jpg|jpeg|png|webp)/gi)];
        
        // Group files by timestamp
        const pairs: { [key: string]: { before?: string; after?: string } } = {};
        matches.forEach(match => {
          const [filename, timestamp] = match;
          const type = filename.toLowerCase().startsWith('before') ? 'before' : 'after';
          if (!pairs[timestamp]) {
            pairs[timestamp] = {};
          }
          pairs[timestamp][type] = filename;
        });

        // Create gallery items
        const items = Object.entries(pairs).map(([timestamp, pair]) => ({
          id: timestamp,
          title: {
            en: 'Car Detailing',
            mk: 'Детаилирање на автомобил',
            sq: 'Detajimi i makinës'
          },
          description: {
            en: pair.after && !pair.before ? 'After professional detailing' : pair.before && !pair.after ? 'Before professional detailing' : 'Professional detailing transformation',
            mk: pair.after && !pair.before ? 'После професионално детаилирање' : pair.before && !pair.after ? 'Пред професионално детаилирање' : 'Професионална трансформација со детаилирање',
            sq: pair.after && !pair.before ? 'Pas detajimit profesional' : pair.before && !pair.after ? 'Para detajimit profesional' : 'Transformim profesional i detajuar'
          },
          beforeImage: pair.before ? `/gallery/${pair.before}` : undefined,
          afterImage: pair.after ? `/gallery/${pair.after}` : undefined,
          timestamp: parseInt(timestamp)
        }));

        // Sort by timestamp, newest first
        items.sort((a, b) => b.timestamp - a.timestamp);
        setGalleryItems(items);
      } catch (error) {
        console.error('Error loading gallery:', error);
        setError('Failed to load gallery items. Please try again later.');
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
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.id}
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
            <p className="text-[var(--text-muted)]">No gallery items available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
} 