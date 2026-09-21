"use client";

import React from "react";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { SignaturePieces } from "@/components/home/SignaturePieces";
import { Categories } from "@/components/home/Categories";
import { Story } from "@/components/home/Story";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { CollectionGrid } from "@/components/collection/CollectionGrid";
import { Campaign } from "@/components/home/Campaign";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-obsidian text-ivory-warm">
      <Hero />
      <FeaturedCollection />
      <SignaturePieces />
      <Categories />
      <Story />
      <Craftsmanship />
      <CollectionGrid />
      <Campaign />
      <Newsletter />
    </div>
  );
}
