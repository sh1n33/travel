import { AnimatedSection } from "@/components/animated-section";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeader } from "@/components/section-header";
import { TourCard } from "@/components/tour-card";
import { luxuryTours } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function LuxuryToursPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <AnimatedSection className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#fbf7ef,#f1eadc)] p-8 shadow-luxury sm:p-10 lg:p-14">
        <span className="section-label">
          {lang === "en" ? "Luxury journeys" : "Тансаг аялал"}
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] text-ink sm:text-6xl lg:text-7xl">
          {lang === "en"
            ? "Private Mongolia travel, styled like a premium hotel experience."
            : "Premium зочид буудлын мэдрэмжтэй хувийн Монгол аялал."}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
          {lang === "en"
            ? "High-end ger camps, elevated transport, thoughtful pacing, and refined service touches designed for guests who value atmosphere as much as logistics."
            : "Тансаг гэр кэмп, өндөр зэрэглэлийн тээвэр, зөв хэмнэл, нарийн үйлчилгээний детальд төвлөрсөн аялал."}
        </p>
      </AnimatedSection>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "Curated packages" : "Сонгомол багцууд"}
          title={
            lang === "en"
              ? "Premium routes for private departures, elegant camps, and multi-day immersion."
              : "Хувийн departure, тансаг кэмп, олон өдрийн гүнзгий аялалд зориулав."
          }
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {luxuryTours.map((tour) => (
            <AnimatedSection key={tour.slug}>
              <TourCard
                image={tour.image}
                title={localize(tour.title, lang)}
                description={localize(tour.description, lang)}
                meta={[tour.style, tour.duration, ...localize(tour.inclusions, lang).slice(0, 1)]}
                price={tour.priceFrom}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pt-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8">
            <span className="section-label">
              {lang === "en" ? "Private transport" : "Хувийн тээвэр"}
            </span>
            <h2 className="mt-5 text-4xl font-semibold text-ink">
              {lang === "en"
                ? "Fly-drive combinations, dedicated drivers, and discreet coordination."
                : "Нислэг ба авто хосолсон маршрут, тусгай жолооч, даруухан нарийн зохион байгуулалт."}
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                lang === "en"
                  ? "Domestic flights paired with polished overland transitions"
                  : "Дотоод нислэг ба цэвэрхэн авто шилжилт",
                lang === "en"
                  ? "Private SUVs and premium support vehicles where terrain demands"
                  : "Замын нөхцөлд тохирсон хувийн SUV ба support vehicle",
                lang === "en"
                  ? "Camp arrivals staged to feel calm, elegant, and seamless"
                  : "Кэмп дээрх ирэлт бүр тайван, тансаг, саадгүй мэдрэмжтэй",
              ].map((item) => (
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
                ? "Request a luxury itinerary"
                : "Тансаг маршрутын хүсэлт илгээх"
            }
          />
        </div>
      </section>
    </main>
  );
}
