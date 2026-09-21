"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { luxuryEase } from "@/hooks/useScrollProgress";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-onyx-border/60 border-t border-b border-onyx-border/60 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-start text-sm uppercase tracking-widest font-serif text-ivory-warm hover:text-champagne-gold transition-colors py-1 group"
            >
              <span className="pe-4">{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: luxuryEase }}
                className="text-champagne-gold/70 group-hover:text-champagne-gold flex-shrink-0"
              >
                <ChevronDown strokeWidth={1.25} size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-2 text-xs leading-relaxed text-zinc-400 font-sans">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
