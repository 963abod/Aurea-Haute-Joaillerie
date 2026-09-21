"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Categories: React.FC = () => {
  const { language } = useLanguage();

  const categories = [
    {
      id: "rings",
      name: { ar: "الخواتم السوليتير", en: "Solitaire Rings" },
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "necklaces",
      name: { ar: "العقود والقلائد", en: "Royal Necklaces" },
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bracelets",
      name: { ar: "الأساور الفاخرة", en: "Precious Cuffs" },
      image: "https://images.unsplash.com/photo-1611591475152-4731726c043e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "earrings",
      name: { ar: "الأقراط الماسية", en: "Cascade Earrings" },
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "high-jewelry",
      name: { ar: "تحف المجوهرات الراقية", en: "High Joaillerie" },
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="categories" className="py-24 bg-obsidian border-t border-onyx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold">
            {language === "ar" ? "التصنيفات الملوكية" : "Maison Categories"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-gradient font-light uppercase tracking-wider">
            {language === "ar" ? "إبداعات حسب الفئة" : "Art of Jewelry"}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href="#collections"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: luxuryEase }}
              className="group relative aspect-[3/4] overflow-hidden bg-onyx border border-onyx-border hover:border-champagne-gold/60 transition-all duration-500 block"
            >
              <img
                src={cat.image}
                alt={cat.name[language]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 text-center">
                <span className="font-serif text-xs sm:text-sm uppercase tracking-widest text-ivory-warm group-hover:text-champagne-gold transition-colors block font-medium">
                  {cat.name[language]}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
