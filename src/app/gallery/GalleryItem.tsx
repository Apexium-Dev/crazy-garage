'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';

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

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  description,
  beforeImage,
  afterImage,
  delay
}) => {
  const [showAfter, setShowAfter] = useState(false);
  const params = useParams();
  const lang = ((params.lng as string) || 'en') as 'en' | 'mk' | 'sq';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative group"
    >
      <div 
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20"
        onClick={() => setShowAfter(!showAfter)}
      >
        {/* Before Image */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
          {beforeImage && (
            <Image
              src={beforeImage}
              alt={`Before ${title[lang]}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        {/* After Image */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          {afterImage && (
            <Image
              src={afterImage}
              alt={`After ${title[lang]}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Status Badge */}
        <div 
          className={`absolute top-4 ${showAfter ? 'right-4' : 'left-4'} px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all duration-300 ${
            showAfter 
              ? 'bg-[var(--primary)] text-white' 
              : 'bg-black/80 text-white backdrop-blur-sm'
          }`}
        >
          {showAfter ? 'After' : 'Before'}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
          <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
            {title[lang]}
          </h3>
          <p className="text-sm text-gray-200 opacity-90">
            {description[lang]}
          </p>
        </div>

        {/* Hover Instructions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/80 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
            Click to compare
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem; 