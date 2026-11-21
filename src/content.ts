// ============================================================
// CENTRAL CONTENT CONFIG
// Workshop info and image paths are now in:
//   src/data/workshopInfo.ts
//   src/data/workshopImages.ts
// This file re-exports them for convenience and holds
// navigation, category metadata, and text content.
// ============================================================

export {
  workshopInfo as workshop,
  whatsappLink,
  whatsappQuoteLink,
} from "@/data/workshopInfo";

export { otherIronCategories } from "@/data/workshopImages";
export type { OtherIronCategory, OtherIronType } from "@/data/workshopImages";

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "أعمال الحديد", href: "#metalwork" },
  { label: "تشكيل ونقش الحديد", href: "#forging" },
  { label: "أعمال الموبيليا", href: "#furniture" },
  { label: "معرض الأعمال", href: "#gallery" },
  { label: "لماذا نحن؟", href: "#why-us" },
  { label: "كيف نعمل؟", href: "#how-we-work" },
  { label: "تواصل معنا", href: "#contact" },
];

// ============================================================
// CATEGORY METADATA (text only — images come from workshopImages.ts)
// ============================================================

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

export type CategoryGroup = {
  id: string;
  label: string;
  description: string;
  images: string[];
};

import {
  metalworkImages,
  forgingImages,
  furnitureImages,
} from "@/data/workshopImages";

export const metalworkCategories: CategoryGroup[] = [
  {
    id: "metal-doors",
    label: "الأبواب",
    description: "أبواب حديد مشغول بتصاميم فنية وعصرية، تناسب الواجهات والمداخل.",
    images: metalworkImages["metal-doors"],
  },
  {
    id: "metal-windows",
    label: "الشبابيك",
    description: "شبابيك حديد بتصاميم زخرفية وواقية، تجمع بين الجمال والأمان.",
    images: metalworkImages["metal-windows"],
  },
  {
    id: "metal-railings",
    label: "الدرابزينات",
    description: "درابزينات حديد للسلالم والشرفات، بزخارف دقيقة وتشطيب متقن.",
    images: metalworkImages["metal-railings"],
  },
  {
    id: "metal-other",
    label: "أعمال حديد أخرى",
    description: "أعمال حديد متنوعة حسب الطلب: نافورات، أسوار، أغطية، هياكل وتفاصيل معمارية.",
    images: [],
  },
];

export const forgingCategories: CategoryGroup[] = [
  {
    id: "square-solid",
    label: "المربع الصم",
    description:
      "تشكيل الحديد المربع الصم بأبعاد دقيقة، مناسب للأبواب والهياكل والزخارف القوية.",
    images: forgingImages["square-solid"],
  },
  {
    id: "flat-bar",
    label: "المبسط",
    description:
      "تشكيل الحديد المبسط (الشريط المسطح) المستخدم في الزخارف والإطارات والأبواب الفنية.",
    images: forgingImages["flat-bar"],
  },
  {
    id: "twisted",
    label: "المبروم",
    description:
      "برم الحديد لإنتاج أشكال حلزونية زخرفية تضفي طابعاً فنياً مميزاً على الأبواب والدرابزينات.",
    images: forgingImages["twisted"],
  },
  {
    id: "pipe-bending",
    label: "لف وتقويس الأنابيب الحديدية",
    description:
      "لف وتقويس الأنابيب الحديدية بأقواس دقيقة للاستخدامات المعمارية والزخرفية.",
    images: forgingImages["pipe-bending"],
  },
  {
    id: "engraving",
    label: "النقش والزخرفة الحديدية",
    description:
      "نقش وزخرفة الحديد بتفاصيل فنية دقيقة، تشمل الأوراق النباتية والأشكال الهندسية والكلاسيكية.",
    images: forgingImages["engraving"],
  },
];

export const furnitureCategories: CategoryGroup[] = [
  {
    id: "furn-doors",
    label: "الأبواب",
    description: "أبواب خشبية مصنوعة حسب الطلب بخامات متعددة وتشطيب فاخر.",
    images: furnitureImages["furn-doors"],
  },
  {
    id: "furn-windows",
    label: "الشبابيك",
    description: "شبابيك خشبية بتصاميم عصرية وكلاسيكية، بعزل وإتقان عالٍ.",
    images: furnitureImages["furn-windows"],
  },
  {
    id: "furn-kitchens",
    label: "المطابخ",
    description: "مطابخ خشبية كاملة بتصاميم حديثة وخامات عالية الجودة وتوزيع عملي.",
    images: furnitureImages["furn-kitchens"],
  },
  {
    id: "furn-bedrooms",
    label: "غرف النوم",
    description: "أثاث غرف النوم: أسرّ، خزائن، وكومودينات، بتصاميم متناسقة وتشطيب راقٍ.",
    images: furnitureImages["furn-bedrooms"],
  },
  {
    id: "furn-libraries",
    label: "المكتبات",
    description: "مكتبات ورفوف خشبية حسب الطلب، عملية وأنيقة لكل المساحات.",
    images: furnitureImages["furn-libraries"],
  },
  {
    id: "furn-home",
    label: "الأثاث المنزلي",
    description: "أثاث منزلي متكامل: صالونات، طاولات، وقطع مميزة تناسب كل الأذواق.",
    images: furnitureImages["furn-home"],
  },
  {
    id: "furn-office",
    label: "الأثاث المكتبي",
    description: "أثاث مكتبي مريح وعملي: مكاتب، كراسي، ومحطات عمل حسب الطلب.",
    images: furnitureImages["furn-office"],
  },
  {
    id: "furn-school",
    label: "الأثاث المدرسي",
    description: "أثاث مدرسي متين وعملي: طاولات، كراسي، ولوحات، مصمم للاستخدام المكثف.",
    images: furnitureImages["furn-school"],
  },
  {
    id: "furn-corporate",
    label: "أثاث وتجهيزات الشركات",
    description: "تجهيزات مكاتب الشركات: استقبال، غرف اجتماعات، ومحطات عمل متكاملة.",
    images: furnitureImages["furn-corporate"],
  },
  {
    id: "furn-hotels",
    label: "أثاث وتجهيزات الفنادق",
    description: "أثاث فندقي فاخر: لوبيات، غرف، وأجنحة، بتصاميم راقية وتشطيب عالمي.",
    images: furnitureImages["furn-hotels"],
  },
];

