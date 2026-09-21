"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CRAFTSMANSHIP_STEPS } from "@/data/mockJewelryData";
import { useLanguage } from "@/context/LanguageContext";
import { Hammer, Sparkles } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Craftsmanship: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeStepId, setActiveStepId] = useState(CRAFTSMANSHIP_STEPS[0].id);

  const activeStep = CRAFTSMANSHIP_STEPS.find((s) => s.id === activeStepId) || CRAFTSMANSHIP_STEPS[0];

  return (
    <section id="craftsmanship" className="py-24 bg-obsidian border-t border-onyx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold flex items-center justify-center gap-2">
            <Hammer strokeWidth={1.25} size={16} />
            <span>{language === "ar" ? "أسرار المشغل الخاص" : "Atelier Craftsmanship"}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-gradient font-light uppercase tracking-wider">
            {language === "ar" ? "فنون الصياغة اليدوية" : "The Atelier Journey"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            {language === "ar"
              ? "خطوات متتالية من الدقة المجهرية تحول المعادن والماس إلى تحف أسطورية."
              : "Four painstaking stages of microscopic precision transforming raw gems into legacy."}
          </p>
        </div>

        {/* Interactive Steps Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {CRAFTSMANSHIP_STEPS.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-4 text-start transition-all duration-300 border relative ${
                  isActive
                    ? "bg-onyx border-champagne-gold shadow-lg shadow-champagne-gold/10"
                    : "bg-onyx/40 border-onyx-border hover:border-champagne-gold/40"
                }`}
              >
                <span className="text-[10px] font-serif uppercase tracking-widest text-champagne-gold block mb-1">
                  {t(step.title).split(".")[0]}
                </span>
                <span className="font-serif text-xs sm:text-sm text-ivory-warm block line-clamp-1 font-medium">
                  {t(step.title).split(".")[1] || t(step.title)}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-champagne-gold"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-onyx border border-onyx-border p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/10 border border-champagne-gold/30 text-champagne-gold text-[10px] font-serif uppercase tracking-widest">
                <Sparkles strokeWidth={1.25} size={12} />
                <span>{t(activeStep.subtitle)}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient">
                {t(activeStep.title)}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {t(activeStep.description)}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id + "-img"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="relative aspect-[4/3] overflow-hidden border border-onyx-border"
            >
              <img
                src={activeStep.image}
                alt={t(activeStep.title)}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
