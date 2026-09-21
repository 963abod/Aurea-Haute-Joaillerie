"use client";

import React from "react";
import { motion } from "framer-motion";
import { COLLECTIONS } from "@/data/mockJewelryData";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const FeaturedCollection: React.FC = () => {
  const { language, t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-obsidian border-t border-onyx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold">
            {language === "ar" ? "المجموعات الاستثنائية" : "Private Collections"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-gradient font-light uppercase tracking-wider">
            {language === "ar" ? "عالم أوريا الفاخر" : "Architectural Splendor"}
          </h2>
          <p className="text-xs text-zinc-400 font-sans">
            {language === "ar"
              ? "مجموعات فريدة تُعبّر كل منها عن فصل أسطوري في عالم الصياغة الفاخرة."
              : "Distinct chapters of Haute Joaillerie art designed for high-net-worth connoisseurs."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: luxuryEase }}
              className="group relative bg-onyx border border-onyx-border hover:border-champagne-gold/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[420px]"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={t(col.title)}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-champagne-gold block mb-2">
                    {t(col.tagline)}
                  </span>
                  <h3 className="font-serif text-2xl text-ivory-warm group-hover:text-champagne-gold transition-colors">
                    {t(col.title)}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {t(col.description)}
                  </p>
                  <a
                    href="#collections"
                    className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-champagne-gold hover:text-ivory-warm transition-colors font-semibold pt-2"
                  >
                    <span>{language === "ar" ? "استكشف المجموعة" : "Explore Collection"}</span>
                    {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
