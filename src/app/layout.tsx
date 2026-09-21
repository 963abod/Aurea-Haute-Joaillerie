import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { LuxuryCursor } from "@/components/ui/LuxuryCursor";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-naskh",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AUREA HAUTE JOAILLERIE | أوريا للمجوهرات الراقية",
  description: "Flagship Luxury Haute Joaillerie Showcase - Fine Diamonds, Emeralds, Sapphires & Masterpieces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${naskh.variable}`}>
      <body className="bg-obsidian text-ivory-warm antialiased selection:bg-champagne-gold selection:text-obsidian custom-cursor-active">
        <LanguageProvider>
          <CartProvider>
            <WishlistProvider>
              <LuxuryCursor />
              <Header />
              <main>{children}</main>
              <Footer />
              <CartDrawer />
              <SearchOverlay />
            </WishlistProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
