"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Gallery } from "./Gallery";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingBag, Calendar, CheckCircle, Sparkles } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  if (!product) return null;

  const isSaved = isInWishlist(product.id);
  const formattedPrice = new Intl.NumberFormat(
    language === "ar" ? "ar-SA" : "en-US"
  ).format(product.price);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentBooked(true);
    setTimeout(() => {
      setAppointmentBooked(false);
      setShowAppointmentForm(false);
    }, 3500);
  };

  const accordionItems = [
    {
      id: "specifications",
      title: language === "ar" ? "تفاصيل القطعة والأحجار" : "Gemstone Specs & Metals",
      content: (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between border-b border-onyx-border/40 py-1.5">
            <span className="text-zinc-400">{language === "ar" ? "المعدن" : "Material"}:</span>
            <span className="text-ivory-warm font-medium">{t(product.details.material)}</span>
          </div>
          <div className="flex justify-between border-b border-onyx-border/40 py-1.5">
            <span className="text-zinc-400">{language === "ar" ? "الأحجار الكريمة" : "Gemstones"}:</span>
            <span className="text-ivory-warm font-medium">{t(product.details.gemstones)}</span>
          </div>
          <div className="flex justify-between border-b border-onyx-border/40 py-1.5">
            <span className="text-zinc-400">{language === "ar" ? "وزن القيراط" : "Carat Weight"}:</span>
            <span className="text-ivory-warm font-medium">{product.details.caratWeight}</span>
          </div>
          <div className="flex justify-between py-1.5">
            <span className="text-zinc-400">{language === "ar" ? "قطع الحجر" : "Cut"}:</span>
            <span className="text-ivory-warm font-medium">{t(product.details.cut)}</span>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: language === "ar" ? "الشحن والنقل الآمن" : "Insured Armored Delivery",
      content: (
        <p className="text-xs text-zinc-400 leading-relaxed">
          {language === "ar"
            ? "توصيل مجاني بمركبة مصفحة حاصرة مع مرافق أمني خاص لجميع مدن المملكة ودول الخليج وأوروبا."
            : "Complimentary worldwide delivery via dedicated armored escort with full transit insurance."}
        </p>
      ),
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Gallery */}
        <div>
          <Gallery images={product.gallery} alt={t(product.name)} />
        </div>

        {/* Right Column: Product Narrative & Ordering */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-champagne-gold block mb-1">
              {t(product.collection)}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-gold-gradient font-medium">
              {t(product.name)}
            </h2>
            <div className="mt-3 text-lg font-serif text-ivory-warm font-semibold">
              {formattedPrice} {t(product.currency)}
            </div>
          </div>

          <p className="text-xs leading-relaxed text-zinc-300 font-sans border-t border-b border-onyx-border/60 py-4">
            {t(product.description)}
          </p>

          {/* Quantity Controls & Primary CTAs */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-xs font-serif uppercase text-zinc-400">
                {language === "ar" ? "الكمية" : "Quantity"}:
              </span>
              <div className="flex items-center border border-onyx-border bg-onyx">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-ivory-warm hover:text-champagne-gold"
                >
                  -
                </button>
                <span className="px-4 py-1 text-xs font-serif text-champagne-gold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-ivory-warm hover:text-champagne-gold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="primary" fullWidth onClick={handleAddToCart}>
                <ShoppingBag strokeWidth={1.25} size={16} />
                <span>{language === "ar" ? "إضافة إلى حقيبة التسوق" : "Add to Private Bag"}</span>
              </Button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 border transition-all ${
                  isSaved
                    ? "bg-champagne-gold text-obsidian border-champagne-gold"
                    : "bg-onyx text-ivory-warm border-onyx-border hover:border-champagne-gold"
                }`}
                title="Wishlist"
              >
                <Heart strokeWidth={1.25} size={18} fill={isSaved ? "currentColor" : "none"} />
              </button>
            </div>

            <Button
              variant="outline"
              fullWidth
              onClick={() => setShowAppointmentForm(!showAppointmentForm)}
            >
              <Calendar strokeWidth={1.25} size={16} />
              <span>
                {language === "ar" ? "حجز موعد استشارة في الصالون الملكي" : "Book Private Salon Viewing"}
              </span>
            </Button>
          </div>

          {/* Private Viewing Form */}
          {showAppointmentForm && (
            <div className="p-4 bg-obsidian border border-champagne-gold/30 rounded-none space-y-3">
              {appointmentBooked ? (
                <div className="flex items-center gap-2 text-xs text-champagne-gold py-2">
                  <CheckCircle strokeWidth={1.25} size={18} />
                  <span>
                    {language === "ar"
                      ? "تم استلام طلب الموعد بنجاح. سيتواصل معك مستشار الدار الخاص خلال ساعات."
                      : "Private appointment request received. A Senior VIP Client Concierge will contact you."}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleBookAppointment} className="space-y-3">
                  <div className="text-xs font-serif uppercase text-champagne-gold flex items-center gap-1.5">
                    <Sparkles strokeWidth={1.25} size={14} />
                    <span>{language === "ar" ? "تفاصيل موعد العرض الخاص" : "VIP Viewing Consultation"}</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={language === "ar" ? "الاسم الكامل" : "Full Name"}
                    className="w-full bg-onyx border border-onyx-border focus:border-champagne-gold text-xs p-2.5 text-ivory-warm outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={language === "ar" ? "رقم الهاتف" : "Phone Number"}
                    className="w-full bg-onyx border border-onyx-border focus:border-champagne-gold text-xs p-2.5 text-ivory-warm outline-none"
                  />
                  <Button variant="primary" size="sm" fullWidth type="submit">
                    {language === "ar" ? "تأكيد الطلب" : "Confirm VIP Request"}
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Product Specifications Accordion */}
          <Accordion items={accordionItems} />
        </div>
      </div>
    </Modal>
  );
};
