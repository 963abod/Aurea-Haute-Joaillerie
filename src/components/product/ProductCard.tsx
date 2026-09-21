"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { luxuryEase } from "@/hooks/useScrollProgress";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isSaved = isInWishlist(product.id);
  const formattedPrice = new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US").format(
    product.price
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: luxuryEase }}
      className="group relative bg-onyx border border-onyx-border hover:border-champagne-gold/40 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-obsidian cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.heroImage}
          alt={t(product.name)}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
        />

        {/* Badges & Actions Overlay */}
        <div className="absolute top-3 start-3 end-3 flex items-center justify-between pointer-events-none">
          {product.isSignature ? (
            <span className="bg-champagne-gold text-obsidian font-serif text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold shadow-md pointer-events-auto">
              {language === "ar" ? "قطعة أيقونية" : "Signature"}
            </span>
          ) : (
            <div />
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto ${
              isSaved
                ? "bg-champagne-gold text-obsidian"
                : "bg-obsidian/60 text-ivory-warm hover:text-champagne-gold hover:bg-obsidian"
            }`}
            aria-label="Wishlist"
          >
            <Heart strokeWidth={1.25} size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Quick View Hover Bar */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-ivory-warm/90 hover:bg-ivory-warm text-obsidian px-4 py-2 text-xs font-serif tracking-widest uppercase flex items-center gap-1.5 transition-colors"
          >
            <Eye strokeWidth={1.25} size={14} />
            <span>{language === "ar" ? "معاينة سريعة" : "Quick View"}</span>
          </button>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-champagne-gold block mb-1">
            {t(product.collection)}
          </span>
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base sm:text-lg text-ivory-warm group-hover:text-champagne-gold transition-colors line-clamp-1 cursor-pointer"
          >
            {t(product.name)}
          </h3>
          <p className="text-xs text-zinc-400 font-sans line-clamp-2 mt-1.5 leading-relaxed">
            {t(product.description)}
          </p>
        </div>

        <div className="pt-3 border-t border-onyx-border/60 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-500 font-serif block uppercase tracking-wider">
              {language === "ar" ? "السعر" : "Price"}
            </span>
            <span className="font-serif text-sm sm:text-base text-gold-gradient font-medium">
              {formattedPrice} {t(product.currency)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="p-2.5 bg-onyx-light hover:bg-champagne-gold text-ivory-warm hover:text-obsidian border border-onyx-border hover:border-champagne-gold transition-all duration-300"
            title={language === "ar" ? "إضافة إلى الحقيبة" : "Add to Bag"}
          >
            <ShoppingBag strokeWidth={1.25} size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
