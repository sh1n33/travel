"use client";

import { CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

interface InquiryFormProps {
  lang: Lang;
  title?: string;
}

const interestsByLang = {
  en: ["Adventure", "Luxury", "Culture", "Photography", "Family"],
  mn: ["Адал явдал", "Тансаг", "Соёл", "Фото", "Гэр бүл"],
};

export function InquiryForm({ lang, title }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const labels = useMemo(
    () =>
      lang === "en"
        ? {
            title: title ?? "Start your Mongolia inquiry",
            description:
              "Tell us when you want to travel and the style you have in mind. This form uses mock submit behavior for now.",
            button: "Send inquiry",
            success: "Your message has been staged successfully. This demo does not send a real email yet.",
          }
        : {
            title: title ?? "Монгол аяллын хүсэлтээ илгээнэ үү",
            description:
              "Хэзээ аялах, ямар хэв маяг хүсэж байгаагаа бичнэ үү. Энэ form нь одоогоор mock submit ашиглаж байна.",
            button: "Хүсэлт илгээх",
            success:
              "Таны мессеж амжилттай mock байдлаар бүртгэгдлээ. Одоогоор бодит имэйл илгээхгүй.",
          },
    [lang, title],
  );

  return (
    <div className="soft-card p-7 sm:p-8">
      <div className="flex flex-col gap-3">
        <span className="section-label">
          {lang === "en" ? "Travel concierge" : "Аяллын concierge"}
        </span>
        <h3 className="text-4xl font-semibold text-ink">{labels.title}</h3>
        <p className="max-w-2xl text-sm leading-7 text-ink-soft">
          {labels.description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep" placeholder={lang === "en" ? "Full name" : "Нэр"} />
        <input className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep" placeholder={lang === "en" ? "Email address" : "Имэйл"} />
        <input className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep" placeholder={lang === "en" ? "Country / city" : "Улс / хот"} />
        <input className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep" placeholder={lang === "en" ? "Travel dates" : "Аялах хугацаа"} />
        <select className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep md:col-span-2">
          <option>{lang === "en" ? "Main interest" : "Гол сонирхол"}</option>
          {interestsByLang[lang].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <textarea
          rows={5}
          className="rounded-2xl border border-border bg-white px-4 py-3 outline-none ring-0 transition focus:border-sky-deep md:col-span-2"
          placeholder={
            lang === "en"
              ? "Tell us about your dream Mongolia journey."
              : "Мөрөөдлийн Монгол аяллаа тайлбарлана уу."
          }
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-ink-soft">
          <p>
            {lang === "en" ? "Call or message" : "Утас / мессеж"}:{" "}
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="font-semibold text-ink">
              {siteConfig.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="primary-button"
        >
          {labels.button}
        </button>
      </div>

      {submitted ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-4 w-4" />
          <span>{labels.success}</span>
        </div>
      ) : null}
    </div>
  );
}
