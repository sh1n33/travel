import { DestinationExplorer } from "@/components/destination-explorer";
import { InteractiveMap } from "@/components/interactive-map";
import { SectionHeader } from "@/components/section-header";
import { destinations } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function DestinationsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <SectionHeader
        eyebrow={lang === "en" ? "Destinations" : "Очих газрууд"}
        title={
          lang === "en"
            ? "From the Gobi to Khuvsgul, each region carries its own atmosphere."
            : "Говь, Хөвсгөлөөс эхлээд бүс бүр өөрийн гэсэн уур амьсгалтай."
        }
        description={
          lang === "en"
            ? "Browse the main regions, filter by travel style, then open each guide for practical and cultural details."
            : "Үндсэн бүсүүдийг харж, аяллын хэв маягаар шүүж, дараа нь дэлгэрэнгүй хөтөчийг нээнэ үү."
        }
      />

      <InteractiveMap
        lang={lang}
        title={lang === "en" ? "Regional preview" : "Бүс нутгийн тойм"}
        description={
          lang === "en"
            ? "A quick visual way to understand Mongolia's geography before choosing your route."
            : "Маршрутаа сонгохоос өмнө Монголын газар зүйг хурдан ойлгох визуал хэсэг."
        }
        items={destinations.map((destination) => ({
          slug: destination.slug,
          title: localize(destination.title, lang),
          summary: localize(destination.summary, lang),
          x: destination.mapPosition.x,
          y: destination.mapPosition.y,
        }))}
      />

      <section className="pt-16">
        <DestinationExplorer
          items={destinations.map((destination) => ({
            href: `/${lang}/destinations/${destination.slug}`,
            image: destination.image,
            title: localize(destination.title, lang),
            summary: localize(destination.summary, lang),
            region: destination.region,
            travelTypes: destination.travelTypes,
            seasons: destination.seasons,
          }))}
          labels={{
            all: lang === "en" ? "All" : "Бүгд",
            region: lang === "en" ? "Region" : "Бүс",
            travelType: lang === "en" ? "Travel type" : "Аяллын төрөл",
            season: lang === "en" ? "Season" : "Улирал",
          }}
        />
      </section>
    </main>
  );
}
