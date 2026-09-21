"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, LocalizedText } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (text: LocalizedText) => string;
  dir: "rtl" | "ltr";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aurea_lang") as Language;
    if (saved && (saved === "ar" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("aurea_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const t = (text: LocalizedText): string => {
    if (!text) return "";
    return text[language] || text.en || "";
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
