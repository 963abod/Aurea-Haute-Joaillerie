"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, FilterState } from "@/types";
import { PRODUCTS } from "@/data/mockJewelryData";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductModal } from "@/components/product/ProductModal";
import { FilterBar } from "./FilterBar";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const CollectionGrid: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [filter, setFilter] = useState<FilterState>({
    category: "all",
    collection: "all",
    priceRange: [0, 500000],
    searchQuery: "",
    sortBy: "featured",
  });

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (filter.category !== "all" && product.category !== filter.category) {
        return false;
      }

      // Collection match
      if (filter.collection !== "all") {
        const matchesCollection =
          (filter.collection === "lumiere" && product.collection.en.toLowerCase().includes("lumière")) ||
          (filter.collection === "dynasty" && product.collection.en.toLowerCase().includes("dynasty")) ||
          (filter.collection === "aurea-noire" && product.collection.en.toLowerCase().includes("noire"));
        if (!matchesCollection) return false;
      }

      // Search Query match
      if (filter.searchQuery.trim()) {
        const query = filter.searchQuery.toLowerCase();
        const matchName =
          product.name.en.toLowerCase().includes(query) ||
          product.name.ar.includes(query);
        const matchDesc =
          product.description.en.toLowerCase().includes(query) ||
          product.description.ar.includes(query);
        const matchGems =
          product.details.gemstones.en.toLowerCase().includes(query) ||
          product.details.gemstones.ar.includes(query);

        if (!matchName && !matchDesc && !matchGems) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filter.sortBy === "price-asc") return a.price - b.price;
      if (filter.sortBy === "price-desc") return b.price - a.price;
      return 0; // default order
    });
  }, [filter]);

  return (
    <section id="collections" className="py-24 bg-obsidian border-t border-onyx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold flex items-center justify-center gap-2">
            <Sparkles strokeWidth={1.25} size={16} />
            <span>{language === "ar" ? "المعرض الملكي الكامل" : "The Full Haute Joaillerie Gallery"}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-gradient font-light uppercase tracking-wider">
            {language === "ar" ? "ابتكارات المعرض الحصري" : "Curated Masterpieces"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            {language === "ar"
              ? "استكشف قطعنا الفاخرة المصوغة يدوياً من أعظم المعادن وأندر الأحجار الكريمة عبر تاريخ الدار."
              : "Explore hand-cast treasures crafted from pure platinum, 18K gold, and earth's rarest certified gems."}
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <FilterBar filter={filter} setFilter={setFilter} className="mb-12" />

        {/* Results Counter & Product Grid */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-400 font-serif uppercase tracking-widest">
          <span>
            {language === "ar"
              ? `عرض ${filteredProducts.length} من أصل ${PRODUCTS.length} قطعة`
              : `Showing ${filteredProducts.length} of ${PRODUCTS.length} Creations`}
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-onyx/30 border border-onyx-border">
            <p className="font-serif text-lg text-ivory-warm">
              {language === "ar"
                ? "لم نجد قطعاً تطابق معايير البحث المحددة."
                : "No creations match your current search criteria."}
            </p>
            <p className="text-xs text-zinc-400 mt-2 font-sans">
              {language === "ar"
                ? "يرجى تغيير التصفية أو البحث عن أحجار كريم أخرى."
                : "Please reset your filters to view all available pieces."}
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                >
                  <ProductCard
                    product={product}
                    onQuickView={(p) => setSelectedProduct(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Quick View Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
