import { notFound } from "next/navigation";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeader } from "@/components/section-header";
import { destinations } from "@/data/tourism";
import { Lang, languages, localize } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    destinations.map((destination) => ({
      lang,
      slug: destination.slug,
    })),
  );
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) {
  const { lang, slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="page-shell section-space">
      <section className="overflow-hidden rounded-[36px] bg-white shadow-luxury">
        <div className="relative h-[460px]">
          <Image
            src={destination.image}
            alt={localize(destination.title, lang)}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <span className="section-label border-white/16 bg-white/10 text-white/72">
              {destination.region}
            </span>
            <h1 className="mt-5 text-5xl font-semibold text-white sm:text-6xl">
              {localize(destination.title, lang)}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
              {localize(destination.summary, lang)}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 pt-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="soft-card p-8">
          <SectionHeader
            eyebrow={lang === "en" ? "Overview" : "Тойм"}
            title={localize(destination.title, lang)}
            description={localize(destination.overview, lang)}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {destination.quickFacts.map((fact) => (
              <div key={localize(fact.label, lang)} className="rounded-[22px] bg-cloud p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                  {localize(fact.label, lang)}
                </p>
                <p className="mt-3 text-lg font-semibold text-ink">
                  {localize(fact.value, lang)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] bg-ink px-6 py-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              {lang === "en" ? "Best time to visit" : "Аялахад тохиромжтой үе"}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/78">
              {localize(destination.bestTime, lang)}
            </p>
          </div>
        </div>
        <InquiryForm
          lang={lang}
          title={
            lang === "en"
              ? `Ask about ${localize(destination.title, lang)}`
              : `${localize(destination.title, lang)}-ийн талаар асуух`
          }
        />
      </section>

      <section className="grid gap-6 pt-16 lg:grid-cols-2">
        <div className="soft-card p-8">
          <h2 className="text-4xl font-semibold text-ink">
            {lang === "en" ? "Things to do" : "Хийж болох зүйлс"}
          </h2>
          <div className="mt-6 grid gap-4">
            {localize(destination.thingsToDo, lang).map((item) => (
              <div key={item} className="rounded-[22px] bg-cloud px-5 py-4 text-sm leading-7 text-ink-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="soft-card p-8">
          <h2 className="text-4xl font-semibold text-ink">
            {lang === "en" ? "Cultural notes" : "Соёлын тэмдэглэл"}
          </h2>
          <div className="mt-6 grid gap-4">
            {localize(destination.culturalNotes, lang).map((item) => (
              <div key={item} className="rounded-[22px] bg-cloud px-5 py-4 text-sm leading-7 text-ink-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "Suggested experiences" : "Санал болгох туршлагууд"}
          title={
            lang === "en"
              ? "Ways to experience this destination"
              : "Энэ газрыг мэдрэх арга замууд"
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {localize(destination.suggestedExperiences, lang).map((item) => (
            <div key={item} className="soft-card p-6 text-sm leading-7 text-ink-soft">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "Gallery" : "Галерей"}
          title={lang === "en" ? "Destination visuals" : "Очих газрын дүрслэл"}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {destination.gallery.map((item) => (
            <div key={item.src} className="relative h-[320px] overflow-hidden rounded-[28px] shadow-luxury">
              <Image
                src={item.src}
                alt={localize(item.alt, lang)}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
