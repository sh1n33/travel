import { Mail, MessageCircleMore, Phone } from "lucide-react";
import { FAQAccordion } from "@/components/faq-accordion";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeader } from "@/components/section-header";
import { faqs } from "@/data/tourism";
import { Lang, localize } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  return (
    <main className="page-shell section-space">
      <SectionHeader
        eyebrow={lang === "en" ? "Contact & inquiry" : "Холбоо барих"}
        title={
          lang === "en"
            ? "Speak with your Mongolia travel concierge."
            : "Монгол аяллын concierge-тэй холбогдоно уу."
        }
        description={
          lang === "en"
            ? "The fastest contact path is your phone number, clearly featured across the site, followed by email and the inquiry form."
            : "Хамгийн хурдан холбоо барих зам бол таны утасны дугаар бөгөөд сайт даяар тод харагдана. Үүний дараа имэйл болон inquiry form орно."
        }
      />

      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-4">
          {[
            { icon: Phone, label: lang === "en" ? "Phone" : "Утас", value: siteConfig.phone },
            { icon: Mail, label: "Email", value: siteConfig.email },
            {
              icon: MessageCircleMore,
              label: lang === "en" ? "Social" : "Сошиал",
              value: "Instagram / Facebook / WhatsApp",
            },
          ].map((item) => (
            <div key={item.label} className="soft-card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cloud text-ink">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-ink-soft">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-ink">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <InquiryForm lang={lang} />
      </div>

      <section className="pt-16">
        <SectionHeader
          eyebrow={lang === "en" ? "FAQ" : "Түгээмэл асуулт"}
          title={
            lang === "en"
              ? "Common questions before you inquire"
              : "Inquiry илгээхээс өмнөх нийтлэг асуултууд"
          }
        />
        <FAQAccordion
          items={faqs.map((item) => ({
            question: localize(item.question, lang),
            answer: localize(item.answer, lang),
          }))}
        />
      </section>
    </main>
  );
}
