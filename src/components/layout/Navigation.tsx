"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
  className?: string;
  isMobile?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  className = "",
  isMobile = false,
}) => {
  const { language } = useLanguage();

  const links = [
    { id: "collections", label: { en: "Collections", ar: "المجموعات" } },
    { id: "signature", label: { en: "Signature Pieces", ar: "القطع الأيقونية" } },
    { id: "categories", label: { en: "Categories", ar: "الفئات" } },
    { id: "story", label: { en: "Maison Story", ar: "قصة الدار" } },
    { id: "craftsmanship", label: { en: "Craftsmanship", ar: "الحرفية" } },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onNavigate) onNavigate(id);
  };

  return (
    <nav className={`flex ${isMobile ? "flex-col space-y-6" : "items-center space-x-8 rtl:space-x-reverse"} ${className}`}>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => handleClick(link.id)}
          className="text-xs uppercase tracking-[0.2em] font-serif text-ivory-warm/80 hover:text-champagne-gold transition-all duration-300 relative py-1 group text-start"
        >
          {link.label[language]}
          <span className="absolute bottom-0 start-0 w-0 h-[1px] bg-champagne-gold group-hover:w-full transition-all duration-300" />
        </button>
      ))}
    </nav>
  );
};
