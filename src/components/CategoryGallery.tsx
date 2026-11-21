import { useState } from "react";
import { MessageCircle, ArrowLeft } from "lucide-react";
import type { CategoryGroup } from "@/content";
import { whatsappQuoteLink } from "@/data/workshopInfo";
import GalleryModal from "./GalleryModal";
import WorkshopImage from "./WorkshopImage";

type CategoryGalleryProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  categories: CategoryGroup[];
  ctaLabel?: string;
  bg?: "ivory" | "graphite";
};

export default function CategoryGallery({
  id,
  eyebrow,
  title,
  intro,
  categories,
  bg = "ivory",
}: CategoryGalleryProps) {
  const [activeCat, setActiveCat] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const cat = categories[activeCat];
  const dark = bg === "graphite";

  // "metal-other" navigates to the dedicated section instead of showing a gallery
  const isOtherIron = cat.id === "metal-other";

  return (
    <section
      id={id}
      className={dark ? "bg-graphite-900 py-20 sm:py-28" : "bg-ivory py-20 sm:py-28"}
    >
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-eyebrow" style={{ color: dark ? "#bf9f73" : undefined }}>
            {eyebrow}
          </p>
          <h2 className={dark ? "section-title text-ivory" : "section-title"}>{title}</h2>
          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
              dark ? "text-graphite-300" : "text-graphite-600"
            }`}
          >
            {intro}
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {categories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCat(i)}
              className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 sm:px-5 sm:py-3 sm:text-base ${
                i === activeCat
                  ? "bg-graphite-800 text-ivory shadow-lg"
                  : dark
                    ? "bg-graphite-700/60 text-graphite-200 hover:bg-graphite-700"
                    : "bg-graphite-100 text-graphite-600 hover:bg-graphite-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Active category content */}
        {isOtherIron ? (
          /* "أعمال حديد أخرى" — navigate to dedicated section */
          <div key={cat.id} className="animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-graphite-100 p-8 text-center sm:p-12">
              <div className="max-w-2xl">
                <h3 className="mb-3 text-xl font-bold text-graphite-900 sm:text-2xl">
                  {cat.label}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  {cat.description}
                </p>
              </div>
              <a href="#other-iron" className="btn-primary">
                استعرض أعمال الحديد الأخرى
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          /* Normal gallery with images */
          <div key={cat.id} className="animate-fade-in">
            <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:gap-6">
              {/* Large image */}
              <button
                type="button"
                onClick={() => setModalIndex(0)}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <WorkshopImage
                  src={cat.images[0]}
                  alt={cat.label}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[16/9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              {/* Thumbnails column */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-3">
                {cat.images.slice(1, 5).map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setModalIndex(i + 1)}
                    className="group relative overflow-hidden rounded-xl shadow-md"
                  >
                    <WorkshopImage
                      src={src}
                      alt={`${cat.label} ${i + 2}`}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-110 lg:aspect-[16/9]"
                    />
                    <div className="absolute inset-0 bg-graphite-900/0 transition-colors group-hover:bg-graphite-900/20" />
                  </button>
                ))}
              </div>
            </div>

            {/* Category description + CTA */}
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-graphite-100 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
              <div className="max-w-2xl">
                <h3 className="mb-2 text-xl font-bold text-graphite-900 sm:text-2xl">
                  {cat.label}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  {cat.description}
                </p>
              </div>
              <a
                href={whatsappQuoteLink(cat.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                أرغب بتنفيذ عمل مشابه
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalIndex !== null && !isOtherIron && (
        <GalleryModal
          images={cat.images}
          index={modalIndex}
          onClose={() => setModalIndex(null)}
          onPrev={() =>
            setModalIndex((p) => (p === null ? 0 : (p - 1 + cat.images.length) % cat.images.length))
          }
          onNext={() =>
            setModalIndex((p) => (p === null ? 0 : (p + 1) % cat.images.length))
          }
          title={`${cat.label} — مشروع ${modalIndex + 1}`}
          description={cat.description}
          categoryLabel={cat.label}
        />
      )}
    </section>
  );
}
