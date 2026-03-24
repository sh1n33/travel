"use client";

import { useMemo, useState } from "react";
import { TourCard } from "@/components/tour-card";

interface AdventureExplorerProps {
  items: {
    slug: string;
    image: string;
    category: string;
    season: string[];
    region: string;
    intensity: string;
    duration: string;
    budget: string;
    title: string;
    description: string;
    highlights: string[];
  }[];
  filters: {
    all: string;
    season: string;
    region: string;
    intensity: string;
    duration: string;
    budget: string;
  };
}

export function AdventureExplorer({
  items,
  filters,
}: AdventureExplorerProps) {
  const [state, setState] = useState({
    season: "all",
    region: "all",
    intensity: "all",
    duration: "all",
    budget: "all",
  });

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const seasonMatch =
          state.season === "all" || item.season.includes(state.season);
        const regionMatch = state.region === "all" || item.region === state.region;
        const intensityMatch =
          state.intensity === "all" || item.intensity === state.intensity;
        const durationMatch =
          state.duration === "all" || item.duration === state.duration;
        const budgetMatch = state.budget === "all" || item.budget === state.budget;

        return seasonMatch && regionMatch && intensityMatch && durationMatch && budgetMatch;
      }),
    [items, state],
  );

  const options = {
    season: ["all", "spring", "summer", "autumn", "winter"],
    region: ["all", "central", "gobi", "north", "west"],
    intensity: ["all", "gentle", "moderate", "bold"],
    duration: ["all", "short", "medium", "long"],
    budget: ["all", "moderate", "premium", "ultra"],
  };

  return (
    <div className="space-y-8">
      <div className="soft-card grid gap-4 p-6 md:grid-cols-5">
        {(Object.keys(options) as (keyof typeof options)[]).map((key) => (
          <label key={key} className="space-y-2 text-sm font-medium text-ink-soft">
            <span>{filters[key]}</span>
            <select
              value={state[key]}
              onChange={(event) =>
                setState((current) => ({ ...current, [key]: event.target.value }))
              }
              className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-sky-deep"
            >
              {options[key].map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? filters.all : option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <TourCard
            key={item.slug}
            image={item.image}
            title={item.title}
            description={item.description}
            meta={[item.category, item.region, item.duration, item.budget]}
          />
        ))}
      </div>
    </div>
  );
}
