"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "full";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "2xl",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    full: "max-w-7xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className={`relative w-full ${maxWidthClasses[maxWidth]} bg-onyx border border-champagne-gold/30 p-6 sm:p-10 shadow-2xl shadow-black/80 my-8 z-10 text-ivory-warm max-h-[90vh] overflow-y-auto`}
          >
            {/* Header / Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-onyx-border mb-6">
              {title ? (
                <h3 className="font-serif text-lg sm:text-xl uppercase tracking-widest text-gold-gradient">
                  {title}
                </h3>
              ) : (
                <div />
              )}
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-champagne-gold transition-colors rounded-full hover:bg-onyx-light"
                aria-label="Close modal"
              >
                <X strokeWidth={1.25} size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
