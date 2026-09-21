"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/data/mockJewelryData";
import { Product } from "@/types";
import { ProductModal } from "@/components/product/ProductModal";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const { language, t, isRTL } = useLanguage();

  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchName =
        product.name.en.toLowerCase().includes(q) ||
        product.name.ar.includes(q);
      const matchCollection =
        product.collection.en.toLowerCase().includes(q) ||
        product.collection.ar.includes(q);
      const matchGems =
        product.details.gemstones.en.toLowerCase().includes(q) ||
        product.details.gemstones.ar.includes(q);
      const matchDesc =
        product.description.en.toLowerCase().includes(q) ||
        product.description.ar.includes(q);

      return matchName || matchCollection || matchGems || matchDesc;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: luxuryEase }}
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-2xl overflow-y-auto p-6 sm:p-12 flex flex-col"
        >
          {/* Header Close Bar */}
          <div className="flex items-center justify-between pb-8 border-b border-onyx-border">
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-champagne-gold">
              {language === "ar" ? "محرك البحث الملكي" : "Maison Search Engine"}
            </span>
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setQuery("");
              }}
              className="p-2 text-zinc-400 hover:text-champagne-gold transition-colors"
              aria-label="Close search"
            >
              <X strokeWidth={1.25} size={28} />
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-4xl mx-auto w-full pt-12 pb-8">
            <div className="relative border-b-2 border-champagne-gold/60 focus-within:border-champagne-gold pb-2">
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  language === "ar"
                    ? "ابحث عن ماس، زمرد، ياقوت، أو اسم القطعة..."
                    : "Search for solitaire diamonds, emeralds, sapphires..."
                }
                className="w-full bg-transparent text-xl sm:text-3xl font-serif text-gold-gradient placeholder-zinc-600 outline-none pe-12"
              />
              <Search
                strokeWidth={1.25}
                size={28}
                className="absolute end-0 top-1/2 -translate-y-1/2 text-champagne-gold pointer-events-none"
              />
            </div>

            {/* Quick Suggestions Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-serif uppercase tracking-wider text-zinc-400">
              <span>{language === "ar" ? "مقترحات البحث:" : "Popular Searches:"}</span>
              {["Emerald", "Solitaire", "Cascade", "Lumière", "Ceylon Sapphire"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 bg-onyx border border-onyx-border hover:border-champagne-gold hover:text-champagne-gold transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Display */}
          <div className="max-w-6xl mx-auto w-full flex-grow py-8">
            {query.trim() === "" ? (
              <div className="text-center py-16 text-zinc-500 font-serif text-sm">
                {language === "ar"
                  ? "ابدأ الكتابة للبحث في أندر مجموعات المجوهرات الراقية."
                  : "Begin typing to search our exclusive Haute Joaillerie creations."}
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-16 text-zinc-400 font-serif">
                <p className="text-lg text-ivory-warm">
                  {language === "ar"
                    ? `لم يتم العثور على نتائج تطابق "${query}"`
                    : `No results found for "${query}"`}
                </p>
                <p className="text-xs text-zinc-500 mt-2 font-sans">
                  {language === "ar"
                    ? "جرب البحث عن نوع الأحجار أو اسم المجموعة."
                    : "Try searching by gemstone type or collection name."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-onyx/80 border border-onyx-border hover:border-champagne-gold/60 p-4 flex gap-4 items-center cursor-pointer group transition-all"
                  >
                    <img
                      src={product.heroImage}
                      alt={t(product.name)}
                      className="w-20 h-20 object-cover border border-onyx-border flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <span className="text-[10px] font-serif uppercase tracking-widest text-champagne-gold block">
                        {t(product.collection)}
                      </span>
                      <h4 className="font-serif text-sm text-ivory-warm group-hover:text-champagne-gold truncate transition-colors">
                        {t(product.name)}
                      </h4>
                      <div className="text-xs font-serif text-zinc-400 mt-1">
                        {new Intl.NumberFormat(
                          language === "ar" ? "ar-SA" : "en-US"
                        ).format(product.price)}{" "}
                        {t(product.currency)}
                      </div>
                    </div>
                    {isRTL ? (
                      <ArrowLeft strokeWidth={1.25} size={18} className="text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <ArrowRight strokeWidth={1.25} size={18} className="text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};
