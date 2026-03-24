"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface HeroSectionProps {
  lang: "en" | "mn";
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
}

export function HeroSection({
  lang,
  eyebrow,
  title,
  description,
  stats,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,21,34,0.88) 0%, rgba(8,21,34,0.52) 48%, rgba(8,21,34,0.36) 100%), url('https://images.pexels.com/photos/20363276/pexels-photo-20363276.jpeg?auto=compress&cs=tinysrgb&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,200,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(212,180,107,0.18),transparent_30%)]" />

      <div className="relative grid min-h-[720px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-4xl flex-col justify-end"
        >
          <span className="section-label border-white/20 bg-white/10 text-white/75">
            {eyebrow}
          </span>
          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.88] sm:text-6xl lg:text-[5.8rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={`/${lang}/planner`} className="primary-button bg-white text-ink hover:bg-gold">
              {lang === "en" ? "Plan Your Journey" : "Аяллаа Төлөвлөх"}
            </Link>
            <Link href={`/${lang}/contact`} className="secondary-button">
              {lang === "en" ? "Speak to Concierge" : "Concierge-тэй Холбогдох"}
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
            <Phone className="h-4 w-4 text-gold" />
            <span>{siteConfig.phone}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid gap-4"
        >
          <div className="glass-panel border-white/10 bg-white/12 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  {lang === "en" ? "Featured approach" : "Онцлох аргачлал"}
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  {lang === "en"
                    ? "Adventure refined through hospitality."
                    : "Зочломтгой зангаар тансагжуулсан адал явдал."}
                </h2>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <Compass className="h-5 w-5 text-gold" />
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur"
              >
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/62">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[30px] border border-white/12 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/62">
                  {lang === "en" ? "Fast inquiry" : "Шуурхай холбоо"}
                </p>
                <p className="mt-2 text-lg font-semibold">{siteConfig.email}</p>
              </div>
              <Link href={`/${lang}/contact`} className="link-button border-white/15 bg-white/12 text-white">
                {lang === "en" ? "Send message" : "Мессеж илгээх"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
