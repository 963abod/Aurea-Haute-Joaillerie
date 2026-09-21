export type Language = 'ar' | 'en';

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface Product {
  id: string;
  name: LocalizedText;
  collection: LocalizedText;
  category: 'rings' | 'necklaces' | 'bracelets' | 'earrings' | 'high-jewelry';
  price: number;
  currency: LocalizedText;
  description: LocalizedText;
  details: {
    material: LocalizedText;
    gemstones: LocalizedText;
    caratWeight: string;
    cut: LocalizedText;
  };
  heroImage: string;
  gallery: string[];
  isSignature?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  isGiftWrapped?: boolean;
}

export interface FilterState {
  category: 'all' | 'rings' | 'necklaces' | 'bracelets' | 'earrings' | 'high-jewelry';
  collection: string;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}

export interface CraftsmanshipStep {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface CollectionInfo {
  id: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface AppointmentForm {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  salonLocation: string;
  notes?: string;
}
