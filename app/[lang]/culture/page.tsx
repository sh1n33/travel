import { AnimatedSection } from "@/components/animated-section";
import { CultureHighlightCard } from "@/components/culture-highlight-card";
import { InquiryForm } from "@/components/inquiry-form";
import { MongolianDivider } from "@/components/mongolian-divider";
import { SectionHeader } from "@/components/section-header";
import { culturalHighlights, siteCopy } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function CulturePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <AnimatedSection className="rounded-[36px] bg-[linear-gradient(135deg,#f7f0df,#fff8ee)] p-8 shadow-luxury sm:p-10 lg:p-14">
        <span className="section-label">
          {lang === "en" ? "Cultural journeys" : "Соёлын аялал"}
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] text-ink sm:text-6xl lg:text-7xl">
          {lang === "en"
            ? "Mongolia's culture is living, generous, musical, and inseparable from the landscape."
            : "Монголын соёл бол амьд, өгөөмөр, хөгжимтэй бөгөөд байгалиасаа салшгүй."}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
          {lang === "en"
            ? "This page presents traditions, hospitality, festivals, food, and etiquette in a calm storytelling format with premium visual pacing."
            : "Энэ хуудсанд уламжлал, зочломтгой зан, баяр, идээ, ёс заншлыг тайван хэмнэлтэй өгүүлэмжээр танилцуулна."}
        </p>
      </AnimatedSection>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "Story layers" : "Өгүүлэмжийн давхарга"}
          title={
            lang === "en"
              ? "Tradition, hospitality, music, dress, and festival life."
              : "Уламжлал, зочломтгой зан, хөгжим, хувцас, баяр наадам."
          }
        />
        <div className="space-y-6">
          {culturalHighlights.map((highlight, index) => (
            <AnimatedSection key={localize(highlight.title, lang)} delay={index * 0.04}>
              <CultureHighlightCard
                image={highlight.image}
                title={localize(highlight.title, lang)}
                description={localize(highlight.description, lang)}
                details={localize(highlight.details, lang)}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16">
        <MongolianDivider />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="soft-card p-8">
          <span className="section-label">
            {lang === "en" ? "Etiquette guide" : "Ёс заншлын зөвлөмж"}
          </span>
          <h2 className="mt-5 text-4xl font-semibold text-ink">
            {lang === "en"
              ? "Gentle reminders for foreign visitors"
              : "Гадаад аялагчдад зориулсан зөөлөн зөвлөмж"}
          </h2>
          <div className="mt-6 grid gap-4">
            {localize(siteCopy.etiquette, lang).map((item) => (
              <div key={item} className="rounded-[22px] bg-cloud px-5 py-4 text-sm leading-7 text-ink-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
        <InquiryForm
          lang={lang}
          title={
            lang === "en"
              ? "Ask for a culture-led itinerary"
              : "Соёл төвтэй маршрутын талаар асуух"
          }
        />
      </section>
    </main>
  );
}
