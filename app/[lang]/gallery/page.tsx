import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeader } from "@/components/section-header";
import { galleryItems } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <SectionHeader
        eyebrow={lang === "en" ? "Photo gallery" : "Зургийн сан"}
        title={
          lang === "en"
            ? "A visual archive of Mongolia's nature, culture, adventure, and premium stays."
            : "Монголын байгаль, соёл, адал явдал, premium амралтын визуал сан."
        }
        description={
          lang === "en"
            ? "Built as an elegant masonry-style gallery with category filters and lightbox preview."
            : "Category filter болон lightbox preview бүхий дэгжин gallery хэлбэрээр бүтээв."
        }
      />

      <GalleryGrid
        items={galleryItems.map((item) => ({
          src: item.src,
          title: localize(item.title, lang),
          category: item.category,
        }))}
        labels={{
          all: lang === "en" ? "All" : "Бүгд",
          nature: lang === "en" ? "Nature" : "Байгаль",
          culture: lang === "en" ? "Culture" : "Соёл",
          adventure: lang === "en" ? "Adventure" : "Адал явдал",
          luxury: lang === "en" ? "Luxury" : "Тансаг",
        }}
      />
    </main>
  );
}
