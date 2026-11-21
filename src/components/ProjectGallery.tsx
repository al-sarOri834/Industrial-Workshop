import { useEffect, useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { galleryFilters, allGalleryProjects } from "@/content";
import WorkshopImage from "./WorkshopImage";

export default function ProjectGallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? allGalleryProjects
      : filter === "metalwork"
        ? allGalleryProjects.filter((p) => p.category.startsWith("metal-"))
        : filter === "forging"
          ? allGalleryProjects.filter(
              (p) =>
                ["square-solid", "flat-bar", "twisted", "pipe-bending"].includes(p.category)
            )
          : filter === "furniture"
            ? allGalleryProjects.filter((p) => p.category.startsWith("furn-"))
            : allGalleryProjects.filter((p) => p.category === filter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((p) => (p === null ? 0 : (p - 1 + filtered.length) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((p) => (p === null ? 0 : (p + 1) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="gallery" className="bg-graphite-900 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="section-eyebrow" style={{ color: "#bf9f73" }}>
            معرض الأعمال
          </p>
          <h2 className="section-title text-ivory">معرض الأعمال</h2>
          <p className="mt-5 text-base leading-relaxed text-graphite-300 sm:text-lg">
            تصفّح مجموعة من أعمالنا في الحديد والأخشاب. استخدم الفلاتر للانتقال بين الفئات.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-sm ${
                filter === f.id
                  ? "bg-wood-600 text-ivory shadow-lg"
                  : "bg-graphite-700/60 text-graphite-200 hover:bg-graphite-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md sm:aspect-[4/3]"
            >
              <WorkshopImage
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="truncate text-xs font-bold text-ivory sm:text-sm">{project.title}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-10 text-center text-graphite-400">لا توجد أعمال في هذه الفئة حالياً.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-graphite-900/95 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-graphite-700/80 p-2.5 text-ivory transition-colors hover:bg-graphite-600 sm:right-6 sm:top-6"
            aria-label="إغلاق"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex((p) => (p === null ? 0 : (p - 1 + filtered.length) % filtered.length))
            }
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-graphite-700/80 p-3 text-ivory transition-colors hover:bg-graphite-600 sm:right-4"
            aria-label="السابق"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex((p) => (p === null ? 0 : (p + 1) % filtered.length))
            }
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-graphite-700/80 p-3 text-ivory transition-colors hover:bg-graphite-600 sm:left-4"
            aria-label="التالي"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex max-h-full w-full max-w-4xl flex-col items-center px-4">
            <WorkshopImage
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              className="max-h-[75vh] max-w-full rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-ivory">{filtered[lightboxIndex].title}</h3>
              <p className="mt-1 text-sm text-graphite-300">
                {filtered[lightboxIndex].description}
              </p>
              <p className="mt-2 text-xs text-graphite-500">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
