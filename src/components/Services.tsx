import { ArrowLeft } from "lucide-react";
import { serviceMetalImage, serviceWoodImage } from "@/data/workshopImages";
import WorkshopImage from "./WorkshopImage";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  alt: string;
};

function ServiceCard({ image, title, description, href, alt }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-graphite-800 shadow-lg card-hover">
      <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/11]">
        <WorkshopImage
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h3 className="mb-3 text-2xl font-extrabold text-ivory sm:text-3xl">{title}</h3>
        <p className="mb-5 max-w-md text-sm leading-relaxed text-graphite-200 sm:text-base">
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-md bg-ivory px-6 py-3 text-sm font-bold text-graphite-900 transition-all duration-300 hover:bg-wood-400 hover:text-graphite-900 active:scale-[0.98]"
        >
          استكشف الأعمال
          <ArrowLeft className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="bg-graphite-900 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="section-eyebrow" style={{ color: "#bf9f73" }}>
            خدماتنا الرئيسية
          </p>
          <h2 className="section-title text-ivory">
            حرفتان في ورشة واحدة
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ServiceCard
            image={serviceMetalImage}
            alt="أعمال الحديد"
            title="أعمال الحديد"
            description="أبواب وشبابيك ودرابزينات حديد مشغول، تشكيل ونقش وزخارف فنية بجودة عالية."
            href="#metalwork"
          />
          <ServiceCard
            image={serviceWoodImage}
            alt="أعمال الموبيليا والأخشاب"
            title="أعمال الموبيليا والأخشاب"
            description="موبيليا وأثاث خشبي حسب الطلب: مطابخ، غرف نوم، مكتبات، أثاث منزلي ومكتبي ومدرسي."
            href="#furniture"
          />
        </div>
      </div>
    </section>
  );
}
