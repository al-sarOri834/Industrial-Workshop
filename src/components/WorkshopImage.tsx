import { ImageOff } from "lucide-react";

type WorkshopImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

// Reusable image component: shows the image if src exists,
// otherwise shows a clean placeholder that preserves layout/dimensions.
export default function WorkshopImage({
  src,
  alt,
  className = "",
  loading = "lazy",
}: WorkshopImageProps) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-graphite-100 ${className}`}
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-graphite-300">
          <ImageOff className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-[10px] font-medium tracking-wide sm:text-xs">
            صورة الورشة
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={(e) => {
        // Fallback to placeholder if image fails to load
        const target = e.currentTarget;
        const parent = target.parentElement;
        if (parent) {
          target.style.display = "none";
          parent.className += ` flex items-center justify-center bg-graphite-100`;
          parent.innerHTML = `<div class="flex flex-col items-center gap-2 text-graphite-300"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9"/><path d="M1 17h22"/><path d="M9 7h6"/><circle cx="12" cy="13" r="2"/></svg><span style="font-size:12px;font-weight:500">صورة الورشة</span></div>`;
        }
      }}
    />
  );
}
