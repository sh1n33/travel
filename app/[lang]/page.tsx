import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CultureHighlightCard } from "@/components/culture-highlight-card";
import { DestinationCard } from "@/components/destination-card";
import { HeroSection } from "@/components/hero-section";
import { InquiryForm } from "@/components/inquiry-form";
import { InteractiveMap } from "@/components/interactive-map";
import { MongolianDivider } from "@/components/mongolian-divider";
import { SectionHeader } from "@/components/section-header";
import { TestimonialCard } from "@/components/testimonial-card";
import { TourCard } from "@/components/tour-card";
import {
  adventures,
  culturalHighlights,
  destinations,
  luxuryTours,
  siteCopy,
  testimonials,
} from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const featuredAdventure = adventures.slice(0, 3);
  const featuredLuxury = luxuryTours.slice(0, 3);
  const featuredCulture = culturalHighlights.slice(0, 3);
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <main>
      <section className="page-shell section-space">
        <HeroSection
          lang={lang}
          eyebrow={localize(siteCopy.heroEyebrow, lang)}
          title={localize(siteCopy.heroTitle, lang)}
          description={localize(siteCopy.heroDescription, lang)}
          stats={siteCopy.heroStats.map((item) => ({
            value: item.value,
            label: localize(item.label, lang),
          }))}
        />
      </section>

      <section className="page-shell pb-10">
        <AnimatedSection className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8 sm:p-10">
            <span className="section-label">
              {lang === "en" ? "Brand perspective" : "Брэндийн өнцөг"}
            </span>
            <h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">
              {localize(siteCopy.introTitle, lang)}
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              {localize(siteCopy.introBody, lang)}
            </p>
          </div>
          <div className="grid gap-5">
            {siteCopy.reasonsToVisit.map((item, index) => (
              <div key={`${localize(item.title, lang)}-${index}`} className="soft-card p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-gold-deep">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-ink">
                  {localize(item.title, lang)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  {localize(item.text, lang)}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow={lang === "en" ? "Adventure journeys" : "Адал явдлын аялал"}
          title={
            lang === "en"
              ? "Signature experiences across steppe, desert, lake, and mountain."
              : "Тал, говь, нуур, уулыг дамнасан онцгой туршлагууд."
          }
          description={
            lang === "en"
              ? "Curated for people who want movement, beauty, and the feeling of genuine space."
              : "Хөдөлгөөн, гоо сайхан, жинхэнэ уудам мэдрэмжийг хүсэгчдэд зориулсан сонголтууд."
          }
          action={
            <Link href={`/${lang}/adventure`} className="link-button">
              {lang === "en" ? "View all adventures" : "Бүх адал явдлыг үзэх"}
            </Link>
          }
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {featuredAdventure.map((item) => (
            <AnimatedSection key={item.slug}>
              <TourCard
                image={item.image}
                title={localize(item.title, lang)}
                description={localize(item.description, lang)}
                meta={[
                  item.category,
                  item.region,
                  item.duration,
                  item.budget,
                ]}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(237,245,251,0.85),rgba(247,244,238,0.2))]">
        <div className="page-shell section-space">
          <SectionHeader
            eyebrow={lang === "en" ? "Luxury tours" : "Тансаг аяллууд"}
            title={
              lang === "en"
                ? "High-touch itineraries that feel private, polished, and deeply Mongolian."
                : "Хувийн, цэвэрхэн, Монголын мөн чанартай өндөр түвшний аяллууд."
            }
            description={
              lang === "en"
                ? "From premium ger camps to concierge-style city arrivals, these journeys balance softness and spectacle."
                : "Тансаг гэр кэмп, concierge хэв маягийн хотын угталтаас эхлээд тухтай байдал, сүр хүчийг тэнцвэржүүлсэн аяллууд."
            }
            action={
              <Link href={`/${lang}/luxury-tours`} className="link-button">
                {lang === "en" ? "Open luxury tours" : "Тансаг аяллуудыг үзэх"}
              </Link>
            }
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredLuxury.map((tour) => (
              <AnimatedSection key={tour.slug}>
                <TourCard
                  image={tour.image}
                  title={localize(tour.title, lang)}
                  description={localize(tour.description, lang)}
                  meta={[tour.style, tour.duration]}
                  price={tour.priceFrom}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow={lang === "en" ? "Culture" : "Соёл"}
          title={
            lang === "en"
              ? "A travel story shaped by hospitality, music, ritual, and movement."
              : "Зочломтгой зан, хөгжим, ёс заншил, нүүдлээр бүтсэн аяллын өгүүлэмж."
          }
          description={
            lang === "en"
              ? "Culture is not a side note in Mongolia. It is the atmosphere of the journey."
              : "Монголд соёл бол аяллын дагалдах хэсэг биш. Энэ бол аяллын уур амьсгал юм."
          }
          action={
            <Link href={`/${lang}/culture`} className="link-button">
              {lang === "en" ? "Explore culture" : "Соёлыг таних"}
            </Link>
          }
        />
        <div className="space-y-6">
          {featuredCulture.map((highlight, index) => (
            <AnimatedSection key={localize(highlight.title, lang)} delay={index * 0.05}>
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

      <section className="page-shell pb-8">
        <MongolianDivider />
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow={lang === "en" ? "Seasonal inspiration" : "Улирлын сэдэл"}
          title={
            lang === "en"
              ? "Every season changes the character of the journey."
              : "Улирал бүр аяллын өнгө төрхийг өөрчилдөг."
          }
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteCopy.seasonalInspiration.map((item) => (
            <AnimatedSection key={`${localize(item.season, lang)}-${lang}`}>
              <div className="soft-card h-full p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-gold-deep">
                  {localize(item.season, lang)}
                </p>
                <p className="mt-4 text-sm leading-7 text-ink-soft">
                  {localize(item.text, lang)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow={lang === "en" ? "Destinations" : "Очих газрууд"}
          title={
            lang === "en"
              ? "Six distinct ways to enter Mongolia."
              : "Монголыг таниулах зургаан өөр аяллын гарц."
          }
          action={
            <Link href={`/${lang}/destinations`} className="link-button">
              {lang === "en" ? "View all destinations" : "Бүх очих газрыг үзэх"}
            </Link>
          }
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {featuredDestinations.map((destination) => (
            <AnimatedSection key={destination.slug}>
              <DestinationCard
                href={`/${lang}/destinations/${destination.slug}`}
                image={destination.image}
                title={localize(destination.title, lang)}
                summary={localize(destination.summary, lang)}
                chips={[destination.region, destination.travelTypes[0], destination.seasons[0]]}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <InteractiveMap
          lang={lang}
          title={lang === "en" ? "Navigate Mongolia by mood" : "Сэтгэл хөдлөлөөр Монголыг таних"}
          description={
            lang === "en"
              ? "Hover or tap the map hotspots to preview each region's personality before opening the full destination guide."
              : "Газрын зураг дээрх цэгүүдэд хүрч бүс бүрийн онцлогийг харж, дараа нь дэлгэрэнгүй хөтөчийг нээнэ үү."
          }
          items={destinations.map((destination) => ({
            slug: destination.slug,
            title: localize(destination.title, lang),
            summary: localize(destination.summary, lang),
            x: destination.mapPosition.x,
            y: destination.mapPosition.y,
          }))}
        />
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow={lang === "en" ? "Guest reflections" : "Аялагчдын сэтгэгдэл"}
          title={
            lang === "en"
              ? "Travelers remember Mongolia through feeling as much as landscape."
              : "Аялагчид Монголыг байгаль төдийгүй мэдрэмжээр нь дурсдаг."
          }
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((item) => (
            <AnimatedSection key={item.name}>
              <TestimonialCard
                quote={localize(item.quote, lang)}
                name={item.name}
                origin={localize(item.origin, lang)}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection className="soft-card flex flex-col justify-between gap-6 p-8">
            <div>
              <span className="section-label">
                {lang === "en" ? "Concierge inquiry" : "Concierge холбоо"}
              </span>
              <h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">
                {lang === "en"
                  ? "Ready to shape your Mongolia story?"
                  : "Монгол аяллаа хамтдаа бүтээхэд бэлэн үү?"}
              </h2>
              <p className="mt-5 text-base leading-8 text-ink-soft">
                {lang === "en"
                  ? "Share a few details and we will turn your interests into a polished route, whether you are planning a private escape, a local luxury weekend, or a culture-led expedition."
                  : "Хэдхэн мэдээлэл үлдээгээрэй. Бид таны сонирхолд тохирсон тансаг амралт, дотоодын weekend, эсвэл соёлын аяллын маршрутыг боловсруулж өгнө."}
              </p>
            </div>
            <div className="rounded-[28px] bg-ink p-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                {lang === "en" ? "Fast contact" : "Шуурхай холбоо"}
              </p>
              <p className="mt-3 text-3xl font-semibold">+976 9915 2229</p>
              <p className="mt-2 text-white/70">concierge@steppeandsky.mn</p>
            </div>
            <Link href={`/${lang}/planner`} className="link-button">
              {lang === "en" ? "Open AI planner" : "AI төлөвлөгчийг нээх"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <InquiryForm lang={lang} />
          </AnimatedSection>
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="rounded-[34px] bg-[linear-gradient(135deg,#12293c,#224765)] px-8 py-8 text-white shadow-luxury sm:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="section-label border-white/15 bg-white/8 text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                {lang === "en" ? "Premium planning, local soul" : "Тансаг төлөвлөлт, монгол мөн чанар"}
              </span>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                {lang === "en"
                  ? "Step into Mongolia with calm confidence."
                  : "Монгол руу итгэлтэй, тайван алхаарай."}
              </h2>
            </div>
            <Link href={`/${lang}/contact`} className="primary-button bg-white text-ink hover:bg-gold">
              {lang === "en" ? "Contact Concierge" : "Concierge-тэй холбогдох"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
