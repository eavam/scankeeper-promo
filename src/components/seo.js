import React from "react";
import bricolageWoff2 from "@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2";
import manropeWoff2 from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2";
import {
  APP_NAME,
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  SITE_NAME,
  SITE_URL,
} from "../constants/site";
import localeConfig from "../i18n/locales";

const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

const { DEFAULT_LOCALE, LOCALES, getLocale, localizePath } = localeConfig;

const getApplicationSchema = (t) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  applicationCategory: "ShoppingApplication",
  applicationSubCategory: t("Loyalty card wallet and barcode scanner"),
  operatingSystem: "iOS, iPadOS, Android",
  description: t(
    "An offline QR and barcode scanner, loyalty card wallet, and organizer for iPhone, iPad, and Android.",
  ),
  url: SITE_URL,
  installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: t("Free download with optional in-app purchases"),
  },
  author: {
    "@type": "Organization",
    name: "Nomadix Apps LLC",
    url: "https://nomadixapps.org",
  },
});

const Seo = ({
  title,
  description,
  path = "/",
  image = "/social-card.png",
  article = false,
  faq = [],
  breadcrumbs = [],
  applicationSchema = false,
  locale = DEFAULT_LOCALE,
  t = (message) => message,
}) => {
  const localeInfo = getLocale(locale);
  const localizedPath = localizePath(path, localeInfo.locale);
  const canonical = absoluteUrl(localizedPath);
  const schemas = [];

  if (applicationSchema) schemas.push(getApplicationSchema(t));

  if (faq.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  if (breadcrumbs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(localizePath(item.path, localeInfo.locale)),
      })),
    });
  }

  return (
    <>
      <html lang={localeInfo.locale} dir={localeInfo.direction} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      {LOCALES.map(({ locale: alternateLocale }) => (
        <link
          rel="alternate"
          hrefLang={alternateLocale}
          href={absoluteUrl(localizePath(path, alternateLocale))}
          key={alternateLocale}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(path)} />
      <link
        rel="preload"
        href={bricolageWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={manropeWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#f7f5f1" />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={localeInfo.locale.replace("-", "_")} />
      {LOCALES.filter(
        ({ locale: alternateLocale }) => alternateLocale !== localeInfo.locale,
      ).map(({ locale: alternateLocale }) => (
        <meta
          property="og:locale:alternate"
          content={alternateLocale.replace("-", "_")}
          key={alternateLocale}
        />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteUrl(image)} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ScanKeeper loyalty card wallet" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl(image)} />
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
};

export default Seo;
