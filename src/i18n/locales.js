const DEFAULT_LOCALE = "en-US";

const LOCALES = [
  {
    locale: "en-US",
    appLocale: "en",
    nativeName: "English",
    englishName: "English",
    direction: "ltr",
  },
  {
    locale: "ar",
    appLocale: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
    direction: "rtl",
  },
  {
    locale: "bg-BG",
    appLocale: "bg",
    nativeName: "Български",
    englishName: "Bulgarian",
    direction: "ltr",
  },
  {
    locale: "bn-BD",
    appLocale: "bn",
    nativeName: "বাংলা",
    englishName: "Bangla",
    direction: "ltr",
  },
  {
    locale: "cs-CZ",
    appLocale: "cs",
    nativeName: "Čeština",
    englishName: "Czech",
    direction: "ltr",
  },
  {
    locale: "da-DK",
    appLocale: "da",
    nativeName: "Dansk",
    englishName: "Danish",
    direction: "ltr",
  },
  {
    locale: "de-DE",
    appLocale: "de",
    nativeName: "Deutsch",
    englishName: "German",
    direction: "ltr",
  },
  {
    locale: "el-GR",
    appLocale: "el",
    nativeName: "Ελληνικά",
    englishName: "Greek",
    direction: "ltr",
  },
  {
    locale: "es-ES",
    appLocale: "es",
    nativeName: "Español",
    englishName: "Spanish",
    direction: "ltr",
  },
  {
    locale: "et-EE",
    appLocale: "et",
    nativeName: "Eesti",
    englishName: "Estonian",
    direction: "ltr",
  },
  {
    locale: "fi-FI",
    appLocale: "fi",
    nativeName: "Suomi",
    englishName: "Finnish",
    direction: "ltr",
  },
  {
    locale: "fr-FR",
    appLocale: "fr",
    nativeName: "Français",
    englishName: "French",
    direction: "ltr",
  },
  {
    locale: "ga-IE",
    appLocale: "ga",
    nativeName: "Gaeilge",
    englishName: "Irish",
    direction: "ltr",
  },
  {
    locale: "hi-IN",
    appLocale: "hi",
    nativeName: "हिन्दी",
    englishName: "Hindi",
    direction: "ltr",
  },
  {
    locale: "hr-HR",
    appLocale: "hr",
    nativeName: "Hrvatski",
    englishName: "Croatian",
    direction: "ltr",
  },
  {
    locale: "hu-HU",
    appLocale: "hu",
    nativeName: "Magyar",
    englishName: "Hungarian",
    direction: "ltr",
  },
  {
    locale: "id-ID",
    appLocale: "id",
    nativeName: "Bahasa Indonesia",
    englishName: "Indonesian",
    direction: "ltr",
  },
  {
    locale: "it-IT",
    appLocale: "it",
    nativeName: "Italiano",
    englishName: "Italian",
    direction: "ltr",
  },
  {
    locale: "ja-JP",
    appLocale: "ja",
    nativeName: "日本語",
    englishName: "Japanese",
    direction: "ltr",
  },
  {
    locale: "ko-KR",
    appLocale: "ko",
    nativeName: "한국어",
    englishName: "Korean",
    direction: "ltr",
  },
  {
    locale: "lt-LT",
    appLocale: "lt",
    nativeName: "Lietuvių",
    englishName: "Lithuanian",
    direction: "ltr",
  },
  {
    locale: "lv-LV",
    appLocale: "lv",
    nativeName: "Latviešu",
    englishName: "Latvian",
    direction: "ltr",
  },
  {
    locale: "mt-MT",
    appLocale: "mt",
    nativeName: "Malti",
    englishName: "Maltese",
    direction: "ltr",
  },
  {
    locale: "nb-NO",
    appLocale: "nb",
    nativeName: "Norsk bokmål",
    englishName: "Norwegian Bokmål",
    direction: "ltr",
  },
  {
    locale: "nl-NL",
    appLocale: "nl",
    nativeName: "Nederlands",
    englishName: "Dutch",
    direction: "ltr",
  },
  {
    locale: "pl-PL",
    appLocale: "pl",
    nativeName: "Polski",
    englishName: "Polish",
    direction: "ltr",
  },
  {
    locale: "pt-PT",
    appLocale: "pt",
    nativeName: "Português europeu",
    englishName: "European Portuguese",
    direction: "ltr",
  },
  {
    locale: "pt-BR",
    appLocale: "pt_BR",
    nativeName: "Português do Brasil",
    englishName: "Brazilian Portuguese",
    direction: "ltr",
  },
  {
    locale: "ro-RO",
    appLocale: "ro",
    nativeName: "Română",
    englishName: "Romanian",
    direction: "ltr",
  },
  {
    locale: "ru-RU",
    appLocale: "ru",
    nativeName: "Русский",
    englishName: "Russian",
    direction: "ltr",
  },
  {
    locale: "sk-SK",
    appLocale: "sk",
    nativeName: "Slovenčina",
    englishName: "Slovak",
    direction: "ltr",
  },
  {
    locale: "sl-SI",
    appLocale: "sl",
    nativeName: "Slovenščina",
    englishName: "Slovenian",
    direction: "ltr",
  },
  {
    locale: "sv-SE",
    appLocale: "sv",
    nativeName: "Svenska",
    englishName: "Swedish",
    direction: "ltr",
  },
  {
    locale: "th-TH",
    appLocale: "th",
    nativeName: "ไทย",
    englishName: "Thai",
    direction: "ltr",
  },
  {
    locale: "tr-TR",
    appLocale: "tr",
    nativeName: "Türkçe",
    englishName: "Turkish",
    direction: "ltr",
  },
  {
    locale: "uk-UA",
    appLocale: "uk",
    nativeName: "Українська",
    englishName: "Ukrainian",
    direction: "ltr",
  },
  {
    locale: "vi-VN",
    appLocale: "vi",
    nativeName: "Tiếng Việt",
    englishName: "Vietnamese",
    direction: "ltr",
  },
  {
    locale: "zh-CN",
    appLocale: "zh",
    nativeName: "简体中文",
    englishName: "Chinese (Simplified)",
    direction: "ltr",
  },
  {
    locale: "zh-TW",
    appLocale: "zh_TW",
    nativeName: "繁體中文",
    englishName: "Chinese (Traditional)",
    direction: "ltr",
  },
];

