"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain, Phone, X } from "lucide-react";
import { useState } from "react";
import { Lang, localize } from "@/lib/i18n";
import { getLocalizedPath, navItems, siteConfig } from "@/lib/site";

interface NavbarProps {
  lang: Lang;
}

export function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const alternatePath = (targetLang: Lang) => {
    const segments = pathname.split("/").filter(Boolean);

    if (!segments.length) {
      return `/${targetLang}`;
    }

    segments[0] = targetLang;
    return `/${segments.join("/")}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(247,244,238,0.68)] backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-luxury">
              <Mountain className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ink-soft">
                Steppe & Sky
              </p>
              <p className="text-xs text-ink-soft/80">Mongolia</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href || "home"}
                href={getLocalizedPath(lang, item.href)}
                className="text-sm font-medium text-ink-soft transition hover:text-sky-deep"
              >
                {localize(item.label, lang)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/85 px-4 py-2 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-gold-deep" />
              {siteConfig.phoneLabel}
            </Link>
            <div className="rounded-full border border-border bg-white/80 p-1">
              <Link
                href={alternatePath("en")}
                onClick={() => window.localStorage.setItem("steppe-language", "en")}
                className={`rounded-full px-3 py-1.5 text-sm ${lang === "en" ? "bg-ink text-white" : "text-ink-soft"}`}
              >
                EN
              </Link>
              <Link
                href={alternatePath("mn")}
                onClick={() => window.localStorage.setItem("steppe-language", "mn")}
                className={`rounded-full px-3 py-1.5 text-sm ${lang === "mn" ? "bg-ink text-white" : "text-ink-soft"}`}
              >
                MN
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/80 text-ink lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="pb-5 lg:hidden">
            <div className="soft-card flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href || "home"}
                  href={getLocalizedPath(lang, item.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-cloud"
                >
                  {localize(item.label, lang)}
                </Link>
              ))}
              <Link
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white"
              >
                {siteConfig.phone}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
