import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/workshopInfo";
import { heroImage } from "@/data/workshopImages";
import WorkshopImage from "./WorkshopImage";

export default function Hero() {
  const waLink = whatsappLink();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {heroImage ? (
          <img
            src={heroImage}
            alt="أعمال الحديد المشغول"
            className="h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-graphite-800">
            <div className="flex flex-col items-center gap-3 text-graphite-500">
              <span className="text-sm font-medium tracking-wide">صورة الواجهة الرئيسية</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-l from-graphite-900/95 via-graphite-900/80 to-graphite-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-graphite-900/40" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="mb-5 inline-block rounded-full border border-wood-500/40 bg-wood-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-wood-300 backdrop-blur-sm sm:text-sm">
            صناعة حسب الطلب • حديد وأخشاب
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.15] text-ivory sm:text-5xl lg:text-6xl">
            إتقان الحديد وفنون الخشب...
            <br />
            <span className="text-wood-400">صناعة تُنفّذ حسب الطلب</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-graphite-200 sm:text-lg">
            ورشة متخصصة في أعمال الحديد المشغول وتشكيل ونقش الحديد وصناعة الموبيليا
            والأخشاب. نُنفذ أعمالاً فنية وعملية بجودة عالية ودقة في التفاصيل، وفقاً
            لمقاساتك وتصميمك الخاص.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#gallery" className="btn-primary">
              استعرض أعمالنا
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline border-graphite-500 text-ivory hover:bg-ivory hover:text-graphite-900">
              تواصل معنا
            </a>
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ivory/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-ivory/60" />
        </div>
      </div>
    </section>
  );
}
