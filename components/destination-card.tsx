import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  href: string;
  image: string;
  title: string;
  summary: string;
  chips: string[];
}

export function DestinationCard({
  href,
  image,
  title,
  summary,
  chips,
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/50 bg-white/85 shadow-luxury transition duration-300 hover:-translate-y-1"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gold/25 bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft"
            >
              {chip}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{summary}</p>
        </div>
        <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-deep">
          Explore
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
