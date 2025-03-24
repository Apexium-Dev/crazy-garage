'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type Language = 'en' | 'mk' | 'sq';

interface LocalizedText {
  en: string;
  mk: string;
  sq: string;
}

interface GalleryItemProps {
  title: LocalizedText;
  description: LocalizedText;
  beforeImage: string;
  afterImage: string;
  delay: number;
}

export default function GalleryItem({
  title,
  description,
  beforeImage,
  afterImage,
  delay
}: GalleryItemProps) {
  const [showAfter, setShowAfter] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const params = useParams();
  const lang = ((params.lng as string) || 'en') as Language;
  
  const handleInteraction = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setShowAfter(prev => !prev);
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative group"
    >
      <div 
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 select-none cursor-pointer touch-manipulation"
        onClick={handleInteraction}
        onTouchEnd={handleInteraction}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={`Before ${title[lang]}`}
            fill
            className="object-cover select-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            draggable="false"
          />
        </div>

        {/* After Image */}
        <AnimatePresence>
          {showAfter && (
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={afterImage}
                alt={`After ${title[lang]}`}
                fill
                className="object-cover select-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                draggable="false"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Badge */}
        <div 
          className={`absolute top-4 ${showAfter ? 'right-4' : 'left-4'} px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all duration-300 ${
            showAfter 
              ? 'bg-[var(--primary)] text-white' 
              : 'bg-black/80 text-white backdrop-blur-sm border border-white/10'
          }`}
        >
          {showAfter ? 'After' : 'Before'}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 md:p-6">
          <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
            {title[lang]}
          </h3>
          <p className="text-sm md:text-base text-gray-200 opacity-90">
            {description[lang]}
          </p>
        </div>

        {/* Instructions */}
        {!hasInteracted && (
          <motion.div 
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="bg-black/80 px-4 py-2 rounded-full text-white text-sm md:text-base backdrop-blur-sm border border-white/10 shadow-xl"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Tap to compare
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 