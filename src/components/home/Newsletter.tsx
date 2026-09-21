"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle, Sparkles } from "lucide-react";

export const Newsletter: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section className="py-24 bg-obsidian border-t border-onyx-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 bg-onyx border border-champagne-gold/30 p-8 sm:p-16 relative overflow-hidden">
        {/* Shimmer Ambient Light */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-96 h-1 bg-gold-shimmer animate-shimmer" />

        <div className="space-y-3">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold flex items-center justify-center gap-2">
            <Sparkles strokeWidth={1.25} size={16} />
            <span>{language === "ar" ? "الصالون الملكي المغلق" : "Private Salon Gazette"}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-gradient font-light uppercase tracking-wider">
            {language === "ar" ? "دعوات المعارض الحصرية" : "Invitation to Privé Previews"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
            {language === "ar"
              ? "انضم إلى القائمة الملكية لتلقي دعوات حضور المعارض المغلقة والقطع الحصرية قبل طرحها عالمياً."
              : "Subscribe to receive private invitations to closed-door previews and unreleased high-jewelry masterworks."}
          </p>
        </div>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 text-sm text-champagne-gold py-4 bg-obsidian border border-champagne-gold/30">
            <CheckCircle strokeWidth={1.25} size={20} />
            <span className="font-serif">
              {language === "ar"
                ? "شكراً لانضمامك. تم تسجيل بريدك الإلكتروني في القائمة الخاصة للدار."
                : "Welcome to the Privé Circle. Your exclusive invitation will arrive shortly."}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "ar" ? "أدخل بريدك الإلكتروني الخاص..." : "Enter your private email..."}
                className="w-full bg-obsidian border border-onyx-border focus:border-champagne-gold text-ivory-warm px-4 py-3 text-xs outline-none transition-colors pe-10 font-sans"
              />
              <Mail strokeWidth={1.25} size={16} className="absolute end-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            <Button variant="primary" size="md" className="w-full sm:w-auto flex-shrink-0" type="submit">
              <span>{language === "ar" ? "طلب انضمام" : "Request Access"}</span>
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};
