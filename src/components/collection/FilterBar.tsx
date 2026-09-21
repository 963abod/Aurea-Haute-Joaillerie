"use client";

import React from "react";
import { FilterState } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { COLLECTIONS } from "@/data/mockJewelryData";
import { Filter, Search, RotateCcw } from "lucide-react";

interface FilterBarProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  setFilter,
  className = "",
}) => {
  const { language, t } = useLanguage();

  const categories = [
    { id: "all", label: { ar: "جميع القطع", en: "All Creations" } },
    { id: "rings", label: { ar: "الخواتم", en: "Rings" } },
    { id: "necklaces", label: { ar: "العقود والقلائد", en: "Necklaces" } },
    { id: "bracelets", label: { ar: "الأساور", en: "Bracelets" } },
    { id: "earrings", label: { ar: "الأقراط", en: "Earrings" } },
    { id: "high-jewelry", label: { ar: "المجوهرات الراقية", en: "High Jewelry" } },
  ];

  const handleCategoryChange = (catId: FilterState["category"]) => {
    setFilter((prev) => ({ ...prev, category: catId }));
  };

  const handleCollectionChange = (colId: string) => {
    setFilter((prev) => ({ ...prev, collection: colId }));
  };

  const handleSortChange = (sortBy: FilterState["sortBy"]) => {
    setFilter((prev) => ({ ...prev, sortBy }));
  };

  const handleSearchChange = (query: string) => {
    setFilter((prev) => ({ ...prev, searchQuery: query }));
  };

  const resetFilters = () => {
    setFilter({
      category: "all",
      collection: "all",
      priceRange: [0, 500000],
      searchQuery: "",
      sortBy: "featured",
    });
  };

  return (
    <div className={`space-y-6 bg-onyx/50 border border-onyx-border p-6 ${className}`}>
      {/* Category Pills Header */}
      <div className="flex items-center justify-between border-b border-onyx-border pb-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-serif uppercase tracking-widest text-champagne-gold">
          <Filter strokeWidth={1.25} size={16} />
          <span>{language === "ar" ? "تصفية المجموعة" : "Filter Gallery"}</span>
        </div>

        <button
          onClick={resetFilters}
          className="text-xs font-serif uppercase text-zinc-400 hover:text-champagne-gold transition-colors flex items-center gap-1"
        >
          <RotateCcw strokeWidth={1.25} size={14} />
          <span>{language === "ar" ? "إعادة ضبط" : "Reset All"}</span>
        </button>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = filter.category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as FilterState["category"])}
              className={`text-xs font-serif uppercase tracking-wider px-4 py-2.5 transition-all duration-300 border ${
                isActive
                  ? "bg-champagne-gold text-obsidian border-champagne-gold font-semibold shadow-md"
                  : "bg-onyx/80 text-ivory-warm/80 border-onyx-border hover:border-champagne-gold/50 hover:text-ivory-warm"
              }`}
            >
              {cat.label[language]}
            </button>
          );
        })}
      </div>

      {/* Dropdown Filters (Collection, Sort Order, Search Query) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {/* Collection Dropdown */}
        <div>
          <label className="block text-[10px] font-serif uppercase tracking-widest text-zinc-400 mb-1.5">
            {language === "ar" ? "المجموعة الحصرية" : "Exquisite Collection"}
          </label>
          <select
            value={filter.collection}
            onChange={(e) => handleCollectionChange(e.target.value)}
            className="w-full bg-onyx border border-onyx-border text-ivory-warm text-xs px-3 py-2.5 outline-none focus:border-champagne-gold transition-colors"
          >
            <option value="all">
              {language === "ar" ? "جميع المجموعات" : "All Collections"}
            </option>
            {COLLECTIONS.map((col) => (
              <option key={col.id} value={col.id}>
                {t(col.title)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div>
          <label className="block text-[10px] font-serif uppercase tracking-widest text-zinc-400 mb-1.5">
            {language === "ar" ? "ترتيب حسب" : "Sort By"}
          </label>
          <select
            value={filter.sortBy}
            onChange={(e) => handleSortChange(e.target.value as FilterState["sortBy"])}
            className="w-full bg-onyx border border-onyx-border text-ivory-warm text-xs px-3 py-2.5 outline-none focus:border-champagne-gold transition-colors"
          >
            <option value="featured">
              {language === "ar" ? "المختارات المميزة" : "Featured Masterpieces"}
            </option>
            <option value="price-asc">
              {language === "ar" ? "السعر: من الأقل للأعلى" : "Price: Low to High"}
            </option>
            <option value="price-desc">
              {language === "ar" ? "السعر: من الأعلى للأقل" : "Price: High to Low"}
            </option>
            <option value="newest">
              {language === "ar" ? "أحدث الإبداعات" : "Newest Arrivals"}
            </option>
          </select>
        </div>

        {/* Live Filter Search Field */}
        <div>
          <label className="block text-[10px] font-serif uppercase tracking-widest text-zinc-400 mb-1.5">
            {language === "ar" ? "البحث بالاسم أو الحجر" : "Search Gemstone or Name"}
          </label>
          <div className="relative">
            <input
              type="text"
              value={filter.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={language === "ar" ? "مثال: زمرد، ماس، لوميير..." : "e.g., Emerald, Diamond..."}
              className="w-full bg-onyx border border-onyx-border text-ivory-warm text-xs px-3 py-2.5 pe-8 outline-none focus:border-champagne-gold transition-colors"
            />
            <Search
              strokeWidth={1.25}
              size={14}
              className="absolute end-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
