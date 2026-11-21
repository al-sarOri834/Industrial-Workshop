import { ArrowLeft } from "lucide-react";
import { aboutImage1, aboutImage2 } from "@/data/workshopImages";
import WorkshopImage from "./WorkshopImage";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <WorkshopImage
                src={aboutImage1}
                alt="أعمال الحدادة"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-2 hidden w-44 overflow-hidden rounded-lg border-4 border-ivory shadow-xl sm:block lg:left-auto lg:-left-6 lg:w-52">
              <WorkshopImage
                src={aboutImage2}
                alt="نجارة الأخشاب"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-eyebrow">من نحن</p>
            <h2 className="section-title mb-6">
              صناعة تجمع بين <span className="text-wood-600">قوة الحديد</span> و{" "}
              <span className="text-wood-600">دفء الخشب</span>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-graphite-600 sm:text-lg">
              نحن ورشة متخصصة في أعمال الحديد المشغول وتشكيل ونقش الحديد، وصناعة
              الموبيليا والأخشاب حسب الطلب. نجمع بين الخبرة في الحدادة والنجارة لنقدم
              أعمالاً تجمع بين المتانة والجمال.
            </p>
            <p className="mb-8 text-base leading-relaxed text-graphite-600 sm:text-lg">
              نلتزم بالجودة في التنفيذ والدقة في التفاصيل، ونُنفذ كل عمل وفقاً
              للمقاسات والتصميم المطلوب. اهتمامنا بالتفاصيل يجعل كل قطعة تحمل طابعاً
              فنياً مميزاً.
            </p>

            <a href="#contact" className="btn-primary">
              تعرف علينا أكثر
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
