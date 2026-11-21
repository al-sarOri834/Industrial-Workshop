import { useEffect } from "react";
import { X, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import { whatsappQuoteLink } from "@/data/workshopInfo";
import WorkshopImage from "./WorkshopImage";

type GalleryModalProps = {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title: string;
  description: string;
  categoryLabel: string;
};

export default function GalleryModal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  title,
  description,
  categoryLabel,
}: GalleryModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onPrev();
      if (e.key === "ArrowLeft") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-graphite-900/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <p className="text-sm font-bold text-wood-400">{categoryLabel}</p>
          <h3 className="truncate text-base font-bold text-ivory sm:text-lg">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-graphite-700/80 p-2.5 text-ivory transition-colors hover:bg-graphite-600"
          aria-label="إغلاق"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main image */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
        <WorkshopImage
          src={images[index]}
          alt={title}
          className="max-h-full max-w-full rounded-lg object-contain"
        />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-graphite-700/80 p-3 text-ivory transition-colors hover:bg-graphite-600 sm:right-4"
              aria-label="السابق"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-graphite-700/80 p-3 text-ivory transition-colors hover:bg-graphite-600 sm:left-4"
              aria-label="التالي"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom: description + thumbnails + CTA */}
      <div className="border-t border-graphite-700 bg-graphite-800/80 px-4 py-4 sm:px-6">
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-graphite-200 sm:text-base">
          {description}
        </p>

        <div className="mb-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                const diff = i - index;
                if (diff > 0) for (let j = 0; j < diff; j++) onNext();
                else for (let j = 0; j < -diff; j++) onPrev();
              }}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                i === index ? "border-wood-400" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <WorkshopImage
                src={src}
                alt={`صورة ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-graphite-400">
            {index + 1} / {images.length}
          </span>
          <a
            href={whatsappQuoteLink(categoryLabel)}
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
  );
}
