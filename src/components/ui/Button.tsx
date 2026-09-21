"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { luxuryEase } from "@/hooks/useScrollProgress";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-serif tracking-widest uppercase transition-all duration-500 overflow-hidden group border focus:outline-none focus:ring-1 focus:ring-champagne-gold";

  const variants = {
    primary:
      "bg-champagne-gold text-obsidian border-champagne-gold hover:bg-champagne-hover hover:border-champagne-hover font-semibold shadow-lg shadow-champagne-gold/10",
    secondary:
      "bg-onyx text-ivory-warm border-onyx-border hover:border-champagne-gold/50 hover:bg-onyx-light",
    outline:
      "bg-transparent text-champagne-gold border-champagne-gold/60 hover:border-champagne-gold hover:bg-champagne-gold/10",
    text:
      "bg-transparent text-ivory-warm border-transparent hover:text-champagne-gold px-0 py-1",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-xs font-medium",
    lg: "px-8 py-4 text-sm font-semibold",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: luxuryEase }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Subtle shine effect for primary buttons */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}

      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="opacity-80">Processing...</span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      )}
    </motion.button>
  );
};
