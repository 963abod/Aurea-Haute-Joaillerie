"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useScrollProgress";

export const LuxuryCursor: React.FC = () => {
  const isDesktop = useMediaQuery("(pointer: fine)");
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-champagne-gold rounded-full z-50"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing gold aura circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-champagne-gold/60 z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(197, 160, 89, 0.15)" : "rgba(197, 160, 89, 0)",
          borderColor: isHovered ? "#E8D8A6" : "#C5A059",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.3 }}
      />
    </div>
  );
};
