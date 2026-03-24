export const languages = ["en", "mn"] as const;

export type Lang = (typeof languages)[number];

export type LocalizedValue<T> = Record<Lang, T>;

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function localize<T>(value: LocalizedValue<T>, lang: Lang): T {
  return value[lang];
}
