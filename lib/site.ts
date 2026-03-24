import { Lang } from "@/lib/i18n";

export const siteConfig = {
  brand: "Steppe & Sky Mongolia",
  shortBrand: "Steppe & Sky",
  phone: "+976 9915 2229",
  phoneLabel: "9915 2229",
  email: "concierge@steppeandsky.mn",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export const navItems = [
  {
    href: "",
    label: {
      en: "Home",
      mn: "Нүүр",
    },
  },
  {
    href: "/adventure",
    label: {
      en: "Adventure",
      mn: "Адал явдал",
    },
  },
  {
    href: "/luxury-tours",
    label: {
      en: "Luxury Tours",
      mn: "Тансаг аялал",
    },
  },
  {
    href: "/culture",
    label: {
      en: "Culture",
      mn: "Соёл",
    },
  },
  {
    href: "/destinations",
    label: {
      en: "Destinations",
      mn: "Очих газрууд",
    },
  },
  {
    href: "/planner",
    label: {
      en: "Planner",
      mn: "Төлөвлөгч",
    },
  },
  {
    href: "/gallery",
    label: {
      en: "Gallery",
      mn: "Зургийн сан",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      mn: "Холбоо барих",
    },
  },
] as const;

export function getLocalizedPath(lang: Lang, href: string) {
  return href ? `/${lang}${href}` : `/${lang}`;
}
