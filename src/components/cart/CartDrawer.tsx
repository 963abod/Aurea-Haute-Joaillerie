"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, ShieldCheck, Gift, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { luxuryEase } from "@/hooks/useScrollProgress";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    clearCart,
  } = useCart();
  const { language, t, isRTL } = useLanguage();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSubmitted(true);
      setTimeout(() => {
        clearCart();
        setCheckoutSubmitted(false);
        setIsCartOpen(false);
      }, 3500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: luxuryEase }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-obsidian/80 backdrop-blur-md"
        />

        {/* Slide-over Side Drawer */}
        <div className="fixed inset-y-0 end-0 max-w-full flex">
          <motion.div
            initial={{ x: isRTL ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "-100%" : "100%" }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="w-screen max-w-md bg-onyx border-s border-champagne-gold/30 shadow-2xl flex flex-col justify-between text-ivory-warm"
          >
            {/* Header */}
            <div className="p-6 border-b border-onyx-border flex items-center justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse font-serif uppercase tracking-widest text-champagne-gold text-sm">
                <ShoppingBag strokeWidth={1.25} size={18} />
                <span>{language === "ar" ? "حقيبة التسوق الخاصة" : "Private Shopping Bag"}</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-champagne-gold transition-colors"
                aria-label="Close bag"
              >
                <X strokeWidth={1.25} size={22} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-grow overflow-y-auto space-y-6">
              {checkoutSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-champagne-gold/20 text-champagne-gold rounded-full flex items-center justify-center mx-auto border border-champagne-gold/50">
                    <CheckCircle strokeWidth={1.25} size={36} />
                  </div>
                  <h3 className="font-serif text-xl text-gold-gradient uppercase">
                    {language === "ar" ? "تم تأكيد طلب الشراء الملكي" : "Order Confirmed"}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed max-w-xs mx-auto">
                    {language === "ar"
                      ? "شكراً لاهتمامك بمجوهرات أوريا. سيتواصل معك قسم الشحن الخاص والمرافقة الأمنية لتنسيق التسليم."
                      : "Thank you for acquiring Aurea Haute Joaillerie. Our armored courier team will contact you shortly."}
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <ShoppingBag strokeWidth={1} size={48} className="mx-auto text-zinc-600" />
                  <p className="font-serif text-base text-ivory-warm">
                    {language === "ar" ? "حقيبتك الخاصة فارغة حالياً" : "Your Private Bag is Empty"}
                  </p>
                  <p className="text-xs text-zinc-400 font-sans max-w-xs mx-auto">
                    {language === "ar"
                      ? "استكشف المعرض الملكي لتصفح أحدث الابتكارات المصوغة من الماس والزمرد."
                      : "Explore our curated gallery to add diamond and emerald creations."}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4"
                  >
                    {language === "ar" ? "استكشف المجموعات" : "Explore Collections"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-3 bg-obsidian border border-onyx-border relative group"
                    >
                      <img
                        src={item.product.heroImage}
                        alt={t(item.product.name)}
                        className="w-20 h-20 object-cover border border-onyx-border flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0 space-y-1">
                        <span className="text-[9px] font-serif uppercase tracking-widest text-champagne-gold block">
                          {t(item.product.collection)}
                        </span>
                        <h4 className="font-serif text-xs text-ivory-warm truncate">
                          {t(item.product.name)}
                        </h4>
                        <div className="text-xs font-serif text-gold-gradient font-semibold">
                          {new Intl.NumberFormat(
                            language === "ar" ? "ar-SA" : "en-US"
                          ).format(item.product.price)}{" "}
                          {t(item.product.currency)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-onyx-border bg-onyx text-xs">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="px-2 py-0.5 text-zinc-400 hover:text-champagne-gold"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 font-serif text-champagne-gold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="px-2 py-0.5 text-zinc-400 hover:text-champagne-gold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                            title="Remove"
                          >
                            <Trash2 strokeWidth={1.25} size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Gift Wrapping Badge */}
                  <div className="p-3 bg-champagne-gold/10 border border-champagne-gold/30 flex items-center gap-3 text-xs text-champagne-gold">
                    <Gift strokeWidth={1.25} size={18} className="flex-shrink-0" />
                    <span>
                      {language === "ar"
                        ? "تغليف هدايا ملكي مجاني بلمسات أوريا الفاخرة مع كل طلب"
                        : "Complimentary signature VIP gift packaging included with all orders"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && !checkoutSubmitted && (
              <div className="p-6 border-t border-onyx-border bg-obsidian/80 space-y-4">
                <div className="space-y-1.5 text-xs font-sans">
                  <div className="flex justify-between text-zinc-400">
                    <span>{language === "ar" ? "المجموع الفرعي" : "Subtotal"}:</span>
                    <span className="font-serif text-ivory-warm">
                      {new Intl.NumberFormat(
                        language === "ar" ? "ar-SA" : "en-US"
                      ).format(subtotal)}{" "}
                      SAR
                    </span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>{language === "ar" ? "الشحن المصفح والتأمين" : "Armored Escort & Insurance"}:</span>
                    <span className="text-champagne-gold font-serif uppercase">{language === "ar" ? "مجاناً" : "Complimentary"}</span>
                  </div>
                  <div className="flex justify-between text-sm font-serif pt-2 border-t border-onyx-border text-gold-gradient font-bold">
                    <span>{language === "ar" ? "الإجمالي الكلي" : "Total Amount"}:</span>
                    <span>
                      {new Intl.NumberFormat(
                        language === "ar" ? "ar-SA" : "en-US"
                      ).format(subtotal)}{" "}
                      SAR
                    </span>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className="space-y-3">
                  <Button
                    variant="primary"
                    fullWidth
                    isLoading={isCheckingOut}
                    type="submit"
                  >
                    <span>{language === "ar" ? "إتمام الشراء الملكي" : "Proceed to VIP Checkout"}</span>
                    {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-sans">
                  <ShieldCheck strokeWidth={1.25} size={14} className="text-champagne-gold" />
                  <span>
                    {language === "ar"
                      ? "معاملات آمنة ومشفرة أعلى معايير الحماية 256-bit"
                      : "256-Bit Encrypted High-Security Checkout"}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
