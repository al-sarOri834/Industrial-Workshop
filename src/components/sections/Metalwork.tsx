import { metalworkCategories } from "@/content";
import CategoryGallery from "../CategoryGallery";

export default function Metalwork() {
  return (
    <CategoryGallery
      id="metalwork"
      eyebrow="أعمال الحديد"
      title="أعمال الحديد المشغول"
      intro="نقدم أعمال حديد مشغول بأعلى معايير الجودة والدقة. من الأبواب والشبابيك إلى الدرابزينات والزخارف الفنية، نُنفذ كل عمل وفق طلبك."
      categories={metalworkCategories}
      bg="ivory"
    />
  );
}
