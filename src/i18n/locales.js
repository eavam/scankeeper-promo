const DEFAULT_LOCALE = "en-US";

const LOCALES = [
  {
    locale: "en-US",
    appLocale: "en",
    nativeName: "English",
    regionName: "United States",
    direction: "ltr",
  },
  {
    locale: "ar",
    appLocale: "ar",
    nativeName: "العربية",
    regionName: "العالم العربي",
    direction: "rtl",
  },
  {
    locale: "bg-BG",
    appLocale: "bg",
    nativeName: "Български",
    regionName: "България",
    direction: "ltr",
  },
  {
    locale: "bn-BD",
    appLocale: "bn",
    nativeName: "বাংলা",
    regionName: "বাংলাদেশ",
    direction: "ltr",
  },
  {
    locale: "cs-CZ",
    appLocale: "cs",
    nativeName: "Čeština",
    regionName: "Česko",
    direction: "ltr",
  },
  {
    locale: "da-DK",
    appLocale: "da",
    nativeName: "Dansk",
    regionName: "Danmark",
    direction: "ltr",
  },
  {
    locale: "de-DE",
    appLocale: "de",
    nativeName: "Deutsch",
    regionName: "Deutschland",
    direction: "ltr",
  },
  {
    locale: "el-GR",
    appLocale: "el",
    nativeName: "Ελληνικά",
    regionName: "Ελλάδα",
    direction: "ltr",
  },
  {
    locale: "es-ES",
    appLocale: "es",
    nativeName: "Español",
    regionName: "España",
    direction: "ltr",
  },
  {
    locale: "et-EE",
    appLocale: "et",
    nativeName: "Eesti",
    regionName: "Eesti",
    direction: "ltr",
  },
  {
    locale: "fi-FI",
    appLocale: "fi",
    nativeName: "Suomi",
    regionName: "Suomi",
    direction: "ltr",
  },
  {
    locale: "fr-FR",
    appLocale: "fr",
    nativeName: "Français",
    regionName: "France",
    direction: "ltr",
  },
  {
    locale: "ga-IE",
    appLocale: "ga",
    nativeName: "Gaeilge",
    regionName: "Éire",
    direction: "ltr",
  },
  {
    locale: "hi-IN",
    appLocale: "hi",
    nativeName: "हिन्दी",
    regionName: "भारत",
    direction: "ltr",
  },
  {
    locale: "hr-HR",
    appLocale: "hr",
    nativeName: "Hrvatski",
    regionName: "Hrvatska",
    direction: "ltr",
  },
  {
    locale: "hu-HU",
    appLocale: "hu",
    nativeName: "Magyar",
    regionName: "Magyarország",
    direction: "ltr",
  },
  {
    locale: "id-ID",
    appLocale: "id",
    nativeName: "Bahasa Indonesia",
    regionName: "Indonesia",
    direction: "ltr",
  },
  {
    locale: "it-IT",
    appLocale: "it",
    nativeName: "Italiano",
    regionName: "Italia",
    direction: "ltr",
  },
  {
    locale: "ja-JP",
    appLocale: "ja",
    nativeName: "日本語",
    regionName: "日本",
    direction: "ltr",
  },
  {
    locale: "ko-KR",
    appLocale: "ko",
    nativeName: "한국어",
    regionName: "대한민국",
    direction: "ltr",
  },
  {
    locale: "lt-LT",
    appLocale: "lt",
    nativeName: "Lietuvių",
    regionName: "Lietuva",
    direction: "ltr",
  },
  {
    locale: "lv-LV",
    appLocale: "lv",
    nativeName: "Latviešu",
    regionName: "Latvija",
    direction: "ltr",
  },
  {
    locale: "mt-MT",
    appLocale: "mt",
    nativeName: "Malti",
    regionName: "Malta",
    direction: "ltr",
  },
  {
    locale: "nb-NO",
    appLocale: "nb",
    nativeName: "Norsk bokmål",
    regionName: "Norge",
    direction: "ltr",
  },
  {
    locale: "nl-NL",
    appLocale: "nl",
    nativeName: "Nederlands",
    regionName: "Nederland",
    direction: "ltr",
  },
  {
    locale: "pl-PL",
    appLocale: "pl",
    nativeName: "Polski",
    regionName: "Polska",
    direction: "ltr",
  },
  {
    locale: "pt-PT",
    appLocale: "pt",
    nativeName: "Português",
    regionName: "Portugal",
    direction: "ltr",
  },
  {
    locale: "pt-BR",
    appLocale: "pt_BR",
    nativeName: "Português",
    regionName: "Brasil",
    direction: "ltr",
  },
  {
    locale: "ro-RO",
    appLocale: "ro",
    nativeName: "Română",
    regionName: "România",
    direction: "ltr",
  },
  {
    locale: "ru-RU",
    appLocale: "ru",
    nativeName: "Русский",
    regionName: "Россия",
    direction: "ltr",
  },
  {
    locale: "sk-SK",
    appLocale: "sk",
    nativeName: "Slovenčina",
    regionName: "Slovensko",
    direction: "ltr",
  },
  {
    locale: "sl-SI",
    appLocale: "sl",
    nativeName: "Slovenščina",
    regionName: "Slovenija",
    direction: "ltr",
  },
  {
    locale: "sv-SE",
    appLocale: "sv",
    nativeName: "Svenska",
    regionName: "Sverige",
    direction: "ltr",
  },
  {
    locale: "th-TH",
    appLocale: "th",
    nativeName: "ไทย",
    regionName: "ประเทศไทย",
    direction: "ltr",
  },
  {
    locale: "tr-TR",
    appLocale: "tr",
    nativeName: "Türkçe",
    regionName: "Türkiye",
    direction: "ltr",
  },
  {
    locale: "uk-UA",
    appLocale: "uk",
    nativeName: "Українська",
    regionName: "Україна",
    direction: "ltr",
  },
  {
    locale: "vi-VN",
    appLocale: "vi",
    nativeName: "Tiếng Việt",
    regionName: "Việt Nam",
    direction: "ltr",
  },
  {
    locale: "zh-CN",
    appLocale: "zh",
    nativeName: "简体中文",
    regionName: "中国大陆",
    direction: "ltr",
  },
  {
    locale: "zh-TW",
    appLocale: "zh_TW",
    nativeName: "繁體中文",
    regionName: "台灣",
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
