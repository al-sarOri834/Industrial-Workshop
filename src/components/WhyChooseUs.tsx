import {
  Ruler,
  Award,
  Crosshair,
  Layers,
  Hammer,
  PenTool,
  Square,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { whyChooseUs } from "@/content";

const iconMap: Record<string, LucideIcon> = {
  Ruler,
  Award,
  Crosshair,
  Layers,
  Hammer,
  PenTool,
  Square,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ivory py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="section-eyebrow">لماذا نحن؟</p>
          <h2 className="section-title">لماذا تختار ورشتنا؟</h2>
          <p className="mt-5 text-base leading-relaxed text-graphite-600 sm:text-lg">
            نلتزم بمعايير عالية في كل ما نقدمه، من التصميم إلى التسليم.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-graphite-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-wood-300 hover:shadow-xl sm:p-7"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-graphite-800 text-ivory transition-colors duration-500 group-hover:bg-wood-600">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-graphite-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  {item.desc}
                </p>
              </article>
            );
          })}

          {/* Last card spans full width on lg to balance 7 items in 3-col grid */}
          <article className="group rounded-2xl border border-graphite-200 bg-graphite-800 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:col-span-3">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-right">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-wood-600 text-ivory">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-ivory sm:text-xl">
                  التزامنا تجاه عملائنا
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-graphite-200 sm:text-base">
                  نحرص على رضا عملائنا بكل تفصيلة، من أول تواصل حتى التسليم. هدفنا أن
                  تحصل على عمل يفوق توقعاتك ويستمر لسنوات.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
