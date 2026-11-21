// ============================================================
// CENTRALIZED WORKSHOP INFORMATION
// All workshop/contact info is centralized here.
// Fields are intentionally EMPTY — fill them with real data later.
// ============================================================

export const workshopInfo = {
  name: "ورشة ومكابس السروري",
  location: "حدة - عطان / بجانب بيت علوي السلامي",
  phone: "777995309",
  whatsapp: "+967 777 995 309", // International format without +, e.g. 9665XXXXXXXX
  email: "alsarori834@gmail.com",
  workingHours: "من السبت الى الخميس",
  googleMapsUrl: " https://maps.app.goo.gl/mzmzrVHRWG2RhNpd6 ",
  instagram: "",
  facebook: "",
  shortDesc:
    "ورشة متخصصة في أعمال الحديد المشغول وتشكيل ونقش الحديد وصناعة الموبيليا والأخشاب حسب الطلب، بجودة عالية ودقة في التفاصيل.",
};

// WhatsApp helpers — centralize the number everywhere
export const whatsappDefaultMessage =
  "السلام عليكم، أرغب بالاستفسار عن تنفيذ أحد أعمالكم.";

export function whatsappLink(message: string = whatsappDefaultMessage): string {
  if (!workshopInfo.whatsapp) return "";
  return `https://wa.me/${workshopInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    message,
  )}`;
}

export function whatsappQuoteLink(category: string): string {
  return whatsappLink(
    `السلام عليكم، أرغب بتنفيذ عمل مشابه من فئة: ${category}. أرجو إفادتي بالتفاصيل.`,
  );
}
