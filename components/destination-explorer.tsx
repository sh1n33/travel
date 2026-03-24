"use client";

import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/destination-card";

interface DestinationExplorerProps {
  items: {
    href: string;
    image: string;
    title: string;
    summary: string;
    region: string;
    travelTypes: string[];
    seasons: string[];
  }[];
  labels: {
    all: string;
    region: string;
    travelType: string;
    season: string;
  };
}

export function DestinationExplorer({
  items,
  labels,
}: DestinationExplorerProps) {
  const [region, setRegion] = useState("all");
  const [travelType, setTravelType] = useState("all");
  const [season, setSeason] = useState("all");

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const regionMatch = region === "all" || item.region === region;
        const typeMatch = travelType === "all" || item.travelTypes.includes(travelType);
        const seasonMatch = season === "all" || item.seasons.includes(season);

        return regionMatch && typeMatch && seasonMatch;
      }),
    [items, region, season, travelType],
  );

  return (
    <div className="space-y-8">
      <div className="soft-card grid gap-4 p-6 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-ink-soft">
          <span>{labels.region}</span>
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-sky-deep"
          >
            {["all", "central", "gobi", "north", "west"].map((option) => (
              <option key={option} value={option}>
                {option === "all" ? labels.all : option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-ink-soft">
          <span>{labels.travelType}</span>
          <select
            value={travelType}
            onChange={(event) => setTravelType(event.target.value)}
            className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-sky-deep"
          >
            {["all", "culture", "city", "luxury", "adventure", "photography", "nature", "family", "weekend", "wellness"].map((option) => (
              <option key={option} value={option}>
                {option === "all" ? labels.all : option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-ink-soft">
          <span>{labels.season}</span>
          <select
            value={season}
            onChange={(event) => setSeason(event.target.value)}
            className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-sky-deep"
          >
            {["all", "spring", "summer", "autumn", "winter"].map((option) => (
              <option key={option} value={option}>
                {option === "all" ? labels.all : option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <DestinationCard
            key={item.href}
            href={item.href}
            image={item.image}
            title={item.title}
            summary={item.summary}
            chips={[item.region, item.travelTypes[0], item.seasons[0]]}
          />
        ))}
      </div>
    </div>
  );
}
