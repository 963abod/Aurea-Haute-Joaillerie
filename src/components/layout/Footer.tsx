"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, MapPin, Mail, Phone, ShieldCheck, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-obsidian-pure border-t border-onyx-border text-ivory-warm/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-onyx-border/60">
          {/* Column 1: Brand Heritage */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-[0.25em] text-gold-gradient uppercase font-semibold">
              AUREA
            </h3>
            <p className="text-xs leading-relaxed text-zinc-400 font-sans">
              {language === "ar"
                ? "دار مجوهرات راقية تصوغ الأحلام إلى تحف فنية متوارثة لصفوة المجتمع والمقتنين حول العالم."
                : "A flagship Haute Joaillerie maison crafting immortal heirlooms for discerning collectors worldwide."}
            </p>
            <div className="pt-2 flex items-center space-x-3 rtl:space-x-reverse text-xs text-champagne-gold">
              <ShieldCheck strokeWidth={1.25} size={16} />
              <span>
                {language === "ar"
                  ? "شهادة أصالة وقطع ماس أخلاقية 100%"
                  : "100% Conflict-Free Certified Gemstones"}
              </span>
            </div>
          </div>

          {/* Column 2: Salons & Appointments */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm tracking-widest text-champagne-gold uppercase">
              {language === "ar" ? "صالوناتنا الخاصة" : "Private Salons"}
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
              <li className="flex items-start gap-2">
                <MapPin strokeWidth={1.25} size={14} className="mt-0.5 text-champagne-gold flex-shrink-0" />
                <span>
                  {language === "ar"
                    ? "الرياض: برج المملكة، الصالون الملكي"
                    : "Riyadh: Kingdom Centre, VIP Royal Salon"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin strokeWidth={1.25} size={14} className="mt-0.5 text-champagne-gold flex-shrink-0" />
                <span>
                  {language === "ar"
                    ? "باريس: 26 بلاس فاندوم"
                    : "Paris: 26 Place Vendôme"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin strokeWidth={1.25} size={14} className="mt-0.5 text-champagne-gold flex-shrink-0" />
                <span>
                  {language === "ar"
                    ? "جنيف: شارع إيل دو رون"
                    : "Geneva: Rue du Rhône"}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Concierge */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm tracking-widest text-champagne-gold uppercase">
              {language === "ar" ? "خدمة العملاء الملكية" : "Client Concierge"}
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
              <li className="flex items-center gap-2">
                <Phone strokeWidth={1.25} size={14} className="text-champagne-gold" />
                <span>+966 11 800 AUREA (28732)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail strokeWidth={1.25} size={14} className="text-champagne-gold" />
                <span>concierge@aureajoaillerie.com</span>
              </li>
              <li className="pt-2">
                <a
                  href="#craftsmanship"
                  className="hover:text-champagne-gold transition-colors block"
                >
                  {language === "ar" ? "خدمات التنظيف والصيانة" : "Bespoke Jewelry Care & Cleaning"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: High Fashion Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm tracking-widest text-champagne-gold uppercase flex items-center gap-2">
              <Sparkles strokeWidth={1.25} size={14} />
              {language === "ar" ? "دعوات المعارض الخاصة" : "Private Exhibitions"}
            </h4>
            <p className="text-xs text-zinc-400 font-sans">
              {language === "ar"
                ? "اشترك لتلقي دعوات حصرية لمعارض الدار المغلقة."
                : "Subscribe to receive private invitations to closed-door previews."}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={language === "ar" ? "البريد الإلكتروني" : "Your email address"}
                className="bg-onyx border border-onyx-border focus:border-champagne-gold text-ivory-warm px-3.5 py-2.5 text-xs font-sans outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-champagne-gold text-obsidian text-xs font-serif uppercase tracking-widest py-2.5 font-semibold hover:bg-champagne-hover transition-colors"
              >
                {language === "ar" ? "طلب انضمام" : "Request Invitation"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Credit Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-sans gap-4">
          <div>
            © {new Date().getFullYear()} AUREA HAUTE JOAILLERIE. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-ivory-warm transition-colors">
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-ivory-warm transition-colors">
              {language === "ar" ? "الشروط والأحكام" : "Terms of Service"}
            </a>
          </div>

          {/* Mandatory Aboud Web Credit Link */}
          <div className="text-xs">
            {language === "ar" ? "تم التطوير بواسطة " : "Crafted by "}
            <a
              href="https://aboudweb.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-gold hover:text-ivory-warm transition-colors duration-300 underline underline-offset-4 decoration-champagne-gold/40 hover:decoration-champagne-gold font-serif tracking-wider"
            >
              Aboud Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
