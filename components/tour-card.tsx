import Image from "next/image";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  meta: string[];
  price?: string;
}

export function TourCard({
  image,
  title,
  description,
  meta,
  price,
}: TourCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/50 bg-white/85 shadow-luxury">
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
      </div>
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap gap-2">
          {meta.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/25 bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{description}</p>
        </div>
        {price ? (
          <div className="rounded-[24px] bg-ink px-5 py-4 text-sm font-semibold text-white">
            {price}
          </div>
        ) : null}
      </div>
    </article>
  );
}
