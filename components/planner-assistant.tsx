"use client";

import { useMemo, useState } from "react";
import { Lang } from "@/lib/i18n";

interface PlannerAssistantProps {
  lang: Lang;
  recommendations: {
    title: string;
    style: string;
    duration: string;
    budget: string;
    season: string[];
    interests: string[];
    summary: string;
    stops: string[];
  }[];
}

export function PlannerAssistant({
  lang,
  recommendations,
}: PlannerAssistantProps) {
  const [form, setForm] = useState({
    duration: "7-9",
    style: "adventure",
    season: "summer",
    budget: "premium",
    interest: "horseback riding",
  });

  const result = useMemo(() => {
    return (
      recommendations.find((item) => {
        const durationMatch = item.duration === form.duration || item.duration === "10+";
        const styleMatch = item.style === form.style;
        const seasonMatch = item.season.includes(form.season);
        const budgetMatch = item.budget === form.budget || item.budget === "ultra";
        const interestMatch = item.interests.includes(form.interest);

        return durationMatch && styleMatch && seasonMatch && budgetMatch && interestMatch;
      }) ?? recommendations[0]
    );
  }, [form, recommendations]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="soft-card p-6">
        <h3 className="text-4xl font-semibold text-ink">
          {lang === "en" ? "AI travel planner mockup" : "AI аяллын төлөвлөгч"}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          {lang === "en"
            ? "Select a few preferences and the interface will assemble a tailored sample itinerary from local mock data."
            : "Сонирхлоо сонгоход интерфэйс нь local mock data дээр үндэслэн тохирсон жишиг маршрутыг гаргана."}
        </p>

        <div className="mt-6 grid gap-4">
          <select
            value={form.duration}
            onChange={(event) => setForm((current) => ({ ...current, duration: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3"
          >
            <option value="4-6">4-6 {lang === "en" ? "days" : "хоног"}</option>
            <option value="7-9">7-9 {lang === "en" ? "days" : "хоног"}</option>
            <option value="10+">10+ {lang === "en" ? "days" : "хоног"}</option>
          </select>
          <select
            value={form.style}
            onChange={(event) => setForm((current) => ({ ...current, style: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3"
          >
            {["adventure", "luxury", "culture", "photography", "family"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={form.season}
            onChange={(event) => setForm((current) => ({ ...current, season: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3"
          >
            {["spring", "summer", "autumn", "winter"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={form.budget}
            onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3"
          >
            {["moderate", "premium", "ultra"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={form.interest}
            onChange={(event) => setForm((current) => ({ ...current, interest: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3"
          >
            {["horseback riding", "nomadic life", "hiking", "luxury", "desert", "photography", "culture", "food", "city", "family", "nature", "wellness", "eagle festival"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="soft-card p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="section-label">
            {lang === "en" ? "Suggested itinerary" : "Санал болгосон маршрут"}
          </span>
          <span className="rounded-full bg-cloud px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {result.style}
          </span>
        </div>
        <h4 className="mt-5 text-4xl font-semibold text-ink">{result.title}</h4>
        <p className="mt-4 text-sm leading-7 text-ink-soft">{result.summary}</p>

        <div className="mt-6 grid gap-3">
          {result.stops.map((stop, index) => (
            <div key={stop} className="rounded-[22px] bg-cloud px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                {lang === "en" ? "Stop" : "Зогсоол"} {index + 1}
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">{stop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
