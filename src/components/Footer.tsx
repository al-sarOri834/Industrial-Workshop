import { Phone, MapPin, Clock, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";
import { workshopInfo, whatsappLink } from "@/data/workshopInfo";
import { navLinks, metalworkCategories, furnitureCategories } from "@/content";

export default function Footer() {
  const w = workshopInfo;
  const waLink = whatsappLink();

  const contactItems = [
    { icon: Phone, value: w.phone },
    { icon: MessageCircle, value: w.whatsapp },
    { icon: MapPin, value: w.location },
    { icon: Clock, value: w.workingHours },
    { icon: Mail, value: w.email },
  ].filter((item) => item.value);

  const socials = [
    { icon: Facebook, href: w.facebook, label: "فيسبوك" },
    { icon: Instagram, href: w.instagram, label: "إنستغرام" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-graphite-900 pt-16 pb-8 text-graphite-300">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Logo className="h-12 w-12" variant="light" />
              <span className="text-xl font-extrabold text-ivory">
                {w.name || "[اسم الورشة]"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-graphite-400">{w.shortDesc}</p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite-800 text-graphite-300 transition-colors hover:bg-wood-600 hover:text-ivory"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-ivory">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-graphite-400 transition-colors hover:text-wood-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Metalwork + Furniture links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-ivory">أعمالنا</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#metalwork" className="text-sm font-bold text-graphite-300 hover:text-wood-400">
                  أعمال الحديد
                </a>
              </li>
              {metalworkCategories.map((c) => (
                <li key={c.id} className="pr-3">
                  <a
                    href={c.id === "metal-other" ? "#other-iron" : "#metalwork"}
                    className="text-sm text-graphite-400 transition-colors hover:text-wood-400"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#furniture" className="text-sm font-bold text-graphite-300 hover:text-wood-400">
                  أعمال الموبيليا
                </a>
              </li>
              {furnitureCategories.slice(0, 4).map((c) => (
                <li key={c.id} className="pr-3">
                  <a href="#furniture" className="text-sm text-graphite-400 transition-colors hover:text-wood-400">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-ivory">معلومات التواصل</h3>
            {contactItems.length > 0 ? (
              <ul className="space-y-3">
                {contactItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 shrink-0 text-wood-400" />
                    <span className="text-sm text-graphite-400" dir="ltr">{item.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-graphite-500">سيتم إضافة معلومات التواصل لاحقاً.</p>
            )}
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                تواصل عبر واتساب
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-graphite-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-graphite-500">
              © {new Date().getFullYear()} {w.name || "[اسم الورشة]"}. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-graphite-500">
              صُمم بإتقان لأجل صناعة عالية الجودة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
