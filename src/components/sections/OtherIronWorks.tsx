import { useState } from "react";
import { MessageCircle, ChevronLeft, X } from "lucide-react";
import { otherIronCategories } from "@/data/workshopImages";
import { whatsappQuoteLink } from "@/data/workshopInfo";
import WorkshopImage from "@/components/WorkshopImage";

export default function OtherIronWorks() {
  const [lightbox, setLightbox] = useState<{
    catIndex: number;
    typeIndex: number;
    imgIndex: number;
  } | null>(null);

  const lightboxData =
    lightbox !== null
      ? otherIronCategories[lightbox.catIndex].types[lightbox.typeIndex]
      : null;

  return (
    <section id="other-iron" className="bg-ivory py-20 sm:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-eyebrow">أعمال حديد أخرى</p>
          <h2 className="section-title">أعمال حديد أخرى</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graphite-600 sm:text-lg">
            أعمال حديدية متخصصة تتجاوز الأبواب والشبابيك والدرابزينات. استعرض الفئات الأربع أدناه لاكتشاف ما نُنفذه حسب الطلب.
          </p>
        </div>

        {/* Four major categories */}
        <div className="space-y-12 lg:space-y-16">
          {otherIronCategories.map((category, catIdx) => (
            <div key={category.id} className="animate-fade-in">
              {/* Category header */}
              <div className="mb-6 border-r-4 border-wood-600 pr-4 sm:pr-6">
                <h3 className="text-2xl font-extrabold text-graphite-900 sm:text-3xl">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm font-medium tracking-wide text-graphite-400 sm:text-base" dir="ltr">
                  {category.english}
                </p>
              </div>

              {/* Three types */}
              <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                {category.types.map((type, typeIdx) => (
                  <article
                    key={type.id}
                    className="group overflow-hidden rounded-2xl border border-graphite-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({ catIndex: catIdx, typeIndex: typeIdx, imgIndex: 0 })
                      }
                      className="relative block aspect-[16/10] w-full overflow-hidden"
                    >
                      <WorkshopImage
                        src={type.images[0]}
                        alt={type.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h4 className="mb-1.5 text-lg font-bold text-graphite-900 sm:text-xl">
                        {type.title}
                      </h4>
                      {type.english && (
                        <p className="mb-3 text-xs font-medium tracking-wide text-graphite-400" dir="ltr">
                          {type.english}
                        </p>
                      )}
                      <p className="mb-5 text-sm leading-relaxed text-graphite-600">
                        {type.description}
                      </p>

                      {/* Second image thumbnail */}
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({ catIndex: catIdx, typeIndex: typeIdx, imgIndex: 1 })
                        }
                        className="mb-4 block w-full overflow-hidden rounded-lg"
                      >
                        <WorkshopImage
                          src={type.images[1]}
                          alt={`${type.title} - صورة 2`}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </button>

                      {/* CTA */}
                      <a
                        href={whatsappQuoteLink(type.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full"
                      >
                        <MessageCircle className="h-4 w-4" />
                        أرغب بتنفيذ عمل مشابه
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final statement */}
        <div className="mt-16 rounded-2xl bg-graphite-800 p-8 text-center sm:p-12">
          <p className="mx-auto max-w-3xl text-xl font-bold leading-relaxed text-ivory sm:text-2xl lg:text-3xl">
            أنت فقط اعطِنا الفكرة أو المخطط، ونحن نحول قطع الحديد الصماء إلى قطعة تتكلم بمهارة اليد والحرفة!
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && lightboxData && (
        <div className="fixed inset-0 z-[80] flex flex-col bg-graphite-900/95 backdrop-blur-md">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-sm font-bold text-wood-400">{lightboxData.title}</p>
              <h3 className="truncate text-base font-bold text-ivory sm:text-lg">
                صورة {lightbox!.imgIndex + 1} من 2
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="rounded-full bg-graphite-700/80 p-2.5 text-ivory transition-colors hover:bg-graphite-600"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main image */}
          <div className="flex flex-1 items-center justify-center overflow-hidden px-4">
            <WorkshopImage
              src={lightboxData.images[lightbox!.imgIndex]}
              alt={lightboxData.title}
              className="max-h-full max-w-full rounded-lg object-contain"
            />

            {/* Toggle between 2 images */}
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  ...lightbox!,
                  imgIndex: lightbox!.imgIndex === 0 ? 1 : 0,
                })
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-graphite-700/80 p-3 text-ivory transition-colors hover:bg-graphite-600 sm:left-4"
              aria-label="الصورة الأخرى"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom */}
          <div className="border-t border-graphite-700 bg-graphite-800/80 px-4 py-4 sm:px-6">
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-graphite-200 sm:text-base">
              {lightboxData.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-graphite-400">
                {lightbox!.imgIndex + 1} / 2
              </span>
              <a
                href={whatsappQuoteLink(lightboxData.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                أرغب بتنفيذ عمل مشابه
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