// ============================================================
// WHY CHOOSE US
// ============================================================

export const whyChooseUs = [
  {
    icon: "Ruler",
    title: "تنفيذ حسب الطلب",
    desc: "نصمم وننفذ كل قطعة وفق مقاساتك واحتياجك بالضبط.",
  },
  {
    icon: "Award",
    title: "جودة في التنفيذ",
    desc: "نلتزم بأعلى معايير الجودة في كل مراحل العمل.",
  },
  {
    icon: "Crosshair",
    title: "دقة في التفاصيل",
    desc: "نهتم بأدق التفاصيل لنخرج عملاً متكاملاً ومتقناً.",
  },
  {
    icon: "Layers",
    title: "تنوع الخامات",
    desc: "نوفر تشكيلة واسعة من خامات الحديد والأخشاب المناسبة.",
  },
  {
    icon: "Hammer",
    title: "خبرة في أعمال الحديد والأخشاب",
    desc: "خبرة طويلة في صناعة الحديد والأخشاب على حد سواء.",
  },
  {
    icon: "PenTool",
    title: "الاهتمام بتفاصيل التصميم",
    desc: "نولي التصميم اهتماماً خاصاً ليحقق رؤيتك بدقة.",
  },
  {
    icon: "Square",
    title: "الالتزام بالمقاسات المطلوبة",
    desc: "نلتزم تماماً بالمقاسات والمواصفات المتفق عليها.",
  },
];

// ============================================================
// HOW WE WORK
// ============================================================

export const howWeWork = [
  { icon: "PhoneCall", title: "تواصل معنا", desc: "تواصل عبر الهاتف أو واتساب أو النموذج." },
  { icon: "PencilRuler", title: "مناقشة التصميم والمقاسات", desc: "نناقش فكرتك ونحدد التصميم والمقاسات." },
  { icon: "FileText", title: "الاتفاق على التفاصيل", desc: "نتفق على الخامات والتفاصيل والتكلفة." },
  { icon: "PackageCheck", title: "التنفيذ والتسليم", desc: "ننفذ العمل بدقة ونسلمه في الموعد المتفق عليه." },
];

// ============================================================
// GALLERY FILTERS
// ============================================================

export type GalleryFilter = { id: string; label: string };

export const galleryFilters: GalleryFilter[] = [
  { id: "all", label: "الكل" },
  { id: "metalwork", label: "أعمال الحديد" },
  { id: "metal-doors", label: "الأبواب" },
  { id: "metal-windows", label: "الشبابيك" },
  { id: "metal-railings", label: "الدرابزينات" },
  { id: "forging", label: "تشكيل الحديد" },
  { id: "engraving", label: "النقش والزخرفة" },
  { id: "furniture", label: "الموبيليا" },
  { id: "furn-kitchens", label: "المطابخ" },
  { id: "furn-bedrooms", label: "غرف النوم" },
  { id: "furn-libraries", label: "المكتبات" },
  { id: "furn-home", label: "الأثاث المنزلي" },
  { id: "furn-office", label: "الأثاث المكتبي" },
  { id: "furn-school", label: "الأثاث المدرسي" },
  { id: "furn-corporate", label: "الشركات" },
  { id: "furn-hotels", label: "الفنادق" },
];

// Build the flat gallery list from all categories
// (metal-other is excluded — it navigates to its own section)
export const allGalleryProjects: Project[] = [
  ...metalworkCategories
    .filter((c) => c.id !== "metal-other")
    .flatMap((c) =>
      c.images.map((image, i) => ({
        id: `${c.id}-${i}`,
        title: `${c.label} — مشروع ${i + 1}`,
        description: c.description,
        image,
        category: c.id,
      })),
    ),
  ...forgingCategories.flatMap((c) =>
    c.images.map((image, i) => ({
      id: `${c.id}-${i}`,
      title: `${c.label} — مشروع ${i + 1}`,
      description: c.description,
      image,
      category: c.id === "engraving" ? "engraving" : "forging",
    })),
  ),
  ...furnitureCategories.flatMap((c) =>
    c.images.map((image, i) => ({
      id: `${c.id}-${i}`,
      title: `${c.label} — مشروع ${i + 1}`,
      description: c.description,
      image,
      category: c.id,
    })),
  ),
];
