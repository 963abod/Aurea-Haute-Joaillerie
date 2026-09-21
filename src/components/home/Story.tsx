"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Gem, Award } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Story: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="story" className="py-24 bg-obsidian-pure border-t border-onyx-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-champagne-gold/30 p-2 bg-onyx">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
                alt="Maison History & Heritage"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Gold Heritage Seal */}
            <div className="absolute -bottom-6 -end-6 bg-onyx border border-champagne-gold p-6 shadow-2xl hidden sm:block max-w-xs">
              <span className="font-serif text-3xl font-bold text-gold-gradient block">1898</span>
              <span className="text-[10px] font-serif uppercase tracking-widest text-zinc-400 block mt-1">
                {language === "ar" ? "تأسيس صالون باريس وباريس فاندوم" : "Founded in Place Vendôme, Paris"}
              </span>
            </div>
          </motion.div>

          {/* Narrative Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="space-y-6"
          >
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold block">
              {language === "ar" ? "تاريخ وعراقة الدار" : "Maison Heritage"}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-gradient font-light uppercase tracking-wider leading-tight">
              {language === "ar" ? (
                <>
                  إرث من الفخامة <br />
                  <span className="font-normal italic text-ivory-warm">صُنع للخلود</span>
                </>
              ) : (
                <>
                  A Century of Pure <br />
                  <span className="font-normal italic text-ivory-warm">Opulent Mastery</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              <p>
                {language === "ar"
                  ? "على مدى أربعة أجيال متعاقبة، ظلت دار أوريا حارساً أميناً على أسرار صياغة المجوهرات الراقية. من ساحة فاندوم بباريس إلى الصالونات الملكية بالرياض وجنيف، نجح صاغتنا في توثيق أسمى لحظات التاريخ عبر قطع ماسية لا تضاهى."
                  : "For over four generations, Aurea Haute Joaillerie has stood as the guardian of High Joaillerie secrets. From Place Vendôme in Paris to the royal salons of Riyadh and Geneva, our artisans transform natural light into enduring monuments of luxury."}
              </p>
              <p>
                {language === "ar"
                  ? "نحن ننتخب فقط الأحجار الكريمة التي تحقق النقاء المطلق واللون الاستثنائي. كل حجر زمرد كولومبي أو ياقوت سيلاني يحمل شهادة أصالة دولية توثق مصدره الأخلاقي المضمون 100%."
                  : "Every gemstone selected by our gemologists achieves pristine clarity (VVS1+) and rich saturation. From Colombian emeralds to Ceylon sapphires, our stones carry full ethical provenance certification."}
              </p>
            </div>

            {/* Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-onyx-border">
              <div className="space-y-1">
                <div className="text-champagne-gold flex items-center gap-1.5">
                  <ShieldCheck strokeWidth={1.25} size={18} />
                  <span className="font-serif text-xs uppercase tracking-wider">{language === "ar" ? "المصدر الأخلاقي" : "Ethical Gems"}</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-sans">{language === "ar" ? "ماس وأحجار أخلاقية 100%" : "100% Kimberlite Certified"}</p>
              </div>

              <div className="space-y-1">
                <div className="text-champagne-gold flex items-center gap-1.5">
                  <Gem strokeWidth={1.25} size={18} />
                  <span className="font-serif text-xs uppercase tracking-wider">{language === "ar" ? "نقاء استثنائي" : "VVS1 Clarity"}</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-sans">{language === "ar" ? "درجات النقاء والألوان الأعلى" : "Top Tier Gemological Rating"}</p>
              </div>

              <div className="space-y-1">
                <div className="text-champagne-gold flex items-center gap-1.5">
                  <Award strokeWidth={1.25} size={18} />
                  <span className="font-serif text-xs uppercase tracking-wider">{language === "ar" ? "صنع يدوياً" : "Hand Cast"}</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-sans">{language === "ar" ? "صياغة يد كبار الصاغة" : "Master Goldsmithing"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
