"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Sparkles, Calendar } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const handleScrollToCollections = () => {
    const el = document.getElementById("collections");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToStory = () => {
    const el = document.getElementById("story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-pure pt-20">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=90"
          alt="Haute Joaillerie Fine Diamonds"
          className="w-full h-full object-cover object-center opacity-30 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-pure via-obsidian/70 to-obsidian-pure/80" />
        <div className="absolute inset-0 bg-dark-radial opacity-80" />
      </div>

      {/* Hero Narrative Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 my-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-onyx/80 border border-champagne-gold/30 text-champagne-gold text-xs font-serif uppercase tracking-[0.3em]"
        >
          <Sparkles strokeWidth={1.25} size={14} />
          <span>
            {language === "ar"
              ? "القمة العالمية للمجوهرات الراقية"
              : "The Pinnacle of High Haute Joaillerie"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: luxuryEase, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-gold-gradient font-light uppercase leading-[1.1]"
        >
          {language === "ar" ? (
            <>
              أوريا للمجوهرات <br />
              <span className="font-semibold italic text-ivory-warm">الراقية</span>
            </>
          ) : (
            <>
              Aurea Haute <br />
              <span className="font-normal italic text-ivory-warm">Joaillerie</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: luxuryEase, delay: 0.4 }}
          className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-ivory-warm/80 font-sans font-light leading-relaxed tracking-wide"
        >
          {language === "ar"
            ? "حيث تلتقي ندرة الماس الطبيعي والزمرد الكولومبي الملكي مع أسمى درجات الحرفية اليدوية لصياغة قطع خالدة عبر الأجيال."
            : "Where earth's rarest certified diamonds and royal Colombian emeralds converge with master goldsmithing to define modern legacy."}
        </motion.p>

        {/* Dual Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: luxuryEase, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
        >
          <Button variant="primary" size="lg" onClick={handleScrollToCollections}>
            <Sparkles strokeWidth={1.25} size={16} />
            <span>{language === "ar" ? "استكشف الابتكارات" : "Explore Masterpieces"}</span>
          </Button>

          <Button variant="outline" size="lg" onClick={handleScrollToStory}>
            <Calendar strokeWidth={1.25} size={16} />
            <span>{language === "ar" ? "قصة الدار والعرش" : "Discover Maison Story"}</span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator Indicator */}
      <div className="absolute bottom-8 start-1/2 -translate-x-1/2 z-10 text-center">
        <button
          onClick={handleScrollToCollections}
          className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold/70 hover:text-champagne-gold transition-colors flex flex-col items-center gap-2 group"
        >
          <span>{language === "ar" ? "التمرير للاستكشاف" : "Scroll to Explore"}</span>
          <span className="w-px h-8 bg-gradient-to-b from-champagne-gold to-transparent group-hover:h-12 transition-all duration-500" />
        </button>
      </div>
    </section>
  );
};
