import { furnitureCategories } from "@/content";
import CategoryGallery from "../CategoryGallery";

export default function Furniture() {
  return (
    <CategoryGallery
      id="furniture"
      eyebrow="أعمال الموبيليا والأخشاب"
      title="أعمال الموبيليا والأخشاب"
      intro="نختص في صناعة الموبيليا والأخشاب حسب الطلب، باستخدام أنواع متعددة من الخشب — من خشب الزان إلى الصنوبر السويدي وغيرها من الخامات المناسبة لكل مشروع. نلتزم بالجودة والتنوع والتصنيع حسب الطلب، مع دقة في التنفيذ وعناية بالتشطيب والتفاصيل."
      categories={furnitureCategories}
      bg="ivory"
    />
  );
}
