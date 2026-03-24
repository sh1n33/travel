import { InquiryForm } from "@/components/inquiry-form";
import { PlannerAssistant } from "@/components/planner-assistant";
import { SectionHeader } from "@/components/section-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs, plannerRecommendations } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function PlannerPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <SectionHeader
        eyebrow={lang === "en" ? "Smart travel planner" : "Ухаалаг аяллын төлөвлөгч"}
        title={
          lang === "en"
            ? "A polished AI-style interface for shaping your Mongolia route."
            : "Монгол аяллаа төлөвлөх polished AI хэв маягийн интерфэйс."
        }
        description={
          lang === "en"
            ? "This planner is intentionally a mockup, but the experience is designed to feel premium and convincing."
            : "Энэ planner нь mockup боловч хэрэглэгчийн туршлагыг premium, итгэл төрүүлэхээр зохион бүтээсэн."
        }
      />

      <PlannerAssistant
        lang={lang}
        recommendations={plannerRecommendations.map((item) => ({
          title: localize(item.title, lang),
          style: item.style,
          duration: item.duration,
          budget: item.budget,
          season: item.season,
          interests: item.interests,
          summary: localize(item.summary, lang),
          stops: localize(item.stops, lang),
        }))}
      />

      <section className="pt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <InquiryForm
          lang={lang}
          title={
            lang === "en"
              ? "Turn this mock plan into a real itinerary"
              : "Энэ mock төлөвлөгөөг бодит маршрут болгох"
          }
        />
        <div>
          <SectionHeader
            eyebrow={lang === "en" ? "Questions" : "Түгээмэл асуулт"}
            title={lang === "en" ? "Planner and inquiry FAQ" : "Planner ба inquiry FAQ"}
          />
          <FAQAccordion
            items={faqs.map((item) => ({
              question: localize(item.question, lang),
              answer: localize(item.answer, lang),
            }))}
          />
        </div>
      </section>
    </main>
  );
}
