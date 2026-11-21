import { forgingCategories } from "@/content";
import CategoryGallery from "../CategoryGallery";

export default function Forging() {
  return (
    <CategoryGallery
      id="forging"
      eyebrow="تشكيل ونقش الحديد"
      title="تشكيل ونقش الحديد"
      intro="نقوم بتشكيل الحديد وتشكيل الأنابيب والنقش والزخرفة الفنية بأدوات ومهارة عالية. اختر الفئة لترى أمثلة من أعمالنا التشكيلية والزخرفية."
      categories={forgingCategories}
      bg="graphite"
    />
  );
}
