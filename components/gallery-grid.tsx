"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

interface GalleryGridProps {
  items: { src: string; title: string; category: string }[];
  labels: { all: string; nature: string; culture: string; adventure: string; luxury: string };
}

export function GalleryGrid({ items, labels }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItem, setActiveItem] = useState<(typeof items)[number] | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items],
  );

  const tabs = [
    { value: "all", label: labels.all },
    { value: "nature", label: labels.nature },
    { value: "culture", label: labels.culture },
    { value: "adventure", label: labels.adventure },
    { value: "luxury", label: labels.luxury },
  ];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveCategory(tab.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === tab.value
                ? "bg-ink text-white"
                : "border border-border bg-white/80 text-ink-soft"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((item, index) => (
          <motion.button
            key={`${item.title}-${index}`}
            type="button"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            onClick={() => setActiveItem(item)}
            className={`group relative overflow-hidden rounded-[28px] text-left shadow-luxury ${
              index % 4 === 0 ? "md:col-span-2 md:row-span-2 min-h-[420px]" : "min-h-[260px]"
            }`}
          >
            <Image src={item.src} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xl font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/65">{item.category}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/88 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[28px]"
            >
              <Image src={activeItem.src} alt={activeItem.title} fill className="object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
