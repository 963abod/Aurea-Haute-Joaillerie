"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

interface GalleryProps {
  images: string[];
  alt: string;
  className?: string;
  onImageClick?: (index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  alt,
  className = "",
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image Display */}
      <div className="relative aspect-square w-full overflow-hidden bg-onyx border border-onyx-border group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - View ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </AnimatePresence>

        {/* Zoom/Fullscreen Icon */}
        {onImageClick && (
          <button
            onClick={() => onImageClick(currentIndex)}
            className="absolute top-4 end-4 p-2.5 bg-obsidian/70 backdrop-blur-md text-ivory-warm hover:text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-champagne-gold/30"
            aria-label="Expand image"
          >
            <Expand strokeWidth={1.25} size={18} />
          </button>
        )}

        {/* Navigation Arrows for Multiple Images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute start-4 top-1/2 -translate-y-1/2 p-2.5 bg-obsidian/70 backdrop-blur-md text-ivory-warm hover:text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-champagne-gold/30"
              aria-label="Previous image"
            >
              <ChevronLeft strokeWidth={1.25} size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute end-4 top-1/2 -translate-y-1/2 p-2.5 bg-obsidian/70 backdrop-blur-md text-ivory-warm hover:text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-champagne-gold/30"
              aria-label="Next image"
            >
              <ChevronRight strokeWidth={1.25} size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Selector */}
      {images.length > 1 && (
        <div className="flex items-center space-x-3 rtl:space-x-reverse overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 flex-shrink-0 border transition-all duration-300 overflow-hidden ${
                idx === currentIndex
                  ? "border-champagne-gold shadow-md shadow-champagne-gold/20"
                  : "border-onyx-border opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
