import { Product, CollectionInfo, CraftsmanshipStep } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "aur-01",
    name: {
      ar: "خاتم سوليتير أسترا من الذهب الوردي",
      en: "Astra Solitaire Rose Gold Ring"
    },
    collection: { ar: "مجموعة لوميير", en: "Lumière Collection" },
    category: "rings",
    price: 34500,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "قطعة استثنائية تحتفي بالضوء النقي، مصوغة يدوياً من الذهب الوردي عيار 18 قيراطاً تتوسطها ماسة نقية بقطع زمردي استثنائي.",
      en: "An ethereal tribute to celestial luminescence, hand-cast in 18k rose gold crowned with an exceptional emerald-cut solitaire diamond."
    },
    details: {
      material: { ar: "ذهب وردي عيار 18 قيراط", en: "18K Rose Gold" },
      gemstones: { ar: "ماس طبيعي نقي VVS1", en: "Natural Diamond VVS1" },
      caratWeight: "3.20 ct",
      cut: { ar: "قطع زمردي بيضاوي", en: "Emerald Oval Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: true
  },
  {
    id: "aur-02",
    name: {
      ar: "عقد سيربنتين من الزمرد الكولومبي",
      en: "Serpentine Royal Colombian Emerald Choker"
    },
    collection: { ar: "مجموعة السلالة الملكية", en: "Dynasty Collection" },
    category: "necklaces",
    price: 185000,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "تحفة فنية تحتضن أحجار الزمرد الكولومبي النادر مع خطوط انسيابية من البلاتين والماس المتراص.",
      en: "Masterpiece featuring rare Colombian emeralds set along undulating fluid ribbons of platinum and pavé diamonds."
    },
    details: {
      material: { ar: "بلاتين 950 وذهب أبيض 18 قيراط", en: "Platinum 950 & 18K White Gold" },
      gemstones: { ar: "زمرد كولومبي طبيعي وماس", en: "Natural Colombian Emeralds & Diamonds" },
      caratWeight: "14.85 ct Total",
      cut: { ar: "قطع كابوشون وبريليانت", en: "Cabochon & Brilliant Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: true
  },
  {
    id: "aur-03",
    name: {
      ar: "سوار إكليبس الماسي المرن",
      en: "Eclipse Flexible Diamond Bangle"
    },
    collection: { ar: "مجموعة أوريليا نوار", en: "Aurea Noire" },
    category: "bracelets",
    price: 49000,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "هندسة معاصرة تلتقي بالحرفية الكلاسيكية في سوار مرن يتناغم مع معصم اليد بكل سلاسة.",
      en: "Architectural purity meets artisanal mastery in a flexible diamond cuff tailored to move effortlessly with the wrist."
    },
    details: {
      material: { ar: "ذهب أصفر عيار 18 قيراط", en: "18K Yellow Gold" },
      gemstones: { ar: "ماس قطع باغيت وبريليانت", en: "Baguette & Brilliant Cut Diamonds" },
      caratWeight: "5.40 ct",
      cut: { ar: "قطع هندسي مركب", en: "Bespoke Geometric Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1611591475152-4731726c043e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1611591475152-4731726c043e?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: true
  },
  {
    id: "aur-04",
    name: {
      ar: "أقراط كاسكيد الياقوت السيلاني",
      en: "Ceylon Sapphire Cascade Earrings"
    },
    collection: { ar: "مجموعة سيليستيال", en: "Celestial Collection" },
    category: "earrings",
    price: 72000,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "قطرات متتالية من الياقوت الأزرق الملكي المحاط بهالات من الماس المتلألئ لبريق يحبس الأنفاس.",
      en: "A mesmerizing descent of royal blue Ceylon sapphires encased in halos of micro-pavé diamonds."
    },
    details: {
      material: { ar: "ذهب أبيض عيار 18 قيراط", en: "18K White Gold" },
      gemstones: { ar: "ياقوت سيلاني أزرق نقي", en: "Unheated Ceylon Blue Sapphires" },
      caratWeight: "8.12 ct",
      cut: { ar: "قطع كمثري ووسائدي", en: "Pear & Cushion Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: false
  },
  {
    id: "aur-05",
    name: {
      ar: "عقد أوريا سولاريس من الماس الأصفر النادر",
      en: "Aurea Solaris Radiant Yellow Diamond Masterpiece"
    },
    collection: { ar: "مجموعة لوميير", en: "Lumière Collection" },
    category: "high-jewelry",
    price: 320000,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "تاج السلسلة الفاخرة يتوسطه أحادي الماس الأصفر النادر بوزن 8 قراريط محاط بشعاع ماسي بلاتيني.",
      en: "The crown jewel of Haute Joaillerie featuring an extraordinary 8-carat Fancy Intense Yellow Diamond center stone enveloped in platinum rays."
    },
    details: {
      material: { ar: "بلاتين 950 وذهب أصفر عيار 18 قيراط", en: "Platinum 950 & 18K Yellow Gold" },
      gemstones: { ar: "ماس أصفر نقي وماس إيف-كولور", en: "Fancy Intense Yellow & F-Color Diamonds" },
      caratWeight: "18.50 ct",
      cut: { ar: "قطع راقٍ مزوج", en: "Radiant & Marquise Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: true
  },
  {
    id: "aur-06",
    name: {
      ar: "سوار الشرف الإمبراطوري من الياقوت الأحمر",
      en: "Imperial Pigeon's Blood Ruby Cuff"
    },
    collection: { ar: "مجموعة السلالة الملكية", en: "Dynasty Collection" },
    category: "bracelets",
    price: 142000,
    currency: { ar: "ر.س", en: "SAR" },
    description: {
      ar: "سوار فاخر مطعم بأحجار الياقوت الأحمر النقي (دم الحمامة) النادرة المستخرجة من بورما.",
      en: "An opulent high-jewelry cuff featuring rare Burmese 'Pigeon's Blood' rubies punctuated by baguette-cut diamonds."
    },
    details: {
      material: { ar: "ذهب أبيض عيار 18 قيراط", en: "18K White Gold" },
      gemstones: { ar: "ياقوت أحمر بورمي وماس", en: "Burmese Ruby & Diamonds" },
      caratWeight: "11.30 ct",
      cut: { ar: "قطع بيضاوي وهندسي", en: "Oval & Baguette Cut" }
    },
    heroImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=85"
    ],
    isSignature: false
  }
];

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: "lumiere",
    title: { ar: "مجموعة لوميير", en: "Lumière Collection" },
    tagline: { ar: "رقصة الضوء الخالدة", en: "The Eternal Dance of Light" },
    description: {
      ar: "استكشف قطعاً تتلاعب بالنور والظل، صممت لتعكس أرق الانعكاسات على البشرة.",
      en: "Discover creations that play with radiance and shadow, crafted to capture ethereal luminosity."
    },
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dynasty",
    title: { ar: "مجموعة السلالة الملكية", en: "Dynasty Collection" },
    tagline: { ar: "هيبة الفخامة الأسطورية", en: "Legacy of Majestic Splendor" },
    description: {
      ar: "قطع ثقيلة بلمسات ملوكية تجمع بين الزمرد، والياقوت الأحمر، وأفضل قطع الماس العالمية.",
      en: "Regal statement pieces combining Colombian emeralds, Burmese rubies, and unmatched diamond art."
    },
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "aurea-noire",
    title: { ar: "مجموعة أوريليا نوار", en: "Aurea Noire" },
    tagline: { ar: "غموض الحداثة والأناقة", en: "Architectural Midnight Mystique" },
    description: {
      ar: "تصاميم معاصرة جريئة تتسم بالخطوط الانسيابية المرنة والماس الدقيق.",
      en: "Bold contemporary geometry sculpted with fluid precision and micro-pavé brilliance."
    },
    image: "https://images.unsplash.com/photo-1611591475152-4731726c043e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const CRAFTSMANSHIP_STEPS: CraftsmanshipStep[] = [
  {
    id: "step-1",
    title: { ar: "01. الرسم الإلهامي", en: "01. Gouache Atelier" },
    subtitle: { ar: "تجسيد الفكرة بحبر الفن", en: "Visualizing Ethereal Beauty" },
    description: {
      ar: "يبدأ كل إبداع بلوحة غواش دقيقة توضح مسار كل شعاع ضوئي وموضع كل حجر كريم بنسب هندسية صارمة.",
      en: "Every masterpiece begins with a meticulous gouache painting detailing light refraction and gem positioning."
    },
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "step-2",
    title: { ar: "02. انتقاء الأحجار النادرة", en: "02. Gemological Selection" },
    subtitle: { ar: "النقاء والمصدر الأخلاقي", en: "Uncompromising Ethical Purity" },
    description: {
      ar: "يتفحص خبراؤنا ألف حجر لانتخاب حجر واحد يحقق أقصى درجات النقاء (VVS1+) واللون الاستثنائي.",
      en: "Our master gemologists evaluate thousands of natural gems to select only those of pristine clarity and saturation."
    },
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "step-3",
    title: { ar: "03. الصياغة والنحت اليدوي", en: "03. Hand Sculpting & Casting" },
    subtitle: { ar: "المعدن النفيس كمنحوتة حية", en: "Precious Metals Brought to Life" },
    description: {
      ar: "يصوغ صاغتنا البلاتين والذهب عيار 18 قيراطاً لإنشاء أطر خفيفة الوزن تسمح بمرور الضوء بحرية.",
      en: "Master goldsmiths hand-sculpt Platinum 950 and 18K gold to form light-filtering sculptural settings."
    },
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "step-4",
    title: { ar: "04. ترصيع الميكرو-بافيه", en: "04. Micro-Pavé Setting" },
    subtitle: { ar: "دقة المجهر الفريدة", en: "Microscopic Diamond Alignment" },
    description: {
      ar: "تُرصع الماسات الصغيرة تحت المجهر لتشكيل سطح متصل من البريق الذي لا يشوبه شائبة.",
      en: "Diamonds are meticulously hand-set under high-power microscopes to create a continuous paved ribbon of light."
    },
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
  }
];