const localeByTag = new Map(LOCALES.map((locale) => [locale.locale, locale]));
const localePrefixes = new Set(LOCALES.map((locale) => locale.locale.toLowerCase()));

const getLocale = (locale = DEFAULT_LOCALE) =>
  localeByTag.get(locale) || localeByTag.get(DEFAULT_LOCALE);

const splitPathSuffix = (path) => {
  const match = String(path || "/").match(/^([^?#]*)(.*)$/);
  return { pathname: match?.[1] || "/", suffix: match?.[2] || "" };
};

const stripLocaleFromPath = (path = "/") => {
  const { pathname, suffix } = splitPathSuffix(path);
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length && localePrefixes.has(segments[0].toLowerCase())) {
    segments.shift();
  }

  const basePath = `/${segments.join("/")}${pathname.endsWith("/") ? "/" : ""}`;
  return `${basePath === "//" ? "/" : basePath}${suffix}`;
};

const localizePath = (path = "/", locale = DEFAULT_LOCALE) => {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || /^(?:mailto|tel):/i.test(path)) {
    return path;
  }

  const { pathname, suffix } = splitPathSuffix(stripLocaleFromPath(path));
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === DEFAULT_LOCALE) return `${normalizedPath}${suffix}`;
  if (normalizedPath === "/") return `/${locale}/${suffix}`;
  return `/${locale}${normalizedPath}${suffix}`;
};

module.exports = {
  DEFAULT_LOCALE,
  LOCALES,
  getLocale,
  localizePath,
  stripLocaleFromPath,
};
