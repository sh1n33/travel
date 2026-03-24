import Image from "next/image";

interface CultureHighlightCardProps {
  image: string;
  title: string;
  description: string;
  details: string[];
}

export function CultureHighlightCard({
  image,
  title,
  description,
  details,
}: CultureHighlightCardProps) {
  return (
    <article className="grid overflow-hidden rounded-[30px] border border-white/50 bg-white/85 shadow-luxury lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[280px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between gap-6 p-7">
        <div>
          <h3 className="text-3xl font-semibold text-ink">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-ink-soft">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {details.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/25 bg-cloud px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
