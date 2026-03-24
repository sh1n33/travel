"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MoveRight, Mountain, Sparkles } from "lucide-react";
import { useState } from "react";

const choices = [
  {
    lang: "en",
    title: "English",
    subtitle: "For international travelers",
    href: "/en",
  },
  {
    lang: "mn",
    title: "Монгол",
    subtitle: "Монгол аялагчдад зориулсан",
    href: "/mn",
  },
] as const;

export function LanguageSelector() {
  const [preferredLang] = useState<string | null>(() =>
    typeof window === "undefined"
      ? null
      : window.localStorage.getItem("steppe-language"),
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6,20,32,0.28), rgba(6,20,32,0.78)), url('https://images.pexels.com/photos/28560707/pexels-photo-28560707.jpeg?auto=compress&cs=tinysrgb&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,200,238,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(212,180,107,0.16),transparent_28%)]" />

      <div className="page-shell relative flex min-h-screen flex-col justify-between py-8">
        <div className="flex items-center justify-between rounded-full border border-white/12 bg-white/8 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/75">
            <Mountain className="h-4 w-4 text-gold" />
            Steppe & Sky Mongolia
          </div>
          <div className="hidden items-center gap-2 text-sm text-white/75 sm:flex">
            <Globe className="h-4 w-4" />
            Choose your language
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="section-label border-white/20 bg-white/10 text-white/75">
              First, choose your journey language
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-8xl">
              Mongolia, framed like a world-class travel brand.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Adventure, culture, and luxury travel inspiration for international
              visitors and Mongolian travelers alike. Start with your preferred
              language and continue into the full experience.
            </p>
            {preferredLang ? (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/10 px-4 py-2 text-sm text-white/85">
                <Sparkles className="h-4 w-4 text-gold" />
                Previously selected: {preferredLang === "mn" ? "Монгол" : "English"}
              </p>
            ) : null}
          </motion.div>

          <div className="grid gap-4">
            {choices.map((choice, index) => (
              <motion.div
                key={choice.lang}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
              >
                <Link
                  href={choice.href}
                  onClick={() => window.localStorage.setItem("steppe-language", choice.lang)}
                  className="group block rounded-[30px] border border-white/14 bg-white/10 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/55">
                        {choice.subtitle}
                      </p>
                      <h2 className="mt-3 text-4xl font-semibold">{choice.title}</h2>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:border-gold/50 group-hover:bg-white/20">
                      <MoveRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
            Cinematic landscapes
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
            Bilingual travel content
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
            Premium inquiry journey
          </div>
        </div>
      </div>
    </main>
  );
}
