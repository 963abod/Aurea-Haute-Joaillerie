"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Campaign: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden bg-obsidian-pure border-t border-onyx-border">
      {/* Background Editorial Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2000&q=85"
          alt="High Joaillerie Campaign"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-pure via-obsidian-pure/80 to-obsidian-pure" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="w-12 h-12 bg-champagne-gold/10 border border-champagne-gold/30 rounded-full flex items-center justify-center mx-auto text-champagne-gold"
        >
          <Quote strokeWidth={1.25} size={24} />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-warm font-light italic leading-relaxed"
        >
          {language === "ar"
            ? "«نحن لا نصوغ مجرد ماسات وماديات نفيسة، بل ننحت ضوء السماء ليصير إرثاً تتوارثه العائلات الملكية عبر التاريخ.»"
            : "“We do not merely set precious gems; we capture celestial light into enduring monuments of family legacy.”"}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          className="pt-4"
        >
          <span className="font-serif text-sm tracking-[0.25em] text-gold-gradient font-semibold uppercase block">
            Jean-Luc de la Tour
          </span>
          <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-zinc-500 block mt-1">
            {language === "ar" ? "كبير الصائغين - ساحة فاندوم باريس" : "Master Artisan • Place Vendôme Paris"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
