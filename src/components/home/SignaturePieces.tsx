"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/mockJewelryData";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductModal } from "@/components/product/ProductModal";
import { Product } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { Crown, ArrowRight, ArrowLeft } from "lucide-react";

export const SignaturePieces: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const signatureProducts = PRODUCTS.filter((p) => p.isSignature);

  return (
    <section id="signature" className="py-24 bg-obsidian-pure border-t border-onyx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-champagne-gold flex items-center gap-2">
              <Crown strokeWidth={1.25} size={16} />
              <span>{language === "ar" ? "تحف الصياغة الفاخرة" : "High Haute Masterpieces"}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-gradient font-light uppercase tracking-wider">
              {language === "ar" ? "القطع الأيقونية الخالدة" : "Signature Icons"}
            </h2>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-champagne-gold hover:text-ivory-warm transition-colors font-semibold"
          >
            <span>{language === "ar" ? "مشاهدة كافة القطع الأيقونية" : "View All Signature Creations"}</span>
            {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
