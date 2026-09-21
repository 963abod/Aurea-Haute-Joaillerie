"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitch: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-serif text-ivory-warm/80 hover:text-champagne-gold transition-colors py-1 px-2.5 border border-onyx-border hover:border-champagne-gold/40 rounded-none bg-onyx/40 ${className}`}
      aria-label="Toggle language"
    >
      <Globe strokeWidth={1.25} size={14} className="text-champagne-gold" />
      <span>{language === "en" ? "العربية" : "ENGLISH"}</span>
    </button>
  );
};
