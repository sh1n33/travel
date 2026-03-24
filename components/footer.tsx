import Link from "next/link";
import { Lang, localize } from "@/lib/i18n";
import { getLocalizedPath, navItems, siteConfig } from "@/lib/site";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-white/50 bg-[linear-gradient(180deg,rgba(15,34,51,0.98),rgba(11,27,40,1))] text-white">
      <div className="page-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold/80">
              Steppe & Sky Mongolia
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              {lang === "en"
                ? "A premium travel concierge for Mongolia."
                : "Монголын premium аяллын concierge үйлчилгээ."}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              {lang === "en"
                ? "Designed for culturally curious travelers, adventurous spirits, and Mongolian guests seeking elegant local escapes."
                : "Соёл сонирхогчид, адал явдалд дурлагсад, дотоодын тансаг амралт хайгч монгол аялагчдад зориулав."}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Navigation
            </p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href || "home"}
                  href={getLocalizedPath(lang, item.href)}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {localize(item.label, lang)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {siteConfig.socials.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          © 2026 Steppe & Sky Mongolia
        </div>
      </div>
    </footer>
  );
}
