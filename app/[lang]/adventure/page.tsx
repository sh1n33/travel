import { AdventureExplorer } from "@/components/adventure-explorer";
import { AnimatedSection } from "@/components/animated-section";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeader } from "@/components/section-header";
import { adventures } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <AnimatedSection className="rounded-[36px] bg-[linear-gradient(135deg,#102437,#234869)] p-8 text-white shadow-luxury sm:p-10 lg:p-14">
        <span className="section-label border-white/15 bg-white/10 text-white/70">
          {lang === "en" ? "Adventure first" : "Адал явдлын гол цэг"}
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] sm:text-6xl lg:text-7xl">
          {lang === "en"
            ? "Adventure in Mongolia, curated with elegance instead of chaos."
            : "Монголын адал явдлыг эмх цэгцтэй, тансаг хэв маягаар."}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
          {lang === "en"
            ? "Horseback riding, camel journeys, lake expeditions, mountain trips, and cultural field experiences shaped for modern travelers."
            : "Морин аялал, тэмээт маршрут, нуурын экспедиц, уулын аялал, соёлын талбар туршлагыг орчин үеийн аялагчдад зориулан цэгцлэв."}
        </p>
      </AnimatedSection>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "Explore by style" : "Хэв маягаар сонгох"}
          title={
            lang === "en"
              ? "Filter by season, region, intensity, duration, and budget."
              : "Улирал, бүс, эрчим, хугацаа, төсвөөр шүүнэ үү."
          }
          description={
            lang === "en"
              ? "Each experience is written to feel like a real travel product rather than a generic card."
              : "Туршлага бүр жинхэнэ аяллын бүтээгдэхүүн шиг мэдрэмж төрүүлэхээр бичигдсэн."
          }
        />
        <AdventureExplorer
          items={adventures.map((item) => ({
            slug: item.slug,
            image: item.image,
            category: item.category,
            season: item.season,
            region: item.region,
            intensity: item.intensity,
            duration: item.duration,
            budget: item.budget,
            title: localize(item.title, lang),
            description: localize(item.description, lang),
            highlights: localize(item.highlights, lang),
          }))}
          filters={{
            all: lang === "en" ? "All" : "Бүгд",
            season: lang === "en" ? "Season" : "Улирал",
            region: lang === "en" ? "Region" : "Бүс",
            intensity: lang === "en" ? "Intensity" : "Эрчим",
            duration: lang === "en" ? "Duration" : "Хугацаа",
            budget: lang === "en" ? "Budget" : "Төсөв",
          }}
        />
      </section>

      <section className="pt-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="soft-card p-8">
            <span className="section-label">
              {lang === "en" ? "Field notes" : "Талбарын тэмдэглэл"}
            </span>
            <h2 className="mt-5 text-4xl font-semibold text-ink">
              {lang === "en"
                ? "Adventure here is about immersion, not noise."
                : "Эндхийн адал явдал нь чимээ шуугиан бус, жинхэнэ оролцоо юм."}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {lang === "en"
                ? "The best Mongolia adventures leave room for tea in a family ger, time to watch weather move across the horizon, and evenings that feel deeply unhurried."
                : "Монголын хамгийн сайхан адал явдал нь айлын гэрт цай уух мөч, тэнгэрийн хаяа дагуух цаг агаарын хөдөлгөөнийг харах завсар, яаралгүй үдшийг агуулдаг."}
            </p>
          </div>
          <InquiryForm
            lang={lang}
            title={
              lang === "en"
                ? "Inquire about an adventure departure"
                : "Адал явдлын аяллын талаар асуух"
            }
          />
        </div>
      </section>
    </main>
  );
}
