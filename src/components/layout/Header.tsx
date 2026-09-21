"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Navigation } from "./Navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { toggleCart, totalItems, toggleSearch } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian/90 backdrop-blur-md py-4 border-b border-champagne-gold/20 shadow-2xl"
          : "bg-gradient-to-b from-obsidian/90 via-obsidian/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Actions (Mobile Menu Toggle & Desktop Navigation) */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-ivory-warm hover:text-champagne-gold transition-colors p-1"
              aria-label="Open Navigation Menu"
            >
              <Menu strokeWidth={1.25} size={24} />
            </button>

            <div className="hidden lg:block">
              <Navigation />
            </div>
          </div>

          {/* Center Brand Identity */}
          <div className="text-center">
            <a href="#" className="block group">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.25em] text-gold-gradient font-semibold uppercase block">
                AUREA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-ivory-warm/70 uppercase block font-serif group-hover:text-champagne-gold transition-colors">
                HAUTE JOAILLERIE
              </span>
            </a>
          </div>

          {/* Right Icons (Search, Wishlist, Cart, Language Switch) */}
          <div className="flex items-center space-x-4 sm:space-x-6 rtl:space-x-reverse">
            <button
              onClick={toggleSearch}
              className="text-ivory-warm/80 hover:text-champagne-gold transition-colors p-1"
              aria-label="Search Collection"
            >
              <Search strokeWidth={1.25} size={20} />
            </button>

            <a
              href="#signature"
              className="relative text-ivory-warm/80 hover:text-champagne-gold transition-colors p-1 hidden sm:block"
              aria-label="Saved Wishlist"
            >
              <Heart strokeWidth={1.25} size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -end-1 w-4 h-4 bg-champagne-gold text-obsidian font-sans text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            <button
              onClick={toggleCart}
              className="relative text-ivory-warm/80 hover:text-champagne-gold transition-colors p-1"
              aria-label="Shopping Bag"
            >
              <ShoppingBag strokeWidth={1.25} size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -end-1 w-4.5 h-4.5 bg-champagne-gold text-obsidian font-sans text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="hidden md:block ms-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl lg:hidden flex flex-col p-6 sm:p-10"
          >
            <div className="flex items-center justify-between pb-6 border-b border-onyx-border">
              <span className="font-serif text-lg tracking-widest text-champagne-gold">
                AUREA MAISON
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ivory-warm hover:text-champagne-gold p-2"
              >
                <X strokeWidth={1.25} size={24} />
              </button>
            </div>

            <div className="my-auto py-8">
              <Navigation
                isMobile
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            </div>

            <div className="pt-6 border-t border-onyx-border flex items-center justify-between">
              <LanguageSwitch />
              <div className="text-xs text-zinc-500 font-serif">
                Riyadh • Paris • Geneva
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
