import { PhoneCall, PencilRuler, FileText, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { howWeWork } from "@/content";

const iconMap: Record<string, LucideIcon> = {
  PhoneCall,
  PencilRuler,
  FileText,
  PackageCheck,
};

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-graphite-900 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-eyebrow" style={{ color: "#bf9f73" }}>
            كيف نعمل؟
          </p>
          <h2 className="section-title text-ivory">آلية العمل في أربع خطوات</h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute right-0 top-10 hidden h-0.5 w-full bg-graphite-700 lg:block" />

          {howWeWork.map((step, i) => {
            const Icon = iconMap[step.icon] ?? PhoneCall;
            return (
              <div key={step.title} className="relative text-center lg:text-right">
                {/* Number circle */}
                <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-graphite-800 ring-4 ring-graphite-900 lg:mx-0">
                  <Icon className="h-9 w-9 text-wood-400" />
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-wood-600 text-sm font-bold text-ivory">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-ivory sm:text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-graphite-300 sm:text-base">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
