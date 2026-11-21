import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/content";
import { workshopInfo, whatsappLink } from "@/data/workshopInfo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const waLink = whatsappLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-graphite-900/95 py-2.5 shadow-lg backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Logo + name */}
          <a href="#home" className="flex items-center gap-3" onClick={closeMobile}>
            <Logo className="h-11 w-11 shrink-0" variant="light" />
            <span className="text-lg font-extrabold text-ivory sm:text-xl">
              {workshopInfo.name || "[اسم الورشة]"}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-graphite-200 transition-colors hover:bg-graphite-700/60 hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-wood-600 px-5 py-2.5 text-sm font-bold text-ivory transition-colors hover:bg-wood-500 lg:inline-flex"
            >
              <Phone className="h-4 w-4" />
              اطلب عرض سعر
            </a>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ivory transition-colors hover:bg-graphite-700/60 lg:hidden"
            aria-label="فتح القائمة"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? "visible" : "invisible"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-graphite-900/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />
        {/* Panel — slides from right (RTL) */}
        <div
          className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-graphite-800 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-graphite-700 px-5 py-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" variant="light" />
              <span className="text-base font-bold text-ivory">
                {workshopInfo.name || "[اسم الورشة]"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              className="rounded-md p-2 text-graphite-200 transition-colors hover:bg-graphite-700"
              aria-label="إغلاق القائمة"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="rounded-md px-4 py-3 text-base font-medium text-graphite-200 transition-colors hover:bg-graphite-700 hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {waLink && (
            <div className="border-t border-graphite-700 p-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="btn-whatsapp w-full"
              >
                <Phone className="h-4 w-4" />
                اطلب عرض سعر
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
