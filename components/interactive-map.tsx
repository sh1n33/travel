"use client";

import Link from "next/link";
import { useState } from "react";
import { Lang } from "@/lib/i18n";

interface InteractiveMapProps {
  lang: Lang;
  title: string;
  description: string;
  items: { slug: string; title: string; summary: string; x: number; y: number }[];
}

export function InteractiveMap({
  lang,
  title,
  description,
  items,
}: InteractiveMapProps) {
  const [active, setActive] = useState(items[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass-panel overflow-hidden p-4 sm:p-6">
        <div className="relative min-h-[460px] rounded-[28px] bg-[linear-gradient(180deg,#f5fbff,#eaf4fb)] p-4">
          <div className="ornament-grid absolute inset-0 opacity-30" />
          <svg
            viewBox="0 0 640 420"
            className="map-glow relative h-full w-full rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(132,200,238,0.18),transparent_35%)]"
            role="img"
            aria-label={title}
          >
            <path
              d="M103 210c22-36 58-74 108-88l80-7 44-33 66 11 44-14 84 22 18 49-22 33 12 36-21 40-77 18-53 26-59 6-30 25-64-4-50-26-70 8-30-27-5-44 20-31z"
              fill="rgba(47,134,185,0.18)"
              stroke="rgba(15,34,51,0.42)"
              strokeWidth="4"
            />
            {items.map((item) => (
              <g key={item.slug}>
                <circle
                  cx={item.x}
                  cy={item.y}
                  r={active.slug === item.slug ? 14 : 10}
                  fill={active.slug === item.slug ? "#d4b46b" : "#2f86b9"}
                  stroke="white"
                  strokeWidth="4"
                  className="cursor-pointer transition"
                  onMouseEnter={() => setActive(item)}
                  onClick={() => setActive(item)}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="soft-card flex flex-col justify-between gap-6 p-7">
        <div>
          <span className="section-label">
            {lang === "en" ? "Interactive map" : "Интерактив газрын зураг"}
          </span>
          <h3 className="mt-4 text-4xl font-semibold text-ink">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-ink-soft">{description}</p>
        </div>

        <div className="rounded-[26px] bg-cloud p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-soft">
            {lang === "en" ? "Highlighted region" : "Онцолсон бүс"}
          </p>
          <h4 className="mt-3 text-3xl font-semibold text-ink">{active.title}</h4>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{active.summary}</p>
        </div>

        <Link href={`/${lang}/destinations/${active.slug}`} className="primary-button w-full">
          {lang === "en" ? "Open destination guide" : "Очих газрын дэлгэрэнгүй"}
        </Link>
      </div>
    </div>
  );
}
